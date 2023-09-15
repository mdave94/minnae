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
  const parallax = useRef<IParallax>(null!)
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#253237',
        border: 'green',
        borderWidth: '1px',
        borderStyle: 'solid',
      }}>
      <Parallax ref={parallax} pages={3}>
        {/* first img bg */}
        <ParallaxLayer
          offset={0}
          speed={0}
          // factor={3}
          style={{
            backgroundImage: `url(${mainPagePicture}`,
            backgroundSize: 'cover',
            height: '100vh'
          }}
        />
        {/* first image title img + title */}
        <ParallaxLayer offset={0} speed={0} style={{
          border: 'blue',
          borderWidth: '1px',
          borderStyle: 'solid',
          zIndex: 1
        }}>
          <img
            alt="minnaeLogoText"
            src={minnaeLogoText}
            style={{
              height: 600,
              zIndex: 1,
            }}
          />
          <p style={{ fontSize: 24 }}>Fedezze fel a mosolyékszerek világát</p>
        </ParallaxLayer>
        {/* second section -> list of features */}
        <ParallaxLayer
          offset={1}
          speed={0}
          style={{
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
          {/* <img
            alt="divider"
            src={dividerPict}
            style={{
              marginTop: 50,
              // height: 350,
              width: "100%",
              boxShadow: "10px 10px 60px black",
            }}
          /> */}
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.5}
          speed={0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img
            alt="divider"
            src={dividerPict}
            style={{
              // marginTop: 50,
              // height: 350,
              width: "100%",
              boxShadow: "10px 10px 60px black",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.5}
          speed={0}
          // factor={0.5}
          style={{ backgroundColor: "#ae9a90" }}
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
        {/* <ParallaxLayer offset={2} speed={0}>
          <img
            alt="=="
            src={dividerPict}
            style={{
              height: 350,
              width: "100%",
              boxShadow: "10px 10px 60px black",
            }}
          />
        </ParallaxLayer> */}
        {/* <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: '#805E73', border: 'red', borderWidth: '1px', borderStyle: 'solid' }}
        /> */}
        {/* <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: 'red', border: 'blue', borderWidth: '1px', borderStyle: 'solid' }}
        /> */}


        {/* <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer> */}

        {/* <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer> */}

        {/* <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true),
          }}
        /> */}
        {/*
        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={url('server')} style={{ width: '20%' }} />
        </ParallaxLayer> */}

        {/* <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={url('bash')} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}>
          <img src={url('clients-main')} style={{ width: '40%' }} />
        </ParallaxLayer> */}

      </Parallax>
    </div>
  )
}
