import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";

/*
This is what your initial state could look like:
*/

const initialForm = {
  review: "",
  email: "",
  username: "",
  consistency: 0,
  colour: 0,
  logo: 0,
  bestFeatures: [],
  worstFeatures: [],
  timeSpent: []
};



function App() {
  const [formData, setFormData] = useState(initialForm)
  return (
    <>
      <Header />
      <Main
        formData={formData}
        setFormData={setFormData}

      />
    </>
  );
}
export default App