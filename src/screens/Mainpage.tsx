import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import mainPagePicture from "../assets/img/image05.jpg";
import minnaeLogoText from "../assets/png/image01.png";
import MainpageTextComponent from '../components/mainpage/MainpageTextComponent';
import "../../src/assets/css/mainpage.css";

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
      <Parallax ref={parallax} pages={2}>
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
        </ParallaxLayer>


      </Parallax>
    </div>
  )
}
