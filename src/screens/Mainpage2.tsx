import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import "../../src/assets/css/mainpage.css";
import mainPagePicture from "../assets/img/image05.jpg";
import minnaeLogoText from "../assets/png/image01.png";
import dividerPict from "../assets/img/image02.jpg";
import twoItemPic from "../assets/img/image07.jpg";
import MainpageTextComponent from "../components/mainpage/MainpageTextComponent";
import Footer from "../components/FooterComponent";
export default function App() {
  const parallax = useRef<IParallax>(null!);

  return (
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
      <Parallax ref={parallax} pages={5}>
        <ParallaxLayer offset={0} speed={0} factor={1}>
          <div
            style={{
              backgroundImage: `url(${mainPagePicture})`,
              backgroundSize: "cover",
              height: '100vh',
              border: 'red',
              borderWidth: '1px',
              borderStyle: 'solid',
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1} style={{
          border: 'blue',
          borderWidth: '1px',
          borderStyle: 'solid',
        }}>
          <img
            alt="minnaeLogoText"
            src={minnaeLogoText}
            // style={{
            //   height: 600,
            //   zIndex: 1,
            // }}
          />
          <p style={{ fontSize: 24 }}>Fedezze fel a mosolyékszerek világát</p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.9}
          speed={1}
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "rgb(174, 154, 144)",
          }}
        >
          <div className="mainpage-container">
            <p className="text-title">Mi is az a Mosolyékszer</p>

            <MainpageTextComponent>
              A hagyományos fogékszerektől eltérően mosolyékszereink egyszerűen
              használhatóak, könnyen behelyezhetőek és eltávolíthatók a szájból.
            </MainpageTextComponent>
            <div className="alert-textbox">
              NEM IGÉNYELNEK FOGÁSZATI BEAVATKOZÁST SEM FOGORVOS KÖZREMŰKÖDÉSÉT
            </div>
            <MainpageTextComponent>
              Behelyezésükhöz nem szükséges megbontani az egészséges fogzománc
              egységét sem fúrással, sem savas felület előkezeléssel.
            </MainpageTextComponent>

            <div className="alert-textbox">
              MEGFELELŐ HASZNÁLAT MELLET TEHÁT TELJESEN BIZTOSÁGOS ESZKÖSZ
            </div>
            <MainpageTextComponent>
              Kialakításuknak köszönhetően stabilan helyben maradnak, ugyanakkor
              nem zavarják a fogak érintkezését.
            </MainpageTextComponent>
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
              boxShadow: "10px 10px 60px black",
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.3}
          speed={1}
          style={{ backgroundColor: "#ae9a90", height: 1100, zIndex: 0 }}
        >
          <p className="text-title">Vásárlás menete</p>

          <MainpageTextComponent>
            Az előzetesen lefoglalt időpontban várjuk Önt központunkban. Mivel
            minden ékszerünk tökéletesen személyre szabott, a tervezés közösen
            történik. Kiválasztjuk a díszlap formáját, meretét, majd a
            díszítését. Ezután meghatározzuk az átmenő stift méretét. Végül
            felvesszük rendelését.
          </MainpageTextComponent>
          <MainpageTextComponent>
            Ékszerészünk elkészíti a közösen megálmodott mosolyékszerét.
          </MainpageTextComponent>
          <MainpageTextComponent>
            Az elkészült ékszert kiszállítjuk Önnek.
          </MainpageTextComponent>
        </ParallaxLayer>

        {/* <ParallaxLayer offset={-1} speed={-1.2} style={{ zIndex: -1 }}>
          <Footer />
        </ParallaxLayer> */}
      </Parallax>
    </div>
  );
}
