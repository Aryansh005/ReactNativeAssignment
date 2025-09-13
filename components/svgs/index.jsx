import * as React from "react";
import Svg, { Defs, Image, Path, Pattern, Use } from "react-native-svg";

const Profile = (props) => (
  <Svg
    width={38}
    height={40}
    viewBox="0 0 38 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path fill="url(#pattern0_2002_3613)" d="M0 0H38V40H0z" />
    <Defs>
      <Pattern
        id="pattern0_2002_3613"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          href="#image0_2002_3613"   // ✅ use `href` instead of `xlinkHref` (RN SVG >= 13)
          transform="matrix(.00675 0 0 .00641 -.006 0)"
        />
      </Pattern>
      <Image
        id="image0_2002_3613"
        width={150}
        height={156}
        preserveAspectRatio="none"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACcCAYAAACdmlKEAAAAAXNSR0IArs4c6QAAFRZJREFUeF7tnXuUFNWdx3/VPT2Pnp4eGGBmGGYYAWEgQCJGg4qaBDXBhGxi2PWxauKiq3HNZtfVeMzJMXuWPfG4J/HsJifuGmOOJ8jGzUnUILLZ9S0+UFBQHgcQGUBAmBmZZ0/... (trimmed)"
      />
    </Defs>
  </Svg>
);

const SInfoSvg = {
  Profile,
};

export default SInfoSvg;
