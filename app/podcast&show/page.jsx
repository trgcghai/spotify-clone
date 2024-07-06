'use client'
import { CheckCircleFilled, PlusCircleOutlined, UserOutlined } from "@ant-design/icons";
import { faArrowUpFromBracket, faChevronRight, faCircle, faEllipsis, faHeart, faPlay, faShareFromSquare, faStar, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ConfigProvider, Divider, List } from "antd";
import style from '../style.module.css'
import tempImg from '../../public/reveal.jpg'
import Image from "next/image";
import Item from "antd/es/list/Item";

export default function PodcastShow() {
    return (
        <>
            <div className="flex items-end gap-6">
                <div className="h-56 aspect-square rounded-lg bg-gradient-to-br from-indigo-600 to-white flex items-center justify-center">
                    <FontAwesomeIcon icon={faHeart} className="text-7xl text-white" />
                </div>
                <div>
                    <div className="text-sm text-white mb-3">Podcast</div>
                    <div className="text-8xl text-white font-bold mb-3">Podcast Name</div>
                    <div>
                        <span className="text-white text-lg font-bold">Epdisode name</span>
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <div className="flex justify-start items-center gap-4">
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
            </div>
            <div className="mt-12">
                <div className="flex items-start gap-10">
                    <div className="w-2/3 ">
                        <div className={`${style.functionContainer} p-2 mb-4 rounded-md`} style={{ backgroundColor: '#232323' }}>
                            <div className="text-gray-500 mb-2 text-sm">Up next</div>
                            <div className="text-white mb-1 hover:underline cursor-pointer">
                                <FontAwesomeIcon icon={faCircle} className="text-blue-500 mr-2 mb-1" style={{ fontSize: '8px' }} />
                                Recovering from Addiction (Advanced)
                            </div>
                            <div className="text-gray-500 mb-4 text-sm hover:underline cursor-pointer">Spotify English: Advanced</div>
                            <p className="text-gray-500 text-sm mb-4">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quis impedit reiciendis incidunt enim commodi quibusdam aperiam aspernatur! Maxime aspernatur molestiae recusandae nihil earum dolor necessitatibus, illo rerum officia dolore?
                            </p>
                            <div className="text-white text-sm mb-4">
                                Jun 26 - 9 min 54 sec
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex gap-8">
                                    <PlusCircleOutlined className="text-gray-500 hover:text-white text-2xl cursor-pointer"></PlusCircleOutlined>
                                    <div className={`${style.showFunction} hidden gap-8`}>
                                        <FontAwesomeIcon icon={faArrowUpFromBracket} style={{ fontWeight: "lighter" }} className="text-gray-500 hover:text-white text-2xl cursor-pointer" />
                                        <FontAwesomeIcon icon={faEllipsis} style={{ fontWeight: "lighter" }} className="text-gray-500 hover:text-white text-2xl cursor-pointer" />
                                    </div>
                                </div>
                                <div>
                                    <div className={`h-10 mr-2 aspect-square rounded-full bg-green-500 flex items-center justify-center`}>
                                        <FontAwesomeIcon icon={faPlay} className='text-lg ml-1 cursor-pointer' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="font-bold text-white text-2xl mb-4">All Episodes</div>
                        <Divider style={{ backgroundColor: '#232323', height: '2px', marginBottom: '0.5rem' }}></Divider>
                        <List>
                            {[0, 1, 2, 3, 4].map((item, index) => {
                                return (
                                    <>
                                        <Item key={index} style={{ display: 'block' }}>
                                            <div className={`${style.functionContainer} cursor-pointer p-2 flex gap-4 rounded-lg`} style={{ alignItems: 'start' }}>
                                                <div className="w-1/6 pl-2">
                                                    <Image src={tempImg} className="w-full aspect-square rounded-lg" height={100} width={100} alt="" />
                                                </div>
                                                <div className="w-5/6 pr-2">
                                                    <div className="text-white text-lg mb-1 hover:underline cursor-pointer">
                                                        <FontAwesomeIcon icon={faCircle} className="text-blue-500 mr-2 mb-1" style={{ fontSize: '8px' }} />
                                                        Recovering from Addiction (Advanced)
                                                    </div>
                                                    <div className="text-gray-500 mb-4 text-sm hover:underline cursor-pointer">Spotify English: Advanced</div>
                                                    <p className="text-gray-500 text-sm mb-4">
                                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quis impedit reiciendis incidunt enim commodi quibusdam aperiam aspernatur! Maxime aspernatur molestiae recusandae nihil earum
                                                    </p>
                                                    <div className="text-white text-sm mb-4 font-bold">
                                                        Jun 26 - 9 min 54 sec
                                                    </div>
                                                    <div className="flex items-center justify-between mb-2">
                                                        <div className="flex gap-8">
                                                            <PlusCircleOutlined className="text-gray-500 hover:text-white text-2xl cursor-pointer"></PlusCircleOutlined>
                                                            <div className={`${style.showFunction} hidden gap-8`}>
                                                                <FontAwesomeIcon icon={faArrowUpFromBracket} style={{ fontWeight: "lighter" }} className="text-gray-500 hover:text-white text-2xl cursor-pointer" />
                                                                <FontAwesomeIcon icon={faEllipsis} style={{ fontWeight: "lighter" }} className="text-gray-500 hover:text-white text-2xl cursor-pointer" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className={`h-10 mr-2 aspect-square rounded-full bg-white flex items-center justify-center`}>
                                                                <FontAwesomeIcon icon={faPlay} className='text-lg ml-1 cursor-pointer' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {index != 4 ? <Divider style={{ backgroundColor: '#232323', height: '2px', marginBottom: '0' }}></Divider> : <></>}
                                        </Item>
                                    </>
                                )
                            })}
                        </List>
                        <ConfigProvider theme={{
                            components: {
                                Button: {
                                    textHoverBg: '#fff',
                                    defaultHoverBg: 'rgb(55,65,81)',
                                    defaultHoverBorderColor: 'none',
                                    defaultHoverColor: 'white'
                                }
                            }
                        }}>
                            <Button className="text-white font-bold border-0 rounded-full outline-none" style={{ backgroundColor: '#232323' }}>
                                Load more episodes <FontAwesomeIcon icon={faChevronRight} />
                            </Button>
                        </ConfigProvider>
                    </div>

                    <div className="w-1/3 p-2">
                        <h1 className="font-bold text-white text-xl mb-4">About</h1>
                        <p className="text-gray-500 mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora magni nulla dolor distinctio odit</p>
                        <p className="text-gray-500 mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora magni nulla dolor distinctio odit</p>
                        <div className="flex gap-4">
                            <ConfigProvider theme={{
                                components: {
                                    Button: {
                                        textHoverBg: '#fff',
                                        defaultHoverBg: 'rgb(55,65,81)',
                                        defaultHoverBorderColor: 'none',
                                        defaultHoverColor: 'white'
                                    }
                                }
                            }}>
                                <Button className="text-white border-0 rounded-full outline-none" style={{ backgroundColor: '#232323' }}>
                                    <span className="font-bold">4.8</span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <span className="text-gray-500">(138)</span>
                                </Button>
                                <Button className="text-white font-bold border-0 rounded-full outline-none" style={{ backgroundColor: '#232323' }}>
                                    Education
                                </Button>
                            </ConfigProvider>
                        </div>
                    </div>
                </div>
                <div className="flex items-end justify-between">
                    <div className="mt-8 w-max text-xl font-bold text-white cursor-pointer hover:underline">More podcasts like this</div>
                    <div className="mt-8 w-max text-sm font-bold text-gray-500 cursor-pointer hover:underline">Show all</div>
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
            </div>
        </>
    )
}