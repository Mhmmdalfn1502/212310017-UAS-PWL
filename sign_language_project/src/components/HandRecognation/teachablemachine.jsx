import React, { useState, useRef, useEffect } from 'react';
import * as tmImage from '@teachablemachine/image';

const modelURL = process.env.PUBLIC_URL + '/model/model.json';
const metadataURL = process.env.PUBLIC_URL + '/model/metadata.json';

const teachablemachine = () => {
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const webcamRef = useRef(null);

  useEffect(() => {
    const loadModel = async () => {
      const model = await tmImage.load(modelURL, metadataURL);
      setModel(model);
    };

    loadModel();
  }, []);

  const predict = async () => {
    if (model && webcamRef.current) {
      const image = webcamRef.current;
      const prediction = await model.predict(image);

      // Extracting the label with highest probability
      const maxPrediction = prediction.reduce((acc, curr) => {
        return acc.probability > curr.probability ? acc : curr;
      });

      setPredictions(maxPrediction);
    }
  };

  return (
    <div>
      <h1>Teachable Machine Model</h1>
      <video ref={webcamRef} autoPlay playsInline muted width="224" height="224"></video>
      <button onClick={predict}>Predict</button>
      {predictions && (
        <div>
          <p>Label: {predictions.className}</p>
          <p>Probability: {predictions.probability.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default teachablemachine;