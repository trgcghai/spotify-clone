'use client'
import { UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import { faHeart, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import ListSong from "../_components/ListSongs";
import { useContext } from "react";
import { VisibleContext } from "../_context/Context";

export default function Playlist() {
    return (
        <>
            <div className={`flex items-end gap-6`}>
                <div className="h-56 aspect-square rounded-lg bg-gradient-to-br from-indigo-600 to-white flex items-center justify-center">
                    <FontAwesomeIcon icon={faHeart} className="text-7xl text-white" />
                </div>
                <div>
                    <div className="text-sm text-white mb-3">Playlist</div>
                    <div className="text-8xl text-white font-bold mb-3">Liked Songs</div>
                    <div>
                        <UserOutlined
                            className="p-2 rounded-full"
                            style={{ fontSize: '18px', color: '#fff' }}
                        ></UserOutlined>
                        <span className="text-white font-bold text-sm">Username</span>
                        <span className="text-white text-sm"> - 65 songs</span>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <div className="flex justify-between">
                    <div className={`h-14 mr-2 aspect-square rounded-full bg-green-500 flex items-center justify-center`}>
                        <FontAwesomeIcon icon={faPlay} className='text-2xl ml-1 cursor-pointer' />
                    </div>
                    <Button shape="circle" ghost={true} className="bg-darkCoal border-0" style={{ color: 'rgb(107,114,128)', fontSize: '18px' }}>
                        <span style={{ fontSize: '14px' }}>List</span>
                        <UnorderedListOutlined style={{ fontSize: '18px' }} className="hover:text-white hover:bg-lightDarkCoal"></UnorderedListOutlined>
                    </Button>
                </div>
            </div>
            <div className="mt-8">
                <ListSong></ListSong>
            </div>
        </>
    )
}