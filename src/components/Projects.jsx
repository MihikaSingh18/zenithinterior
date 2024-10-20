import React from "react";
import BedRoom02 from "../assets/ZENITH INTERIOR'S BY ZOHRA HASSAN.pdf-image-009.jpg";
import BedRoom03 from "../assets/ZENITH INTERIOR'S BY ZOHRA HASSAN.pdf-image-011.jpg";
import BedRoom04 from "../assets/ZENITH INTERIOR'S BY ZOHRA HASSAN.pdf-image-022.jpg";
import Kitchen02 from "../assets/ZENITH INTERIOR'S BY ZOHRA HASSAN.pdf-image-010.jpg";
import Ceiling from "../assets/ZENITH INTERIOR'S BY ZOHRA HASSAN.pdf-image-021.jpg";
import LivingRoom02 from "../assets/ZENITH INTERIOR'S BY ZOHRA HASSAN.pdf-image-023.jpg";

const Projects = () => {
  return (
    <div name="Projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen ">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
                <p className="py-6">𝐒𝐎𝐌𝐄 𝐎𝐅 𝐎𝐔𝐑 𝐏𝐑𝐎𝐉𝐄𝐂𝐓 𝐃𝐄𝐒𝐈𝐆𝐍’𝐒</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                <div className="shadow:md shadow-gray-600 rounded-lg">
                    <img 
                    src={BedRoom02} 
                    alt="" 
                    className="rounded-md duration-200 hover:scale-105"/>

                    <div className="flex items-center justify-center">
                    
                        
                    </div>
                </div>





                <div className="shadow:md shadow-gray-600 rounded-lg">
                    <img 
                    src={Kitchen02} 
                    alt="" 
                    className="rounded-md duration-200 hover:scale-105"/>

                    <div className="flex items-center justify-center">
                    
                        
                    </div>
                </div>






              




                <div className="shadow:md shadow-gray-600 rounded-lg">
                    <img 
                    src={BedRoom03} 
                    alt="" 
                    className="rounded-md duration-200 hover:scale-105"/>

                    <div className="flex items-center justify-center">
                    
                        
                    </div>
                </div>







                
                <div className="shadow:md shadow-gray-600 rounded-lg">
                    <img 
                    src={LivingRoom02} 
                    alt="" 
                    className="rounded-md duration-200 hover:scale-105"/>

                    <div className="flex items-center justify-center">
                    
                        
                    </div>
                </div>



                <div className="shadow:md shadow-gray-600 rounded-lg">
                    <img 
                    src={BedRoom04} 
                    alt="" 
                    className="rounded-md duration-200 hover:scale-105"/>

                    <div className="flex items-center justify-center">
                    
                        
                    </div>
                </div>



                <div className="shadow:md shadow-gray-600 rounded-lg">
                    <img 
                    src={Ceiling} 
                    alt="" 
                    className="rounded-md duration-200 hover:scale-105"/>

                    <div className="flex items-center justify-center">
                    
                        
                    </div>
                </div>



            </div>
        </div>
    </div>
  );
};

export default Projects;
