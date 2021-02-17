import React from "react";
import image from "../bgImage.jpg";

function Home() {
  return (
    <main>
      <img
        src={image}
        alt="background"
        className="absolute object-cover w-full h-full"
      />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-6xl text-gray-100 font-bold cursive leading-none lg:leading-snug home-name'>Yo. It's Ken</h1>
      </section>
    </main>
  );
}

export default Home;
