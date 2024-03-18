import Image from 'next/image'
import Logo from "./logo";
import Instragram from "./instagram";
import Facebook from './facebook';
import Twitter from './twitter';
import Telegram from "./telegram";
import Youtube from "./youtube";



export default function Footer() {
    return (
        <main className='bg-herobg'>
            <hr />
            <div className='flex flex-col items-center text-center justify-around gap-8 my-10'>
                <div className='flex flex-col items-center text-center'>
                <Logo/>
                <p>&copy; Copyright 2024. All Rights Reserved.</p>
                </div>
                <div className='border border-b border-grey w-5/6 '></div>
                <div className='flex items-center gap-6 '>
                    <Facebook/>
                    <Telegram/>
                    <Instragram/>
                    <Twitter/>
                    <Youtube/>
                </div>
                <p className='text-main font-semibold'>Contact Us</p>
            </div>
        </main>
    )
}
