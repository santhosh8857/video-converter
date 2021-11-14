import "bootstrap/dist/css/bootstrap.min.css";
import electron, { ipcRenderer } from "electron";
import { useState } from "react";
import { Button, Container } from "reactstrap";
import "./App.css";

const App = () => {
  const clickHandlerProject = () => {
    ipcRenderer.send("open-project");
  };

  return (
    <div className="App">
      <h1 className="display-2 mt-3 mb-2">Video Converter APP</h1>
      <h2 className="text-dark">Create a new project</h2>
      <Button onClick={clickHandlerProject}>New Project</Button>
    </div>
  );
};

export default App;
