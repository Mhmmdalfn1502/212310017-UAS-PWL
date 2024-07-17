import React from "react";
import ReactPlayer from "react-player";
import Talent from "../assets/Talent.png";
import Talent2 from "../assets/Talent2.png";
import Logo from "../assets/Logo_white.png";
import { BsWebcam } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div className="">
      {/* MainPage */}
      <div className="flex flex-col px-4 lg:px-32 md:flex-row justify-center items-center max-h-6xl pt-4">
        <div className="md:w-1/2 py-4 text-center lg:text-left">
          <div className="flex flex-col gap-2 text-Black font-semibold mb-8">
            {/* <span className="absolute left-96 top-44 text-9xl font-extrabold italic text-LightPrimary opacity-55">"</span> */}
            <span className="lg:text-6xl text-4xl">Learn Sign</span>
            <span className="lg:text-6xl text-4xl"> Language: Connect</span>
            <span className="lg:text-6xl text-4xl">Beyond Words!</span>
          </div>
          <span className="text-md text-Grey 
animate__bounce">
            Unlock a world of possibilities by learning sign language today! This valuable skill enables you to connect and communicate beyond words, fostering deeper understanding and inclusivity. Start your journey now and experience the
            transformative impact of sign language in both your personal and professional life.
          </span>
          <div className="lg:flex mt-8 gap-5">
            <a className="bg-Primary hover:bg-LightPrimary text-white font-medium py-2 px-4 rounded-md" href="/Learn">
              Learn Now
            </a>
            <a className="lg:flex lg:flex-row lg:gap-4 flex flex-col items-center bg-transparent text-Grey hover:text-Black font-medium py-2 px-4 rounded-md" href="/HandRecognition">
              <BsWebcam size={30} />
              WebCam
            </a>
          </div>
        </div>
        <div className="md:w-1/2 px-4 flex justify-center">
          <img src={Talent} alt="" className="lg:max-w-2xl max-w-md" />
        </div>
      </div>

      <div className="flex justify-center py-8 bg-gradient-to-b from-LightPrimary to-orange-200 -top-0">
        <img className="w-28" src={Logo} alt="" />
      </div>

      <div className="px-4 lg:px-32 py-28 flex-col flex md:flex-row max-h-6xl gap-8 ">
        <img src={Talent2} alt="" className="lg:max-w-xl max-w-sm" />
        <div className="lg:w-1/2">
          <div className="font-bold text-3xl">
            <span className="bg-gradient-to-b from-LightPrimary to-orange-200 bg-clip-text text-transparent">
              Benefits <span className="text-Black">From Our Online </span>
            </span>
            <br />
            <span className="text-Black">Learning</span>
          </div>
          <div>
            <span>
              Progress at your own pace, change the video speed, replay lessons, and review content as needed. Each course is packed with vocabulary, numbers, tips about learning American Sign Language, fingerspelling practice and special
              knowledge of Deaf culture. Progress at your own pace, change the video speed, replay lessons, and review content as needed. Each course is packed with vocabulary, numbers, tips about learning American Sign Language,
              fingerspelling practice and special knowledge of Deaf culture.
            </span>
          </div>
        </div>
      </div>

      {/* Video */}
      <div className="bg-gradient-to-r from-LightPrimary to-orange-200 px-4 lg:px-32 py-8  flex-col flex md:flex-row max-h-6xl gap-8">
        <div className="md:w-1/2 border rounded-xl">
          <ReactPlayer url="https://youtu.be/v1desDduz5M?si=SNISYxabz-xMLz5P" controls width="100%" height="100%" />
        </div>
        <div className="md:w-1/2 flex flex-col gap-8">
          <span className="font-bold text-Black text-3xl">Video Interactive</span>
          <div className="text-Black flex flex-col gap-5 ">
            <span>
              Progress at your own pace, change the video speed, replay lessons, and review content as needed. Each course is packed with vocabulary, numbers, tips about learning American Sign Language, fingerspelling practice and special
              knowledge of Deaf culture.
            </span>
            <span>We've structured each unit to span a week but you have the freedom to learn at your own pace. All videos include English closed captioning and voiceovers, ensuring an inclusive learning experience.</span>
            <span>
              Progress at your own pace, change the video speed, replay lessons, and review content as needed. Each course is packed with vocabulary, numbers, tips about learning American Sign Language, fingerspelling practice and special
              knowledge of Deaf culture.
            </span>
          </div>
          <div>
            <button className="flex gap-4 items-center bg-transparent text-Black hover:text-Grey font-medium">
              <a href="/Learn">View Courses</a>
              <IoIosArrowForward size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Courses Highlight */}
      <div className="px-4 lg:px-32 pb-20 flex flex-col mt-20">
        <span className="font-bold text-Black text-3xl mb-8">LearnSL Courses</span>

        <div className="content lg:columns-4 columns-1">
          <div className="lg:max-w-md lg:flex lg:flex-col max-w-xl flex flex-col rounded-lg overflow-hidden shadow-md mb-4">
            <ReactPlayer url="https://youtu.be/q3PfSqYHWf4?si=BRuu-cOP-eBGOtSB" controls width="100%" height={200} />
            <div className="px-4 py-2 max-1-md">
              <span className="font-light text-Grey text-sm">Beginner</span>
              <br />
              <span className="font-bold text-md mb-2 text-Black">Getting Started with LearnSL</span>
              <p className="text-Grey text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum ligula at, malesuada nunc.</p>
            </div>
          </div>
          <div className="lg:max-w-md lg:flex lg:flex-col max-w-xl flex flex-col rounded-lg overflow-hidden shadow-md mb-4">
            <ReactPlayer url="https://youtu.be/q3PfSqYHWf4?si=BRuu-cOP-eBGOtSB" controls width="100%" height={200} />
            <div className="px-4 py-2 max-1-md">
              <span className="font-light text-Grey text-sm">Beginner</span>
              <br />
              <span className="font-bold text-md mb-2 text-Black">Getting Started with LearnSL</span>
              <p className="text-Grey text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum ligula at, malesuada nunc.</p>
            </div>
          </div>
          <div className="lg:max-w-md lg:flex lg:flex-col max-w-xl flex flex-col rounded-lg overflow-hidden shadow-md mb-4">
            <ReactPlayer url="https://youtu.be/q3PfSqYHWf4?si=BRuu-cOP-eBGOtSB" controls width="100%" height={200} />
            <div className="px-4 py-2 max-1-md">
              <span className="font-light text-Grey text-sm">Beginner</span>
              <br />
              <span className="font-bold text-md mb-2 text-Black">Getting Started with LearnSL</span>
              <p className="text-Grey text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum ligula at, malesuada nunc.</p>
            </div>
          </div>
          <div className="lg:max-w-md lg:flex lg:flex-col max-w-xl flex flex-col rounded-lg overflow-hidden shadow-md mb-4">
            <ReactPlayer url="https://youtu.be/q3PfSqYHWf4?si=BRuu-cOP-eBGOtSB" controls width="100%" height={200} />
            <div className="px-4 py-2 max-1-md">
              <span className="font-light text-Grey text-sm">Beginner</span>
              <br />
              <span className="font-bold text-md mb-2 text-Black">Getting Started with LearnSL</span>
              <p className="text-Grey text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum ligula at, malesuada nunc.</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <button href="/Learn" className="flex gap-4 items-center bg-transparent text-Grey hover:text-Black font-medium border border-spacing-1 border-LightPrimary py-2 px-4 rounded-md">
            <a href="/Learn">View All Courses</a>
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>

      {/* Learn on Picture */}
      <div></div>
    </div>
  );
};

export default Home;
