/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { FaFileDownload } from "react-icons/fa";


export default function home() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const fullText = 'Hello World....';
  let index = 0;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [text, setText] = useState(fullText[index]);
  
  const [isVisible, setIsVisible] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < fullText.length - 1) {
        index++;
        setText((prevText) => prevText + fullText[index]);
      } else {
        clearInterval(intervalId);
      }
    }, 150); // Adjust the interval to control the typing speed

    return () => {
      clearInterval(intervalId);
    };
  }, [fullText, index]);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 300); // Ubah angka ini untuk mengatur kecepatan kedipan (dalam milidetik)

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className=" font-mono">
      <h4 className=" text-green-500 text-xs text-center mb-20 max-md:text-xl max-md:mt-10">{text}<span>{isVisible ? '|' : ''}</span></h4>
      <div id="container" className=" w-5/6 mx-auto md:flex">
        <div id="Image-profile" className=" md:1/2">
          <img src="/image/boom-crop.jpg" alt="My Profile" className="w-full" />
        </div>
        <div id="Content" className=" md:w-1/2 md:mt-9 mx-auto">
          <div id="content-title" className="mx-auto">
            <h3 className=" text-justfy font-sans text-8xl font-bold mb-5 max-md:text-6xl max-md:text-center">Hello This Is My Portfolio</h3>
            <h2 className=" text-green-500 text-xs text-center max-md:text-xl">ILHAM TATAYO LIE </h2>
            <p className=" text-justify">{"Hello! My name is Ilham Tatayo Lie, and I'm passionately interested in pursuing a career as a full-stack developer. I successfully completed the Full Stack Development bootcamp at Harisenin.com, which has fueled my enthusiasm for this field. Currently, I am a dedicated student studying Informatics Engineering at the University of Papua, eager to enhance my skills and knowledge in the realm of technology"}</p>
          </div>
          <div id="content-file" className=" mt-12 max-md:flex max-md:justify-center">
            <a target="_blank"href="/file/CV ATS ILHAM TATAYO LIE ~ English.pdf" className=" w-40 h-12 border-solid border-2 border-white hover:bg-white hover:text-black hover:border-0 rounded-md text-center flex items-center justify-center"> Resume <FaFileDownload className="ml-2"/></a>
          </div>
        </div>
      </div>
    </div>
  )
}
