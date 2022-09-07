import { Component } from "react";

import "./App.css";
import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import Introduction from "./Components/Animations/Introduction";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import FloatingMenu from "./Components/FloatingMenu";
import Sidebar from "./Components/Sidebar";
import BookHub from "./Components/Projects/BookHub";
import JobbyApp from "./Components/Projects/JobbyApp";
import IplDashboard from "./Components/Projects/IplDashboard";

class App extends Component {
  state = { showContent: false };

  componentDidMount = () => {
    const timerId1 = setTimeout(() => {
      this.setState({ showContent: true });
      clearTimeout(timerId1);
    }, 10000);
  };

  portfolioComponents = () => {
    return (
      <>
        <NavBar />
        <FloatingMenu />
        <Sidebar />
        <Home />
        <About />
        <Skills />
        <BookHub />
        <JobbyApp />
        <IplDashboard />
        <Contact />
      </>
    );
  };

  render() {
    const { showContent } = this.state;
    console.log(showContent);
    return (
      <div className="app-bg-container">
        {showContent === true ? this.portfolioComponents() : <Introduction />}
      </div>
    );
  }
}

export default App;
/*

        <NavBar />
        <FloatingMenu />
        <Sidebar />
        <Home />
        <About />
        <Skills />
        <BookHub />
        <JobbyApp />
        <IplDashboard />
        <Contact />
        */
