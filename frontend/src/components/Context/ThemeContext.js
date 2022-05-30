import React from "react";

const ThemeContext = React.createContext(({
  

    mat: localStorage.getItem('matsearch'),
    setMat: (mat) => {},

    displayCompo: false,
    setDisplayCompo:(displayCompo) => {}


  }));
export default ThemeContext;