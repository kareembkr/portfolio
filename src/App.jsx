import Header from "./Componant/1-Header/Header";
import Hero from "./Componant/2-Hero/Hero";
import Countant from "./Componant/4-Countant/Countant";
import Footer from "./Componant/5-Footer/Footer";
import "./index.css";
import Main from "./Componant/3-Main/Main";
import { useEffect ,useState } from "react";
function App() {
  useEffect(() => {
window.addEventListener("scroll",() => {
  if(window.scrollY > 300){
    setsetshowScrollBTN(true)
  }else{
    setsetshowScrollBTN(false)
  }
})




  }, []);
  const [showScrollBTN, setsetshowScrollBTN] = useState(false);
  return (
    <div id="upp" className="contenier">
      <Header />
      <Hero />
      <div className="line" />
      <Main />
      <div className="line" />
      <Countant />
      <div className="line" />
      <Footer />

      <a style={{opacity: showScrollBTN ? 1 : 0, transition:"1s"}} href=" #upp">
        <button className="icon-arrow-up scrol"></button>
      </a>
    </div>
  );
}

export default App;
