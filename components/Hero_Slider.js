import { storyblokEditable } from "@storyblok/react";

const hero_slider = ({ blok }) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {blok.name}mars hero slider
  </div>
);

export default hero_slider;
