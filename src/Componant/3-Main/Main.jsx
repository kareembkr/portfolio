import { useState } from "react";
import "./Main.css";
import { myprojects } from "./myprojects";
// {projcetstitle: "React ",Category: ["React"],image: "aa",},
// {projcetstitle: "React & css ",Category: ["react & css "],image: "aa",},
// {projcetstitle: "Css",Category: ["Css"],image: "aa",},
// {projcetstitle: "React ",Category: ["React"],image: "aa",},
// {projcetstitle: "Css",Category: ["Css"],image: "aa",},
// {projcetstitle: "java script",Category: ["java script"],image: "aa",},
// {projcetstitle: "Nodejs",Category: ["nodejs"],image: "aa",},
// {projcetstitle: "Nodejs ",Category: ["Nodejs"],image: "aa",},
// {projcetstitle: "Node js project",Category: ["Nodejs project"],image: "aa",},
const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [Arry, setArry] = useState(myprojects);
  const handeclick = (buttoncategory) => {
    setcurrentActive(buttoncategory);
    const newarry = myprojects.filter((item) => {
      const zzz = item.Category.filter((myitem) => {
        return myitem === buttoncategory;
      });

      return zzz[0] === buttoncategory;
    });
    setArry(newarry);
  };

  return (
    <main className="  flex">
      <section className="  left-section flex">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArry(myprojects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Project
        </button>
        <button
          onClick={() => {
            handeclick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          {" "}
          Html & Css
        </button>
        <button
          onClick={() => {
            handeclick("Java script");
          }}
          className={currentActive === "Java script" ? "active" : null}
        >
          Java script
        </button>
        <button
          onClick={() => {
            handeclick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            handeclick("Node js project");
          }}
          className={currentActive === "Node js project" ? "active" : null}
        >
          {" "}
          Nodejs
        </button>
      </section>

      <section className="     flex right-section">
        {Arry.map((item) => {
          return (
            <article key={item.image} className="    card">
              <img className="imge " src={item.image} alt="" />
              <div className=" box">
                <h1 className="title"> {item.projcetstitle}</h1>
                <p className="subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                  necessitatibus magni, labore libero
                </p>

                <div className="icons flex">
                  <div className=" frist ">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>
                  <a href="" className="link flex">
                    More
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
