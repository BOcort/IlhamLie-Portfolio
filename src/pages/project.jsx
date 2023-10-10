// import React from 'react'

export default function project() {
  return (
    <div>
      <div id="container" className=" w-5/6 mx-auto  my-10">
        <h2 className="text-center text-2xl font-bold">Look the <span className=" text-sky-500">Project</span></h2>
        <div id="galery-project" className="md:flex md:justify-center items-center">
          <div id="event-management" className="md:mr-5 max-md:mb-10 max-md:flex max-md:justify-center">
            <div className=" bg-sky-500 w-96 h-72 absolute mt-5 ml-5 rounded-xl -z-50"></div>
            <div className=" bg-white w-96 h-72 z-2 text-center rounded-xl">
              <h1 className="text-black font-bold font-3xl my-3">Event Management</h1>
              <img src="/image/eventManagement.png" alt="" className=" items-center justify-center w-11/12 mx-auto py-5" />
            </div>
          </div>
          <div id="" className="md:ml-5 max-md:mt-10 max-md:mx-auto max-md:flex max-md:justify-center">
            <div className=" bg-sky-500 w-96 h-72 absolute mt-5 ml-5 rounded-xl -z-50"></div>
            <div className=" bg-white w-96 h-72 z-2 text-center rounded-xl">
              <h1 className="text-black font-bold font-3xl my-3">Event Management</h1>
              <img src="/image/eventManagement.png" alt="" className=" items-center justify-center w-11/12 mx-auto py-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
