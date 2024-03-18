import Image from "next/image";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import styles from './styles.module.css';


import Servimg from "./servimg";

import Arrowblue from "./arrowblue";
import Arrowup from "./arrowup";



export default function Service() {
    return (
        <main className="bg-herobg px-16">
            <h2 className="text-main text-3xl w-80 font-semibold">Take a Glance at Our Features</h2>
            <div className="grid grid-cols-2 my-8 gap-10">
                <div className="bg-main flex text-white gap-20 w-5/6 px-6 py-6 rounded-3xl ">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="font-meduim text-xl">Learn & Earn</h3>
                            <p className=" w-48 my-2">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <button className="flex items-center gap-4"><Arrowup /> Learn more</button>
                    </div>
                    <Servimg />
                </div>
                <div className="flex text-white gap-20 w-5/6 px-6 py-6 rounded-3xl shadow-lg shadow-main">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="font-meduim text-xl text-main">Management</h3>
                            <p className=" w-48 my-2 text-black">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <button className="flex items-center gap-4 text-main"><Arrowblue /> Learn more</button>
                    </div>
                    <Servimg />
                </div>
                <div className="flex text-white gap-20 w-5/6 px-6 py-6 rounded-3xl shadow-lg shadow-main">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="font-meduim text-xl text-main">NFTs</h3>
                            <p className=" w-48 my-2 text-black">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <button className="flex items-center gap-4 text-main"><Arrowblue /> Learn more</button>
                    </div>
                    <Servimg />
                </div>
                <div className="bg-main flex text-white gap-20 w-5/6 px-6 py-6 rounded-3xl roun">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="font-meduim text-xl">Leaderboard</h3>
                            <p className=" w-48 my-2 ">Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <button className="flex items-center gap-4"><Arrowup /> Learn more</button>
                    </div>
                    <Servimg />
                </div>


            </div>
        </main>
    )
}
