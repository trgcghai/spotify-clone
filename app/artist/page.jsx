'use client'
import { UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import { faCircleCheck, faEllipsis, faHeart, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ConfigProvider } from "antd";
import ListSong from "../_components/ListSongs";
import Link from "next/link";
import Image from "next/image";
import tempImg from '../../public/reveal.jpg'
import { useContext } from "react";
import { VisibleContext } from "../_context/Context";
import NowPlayingView from "../_components/SideBar/NowPlaying";
import Queue from "../_components/SideBar/Queue";
import Devices from "../_components/SideBar/Devices";
import Header from "../_components/Header";
import style from '../style.module.css'
import Footer from "../_components/Footer";

export default function Playlist() {
    const { visible } = useContext(VisibleContext)
    const { devices, nowPlaying, queue } = visible
    return (
        <>
            <div className="col-start-7 bg-darkCoal rounded-md" style={{ height: '852px', gridColumnEnd: (devices | nowPlaying | queue) ? 20 : 25 }}>
                <div className="h-full relative p-4">
                    <div className="absolute top-0 right-0 left-0 p-4">
                        <Header></Header>
                    </div>
                    <div className={`h-full mt-28 overflow-y-scroll ${style.scrollbar}`}>
                        <div className="flex items-end gap-6 ">
                            <div>
                                <div className="text-sm text-white mb-3 flex items-center gap-1">
                                    <FontAwesomeIcon icon={faCircleCheck} className="text-blue-400 text-2xl" />
                                    Verified Artist
                                </div>
                                <div className="text-8xl text-white font-bold mb-3">Artist Name</div>
                                <div>
                                    <span className="text-white text-sm">7,626,806 monthly listeners</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-start items-center gap-6">
                                <div className={`h-14 mr-2 aspect-square rounded-full bg-green-500 flex items-center justify-center`}>
                                    <FontAwesomeIcon icon={faPlay} className='text-2xl ml-1 cursor-pointer' />
                                </div>
                                <ConfigProvider theme={{
                                    components: {
                                        Button: {
                                            textHoverBg: 'none',
                                            defaultHoverBg: 'transparent',
                                            defaultHoverColor: 'none',
                                            defaultHoverBorderColor: 'none'
                                        }
                                    }
                                }}>
                                    <Button type="default" className="bg-transparent border-gray-500 rounded-full text-white font-bold outline-none hover:scale-105">Following</Button>
                                    <Button type="default" className="bg-transparent border-none text-white font-bold outline-none hover:scale-110">
                                        <FontAwesomeIcon icon={faEllipsis} style={{ fontWeight: "lighter" }} className="text-2xl" />
                                    </Button>
                                </ConfigProvider>
                            </div>
                            <div className="text-xl font-bold text-white mt-8">Popular</div>
                        </div>
                        <div className="mt-8">
                            <ListSong showHeader={false} limit={5}></ListSong>
                        </div>
                        <span className="mt-4 ml-4 text-sm text-gray-500 font-bold cursor-pointer hover:underline">See more</span>
                        <div className="flex items-end justify-between">
                            <div className="mt-8 w-max text-xl font-bold text-white cursor-pointer hover:underline">Discography</div>
                            <div className="mt-4 ml-4 text-sm text-gray-500 font-bold cursor-pointer hover:underline">See more</div>
                        </div>
                        <div className="flex items-center gap-3 mt-4">
                            <Link href={'/'} className="px-3 text-sm py-1 rounded-full text-black bg-white">Popular releases</Link>
                            <Link href={'/'} className="bg-lightDarkCoal px-3 text-sm py-1 rounded-full text-white">Albums</Link>
                            <Link href={'/'} className="bg-lightDarkCoal px-3 text-sm py-1 rounded-full text-white">Singles and EPs</Link>
                        </div>
                        <div className="mt-4 grid grid-cols-7 gap-6">
                            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                                return (
                                    <div className="col-span-1" key={index}>
                                        <Image src={tempImg} alt="" height={100} width={100} className="w-full rounded-lg" />
                                        <div className="capitalize text-white mt-2">Album name</div>
                                        <div className="capitalize text-gray-500 mt-2 text-sm">Lorem ipsum dolor, sit amet consectetur.</div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mt-4 flex items-end justify-between">
                            <div className="mt-8 w-max text-xl font-bold text-white cursor-pointer hover:underline">Featuring Artist Name</div>
                        </div>
                        <div className="mt-4 grid grid-cols-7 gap-6">
                            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                                return (
                                    <div className="col-span-1" key={index}>
                                        <Image src={tempImg} alt="" height={100} width={100} className="w-full rounded-lg" />
                                        <div className="capitalize text-white mt-2">Song name</div>
                                        <div className="capitalize text-gray-500 mt-2 text-sm">Lorem ipsum dolor, sit amet consectetur.</div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex items-end justify-between mt-4">
                            <div className="mt-8 w-max text-xl font-bold text-white cursor-pointer hover:underline">On Tour</div>
                            <div className="mt-4 ml-4 text-sm text-gray-500 font-bold cursor-pointer hover:underline">View all upcoming concerts (5)</div>
                        </div>
                        <div className="mt-4 grid grid-cols-3 grid-rows-2 gap-6">
                            {[0, 1, 2, 3, 4].map((item, index) => {
                                return (
                                    <div key={index} className="flex items-center gap-4 hover:bg-lightDarkCoal rounded-md cursor-pointer">
                                        <div className="w-1/5 p-2">
                                            <div className="h-full aspect-square rounded-md flex flex-col justify-center" style={{ backgroundColor: '#404040' }}>
                                                <div className="text-md text-white font-bold text-center">Wed</div>
                                                <div className="text-2xl text-white font-bold text-center">26</div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-white text-md font-bold">Tour name</div>
                                            <div className="text-gray-500 text-sm">Artists Name</div>
                                            <div className="text-gray-500 text-sm">Time & place</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div >
                        <div className="flex items-end justify-between mt-4">
                            <div className="mt-8 w-max text-xl font-bold text-white cursor-pointer hover:underline">Fans also like</div>
                            <div className="mt-4 ml-4 text-sm text-gray-500 font-bold cursor-pointer hover:underline">Show all</div>
                        </div>
                        <div className="mt-4 grid grid-cols-7 gap-6">
                            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                                return (
                                    <div className="col-span-1" key={index}>
                                        <Image src={tempImg} alt="" height={100} width={100} className="w-full rounded-full" />
                                        <div className="capitalize text-white mt-2">Artist name</div>
                                        <div className="capitalize text-gray-500 mt-2 text-sm">Artist</div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex items-end justify-between mt-4">
                            <div className="mt-8 w-max text-xl font-bold text-white cursor-pointer hover:underline">Appears On</div>
                        </div>
                        <div className="mt-4 grid grid-cols-7 gap-6">
                            <div className="col-span-1">
                                <Image src={tempImg} alt="" height={100} width={100} className="w-full rounded-lg" />
                                <div className="capitalize text-white mt-2">Playlist name</div>
                                <div className="capitalize text-gray-500 mt-2 text-sm">Lorem ipsum dolor sit amet consectetur</div>
                            </div>
                        </div>
                        <div className="flex items-end justify-between mt-4">
                            <div className="mt-8 w-max text-xl font-bold text-white cursor-pointer hover:underline">Artist Playlist</div>
                        </div>
                        <div className="mt-4 grid grid-cols-7 gap-6">
                            {[1, 2, 3, 4].map((item, index) => {
                                return (
                                    <div className="col-span-1" key={index}>
                                        <Image src={tempImg} alt="" height={100} width={100} className="w-full rounded-lg" />
                                        <div className="capitalize text-white mt-2">Playlist name</div>
                                        <div className="capitalize text-gray-500 mt-2 text-sm">Lorem ipsum dolor sit amet consectetur</div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex items-end justify-between mt-4">
                            <div className="mt-8 w-max text-xl font-bold text-white cursor-pointer hover:underline">Discovered on</div>
                            <div className="mt-4 ml-4 text-sm text-gray-500 font-bold cursor-pointer hover:underline">Show all</div>
                        </div>
                        <div className="mt-4 grid grid-cols-7 gap-6">
                            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                                return (
                                    <div className="col-span-1" key={index}>
                                        <Image src={tempImg} alt="" height={100} width={100} className="w-full rounded-lg" />
                                        <div className="capitalize text-white mt-2">Playlist name</div>
                                        <div className="capitalize text-gray-500 mt-2 text-sm">Lorem ipsum dolor sit amet consectetur</div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex gap-4 items-start mt-8">
                            <div>
                                <div className="text-xl font-bold text-white ">About</div>
                                <div className="relative">
                                    <Image src={tempImg} alt="" height={500} width={880} className="mt-4 h-full aspect-video rounded-xl opacity-70" />
                                    <div className="absolute bottom-10 left-10">
                                        <div className="font-bold text-white text-md mb-2">7,626,806 Monthly Listeners</div>
                                        <div className="text-white text-sm w-4/5 text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem asperiores deserunt ea repellat eveniet, earum obcaecati recusandae ducimus deleniti consequatur ullam vero consectetur numquam expedita dolorum, perferendis saepe veritatis atque.</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="text-xl font-bold text-white ">Merch</div>
                                <div className="w-full mt-4">
                                    {[0, 1, 2].map((item, index) => {
                                        return (
                                            <div key={index} className="flex items-center p-2 gap-4 hover:bg-lightDarkCoal rounded-md cursor-pointer">
                                                <div className="w-1/6">
                                                    <Image src={tempImg} height={100} width={100} className="h-full w-full rounded-lg" alt=""></Image>
                                                </div>
                                                <div>
                                                    <div className="text-white text-md font-bold">Merch name</div>
                                                    <div className="text-gray-500 text-sm">Lorem ipsum dolor, sit amet consectetur</div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
            {nowPlaying && <NowPlayingView></NowPlayingView>}
            {queue && <Queue></Queue>}
            {devices && <Devices></Devices>}
        </>
    )
}