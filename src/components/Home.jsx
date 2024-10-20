import React from "react";
import image from "../assets/ZENITH INTERIOR'S BY ZOHRA HASSAN.pdf-image-000.jpg";



const Home = () => {
  return(
    <div name="home"
    className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
        <div className="max-w-screen-lg mx-auto flex  flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
              <h3 className="text-4xl sm:text-2xl font-thin italic text-white">By ID.</h3>
                <h1 className="text-4xl sm:text-7xl font-bold text-white">Zohra Hassan
                </h1>


                <p className="text-gray-500 py-4 max-w-md">
                Zenith Interior’s specializes in creating luxurious, bespoke interiors that blend elegance with functionality, offering tailored design solutions to elevate both residential and commercial spaces.
                </p>




            </div>
            <div>
                <img 
                 src={image}
                 alt="my profile"
                 className="rounded-2xl mx-auto w-2/3 md:w-full"
                />
            </div>
        </div>
    </div>
  );

};

export default Home;
