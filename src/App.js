import "./App.css";
import NavigationsBar from "./components/NavigationsBar";
import "./components/style/LandingPage.css";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Isekai from "./components/isekai";

function App() {
  return (
    <div>
      {/*Intro section*/}
      <div className='myBg'>
        <NavigationsBar />
        <Intro />
      </div>
      {/*End instro section*/}

      {/*Trending section*/}
      <div className='Trending'>
        <Trending />
      </div>
      {/*End Trending section*/}

      {/*Trending section*/}
      <div className='Isekai'>
        <Isekai />
      </div>
      {/*End Trending section*/}
    </div>
  );
}

export default App;
