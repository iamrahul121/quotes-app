import React, { useEffect, useState } from "react";

const App = () => {
  const [advice, setAdvice] = useState("");

  const fetchDataFromApi = async () => {
    const url = "https://api.adviceslip.com/advice";
    const data = await fetch(url);
    const newdata = await data.json();
    setAdvice(newdata.slip.advice);
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <div className="text">
          <h2>{advice}</h2>
        </div>
        <div className="btn">
          <button onClick={() => fetchDataFromApi()}>Get A Quote</button>
        </div>
      </div>
    </div>
  );
};   

export default App;
