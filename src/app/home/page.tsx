import Header from "../component/header";
import Arrowimg from "../component/arrowimg";
import Hero from "../component/hero";
import Service from "../component/service";
import Testimonial from "../component/testimonial";
import Platform from "../component/platform";
import Footer from "../component/footer";

export default function Page() {
    return (
        <main className="bg-herobg">
            <Header />
            <div className="flex items-center justify-between px-24 py-16">
                <div className="flex flex-col gap-6 w-2/4">
                    <h3 className=" font-medium text-main text-5xl">Discover Solana: <br />Learn, <a className="text-primarytext" href="">Earn</a> and Thrive <br /> in the Web3 Economy</h3>
                    <p className="w-94 font-semibold text-sm">Lorem ipsum dolor sit amet consectetur. Vel blandit tempor id nunc et auctor tellus eu nisi. Eu sem tellus magna vulputate. Neque etiam sit molestie aenean placerat ornare quis. Urna duis morbi sit pretium et.</p>
                    <div className="bg-main px-8 py-2 rounded-md w-5/12">
                        <a className='flex items-center text-center' href="">
                            <p className='px-5 font-normal text-center xl:text-base sm:text-sm text-white'><a href="./signup">Let&apos;s Earn</a></p>
                            <Arrowimg />
                        </a>
                    </div>
                </div>
                <div>
                    <Hero />
                </div>
            </div>
            <Service />
            <Testimonial />
            {/* <question/> */}
            <Platform />
            <div className="my-20">
                <Footer />
            </div>
        </main>
    )
}
