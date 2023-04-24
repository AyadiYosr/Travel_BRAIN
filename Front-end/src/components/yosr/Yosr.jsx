
import logo from './logo.svg';
import "./yosr.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { NavBar } from "./NavBar";
import { Chat } from "./chatbot";
import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import Header from '../header/Header';
function Yosr() {
    return (
      <div className="App">
       
        {/* <NavBar /> */}
        <Banner />
        {/*<Chat/>*/}
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
  
  export default Yosr;