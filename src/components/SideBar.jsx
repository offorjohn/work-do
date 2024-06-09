import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, CreditCardIcon, UserIcon } from '@heroicons/react/24/solid';

const SideBar = forwardRef(({ showNav }, ref) => {
    const location = useLocation();

    return (
        <div ref={ref} className="fixed w-56 h-full  shadow-sm">
            <div className="flex justify-center mt-6 mb-14">
                <img className="w-32 h-auto" src="images/logo.png" alt="company logo" />
            </div>
            <div className="flex flex-col">
                <Link to="/">
                    <div
                        className={`pl-2 py-1 mx-2 rounded text-center cursor-pointer mb-3 flex-center transition-colors ${location.pathname === "/account" ? "bg-orange-100 text-orange-500" : "text-black-600 hover:bg-green-400 hover:text-black-500 hover:rounded-lg"
                            }`}
                    >
                        <div className="mr-2">
                            <HomeIcon className="h-5 w-5" />
                        </div>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to="/projects">
                    <div
                        className={`pl-2 py-1 mx-2 rounded text-center cursor-pointer mb-3 flex-center transition-colors ${location.pathname === "/account" ? "bg-orange-100 text-orange-500" : "text-black-600 hover:bg-green-400 hover:text-black-500 hover:rounded-lg"
                            }`}
                    >
                        <div className="mr-2">
                            <UserIcon className="h-5 w-5" />
                        </div>
                        <p>Account</p>
                    </div>
                </Link>
                <Link to="#">
                    <div
                        className={`pl-2 py-1 mx-2 rounded text-center cursor-pointer mb-3 flex-center transition-colors ${location.pathname === "/account" ? "bg-orange-100 text-orange-500" : "text-black-600 hover:bg-green-400 hover:text-black-500 hover:rounded-lg"
                            }`}
                    >
                        <div className="mr-2">
                            <CreditCardIcon className="h-5 w-5" />
                        </div>
                        <p>Billing</p>
                    </div>
                </Link>
            </div>
        </div>
    );
});

SideBar.displayName = 'SideBar';
export default SideBar;
