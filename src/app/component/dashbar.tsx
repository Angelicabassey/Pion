import Logo from "./logo";
import Dashboardimg from "./dashboardimg";


export default function Dashbar() {
    return (
        <main>
            <div className="w-80">
                <div className="px-16">
                    <Logo />
                </div>
                <hr />
                <div className="flex flex-col my-10 gap-2  items-center-">
                    <div className="text-main bg-blue-200 text-center px-16 py-2">
                        <div className="flex gap-4">
                            <Dashboardimg />
                            <p>Dashboard</p>
                        </div>
                    </div>

                    <div className="text-center px-16 py-2 hover:bg-blue-200 hover:text-main ">
                        <div className="flex gap-4">
                            <Dashboardimg />
                            <p>Learn & Earn Briefs</p>
                        </div>
                    </div>

                    <div className="text-center px-16 py-2 hover:bg-blue-200 hover:text-main ">
                        <div className="flex gap-4">
                            <Dashboardimg />
                            <p>Dashboard</p>
                        </div>
                    </div>

                    <div className="text-center px-16 py-2 hover:bg-blue-200 hover:text-main ">
                        <div className="flex gap-4">
                            <Dashboardimg />
                            <p>NFTs</p>
                        </div>
                    </div>

                    <div className="text-center px-16 py-2 hover:bg-blue-200 hover:text-main ">
                        <div className="flex gap-4">
                            <Dashboardimg />
                            <p>Leaderboard</p>
                        </div>
                    </div>

                    <div className=" text-center px-16 py-2 hover:bg-blue-200 hover:text-main">
                        <div className="flex gap-4">
                            <Dashboardimg />
                            <p>Wallet</p>
                        </div>
                    </div>

                    <div className=" text-center px-16 py-2 hover:bg-blue-200 hover:text-main">
                        <div className="flex gap-4">
                            <Dashboardimg />
                            <p>Help & Support</p>
                        </div>
                    </div>
                </div>

                <div className="px-16- top-20 relative">
                <div className="text-center px-16 py-2 hover:bg-blue-200 hover:text-main ">
                        <div className="flex gap-4">
                            <Dashboardimg />
                            <p className="text-sm">Upgrade to Premium</p>
                        </div>
                    </div>

                    <div className="border border-grey-500 text-center px-16 py-2 hover:bg-blue-200 hover:text-main">
                        <div className="flex gap-4 ">
                            <Dashboardimg />
                            <p className=" text-red-500">Log out</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div>

            </div> */}

        </main>
    )
}
