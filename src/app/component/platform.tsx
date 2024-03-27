import Platformimg from "./platformimg";
import Arrowimg from "./arrowimg";

export default function Platform() {
    return (
        <main className='px-24'>
            <div className='flex justify-between  bg-gray-300 rounded-3xl px-10 py-10'>
                <div>
                    <p className=' font-medium text-3xl'>A Platform Where You <br/> Get to Earn While You <br/> Learn</p>
                    <div className='my-10'>
                        <div className=" bg-main px-6 py-2 rounded-md w-8/12 ">
                            <a className='flex items-center text-center' href="">
                                <p className='px-5 font-normal text-center xl:text-base sm:text-sm text-white'>Let&apos;s Earn</p>
                                <Arrowimg />
                            </a>
                        </div>
                    </div>
                </div>
                <Platformimg />
            </div>
        </main>
    );
}
