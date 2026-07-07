import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Location from "./components/Location";
import Social from "./components/Social";
import WorkeringHours from "./components/WokringHours";
import FAQ from "./components/FAQ";

function App() {
  return (
    <>
      <NavigationBar />
      <HomePage />
      <Social />
      <WorkeringHours />
      <Location storeAddress="אקוורל רחוב א.ד גורדון 3, נתניה, ישראל" />
      <Form />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
