import Testarrow from "./testarrow";
import Testback from "./testback";
import Testimg from "./testimg";

export default function Testimonial() {
    return (
        <div className='px-24 my-20'>
            <h1 className=' font-semibold text-main text-3xl w-72-'>See What Others Have <br/> to Say</h1>
            <div className="flex gap-16 items-center my-8 ">
                <div>
                <Testback />
                </div>
                <div>
                    <div className='mx-20'>
                    <Testimg />
                    </div>
                    <div className=' flex flex-col border border-primarytext items-center text-center w-60 h-56 px-1 rounded-3xl z-40 -mt-14'>
                    <div className=' py-16'>
                    <p className=' text-sm'>“Lorem ipsum dolor sit amet consectetur. Amet risus neque pretium facilisi velit. Id pretium odio quisque morbi. Nulla.”</p>
                    <h3 className=' font-medium my-6'>- Jon Snow</h3>
                    </div>
                    </div>
                </div>
                <div>
                    <div className='mx-20'>
                    <Testimg />
                    </div>
                    <div className=' flex flex-col border border-primarytext items-center text-center w-60 h-56 px-1 rounded-3xl z-40 -mt-14'>
                    <div className=' py-16'>
                    <p className=' text-sm'>“Lorem ipsum dolor sit amet consectetur. Amet risus neque pretium facilisi velit. Id pretium odio quisque morbi. Nulla.”</p>
                    <h3 className=' font-medium my-6'>- Jon Snow</h3>
                    </div>
                    </div>
                </div>
                <div>
                    <div className='mx-20'>
                    <Testimg />
                    </div>
                    <div className=' flex flex-col border border-primarytext items-center text-center w-60 h-56 px-1 rounded-3xl z-40 -mt-14'>
                    <div className=' py-16'>
                    <p className=' text-sm'>“Lorem ipsum dolor sit amet consectetur. Amet risus neque pretium facilisi velit. Id pretium odio quisque morbi. Nulla.”</p>
                    <h3 className=' font-medium my-6'>- Jon Snow</h3>
                    </div>
                    </div>
                </div>
                <div>
                <Testarrow />
                </div>

            </div>
        </div>
    )
}