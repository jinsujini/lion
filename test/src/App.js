import React, {Component} from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";

function App(){
  return(
    <div>
      <Header />
      <Main myname = "최수진"/>
      <Footer />

    </div>
  )
}

export default App;