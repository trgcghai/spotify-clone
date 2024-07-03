import { VisibleContext } from "@/app/_context/Context"
import { faEllipsis, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import style from '../../style.module.css'
import tempImg from '../../../public/reveal.jpg'
import Image from "next/image"

export default function Queue() {
    const { visible, setVisible } = useContext(VisibleContext)
    return (
        <>
            <div className="bg-darkCoal p-2 rounded-lg relative" style={{ height: '852px', gridColumnStart: 20, gridColumnEnd: 25 }}>
                <div className="absolute top-0 right-0 left-0 h-10 bg-darkCoal rounded-t-lg flex items-center justify-between mt-2 p-4">
                    <span className="text-white font-bold text-md">Queue</span>
                    <div className="flex items-center gap-4 p-2">
                        <FontAwesomeIcon icon={faX} style={{ fontWeight: "lighter" }} onClick={() => {
                            setVisible({ ...visible, queue: false })
                        }} className="text-gray-500 hover:text-white text-lg cursor-pointer" />
                    </div>
                </div>
                <div className={`h-full mt-10 overflow-y-scroll ${style.scrollbar}`}>
                    <div className="text-white font-bold text-md mt-5 px-2">Now playing</div>
                    <div className="hover:bg-lightDarkCoal rounded-lg cursor-pointer mt-2 p-2">
                        <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <div className="w-1/4">
                                    <Image src={tempImg} height={100} width={100} className="h-full w-full rounded-md" alt=""></Image>
                                </div>
                                <div>
                                    <div className={`text-green-500 text-md`}>Song Name</div>
                                    <div className="text-gray-500 text-sm">Author Name</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-white font-bold text-md mt-10 px-2">Next from: Playlist Name</div>
                    {[0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10].map((item, index) => {
                        return (
                            <div key={index} className="hover:bg-lightDarkCoal rounded-lg cursor-pointer mt-2 p-2">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1/4">
                                            <Image src={tempImg} height={100} width={100} className="h-full w-full rounded-md" alt=""></Image>
                                        </div>
                                        <div>
                                            <div className={`text-white text-md`}>Song Name</div>
                                            <div className="text-gray-500 text-sm">Author Name</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}