'use client'
import Link from "next/link"
import { ArrowRightOutlined, HomeFilled, MenuOutlined, PlusOutlined, SearchOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { usePathname } from "next/navigation"
import { Avatar, Button, List } from "antd"
import Image from "next/image"
import tempImg from '../../public/reveal.jpg'
import style from '../style.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SideNav() {
    const pathname = usePathname()
    const router = useRouter()
    const isActive = (link) => {
        return pathname == link
    }
    return (
        <div className={`col-start-1 col-end-7 max-h-screen`}>
            <div className="p-6 mb-2 bg-darkCoal rounded-md">
                <div className="mb-6">
                    <Link href={'/'} className={isActive('/') ? 'text-white' : 'text-gray-500'}>
                        <HomeFilled style={{ color: isActive('/') ? '#fff' : 'rgb(107,114,128)', fontSize: '24px', marginRight: '16px' }} />
                        <span className="font-bold hover:underline">Home</span>
                    </Link>
                </div>
                <div className="">
                    <Link href={'/search'} className={isActive('/search') ? 'text-white' : 'text-gray-500'}>
                        <SearchOutlined style={{ color: isActive('/search') ? '#fff' : 'rgb(107,114,128)', fontSize: '24px', marginRight: '16px' }} />
                        <span className="font-bold hover:underline">Search</span>
                    </Link>
                </div>
            </div>
            <div className="p-6 bg-darkCoal rounded-md">
                <div className="h-1/4">
                    <div className="flex justify-between items-center">
                        <div className='text-gray-500 cursor-pointer'>
                            <MenuOutlined style={{ color: 'rgb(107,114,128)', fontSize: '24px', marginRight: '16px' }} />
                            <span className="font-bold hover:underline">Your library</span>
                        </div>
                        <div>
                            <Button shape="circle" ghost={true} className="bg-darkCoal border-0" style={{ color: 'rgb(107,114,128)', fontSize: '18px' }}>
                                <PlusOutlined className="hover:text-white hover:bg-lightDarkCoal p-2 rounded-full"></PlusOutlined>
                            </Button>
                            <Button shape="circle" ghost={true} className="bg-darkCoal border-0" style={{ color: 'rgb(107,114,128)', fontSize: '18px' }}>
                                <ArrowRightOutlined className="hover:text-white hover:bg-lightDarkCoal p-2 rounded-full"></ArrowRightOutlined>
                            </Button>
                        </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <Button
                            type="primary"
                            onClick={() => router.push('/playlist')}
                            style={{ backgroundColor: '#1a1a1a', borderRadius: '18px', boxShadow: 'none', color: 'white' }}>
                            Playlists
                        </Button>
                        <Button
                            type="primary"
                            onClick={() => router.push('/artist')}
                            style={{ backgroundColor: '#1a1a1a', borderRadius: '18px', boxShadow: 'none', color: 'white' }}>
                            Artists
                        </Button>
                        <Button
                            type="primary"
                            onClick={() => router.push('/album')}
                            style={{ backgroundColor: '#1a1a1a', borderRadius: '18px', boxShadow: 'none', color: 'white' }}>
                            Albums
                        </Button>
                        <Button
                            type="primary"
                            onClick={() => router.push('/podcast&show')}
                            style={{ backgroundColor: '#1a1a1a', borderRadius: '18px', boxShadow: 'none', color: 'white' }}>
                            Podcasts & Shows
                        </Button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <Button shape="circle" ghost={true} className="bg-darkCoal border-0" style={{ color: 'rgb(107,114,128)', fontSize: '18px' }}>
                            <SearchOutlined className="hover:text-white hover:bg-lightDarkCoal p-2 rounded-full" style={{ marginLeft: '-0.5rem' }}></SearchOutlined>
                        </Button>
                        <Button shape="circle" ghost={true} className="bg-darkCoal border-0" style={{ color: 'rgb(107,114,128)', fontSize: '18px' }}>
                            <span style={{ fontSize: '14px' }}>Recents</span>
                            <UnorderedListOutlined style={{ fontSize: '18px' }} className="hover:text-white hover:bg-lightDarkCoal"></UnorderedListOutlined>
                        </Button>
                    </div>
                </div>
                <div className={`mt-4 w-full h-3/4  overflow-y-scroll ${style.scrollbar}`}>
                    <List itemLayout={`horizontal w-full`} style={{ height: '525px' }}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                            return (
                                <List.Item className="hover:bg-lightDarkCoal rounded-md cursor-pointer" style={{ display: 'block' }} key={index} onClick={() => { router.push('/playlist') }}>
                                    <div className="flex items-center justify-between gap-2 px-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1/5">
                                                <Image src={tempImg} height={100} width={100} className="h-full w-full rounded-lg" alt=""></Image>
                                            </div>
                                            <div>
                                                <div className={`${index == 0 ? 'text-green-500' : 'text-white'} text-lg`}>Liked Songs</div>
                                                <div className="text-gray-500">Playlist - 62 songs</div>
                                            </div>
                                        </div>
                                        {index == 0 ? <div>
                                            <FontAwesomeIcon icon={faVolumeHigh} style={{ color: 'rgb(34,197,94)' }} />
                                        </div> : <></>}
                                    </div>
                                </List.Item>
                            )
                        })}
                    </List>
                </div>
            </div>
        </div>
    )
}