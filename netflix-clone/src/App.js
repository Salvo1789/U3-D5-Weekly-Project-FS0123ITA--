
import './App.css';
import NetflixNav from "./components/NetflixNav"
import NetflixGallery1 from "./components/NetflixGallery1"
import NetflixGallery2 from "./components/NetflixGallery2"
import NetflixGallery3 from "./components/NetflixGallery3"
import NetflixFooter from "./components/NetflixFooter"

function App() {
  return (
    <>
    <NetflixNav />
    <NetflixGallery1/>
    <NetflixGallery2/>
    <NetflixGallery3/>
    <NetflixFooter />
    </>
  );
}

export default App;
