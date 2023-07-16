// Import the required modules
import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Hero_Slider from "../components/Hero_Slider";
import Adaptative_Quad_Images from "../components/Adaptative_Quad_Images/Adaptative_Quad_Images";
import Adaptative_Dual_Images from "../components/Adaptative_Dual_Images/Adaptative_Dual_Images";
import Head from 'next/head';

// Map the names of Storyblok components to the corresponding React components
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  hero_slider: Hero_Slider,
  static_four_blocks: Adaptative_Quad_Images,
  static_two_blocks: Adaptative_Dual_Images,
};

// Initialize the Storyblok client with the access token and map of components
storyblokInit({
  accessToken: "jEhZZ9lDA5wTvR6PU4Pf7Qtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: ''
  }
});

// Define the main App component. This will be used as the parent component for all pages in the app.
function MyApp({ Component, pageProps }) {
  // Return the current page (represented by the 'Component' prop), passing it any props it needs
  return (
    // React Fragment - allows us to return multiple elements without adding an extra node to the DOM.
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/utk1vqp.css" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
