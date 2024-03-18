import Image from 'next/image'
import Platformimg from "./platformimg";
import Arrowimg from "./arrowimg";


export default function Platform() {
    return (
        <main className='px-16 '>
            <div className='flex justify-between  bg-gray-300 rounded-3xl px-10 py-10'>
                <div >
                    <p className=' font-meduim text-3xl'>A Platform Where You <br/>  Get to Earn While You <br/> Learn</p>
                   <div className='my-10'>
                   <div className=" bg-main px-6 py-2 rounded-md w-8/12 ">
                        <a className='flex items-center gap-2- text-center' href="">
                            <p className='px-5 font-normal py-2- text-center xl:text-base sm:text-sm text-white'>Let's Earn</p>
                            <Arrowimg />
                        </a>
                    </div>
                   </div>
                </div>
                <Platformimg />
            </div>
        </main>
    )
}