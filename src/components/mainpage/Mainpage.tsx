import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import "../mainpage/mainpage.css";
import mainPagePicture from "../../assets/img/image05.jpg";
import minnaeLogoText from "../../assets/png/image01.png";
import dividerPict from "../../assets/img/image02.jpg";

export default function App() {
  const parallax = useRef<IParallax>(null!);

  return (
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
      <Parallax ref={parallax} pages={2}>
        <ParallaxLayer offset={0} speed={0}>
          <div
            style={{
              backgroundImage: `url(${mainPagePicture})`,
              backgroundSize: "cover",
              height: 1200,
              opacity: 0.8,
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={1}>
          <img
            src={minnaeLogoText}
            style={{
              height: 600,
            }}
          />
          <p style={{ fontSize: 24 }}>Fedezze fel a mosolyékszerek világát</p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.9}
          speed={1}
          style={{ backgroundColor: "#ae9a90", height: 1800 }}
        >
          <div className="mainpage-container">
            <p className="text-title">Mi is az a Mosolyékszer</p>
            <p className="mainpage-text">
              A hagyományos fogékszerektől eltérően mosolyékszereink egyszerűen
              használhatóak, könnyen behelyezhetőek és eltávolíthatók a szájból.
            </p>
            <div className="alert-textbox">
              NEM IGÉNYELNEK FOGÁSZATI BEAVATKOZÁST SEM FOGORVOS KÖZREMŰKÖDÉSÉT
            </div>
            <p className="mainpage-text">
              Behelyezésükhöz nem szükséges megbontani az egészséges fogzománc
              egységét sem fúrással, sem savas felület előkezeléssel.
            </p>

            <div className="alert-textbox">
              MEGFELELŐ HASZNÁLAT MELLET TEHÁT TELJESEN BIZTOSÁGOS ESZKÖSZ
            </div>
            <p className="mainpage-text">
              Kialakításuknak köszönhetően stabilan helyben maradnak, ugyanakkor
              nem zavarják a fogak érintkezését.
            </p>
            <div className="alert-textbox">
              Ennek eredményeként nem kell a helybentartásukra koncentrálni
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1}>
          <img
            src={dividerPict}
            style={{
              height: 350,
              width: "100%",
              boxShadow: "10px 10px 90px black",
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={1}
          style={{ backgroundColor: "#ae9a90", height: 1200, zIndex: -1 }}
        />
      </Parallax>
    </div>
  );
}
