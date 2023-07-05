import './App.css';

//needed to perfom actions
import React from 'react';
import { useState, useEffect} from 'react';
import { Route, Routes} from "react-router-dom";

//components
import BakeryHeader from './BakeryHeader';
import Bakeries from './Bakeries';
import Breads from './Breads';

function App() {

  const [bakeries, setBakeries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/bakeries")
      .then((resp) => resp.json())
      .then((data) => {
        //console.log(data);
        setBakeries(data);
      });
  }, [])


  return (
    <div>
      <BakeryHeader/>
      <Routes>
      <Route path="/" element={<Bakeries bakeries={bakeries}/>} />
      <Route path="/bakeryBread/:id" element={<Breads bakeries={bakeries}/>} />
      </Routes>
    </div>
  );
}

export default App;

