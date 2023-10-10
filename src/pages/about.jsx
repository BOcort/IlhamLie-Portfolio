/* eslint-disable react/no-unescaped-entities */
// import React from 'react'

export default function about() {
  return (
    <div>
      <div id="container" className="w-5/6 mx-auto ">
        <div id="about-title" className=" text-center my-10">
          <h2 className=" text-6xl font-bold font-sans italic">See My profile <span className=" text-red-500">!</span></h2>
        </div>
        <div id="about-content" className="md:grid md:grid-cols-3 gap-5">
          <div id="about-text" className=" text-xl text-justify font-mono md:col-span-2 max-md:hidden">
            <p className="mb-5">
              <span className=" text-red-500 font-semibold"> Welcome to my profile page! </span> I am a informatic engineering student who is extremely eager to enter the workforce as a full stack developer. Pursuing a degree in informatic aligns with my deep interest in creating innovative and impactful information technology solutions.
            </p>
            <p className="mb-5">
              Since high school, I have wholeheartedly delved into the realm of computer science. I actively participated in various informatics competitions during my high school years and even succeeded in winning competitions at the district level. My passion and dedication to the field of computer science have continued to grow over time.
            </p>
            <p className="mb-5">
              In addition to formal education, I attended a full stack developer bootcamp on harisenin.com to further enhance my knowledge and skills in this field. I enjoy challenges and logic competitions, which help sharpen my analytical thinking and foster creative problem-solving in software development.
            </p>
            <p className="mb-5">
              Throughout my learning journey, I have taken various courses to improve my understanding of front-end, databases, and back-end development. I have also successfully worked on several projects where I played the role of a full stack developer, applying the knowledge and skills I have acquired.
            </p>
          </div>
          <div id="about-picture" className=" md:col-span-1">
            <div className="max-md:absolute max-md:top-1/3 max-sm: max-sm:flex max-sm:justify-center">
              <div className=" bg-gray-700 w-64 h-64 absolute mt-3 ml-3 rounded-xl -z-50"></div>
              <div className=" bg-white w-64 h-64 z-2 flex rounded-xl">
                <img src="/image/profile-picture2.jpg" alt="" className=" items-center justify-center h-56 m-auto" />
              </div>
            </div>
            <div className="max-md:float-right max-md:mt-20 max-sm:">
              <div id="about-university" className=" md:mt-10 h-24 flex w-72 hover:bg-white hover:text-black duration-300 rounded-xl">
                <img src="/image/logo-unipa.webp" alt="" className=" h-5/6 m-auto ml-4" />
                <p className="my-auto ml-4 text-2xl font-bold font-mono">Bachelor <span className=" text-sm">Informatic Engineering</span></p>
              </div>
              <div id="about-university" className="mt-5 h-24 flex w-72 hover:bg-white hover:text-black duration-300 rounded-xl">
                <p className="m-auto mr-8 text-xl font-bold font-mono text-right">Bootcamp <span className=" text-sm">Fullstack Developer</span></p>
                <img src="/image/logo-harisenin.jpeg" alt="" className=" h-5/6 mr-4 m-auto rounded-full" />
              </div>
            </div>
          </div>
        </div>
        <div id="about-skill" className="max-md:mt-96">
          <div id="Skill" className="mb-5">
            <h3 className="text-4xl font-bold text-center my-5">Skill</h3>
            <div className="grid grid-rows-4">
              <div className=" row-span-1 md:w-1/2">
                <div className="md:w-full md:float-left">
                  <h4 className=" font-semibold text-2xl mb-4 max-md:text-center">Front end Developer</h4>
                  <hr />
                  <div id="frontend" className="flex mt-4 gap-5 max-md:justify-center">
                    <p className="  hover:bg-white hover:text-black rounded-lg p-2">Html & CSS</p>
                    <p className="  hover:bg-white hover:text-black rounded-lg p-2">Javascript</p>
                    <p className="  hover:bg-white hover:text-black rounded-lg p-2">React JS</p>
                    <p className="  hover:bg-white hover:text-black rounded-lg p-2">Vite JS</p>
                  </div>
                </div>
              </div>
              <div className=" row-span-1">
                <div className="md:w-1/2 md:float-right max-md:w-full">
                  <h4 className=" font-semibold text-2xl mb-4 text-right max-md:text-center">Back end Developer</h4>
                  <hr />
                  <div id="backend" className="flex mt-4 gap-5 md:float-right max-md:justify-center">
                    <p className="  hover:bg-white hover:text-black rounded-lg p-2">NodeJS</p>
                  </div>
                </div>
              </div>
              <div className=" row-span-1 md:w-1/2 ">
                <div className="md:float-left w-full ">
                  <h4 className=" font-semibold text-2xl mb-4 max-md:text-center">Database</h4>
                  <hr />
                  <div id="database" className="flex mt-4 gap-5 max-md:justify-center">
                    <p className="  hover:bg-white hover:text-black rounded-lg p-2">Mysql</p>
                    <p className="  hover:bg-white hover:text-black rounded-lg p-2">PostgresSQL</p>
                  </div>
                </div>
              </div>
              <div className="row-span-1">
                <div className="w-full">
                  <h4 className=" font-semibold text-2xl mb-4 text-center">Another</h4>
                  <hr />
                  <div id="another" className="flex mt-4 gap-5 justify-center">
                    <p className="  hover:bg-white hover:text-black rounded-lg p-2">Java</p>
                    <p className="  hover:bg-white hover:text-black rounded-lg p-2">Python</p>
                    <p className="  hover:bg-white hover:text-black rounded-lg p-2">Pascal</p>
                    <p className="  hover:bg-white hover:text-black rounded-lg p-2">C</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="Certificate">
            <h3 className="text-4xl font-bold text-center my-5">Certificate</h3>
            <div className=" max-md:flex max-md:justify-center" id="web-developer">
              <div className="md:flex justify-center gap-5">
                <a href="https://progate.com/path_certificate/c7900315rs2f3t">
                  <div id="Progate" className="w-96 hover:bg-white hover:text-black rounded-xl duration-200 max-md:mb-5">
                    <div className="w-11/12 flex mx-auto ">
                      <img src="/image/logo-progate.jpeg" alt="" className=" h-24 rounded-full mr-5" />
                      <div className="my-auto">
                        <h3 className=" text-xl font-medium">Front-end Developer</h3>
                        <p className=" text-lg">December 2022 - Maret 2023</p>
                        <p className=" text-xs">Skill : Html, Css, JavaScript and React</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://codingstudio.id/certificate/75C12499A5-75B547304D-75B546E420/">
                  <div id="Coding Studio" className="w-96 hover:bg-white hover:text-black rounded-xl duration-200">
                    <div className="w-11/12 flex mx-auto">
                      <img src="/image/logo-codingStudio.png" alt="" className=" h-24 rounded-full bg-white mr-5" />
                      <div className="my-auto">
                        <h3 className=" text-xl font-medium">Front-end Developer</h3>
                        <p className=" text-lg">June 2023</p>
                        <p className=" text-xs">Skill : Html, Css and JavaScript</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
