import Image from 'next/image';
import Arrowimg from "../component/arrowimg";


export default function Header() {
    return (
        <main className="border bg-white">
            <div className="flex- justify-between- flex-wrap px-16 text-wrap">
                <div className="px-16- flex justify-between items-center">
                  <a href="./home">
                  <div className="">
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src="/logo.png"
                            alt="Next.js Logo"
                            width={150}
                            height={150}
                            priority
                        />
                    </div>
                  </a>
                    <div className="flex items-center gap-20">
                        <p><a href="">Home</a></p>
                        <p><a href="">About Us</a></p>
                        <p><a href="">Roadmap</a></p>
                        <p><a href="">Contact Us</a></p>

                    </div>
                    <div className=" bg-main px-6 py-2 rounded-md">
                        <a className='flex items-center gap-2' href="">
                            <p className='rounded-md px-6- font-normal py-2- xl:text-base sm:text-sm text-white'>Let's Earn</p>
                            <Arrowimg />
                        </a>
                    </div>
                </div>

            </div>

        </main>

    )
}

