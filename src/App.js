import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Socials from "./components/socials/Socials";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Header />
        <Socials />
      </div>
    </div>
  );
}

export default App;
