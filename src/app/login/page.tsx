import Header from "../component/header";
import Sideimg from "../component/sideimg";
import Socials from "../component/socials";
import Footer from "../component/footer";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export default function Signin() {
    return (
        <main >
            <Header/>
            <div className="flex justify-between min-h-screen bg-white">
                <form className="flex flex-col gap-5 full max-w-sm- mx-20 my-16">
                    <h1 className="font-meduim text-xl">Sign In</h1>
                    <div className="flex items-center border-b border-black py-2 w-6/6">
                        <input className="appearance-none bg-transparent border-none w-full- text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email Address" aria-label="Email Address" />
                    </div>
                    <div className="flex items-center border-b border-black py-2 w-6/6">
                        <input className="appearance-none bg-transparent border-none w-full  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Password" aria-label="Password" />
                        <div className="w-6 text-gray-700 ">
                        <FontAwesomeIcon icon={faEyeSlash} />
                        </div>
                    </div>
                    <button className="border-2 border-main- text-white bg-main font-normal px-1- py-1 xl:text-base sm:text-sm rounded-lg w-6/6"><a href="./dashboard">Sign In</a></button>
                    <div className="flex justify-center- items-center gap-4">
                     <hr className="border border-b border-black w-64"/>
                     <p className="text-xs"> Or Sign In With</p>
                     <hr className="border border-b border-black w-64"/>
                    </div>
                    <div className="">
                        <Socials/>  
                    </div>
                </form>
                <div className="flex flex-col  gap-10 py-16 px-8 bg-main w-4/12">
                <div>
                    <p className="text-2xl w-60 text-white ">Let’s Keep <a className="text-primarytext" href="#">Earning</a> From Where You Stopped!</p>
                </div>
            <Sideimg />
            </div>
            </div>
          
            
            <Footer/>
        </main>
    )
}
// give form a specific width