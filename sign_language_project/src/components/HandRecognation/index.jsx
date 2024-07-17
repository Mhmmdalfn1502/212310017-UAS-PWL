import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from "./utilities";
import * as fp from "fingerpose";
import victory from "../../assets/victory.png";
import thumbs_up from "../../assets/thumbs_up.png";
import output from "../../assets/victory.png";
// import { loveYouGesture } from "./data/LoveYou"

function HandGesture() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [emoji, setEmoji] = useState(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const images = { victory: victory, thumbs_up: thumbs_up };

  const runHandpose = async () => {
    // Ensure WebGL backend is set up
    await tf.setBackend('webgl');
    await tf.ready();

    const net = await handpose.load();
    console.log("Handpose model loaded.");
    setInterval(() => {
      if (isDetecting) {
        detect(net);
      }
    }, 100); // Adjusted interval to 100ms
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const hand = await net.estimateHands(video);
      console.log(hand); // Debugging output

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          fp.Gestures.VictoryGesture, 
          fp.Gestures.ThumbsUpGesture,
          // loveYouGesture
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        console.log(gesture); // Debugging output

        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const confidence = gesture.gestures.map((prediction) => prediction.confidence);
          const maxConfidence = confidence.indexOf(Math.max.apply(null, confidence));
          
          if (gesture.gestures[maxConfidence] && gesture.gestures[maxConfidence].name) {
            setEmoji(gesture.gestures[maxConfidence].name);
          }
        }
      }

      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  const handlePlay = () => {
    setIsDetecting(true);
    setIsCameraOn(true);
  };

  const handleStop = () => {
    setIsDetecting(false);
    setIsCameraOn(false);
  };

  useEffect(() => {
    runHandpose();
  }, []);
  
  useEffect(() => {
    console.log(emoji); // Monitor emoji changes
  }, [emoji]);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="py-10">
        <div className="text-center">
          <div className="btn-group">
            {isDetecting ? (
              <button
                className="px-10 py-2 bg-red-500 hover:bg-red-400 lg:hover:bg-red-400 text-white font-semibold rounded-lg"
                onClick={handleStop}
              >
                Stop
              </button>
            ) : (
              <button
                className="px-10 py-2 bg-green-500 hover:bg-green-400 lg:hover:bg-green-400 text-white font-semibold rounded-lg"
                onClick={handlePlay}
              >
                Play
              </button>
            )}
          </div>
        </div>
        {isCameraOn && (
          <div className="lg:m-auto my-4 lg:my-4 lg:border-4 lg:border-purple-500 m-auto border-4 border-purple-500" style={{ position: "relative", width: "100%", maxWidth: "640px", height: "480px" }}>
            <Webcam
              ref={webcamRef}
              style={{
                padding:4,
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zIndex: 9,
                width: "100%",
                height: "100%",
                transform: "scaleX(-1)",
              }}
            />

            <canvas
              ref={canvasRef}
              style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "center",
                zIndex: 9,
                width: "100%",
                height: "100%",
                transform: "scaleX(-1)",
              }}
            />
          </div>
        )}
        {emoji !== null ? (
          <img
            src={images[emoji]}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 400,
              bottom: 500,
              right: 0,
              textAlign: "center",
              height: 100,
            }}
          />
        ) : (
          ""
        )}
      </div>
      <div className="py-10 items-center flex flex-col justify-start">
        <span className="font-semibold text-Black py-2">Output</span>
        <img src={output} className="my-4 w-96" alt="" />
      </div>
    </div>
  );
}

export default HandGesture;
