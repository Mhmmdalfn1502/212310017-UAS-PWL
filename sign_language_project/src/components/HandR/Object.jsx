import { useEffect, useRef, useState } from "react";
import * as tmImage from "@teachablemachine/image";

const ObjectDetection = () => {
  const [model, setModel] = useState(null);
  const [maxPredictions, setMaxPredictions] = useState(0);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const webcamRef = useRef(null);
  const animationFrameIdRef = useRef(null);
  const [isDetecting, setIsDetecting] = useState(false);

  const loadModel = async () => {
    const modelURL = "/model.json";
    const metadataURL = "/metadata.json";

    try {
      const loadedModel = await tmImage.load(modelURL, metadataURL);
      setModel(loadedModel);
      setMaxPredictions(loadedModel.getTotalClasses());
      console.log("Model loaded successfully");
    } catch (error) {
      console.error("Error loading model: ", error);
    }
  };

  useEffect(() => {
    loadModel();
  }, []);

  const setupWebcam = async () => {
    const flip = true;
    const webcam = new tmImage.Webcam(640, 480, flip);
    await webcam.setup();
    await webcam.play();
    webcamRef.current = webcam;
    requestAnimationFrame(loop);

    document.getElementById("webcam-container").appendChild(webcam.canvas);
    setIsCameraOn(true);
    setIsDetecting(true);
  };

  const loop = async () => {
    if (webcamRef.current) {
      webcamRef.current.update();
      await predict();
      animationFrameIdRef.current = requestAnimationFrame(loop);
    }
  };

  const predict = async () => {
    if (model && webcamRef.current) {
      const prediction = await model.predict(webcamRef.current.canvas);
      setPredictions(prediction);
    }
  };

  const handlePlay = async () => {
    if (!isCameraOn) {
      await setupWebcam();
    }
  };

  const handleStop = () => {
    if (webcamRef.current) {
      webcamRef.current.stop();
      webcamRef.current = null;
      cancelAnimationFrame(animationFrameIdRef.current);
      document.getElementById("webcam-container").innerHTML = "";
    }
    setIsCameraOn(false);
    setIsDetecting(false);
    setPredictions([]);
  };

  const getImageUrl = (className) => {
    const images = {
      "Class A": "/a.jpg",
      "Class B": "/b.jpg",
      "Class C": "/c.jpg",
      "Class D": "/d.jpg",
      "Class Blank": "/d.jpg",
    };
    return images[className] || "";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 px-28">
      <div className="flex flex-col items-center">
        <div>
          {isDetecting ? (
            <button className="px-10 py-2 bg-red-500 hover:bg-red-400 text-white font-semibold rounded-lg" onClick={handleStop}>
              Stop
            </button>
          ) : (
            <button className="px-10 py-2 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-lg" onClick={handlePlay}>
              Play
            </button>
          )}
        </div>
        <div className="mt-8" id="webcam-container"></div>
      </div>
      <div className="flex flex-col justify-start items-center">
        <span className="font-bold text-2xl text-Black">Output</span>
        <div className="mx-auto mt-40 text-Black">
          <div id="label-container">
            {predictions
              .filter((prediction) => prediction.probability > 0.8)
              .map((prediction, index) => (
                <div key={index} className="mb-4 text-center font-bold text-3xl">
                  <div className="font-md text-8xl">{prediction.className}</div>
                  <div>({Math.round(prediction.probability * 100)}%)</div>
                  <img src={getImageUrl(prediction.className)} alt={prediction.className} className="mt-2 w-20 h-20 object-cover" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectDetection;
