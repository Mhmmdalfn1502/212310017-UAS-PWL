import React, { useState } from "react";
import ReactPlayer from "react-player";
import Sign1 from "../assets/Sign1.png";
import Sign2 from "../assets/Sign2.png";
import Sign3 from "../assets/Sign3.png";
import Sign4 from "../assets/Sign4.png";
import A from "../assets/a.jpg";
import B from "../assets/b.jpg";
import C from "../assets/c.jpg";
import D from "../assets/d.jpg";
import { CiSearch } from "react-icons/ci";

const Learn = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="px-4 lg:px-32 py-10">
      {/* SearchBar */}
      <div className="flex py-2 px-4 items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        <input type="text" className="w-full outline-none" placeholder="Search..." value={query} onChange={handleInputChange} />
        <a href="" onClick={handleSearch}>
          <CiSearch size={30} color="Gray" />
        </a>
      </div>

      {/* Level */}
      <div className="pt-8">
        <div className="text-center">
          <span className="font-bold text-Black text-3xl">Topics</span>
          <br />
          <span className="text-Grey">Achieve full fluency in sign language and learn the skills to translate and interpret between sign language and spoken language.</span>
        </div>

        <div className="lg:columns-4 flex flex-row overflow-x-auto gap-4">
          <div className="Beginner lg:w-1/4 px-4 py-2 my-4 rounded-xl border-2 border-Gray hover:bg-LightPrimary shadow-md">
            <a href="" className="flex flex-row gap-4">
              <img src={Sign1} alt="" className="w-1/4 py-4" />
              <div className="flex flex-col justify-center max-w-xl">
                <span className="font-bold text-Black lg:text-2xl text-xl">Beginner</span>
                <span className="font-medium lg:fs-base fs-xs text-Black">Learn Conversational ASL by topics</span>
              </div>
            </a>
          </div>
          <div className="Intermediate lg:w-1/4 px-4 py-2 my-4 rounded-xl border-2 border-Gray hover:bg-LightPrimary shadow-md">
            <a href="" className="flex flex-row gap-4">
              <img src={Sign2} alt="" className="w-1/4 py-4" />
              <div className="flex flex-col justify-center max-w-xl">
                <span className="font-bold text-Black lg:text-2xl text-xl">Intermediate</span>
                <span className="font-medium lg:fs-base fs-xs text-Black">Learn Conversational ASL by topics</span>
              </div>
            </a>
          </div>
          <div className="Advanced lg:w-1/4 px-4 py-2 my-4 rounded-xl border-2 border-Gray hover:bg-LightPrimary shadow-md">
            <a href="" className="flex flex-row gap-4">
              <img src={Sign3} alt="" className="w-1/4 py-4" />
              <div className="flex flex-col justify-center max-w-xl">
                <span className="font-bold text-Black lg:text-2xl text-xl">Advanced</span>
                <span className="font-medium lg:fs-base fs-xs text-Black">Learn Conversational ASL by topics</span>
              </div>
            </a>
          </div>
          <div className="Professional lg:w-1/4 px-4 py-2 my-4 rounded-xl border-2 border-Gray hover:bg-LightPrimary shadow-md">
            <a href="" className="flex flex-row gap-4">
              <img src={Sign4} alt="" className="w-1/4 py-4" />
              <div className="flex flex-col justify-center max-w-xl">
                <span className="font-bold text-Black lg:text-2xl text-xl">Professional</span>
                <span className="font-medium lg:fs-base fs-xs text-Black">Learn Conversational ASL by topics</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Isi Content Gambar */}
      <div className="py-8">
        <div className="text-center mb-8">
          <span className="font-bold text-Black text-3xl">Alphabet</span>
          <br />
          <span className="text-Grey">Achieve full fluency in sign language and learn the skills to translate and interpret between sign language and spoken language.</span>
        </div>
        <div className="grid grid-cols-1 lg:grid lg:grid-cols-4 lg:gap-8">
          <div className="lg:flex lg:flex-row lg:max-w-1/4 flex flex-row max-w-1/2 items-center justify-center shadow-md p-4 rounded-xl border-2 border-Gray gap-10">
            <img src={A} alt="" className="w-32" />
            <span className="font-bold text-9xl">A</span>
          </div>
          <div className="lg:flex lg:flex-row lg:max-w-1/4 flex flex-row max-w-1/2 items-center justify-center shadow-md p-4 rounded-xl border-2 border-Gray gap-10">
            <img src={B} alt="" className="w-32" />
            <span className="font-bold text-9xl">B</span>
          </div>
          <div className="lg:flex lg:flex-row lg:max-w-1/4 flex flex-row max-w-1/2 items-center justify-center shadow-md p-4 rounded-xl border-2 border-Gray gap-10">
            <img src={C} alt="" className="w-32" />
            <span className="font-bold text-9xl">C</span>
          </div>
          <div className="lg:flex lg:flex-row lg:max-w-1/4 flex flex-row max-w-1/2 items-center justify-center shadow-md p-4 rounded-xl border-2 border-Gray gap-10">
            <img src={D} alt="" className="w-32" />
            <span className="font-bold text-9xl">D</span>
          </div>
        </div>
      </div>

      {/* Isi Content Video*/}
      <div className="content grid grid-cols-1 lg:grid-cols-4 py-8 lg:gap-4">
        <div className="lg:max-w-md lg:flex lg:flex-col max-w-xl flex flex-row rounded-lg overflow-hidden shadow-md mb-4">
          <ReactPlayer url="https://youtu.be/q3PfSqYHWf4?si=BRuu-cOP-eBGOtSB" controls width="100%" height={200} />
          <div className="px-4 py-2 max-1-md">
              <span className="font-light text-Grey text-sm">Beginner</span>
              <br />
              <span className="font-bold text-md mb-2 text-Black">Getting Started with LearnSL</span>
              <p className="text-Grey text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum ligula at, malesuada nunc.</p>
            </div>
        </div>
        <div className="lg:max-w-md lg:flex lg:flex-col max-w-xl flex flex-row rounded-lg overflow-hidden shadow-md mb-4">
          <ReactPlayer url="https://youtu.be/q3PfSqYHWf4?si=BRuu-cOP-eBGOtSB" controls width="100%" height={200} />
          <div className="px-4 py-2 max-1-md">
              <span className="font-light text-Grey text-sm">Beginner</span>
              <br />
              <span className="font-bold text-md mb-2 text-Black">Getting Started with LearnSL</span>
              <p className="text-Grey text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum ligula at, malesuada nunc.</p>
            </div>
        </div>
        <div className="lg:max-w-md lg:flex lg:flex-col max-w-xl flex flex-row rounded-lg overflow-hidden shadow-md mb-4">
          <ReactPlayer url="https://youtu.be/q3PfSqYHWf4?si=BRuu-cOP-eBGOtSB" controls width="100%" height={200} />
          <div className="px-4 py-2 max-1-md">
              <span className="font-light text-Grey text-sm">Beginner</span>
              <br />
              <span className="font-bold text-md mb-2 text-Black">Getting Started with LearnSL</span>
              <p className="text-Grey text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum ligula at, malesuada nunc.</p>
            </div>
        </div>
        <div className="lg:max-w-md lg:flex lg:flex-col max-w-xl flex flex-row rounded-lg overflow-hidden shadow-md mb-4">
          <ReactPlayer url="https://youtu.be/q3PfSqYHWf4?si=BRuu-cOP-eBGOtSB" controls width="100%" height={200} />
          <div className="px-4 py-2 max-1-md">
              <span className="font-light text-Grey text-sm">Beginner</span>
              <br />
              <span className="font-bold text-md mb-2 text-Black">Getting Started with LearnSL</span>
              <p className="text-Grey text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum ligula at, malesuada nunc.</p>
            </div>
        </div>
        <div className="lg:max-w-md lg:flex lg:flex-col max-w-xl flex flex-row rounded-lg overflow-hidden shadow-md mb-4">
          <ReactPlayer url="https://youtu.be/q3PfSqYHWf4?si=BRuu-cOP-eBGOtSB" controls width="100%" height={200} />
          <div className="px-4 py-2 max-1-md">
              <span className="font-light text-Grey text-sm">Beginner</span>
              <br />
              <span className="font-bold text-md mb-2 text-Black">Getting Started with LearnSL</span>
              <p className="text-Grey text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum ligula at, malesuada nunc.</p>
            </div>
        </div>
        <div className="lg:max-w-md lg:flex lg:flex-col max-w-xl flex flex-row rounded-lg overflow-hidden shadow-md mb-4">
          <ReactPlayer url="https://youtu.be/q3PfSqYHWf4?si=BRuu-cOP-eBGOtSB" controls width="100%" height={200} />
          <div className="px-4 py-2 max-1-md">
              <span className="font-light text-Grey text-sm">Beginner</span>
              <br />
              <span className="font-bold text-md mb-2 text-Black">Getting Started with LearnSL</span>
              <p className="text-Grey text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum ligula at, malesuada nunc.</p>
            </div>
        </div>
        <div className="lg:max-w-md lg:flex lg:flex-col max-w-xl flex flex-row rounded-lg overflow-hidden shadow-md mb-4">
          <ReactPlayer url="https://youtu.be/q3PfSqYHWf4?si=BRuu-cOP-eBGOtSB" controls width="100%" height={200} />
          <div className="px-4 py-2 max-1-md">
              <span className="font-light text-Grey text-sm">Beginner</span>
              <br />
              <span className="font-bold text-md mb-2 text-Black">Getting Started with LearnSL</span>
              <p className="text-Grey text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum ligula at, malesuada nunc.</p>
            </div>
        </div>
        <div className="lg:max-w-md lg:flex lg:flex-col max-w-xl flex flex-row rounded-lg overflow-hidden shadow-md mb-4">
          <ReactPlayer url="https://youtu.be/q3PfSqYHWf4?si=BRuu-cOP-eBGOtSB" controls width="100%" height={200} />
          <div className="px-4 py-2 max-1-md">
              <span className="font-light text-Grey text-sm">Beginner</span>
              <br />
              <span className="font-bold text-md mb-2 text-Black">Getting Started with LearnSL</span>
              <p className="text-Grey text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum ligula at, malesuada nunc.</p>
            </div>
        </div>
       
      </div>
    </div>
  );
};

export default Learn;
