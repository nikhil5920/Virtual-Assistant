import React, { useRef, useState } from "react";
import { SlCloudUpload } from "react-icons/sl";
import Card from "../Components/Card";
import image1 from '../assets/KP.jpg';
import image2 from '../assets/RP.jpg';
import image3 from '../assets/Sign_up_page_background.jpg';

function Customize() {
    const [frontEndImage, setFrontEndImage] = useState(null);
    const [backEndImage, setBackEndImage] = useState(null);
    const inputImage = useRef();

    const handleImageChange = (e) => {
        console.log('calling')
        const file = e.target.files[0];
        setBackEndImage(file);
        setFrontEndImage(URL.createObjectURL(file));
    }


    return (
        <div className="w-full h-[100vh] bg-gradient-to-t from-[black] to-[#a76161] flex justify-center items-center flex-col" >
            <h1 className="text-3xl text-zinc-50 font-bold mb-5"> Select Your <span ><i>Assistant Image</i></span></h1>

            <div className="w-[90%] max-w-[60%] flex justify-center items-center flex-wrap gap-10">
                <Card image={image1} />
                <Card image={image3} />
                <Card image={image2} />

                <div className='w-[80px] h-[160px] lg:w-[150px] lg:h-[250px] bg-blue-500 border-2 border-[blue] rounded-2xl overflow-hidden 
                        hover:shadow-2xl hover:shadow-amber-50 cursor-pointer hovar:border-4px border-white flex items-center justify-center' onClick={() => inputImage.current.click()} >
                    {!frontEndImage && <SlCloudUpload className="w-[100px] h-[100px]" />}
                    {frontEndImage && <img src={frontEndImage} className="h-full object-cover" alt="" />}

                    <input type="file" accept="image/*" ref={inputImage} hidden onChange={handleImageChange} />
                </div>
            </div>


            <button className='min-w-[150px] mt-[20px] h-[60px] bg-blue-500 rounded-3xl text-black font-bold text-19px' >
                Next
            </button>
        </div>
    )
}

export default Customize;