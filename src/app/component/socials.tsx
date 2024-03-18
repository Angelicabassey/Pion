import Image from 'next/image'
import Google from "./google";
import Facebook from './facebook';
import Twitter from './twitter';



export default function Socials() {
    return (
        <div className="flex justify-center items-center gap-6">
            <Twitter/>
            <Google/>
            <Facebook/>
        </div>

    )
}
