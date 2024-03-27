import Dashsend from "./dashsend";
import Dashnotify from "./dashnotify";
import Dashprofilepic from "./dashprofilepic";
import Servimg from "./servimg";
import Dashsolana from "./dashsolana";
import Dashbnx from "./dashbnx";
import Dsolana from "./dsolana";
import Dpion from "./dpion";


export default function Drightbar() {
    return (
        <main>
            <nav className='flex gap-96 my-2 mx-4'>
                <div>
                    <h1 className=" text-xl text-main font-bold">Dashboard</h1>
                </div>
                <div className="flex gap-4 items-center">
                    <button className="bg-main flex items-center gap-2 px-5 py-2 rounded text-white text-sm"><Dashsend /> Invite Friends</button>
                    <Dashnotify />
                    <div className="flex items-center gap-5">
                        <div className="">
                            <Dashprofilepic />
                        </div>
                        <div className=" text-sm">
                            <p>Welcome, sunday</p>
                            <p>Silver 203 Rank</p>
                        </div>
                    </div>
                </div>
            </nav>
            <hr />

            <div className="px-6">
                <div className="flex justify-between my-14 bg-gray-200 rounded-xl p-6">
                    <div className="flex flex-col gap-6 w-96">
                        <h3 className=" text-main text-xl font-semibold">Welcome back, Time to start Earning</h3>
                        <p>The different version of Web have the read only, read-write and also read-write-own. Which of these web is the read-write-own?</p>
                        <button className="bg-main flex items-center w-40 gap-2 px-5 py-2 rounded text-white text-sm"><Dashsend /> Start Reading</button>
                    </div>
                    <div className=" w-60">
                        <Servimg />
                    </div>
                </div>
            </div>

            <div className="flex justify-between px-8">
                <div className="flex flex-col gap-8 bg-main w-3/6 p-4 rounded-xl text-white my-6-">
                    <h1 className="font-medium text-lg">NFT Marketplace and Library</h1>
                    <p className=" text-sm">The different version of Web have the read only, read-write and also read-write-own. Which of these web is the read-write-own?</p>
                    <button className="text-main flex items-center bg-white gap-2 px-5 py-2 w-44 rounded text-sm"><Dashsolana /> Start Reading</button>
                </div>

                <div className="flex flex-col gap-6">
                    <div>
                        <div className="flex items-center gap-6">
                            <div className="flex flex-col items-center bg-blue-200 gap-10 w-48 rounded-lg shadow-lg">
                                <div className="flex items-center gap-10">
                                    <div>
                                        <Dpion />
                                    </div>
                                    <p className=" font-bold">$ 0</p>
                                </div>
                                <div>12, 000 pions</div>
                            </div>
                            <div className=" flex flex-col items-center justify-between- gap-10 w-48 bg-purple-400 rounded-lg shadow-lg py-2">
                                <div className="flex items-center gap-10">
                                    <div> <Dsolana /></div>
                                    <p className=" font-bold">$ 0</p>
                                </div>
                                <div>12, 000 pions</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-300 flex flex-col gap-10 rounded-lg shadow-lg p-4  w-72-">
                        <div className="flex justify-between">
                            <div> <Dashbnx /></div>
                            <p className=" font-bold">$ 0</p>
                        </div>
                        <div>12, 000 pions</div>
                    </div>
                </div>

            </div>
        </main>
    )
}