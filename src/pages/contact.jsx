import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"

export default function contact() {
    return (
        <div>
            <div id="container" className=" w-5/6 mx-auto md:flex md:justify-center">
                <div id="email" className=" w-64 h-72 border-dashed border-2 border-red-400 text-red-400 rounded-xl m-5 max-md:mx-auto">
                    <div id="email-icon" className="w-full h-3/5 flex justify-center items-center">
                        <FaEnvelope className="text-6xl" />
                    </div>
                    <div id="email-text">
                        <p className=" text-center">Contac me With email</p>
                        <a href="mailto:ilhamlie014@gmail.com" className=" flex w-1/2 m-auto p-2 border-red-400 justify-center items-center my-5 rounded-lg bg-red-400 text-white font-semibold hover:bg-black hover:border-2 hover:border-red-400 hover:text-red-400 duration-100">
                            <div className="flex justify-center">
                                <p className="text-center text-xs mx-auto">Send Massage</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div id="linkedin" className=" w-64 h-72 border-dashed border-2 border-sky-400 text-sky-400 rounded-xl m-5 max-md:mx-auto">
                    <div id="linked-icon" className="w-full h-3/5 flex justify-center items-center">
                        <FaLinkedin className="text-6xl" />
                    </div>
                    <div id="linked-text">
                        <p className=" text-center">See My Linkedin</p>
                        <a href="" className=" flex w-1/2 m-auto p-2 justify-center items-center my-5 rounded-lg bg-sky-400 text-white font-semibold hover:bg-black hover:border-2 hover:border-sky-400 hover:text-sky-400 duration-100">
                            <div className="flex justify-center">
                                <p className="text-center text-xs mx-auto">Open Linkedin</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div id="github" className=" w-64 h-72 border-dashed border-2 border-orange-400 text-orange-400 rounded-xl m-5 max-md:mx-auto">
                    <div id="github-icon" className="w-full h-3/5 flex justify-center items-center">
                        <FaGithub className="text-6xl" />
                    </div>
                    <div id="github-text">
                        <p className=" text-center">See My Github</p>
                        <a href="" className=" flex w-1/2 m-auto p-2 justify-center items-center my-5 rounded-lg bg-orange-400 text-white font-semibold hover:bg-black hover:border-2 hover:border-orange-400 hover:text-orange-400 duration-100">
                            <div className="flex justify-center">
                                <p className="text-center text-xs mx-auto">Open Github</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
