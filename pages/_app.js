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
import Adaptive_Product_Block from "../components/Adaptive_Product_Block/Adaptive_Product_Block.jsx";
import Slider_Four_Block from "../components/Slider_Four_Block/Slider_Four_Block";
import Slider_Three_Block from "../components/Slider_Three_Block/Slider_Three_Block";
import Slider_Eight_Block from "../components/Slider_Eight_Block/Slider_Eight_Block";
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
  static_five_block: Adaptive_Product_Block,  
  slider_four_block: Slider_Four_Block,  
  slider_three_block: Slider_Three_Block,  
  slider_eight_block: Slider_Eight_Block, 
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

import { useEffect } from 'react';



// Define the main App component. This will be used as the parent component for all pages in the app.
function MyApp({ Component, pageProps }) {
  // Fix slider video height
  useEffect(() => {
    if (window.parent !== window) {
      const height = document.body.scrollHeight;
      console.log('Sending iframe height:', height);
      
      window.parent.postMessage({
        iframeHeight: height
      }, "*");
    }
  }, []);
  // Return the current page (represented by the 'Component' prop), passing it any props it needs
  return (
    // React Fragment - allows us to return multiple elements without adding an extra node to the DOM.
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/utk1vqp.css" />
      </Head>
      <div id="my-react-app">
        <Component {...pageProps} />
      </div>
    </>
  );

}

export default MyApp;
