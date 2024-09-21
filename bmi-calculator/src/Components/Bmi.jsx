import React, { useState } from "react";
import '../index.css';



const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [status, setStatus] = useState("");
  const [bmi, setBmi] = useState(null);
  const [errormsg, setErrormsg] = useState("");
  
  const calculateBMI = () =>{
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if(isValidHeight && isValidWeight) {
      const heightToMeters = height / 100;
      const bmiValue = weight / (heightToMeters * heightToMeters);
      setBmi(bmiValue.toFixed(2));
  
      if(bmiValue < 18.5){
        setStatus("Under Weight");
      }
      else if(bmiValue >= 18.5 && bmiValue < 24.9){
        setStatus("Normal Weight");
      }
      else if(bmiValue >= 25 && bmiValue < 29.9){
        setStatus("Over Weight");
      }
      else{
        setStatus("Obese");
      }
      setErrormsg("");
    }
    else{
      setBmi(null);
      setStatus("");
      setErrormsg("Please enter valid numeric values");
    }
  };

  const handleClear = () =>{
    setHeight("");
    setWeight("");
    setStatus("");
    setBmi(null);
    setErrormsg("");
  }

  const handleKeyDown = (e) =>{
    if(e.key === 'Enter'){
      calculateBMI();
    }
  }
  return (
    <>
      <div className="main-container">
        <div className="sub-container">
          <div className="img-container">
          <img src="../src/assets/bmi-img.jpg" />
            <div className="bmi-container">
              <h3 className="title">BMI CALCULATOR</h3>
              {errormsg && <p className="warning">{errormsg}</p>}
              <div className="inputs">

              <p>Height (cm):</p>
             <input type="text" placeholder="Enter Height" value={height} onChange={(e)=>setHeight(e.target.value)} onKeyDown={handleKeyDown}/>

             <p>Weight (kg):</p>
             <input type="text" placeholder="Enter Weight" value={weight} onChange={(e)=>setWeight(e.target.value)} onKeyDown={handleKeyDown}/>
             </div>

             <div className="btns">
              <button className="bmi-btn" onClick={calculateBMI}>Calculate BMI</button>
              <button className="clear-btn" onClick={handleClear}>Clear</button>
             </div>
             
             {bmi != null && <div className="result">
              <h4>Your BMI is {bmi}</h4>
              <p>Status : {status} </p>
             </div>
            }
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Bmi;