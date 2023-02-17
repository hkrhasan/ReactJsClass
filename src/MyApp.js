import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import { Component } from "react";

function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return (
      <div className="App">
        <Header />
        <Main>
          <div>this child component</div>
        </Main>
        <Footer />
      </div>
    );
  }

  return <div>I think you're un-authorize user</div>;
}

export default App;
