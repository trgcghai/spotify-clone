import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "antd";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="mt-24 mb-48">
            <div className="flex items-start justify-between">
                <div className="flex item-start gap-32">
                    <ul>
                        <li className="text-md my-2 font-bold capitalize text-white">Company</li>
                        <li className="text-md my-2 capitalize text-gray-500 cursor-pointer hover:text-gray-300 hover:underline">About</li>
                        <li className="text-md my-2 capitalize text-gray-500 cursor-pointer hover:text-gray-300 hover:underline">Jobs</li>
                        <li className="text-md my-2 capitalize text-gray-500 cursor-pointer hover:text-gray-300 hover:underline">For the Record</li>
                    </ul>
                    <ul>
                        <li className="text-md my-2 font-bold capitalize text-white">Communities</li>
                        <li className="text-md my-2 capitalize text-gray-500 cursor-pointer hover:text-gray-300 hover:underline">For Artists</li>
                        <li className="text-md my-2 capitalize text-gray-500 cursor-pointer hover:text-gray-300 hover:underline">Developers</li>
                        <li className="text-md my-2 capitalize text-gray-500 cursor-pointer hover:text-gray-300 hover:underline">Advertising</li>
                        <li className="text-md my-2 capitalize text-gray-500 cursor-pointer hover:text-gray-300 hover:underline">Investors</li>
                        <li className="text-md my-2 capitalize text-gray-500 cursor-pointer hover:text-gray-300 hover:underline">Vendors</li>
                    </ul>
                    <ul>
                        <li className="text-md my-2 font-bold capitalize text-white">Useful links</li>
                        <li className="text-md my-2 capitalize text-gray-500 cursor-pointer hover:text-gray-300 hover:underline">Support</li>
                        <li className="text-md my-2 capitalize text-gray-500 cursor-pointer hover:text-gray-300 hover:underline">Free Mobile App</li>
                    </ul>
                    <ul>
                        <li className="text-md my-2 font-bold capitalize text-white">Spotify Plans</li>
                        <li className="text-md my-2 capitalize text-gray-500 cursor-pointer hover:text-gray-300 hover:underline">Premium Individual</li>
                        <li className="text-md my-2 capitalize text-gray-500 cursor-pointer hover:text-gray-300 hover:underline">Premium Student</li>
                        <li className="text-md my-2 capitalize text-gray-500 cursor-pointer hover:text-gray-300 hover:underline">Spotify Free</li>
                    </ul>
                </div>

                <div className="flex items-start justify-between gap-4">
                    <Link href={'https://www.instagram.com/'} target="_blank">
                        <FontAwesomeIcon style={{ color: 'white', fontSize: '16px' }} className="p-3 cursor-pointer bg-lightDarkCoal rounded-full" icon={faInstagram} />
                    </Link>
                    <Link href={'https://x.com/'} target="_blank">
                        <FontAwesomeIcon style={{ color: 'white', fontSize: '16px' }} className="p-3 cursor-pointer bg-lightDarkCoal rounded-full" icon={faTwitter} />
                    </Link>
                    <Link href={'https://www.facebook.com/'} target="_blank">
                        <FontAwesomeIcon style={{ color: 'white', fontSize: '16px' }} className="p-3 cursor-pointer bg-lightDarkCoal rounded-full" icon={faFacebook} />
                    </Link>
                </div>
            </div>

            <Divider className="my-10 bg-zinc-700"></Divider>

            <div className="flex items-center justify-between">
                <div className="flex items-center justify-between gap-3">
                    {["Legal", "Safety & Privacy Center", "Privacy Policy", "Cookies", "About Ads", "Accessibility"].map((item, index) => {
                        return (
                            <span key={index} className="text-gray-400 text-sm cursor-pointer hover:text-gray-200">{item}</span>
                        );
                    })}
                </div>
                <div className="text-gray-400 text-sm">© 2024 Spotify AB</div>
            </div>
        </div>
    )
}