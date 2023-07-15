import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok }) => {
  // Check if blok.body exists and it is an array before mapping over it
  if (blok && Array.isArray(blok.body)) {
    return (
      <main className="text-center mt-4" {...storyblokEditable(blok)}>
        {blok.body.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </main>
    );
  } else {
    return null; // Or return some sort of fallback UI
  }
};

export default Page;
