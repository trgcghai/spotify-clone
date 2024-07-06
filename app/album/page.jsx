'use client'
import { CheckCircleFilled, UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import { faEllipsis, faHeart, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ConfigProvider } from "antd";
import ListSong from "../_components/ListSongs";

export default function Album() {
    return (
        <>
            <div className="flex items-end gap-6">
                <div className="h-56 aspect-square rounded-lg bg-gradient-to-br from-indigo-600 to-white flex items-center justify-center">
                    <FontAwesomeIcon icon={faHeart} className="text-7xl text-white" />
                </div>
                <div>
                    <div className="text-sm text-white mb-3">Compilation</div>
                    <div className="text-8xl text-white font-bold mb-3">Album Name</div>
                    <div>
                        <UserOutlined
                            className="p-2 rounded-full"
                            style={{ fontSize: '18px', color: '#fff' }}
                        ></UserOutlined>
                        <span className="text-white text-sm">
                            Various Artists -
                            2021 -
                            13 songs, 31 min 18 sec</span>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <div className="flex justify-between items-center">
                    <div className="flex justify-start items-center gap-4">
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
                            },
                        }}>
                            <CheckCircleFilled style={{ color: 'rgb(34,197,94)', fontSize: '32px' }}></CheckCircleFilled>
                            <Button type="default" className="bg-transparent border-none text-white font-bold outline-none hover:scale-110">
                                <FontAwesomeIcon icon={faEllipsis} style={{ fontWeight: "lighter" }} className="text-2xl" />
                            </Button>
                        </ConfigProvider>
                    </div>
                    <div>
                        <Button shape="circle" ghost={true} className="bg-darkCoal border-0 " style={{ color: 'rgb(107,114,128)', fontSize: '18px' }}>
                            <span style={{ fontSize: '14px' }} className="">List</span>
                            <UnorderedListOutlined style={{ fontSize: '18px' }} className=" hover:bg-lightDarkCoal"></UnorderedListOutlined>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <ListSong></ListSong>
            </div>
        </>
    )
}