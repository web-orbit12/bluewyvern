import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Hero_Slider from "../components/Hero_Slider";
import Slider_Four_Block from "../components/Slider_Four_Block/Slider_Four_Block";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  hero_slider: Hero_Slider,
  slider_four_block: Slider_Four_Block,
};

storyblokInit({
  accessToken: "jEhZZ9lDA5wTvR6PU4Pf7Qtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: ''
  }
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
