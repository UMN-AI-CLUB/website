import { css } from "styled-components";

import NasalizationRg from "@assets/fonts/NasalizationRg.otf";

import NeutrafaceBold from "@assets/fonts/Neutraface/NeutrafaceBold.otf";
import NeutrafaceBoldItalic from "@assets/fonts/Neutraface/NeutrafaceBoldItalic.otf";
import NeutrafaceBook from "@assets/fonts/Neutraface/NeutrafaceBook.otf";
import NeutrafaceBookItalic from "@assets/fonts/Neutraface/NeutrafaceBookItalic.otf";
import NeutrafaceDemi from "@assets/fonts/Neutraface/NeutrafaceDemi.otf";
import NeutrafaceDemiItalic from "@assets/fonts/Neutraface/NeutrafaceDemiItalic.otf";
import NeutrafaceLight from "@assets/fonts/Neutraface/NeutrafaceLight.otf";
import NeutrafaceLightItalic from "@assets/fonts/Neutraface/NeutrafaceLightItalic.otf";

export const Nasalization = css`
  @font-face {
    font-family: "Nasalization";
    src: url(${NasalizationRg}) format("opentype");
    font-weight: normal;
    font-style: normal;
  }
`;

export const Neutraface = css`
  @font-face {
    font-family: "Neutraface";
    src: url(${NeutrafaceBold}) format("opentype");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Neutraface";
    src: url(${NeutrafaceBoldItalic}) format("opentype");
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: "Neutraface";
    src: url(${NeutrafaceBook}) format("opentype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Neutraface";
    src: url(${NeutrafaceBookItalic}) format("opentype");
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: "Neutraface";
    src: url(${NeutrafaceDemi}) format("opentype");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Neutraface";
    src: url(${NeutrafaceDemiItalic}) format("opentype");
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: "Neutraface";
    src: url(${NeutrafaceLight}) format("opentype");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Neutraface";
    src: url(${NeutrafaceLightItalic}) format("opentype");
    font-weight: 300;
    font-style: italic;
  }
`;
