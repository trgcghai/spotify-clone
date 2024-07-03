import { VisibleContext } from "@/app/_context/Context"
import { faArrowUpRightFromSquare, faCircleDown, faComputer, faSignal, faWifi, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import style from '../../style.module.css'

export default function Devices() {
    const { visible, setVisible } = useContext(VisibleContext)
    return (
        <>
            <div className="bg-darkCoal p-2 rounded-lg relative" style={{ height: '852px', gridColumnStart: 20, gridColumnEnd: 25 }}>
                <div className="absolute top-0 right-0 left-0 h-10 bg-darkCoal rounded-t-lg flex items-center justify-between mt-2 p-4">
                    <span className="text-white font-bold text-md">Connect to a device</span>
                    <div className="flex items-center gap-4 p-2">
                        <FontAwesomeIcon icon={faX} style={{ fontWeight: "lighter" }} onClick={() => {
                            setVisible({ ...visible, devices: false })
                        }} className="text-gray-500 hover:text-white text-lg cursor-pointer" />
                    </div>
                </div>
                <div className="mt-14 p-2">
                    <div className={`p-2 py-4 rounded-lg ${style.blurBgGradient}`}>
                        <div className="text-white">
                            <FontAwesomeIcon icon={faSignal} className="text-green-500 mr-2" />
                            <span className="font-bold text-2xl">Current device</span>
                        </div>
                        <div className="mt-2 text-white text-md">This web browser</div>
                    </div>
                    <div className="mt-6 text-white text-md font-bold px-2">
                        No others devices found
                    </div>
                    <div className="mt-6 px-2">
                        <div className="flex items-center gap-2 mb-8">
                            <div>
                                <FontAwesomeIcon icon={faWifi} className="text-gray-500 text-xl" />
                            </div>
                            <div>
                                <div className="text-white text-md mb-1">Check your wifi</div>
                                <div className="text-gray-500 text-sm">Connect the devices {"you're"} using to the same Wifi.</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mb-8">
                            <div>
                                <FontAwesomeIcon icon={faComputer} className="text-gray-500 text-xl" />
                            </div>
                            <div>
                                <div className="text-white text-md mb-1">Play from another device</div>
                                <div className="text-gray-500 text-sm">It will automacically appear here.</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div>
                                <FontAwesomeIcon icon={faCircleDown} className="text-gray-500 text-xl" />
                            </div>
                            <div>
                                <div className="text-white text-md mb-1">Switch to the Spotify app.</div>
                                <div className="text-gray-500 text-sm">The app can detect more devices.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 left-0 bg-darkCoal rounded-t-lg p-2">
                    <div className="px-2 py-4 w-full rounded-lg hover:bg-lightDarkCoal flex items-center justify-between cursor-pointer">
                        <span className="text-white text-md">{"Don't see your device ?"}</span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-gray-500 text-md" />
                    </div>
                    <div className="px-2 py-4 w-full rounded-lg hover:bg-lightDarkCoal flex items-center justify-between cursor-pointer">
                        <span className="text-white text-md">{"What can I connect to ?"}</span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-gray-500 text-md" />
                    </div>
                </div>
            </div>
        </>
    )
}