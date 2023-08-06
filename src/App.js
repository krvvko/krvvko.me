import React from "react";
import Grain from "./components/Grain";
import WelcomeScreen from "./components/WelcomeScreen";
// import CustomCursor from "./components/CustomCursor";
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe";


function App() {
  return (
    <>
        <Grain />
        {/*<CustomCursor />*/}
        <WelcomeScreen />
        <MyProjects />
        <ContactMe />
    </>
  );
}

export default App;
