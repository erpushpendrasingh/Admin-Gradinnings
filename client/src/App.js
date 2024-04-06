import logo from "./logo.svg";
import "./App.css";
import CollegeForm from "./components/Form";
import Form from "./components/Form";
import FormComponent from "./components/Form";
import { useState } from "react";

function App() {
 const [data, setData] = useState();
 const getData = async () => {
  try {
   const responce = await axios;
  } catch (error) {}
 };
 return <div className="App">{/* <FormComponent /> */}</div>;
}

export default App;
