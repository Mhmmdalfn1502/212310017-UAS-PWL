import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Crud = () => {
  const [images, setImages] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", file: null, category: "beginner" });
  const [editingId, setEditingId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetchImages();
  }, [filter]);

  const fetchImages = async () => {
    const response = await axios.get(`http://localhost:5000/images?category=${filter}`);
    setImages(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("category", form.category);
    if (form.file) {
      formData.append("file", form.file);
    }

    if (editingId) {
      await axios.put(`http://localhost:5000/images/${editingId}`, formData);
    } else {
      await axios.post("http://localhost:5000/images", formData);
    }
    setForm({ title: "", description: "", file: null, category: "beginner" });
    setEditingId(null);
    fetchImages();
  };

  const handleEdit = (image) => {
    setForm({ title: image.title, description: image.description, file: null, category: image.category });
    setEditingId(image._id);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this image?");
    if (confirmDelete) {
      await axios.delete(`http://localhost:5000/images/${id}`);
      fetchImages();
    }
  };

  const handleBulkDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete selected images?");
    if (confirmDelete) {
      await Promise.all(selectedIds.map((id) => axios.delete(`http://localhost:5000/images/${id}`)));
      setSelectedIds([]);
      fetchImages();
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleCheckboxChange = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleSelectAllChange = () => {
    if (selectedIds.length === images.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(images.map((image) => image._id));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-Black">Image</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label className="block text-gray-700 ">Title</label>
          <input type="text" className="w-full p-2 border shadow-sm rounded" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 ">Description</label>
          <textarea className="w-full p-2 border shadow-sm rounded" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700">Category</label>
          <select className="w-full p-2 border shadow-sm rounded" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="professional">Professional</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 ">File</label>
          <input type="file" className="w-full p-2 border shadow-sm rounded" onChange={(e) => setForm({ ...form, file: e.target.files[0] })} />
        </div>
        <button type="submit" className="px-4 py-2 bg-purple-500 text-white rounded">
          {editingId ? "Update" : "Add"} Image
        </button>
      </form>

      <div className="mb-4 font-medium">
        <label className="block text-Black">Filter by Category</label>
        <select className="w-full p-2 border shadow-sm text-Black rounded" value={filter} onChange={handleFilterChange}>
          <option className="text-Black" value="">All</option>
          <option className="text-Black" value="beginner">Beginner</option>
          <option className="text-Black" value="intermediate">Intermediate</option>
          <option className="text-Black" value="advanced">Advanced</option>
          <option className="text-Black" value="professional">Professional</option>
        </select>
      </div>

      {selectedIds.length > 0 && (
        <button className="px-4 py-2 bg-red-100 hover:bg-red-200 rounded mb-4 flex items-center gap-2" onClick={handleBulkDelete}>
          <RiDeleteBin6Fill color="red" size={20} />
          <span className="text-red-500">Delete Selected</span>
        </button>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-LightPurple border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-r font-bold text-Black">
                <span className="mr-2">All</span>
                <input type="checkbox" onChange={handleSelectAllChange} checked={selectedIds.length === images.length} />
              </th>
              <th className="py-2 px-4 border-b border-r font-bold text-Black">No</th>
              <th className="py-2 px-4 border-b border-r font-bold text-Black">Image</th>
              <th className="py-2 px-4 border-b border-r font-bold text-Black">Title</th>
              <th className="py-2 px-4 border-b border-r font-bold text-Black">Description</th>
              <th className="py-2 px-4 border-b border-r font-bold text-Black">Category</th>
              <th className="py-2 px-4 border-b border-r font-bold text-Black">Actions</th>
            </tr>
          </thead>
          <tbody>
            {images.map((image, index) => (
              <tr key={image._id}>
                <td className="py-2 px-4 border-b border-e text-center">
                  <input type="checkbox" onChange={() => handleCheckboxChange(image._id)} checked={selectedIds.includes(image._id)} />
                </td>
                <td className="py-2 px-4 border-b border-e text-center">{index + 1}</td>
                <td className="flex justify-center py-2 px-4 border-b border-e">
                  <div className="w-20">
                    <img src={`http://localhost:5000${image.url}`} className="w-32 h-auto" />
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-e">{image.title}</td>
                <td className="py-2 px-4 border-b border-e">{image.description}</td>
                <td className="py-2 px-4 border-b border-e">{image.category}</td>
                <td className="text-center py-2 px-4 border-b">
                  <button className="px-4 py-2 bg-yellow-100 hover:bg-yellow-200 rounded mr-2" onClick={() => handleEdit(image)}>
                    <MdModeEditOutline color="orange" />
                  </button>
                  <button className="px-4 py-2 bg-red-100 hover:bg-red-200 rounded" onClick={() => handleDelete(image._id)}>
                    <RiDeleteBin6Fill color="red" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Crud;
