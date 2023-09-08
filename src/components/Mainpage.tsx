import { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import mainPagePicture from "../assets/img/image05.jpg";
import minnaeLogoText from "../assets/png/image01.png";

export default function App() {
  const parallax = useRef<IParallax>(null!);

  return (
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer offset={0} speed={0}>
          <div
            style={{
              backgroundImage: `url(${mainPagePicture})`,
              backgroundSize: "cover",
              height: 1000,
              opacity: 0.8,
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "red" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "green" }}
        />

        <ParallaxLayer offset={0.1} speed={1}>
          <img
            src={minnaeLogoText}
            style={{
              height: 600,
            }}
          />
          <p style={{ fontSize: 32 }}>Fedezze fel a mosolyékszerek világát</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
