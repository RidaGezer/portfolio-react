import "./App.css";
import { HiMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import Header from "./component/Header";
import Headertwo from "./component/Headertwo";
import Skillscomponent from "./component/Skillscomponent";

function App() {
  return (
    <div className="container">
      <section>
        <div className="content">
          <h1 className="h1intro">2023</h1>
          <h2 className="h2intro">portfolio</h2>
          <h3 className="h3intro">Front end software developer</h3>
        </div>
      </section>
      <section className="about">
        <div className="content2">
          <div className="imgcontainer">
            <img src="" alt="" />
          </div>
          <div className="abouttext">
            <Headertwo className="h1About" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae amet tempore itaque atque, architecto sit hic dolorem
              ipsa, ullam nihil ab, impedit consectetur ad! Natus dolor porro
              dignissimos numquam optio? khdk ewdhwkeh ewhdwehd ewdhd wedhd
              wejkdbkjbd wekjbdkweb ewdkbkjdb ewdkbwe edjbwd edjbnwjdn ednkwen
              dh wdbwbebkb ewhdbv ewkhdvbew ewkbhd dkjn eknd ewlkdn edkb
              eljwebnkdb ewkbnd dwbdkjb wedb dkwhbdj wekjbd
            </p>
          </div>
        </div>
      </section>
      <section className="Experience">
        <div className="content3">
          <div className="experience2">
            <Header className="h2Experience" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis labore maxime vero distinctio quod reiciendis iure
              nesciunt facere a consequuntur quisquam, corporis fugit quas modi
              quis. Commodi rerum expedita earum.ipsum dolor, sit amet
              consectetur adipisicing elit. Veritatis labore maxime vero
              distinctio quod reiciendis iure nesciunt facere a consequuntur
              quisquam, corporis fugit quas modi quis. Commodi rerum expedita
              earum. ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis labore maxime vero distinctio quod reiciendis iure
              nesciunt facere a consequuntur quisquam, corporis fugit quas modi
              quis. Commodi rerum expedita earum. dfhiwoh kweb ikwbefo
              kfboiweobw efihpweiojf ewofhoiwej oiefhowejf oewhofiweof ewbfoewhf
              oiweofhew oiejgit fopwejf foiwepfjwef eiofjpwf kjebfoewbfk ewpoo
              fonwfpwenf fnewpjfpwejkfwe fowenpifj
            </p>
          </div>
          <div className="experience3">
            <div className="experience4">
              <h2 className="h2Experience">Education</h2>
              <div className="education1">
                <h3>Zadkine College</h3>
                <p>Logistiek medewerker</p>
              </div>
              <div className="education2">
                <h3>Techniek college Rotterdam</h3>
                <p>Front end software development and creative technologies</p>
              </div>
            </div>{" "}
            <div className="experience5">
              <h2 className="h2Experience">Skills</h2> <Skillscomponent />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="content">
          <h2 className="h2design">
            Some of my <span className="spandesign">design</span> work
          </h2>
          <div className="Design1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              quis tempora non ipsam dolor cumque, sapiente est harum nam neque
              labore excepturi dolorum deleniti quos magnam blanditiis,
              voluptatem omnis unde!
            </p>
            <div className="slider-wrapper">
              <div className="slider">
                <img id="slide-1" src="./img/Group 15.png" alt="" />
                <img id="slide-2" src="./img/Group 16.png" alt="" />
                <img id="slide-3" src="./img/Group 17.png" alt="" />
                <img id="slide-4" src="./img/Group 18.png" alt="" />
                <img id="slide-5" src="./img/Group 19.png" alt="" />
              </div>
              <div className="slider-nav">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
                <a href="#slide-4"></a>
                <a href="#slide-5"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="content">
          <h2 className="h2design">
            Some of my <span className="spandesign">coding</span> work
          </h2>
          <div className="Design1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              quis tempora non ipsam dolor cumque, sapiente est harum nam neque
              labore excepturi dolorum deleniti quos magnam blanditiis,
              voluptatem omnis unde!
            </p>
            <div className="slider-wrapper">
              <div className="slider">
                <img id="slide-5" src="./img/Home page.png" alt="" />
                <img id="slide-1" src="./img/Bookings.png" alt="" />
                <img id="slide-2" src="./img/Booking page.png" alt="" />
                <img id="slide-3" src="./img/Bali.png" alt="" />
                <img id="slide-4" src="./img/contact page.png" alt="" />
              </div>
              <div className="slider-nav">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
                <a href="#slide-4"></a>
                <a href="#slide-5"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="content">
          <div className="contactheader">
            <h1 className="h1contact">Contact me</h1>
            <h3 className="h3contact">If you have any questions.</h3>
          </div>
          <div className="contacticons">
            <div className="contactmail">
              <HiMail size={60} />
              <p>Ridagezer@outlook.com</p>
            </div>

            <div className="contactgithub">
              <FaGithub size={60} />
              <p>
                <a href="https://github.com/RidaGezer">Rida Gezer</a>
              </p>
            </div>
          </div>
          <div className="contactimg">
            <img src="./img/Layer_1_1_.svg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
