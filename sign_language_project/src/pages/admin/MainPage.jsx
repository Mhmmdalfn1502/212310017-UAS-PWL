import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <span className="font-bold text-xl">Main Page</span>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-LightPurple border border-gray-200">
          <thead>
            <tr>
              {/* <th className="py-2 px-4 border-b border-r font-bold text-Black">
                <span className="mr-2">All</span>
                <input type="checkbox"/>
              </th> */}
              <th className="py-2 px-4 border-b border-r font-bold text-Black">No</th>
              <th className="py-2 px-4 border-b border-r font-bold text-Black">Image</th>
              <th className="py-2 px-4 border-b border-r font-bold text-Black">Title</th>
              <th className="py-2 px-4 border-b border-r font-bold text-Black">Description</th>
              <th className="py-2 px-4 border-b border-r font-bold text-Black">Category</th>
              <th className="py-2 px-4 border-b border-r font-bold text-Black">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainPage;
