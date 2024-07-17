import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from "./utilities";
import * as fp from "fingerpose";
import ok from "../../assets/ok.png";
import ok2 from "../../assets/ok2.png";

function HandGesture() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [emoji, setEmoji] = useState(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const images = { ok: ok, ok2: ok2 };

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    setInterval(() => {
      if (isDetecting) {
        detect(net);
      }
    }, 10);
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

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          fp.Gestures.VictoryGesture,
          fp.Gestures.ThumbsUpGesture,
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          setEmoji(gesture.gestures[maxConfidence].name);
          console.log(gesture.gestures[maxConfidence].name);
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
  
  return (
    <div className="grid grid-cols-2">
        <div className="py-10">
          <div className="text-center">
            <div className="btn-group">
              {isDetecting ? (
                <button
                  className="px-10 py-2 bg-red-500 text-white font-semibold rounded-lg"
                  onClick={handleStop}
                >
                  Stop
                </button>
              ) : (
                <button
                  className="px-10 py-2 bg-green-500 text-white font-semibold rounded-lg"
                  onClick={handlePlay}
                >
                  Play
                </button>
              )}
            </div>
          </div>
          {isCameraOn && (
            <div className="m-auto my-4 border-2 border-purple-500"
            style={{ position: "relative", width: "640px", height: "480px" }}>
              <Webcam className="p-2 sm:w-1/2"
                ref={webcamRef}
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  zIndex: 9,
                  width: 640,
                  height: 480,
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
                  width: 640,
                  height: 480,
                  transform: "scaleX(-1)",
                }}
              />
            </div>
          )}
          {emoji !== null && (
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
          )}
        </div>
        <div className="py-10">Halo</div>
    </div>
  );
}

export default HandGesture;
