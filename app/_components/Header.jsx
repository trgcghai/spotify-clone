'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BellOutlined, DownloadOutlined, LeftOutlined, RightOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Input, Popover } from "antd";
import { useRouter } from "next/navigation";

export default function Header() {
    const path = usePathname()
    const router = useRouter()

    return (
        <>
            <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                    <ConfigProvider theme={{
                        token: {
                            colorBgBase: '#1a1a1a'
                        }
                    }}>
                        <Popover placement="bottom" content={(<div className="text-white font-light text-md bg-lightDarkCoal">Go back</div>)}>
                            <Button
                                shape="circle"
                                ghost={true}
                                className="bg-darkCoal border-0"
                                style={{ color: "rgb(107,114,128)", fontSize: "18px" }}
                                onClick={() => router.back()}
                            >
                                <LeftOutlined
                                    className="bg-lightDarkCoal p-2 rounded-full text-white"
                                    style={{ marginLeft: "-0.5rem" }}
                                ></LeftOutlined>
                            </Button>
                        </Popover>
                        <Popover placement="bottom" content={(<div className="text-white font-light text-md bg-lightDarkCoal">Go forward</div>)}>
                            <Button
                                shape="circle"
                                ghost={true}
                                className="bg-darkCoal border-0"
                                style={{ color: "rgb(107,114,128)", fontSize: "18px" }}
                                onClick={() => router.forward()}
                            >
                                <RightOutlined
                                    className="bg-lightDarkCoal p-2 rounded-full text-white"
                                    style={{ marginLeft: "-0.5rem" }}
                                ></RightOutlined>
                            </Button>
                        </Popover>
                    </ConfigProvider>
                    {path == '/search' ?
                        <ConfigProvider theme={{
                            token: {
                                colorBorder: 'transparent'
                            },
                            components: {
                                Input: {
                                    colorTextPlaceholder: '#6B7575',
                                    paddingInline: 12,
                                    paddingBlock: 12,
                                    colorText: 'white',
                                    hoverBorderColor: '#6B7575',
                                    activeBorderColor: '#fff'
                                }
                            }
                        }}>
                            <Input
                                placeholder="What do you want to play ?"
                                style={{ width: '350px', backgroundColor: '#242424', outline: 'none' }}
                                className="rounded-full"
                                prefix={<SearchOutlined style={{ color: "#6B7575" }}></SearchOutlined>}
                            />
                        </ConfigProvider>
                        : <></>}
                </div>
                <div className="flex gap-2">
                    <Button
                        type="primary"
                        ghost={true}
                        className="bg-white border-0 font-bold rounded-full text-md"
                        style={{ backgroundColor: '#fff', color: "#000" }}
                    >
                        Explore Premium
                    </Button>
                    <Button
                        type="primary"
                        ghost={true}
                        className="border-0 font-bold rounded-full text-md"
                        style={{ backgroundColor: '#000', color: '#fff' }}
                    >
                        <DownloadOutlined
                            className="p-2 rounded-full "
                        ></DownloadOutlined>
                        Install App
                    </Button>
                    <ConfigProvider theme={{
                        token: {
                            colorBgBase: '#1A1A1A'
                        },
                        components: {
                            Dropdown: {
                                paddingBlock: 0,
                            }
                        }
                    }}>
                        <Popover placement="bottom" content={(<span className="text-white font-light text-md bg-lightDarkCoal">{"What's new"}</span>)}>
                            <Button
                                shape="circle"
                                ghost={true}
                                className="border-0 font-bold rounded-full text-md"
                                style={{ backgroundColor: '#000', color: '#fff' }}
                            >
                                <BellOutlined
                                    className="p-2 rounded-full"
                                    style={{ fontSize: '18px' }}
                                ></BellOutlined>
                            </Button>
                        </Popover>
                        <Popover placement="bottom" content={(<span className="text-white font-light text-md bg-lightDarkCoal">Username</span>)}>
                            <Button
                                shape="circle"
                                ghost={true}
                                className="border-0 font-bold rounded-full text-md"
                                style={{ backgroundColor: '#000', color: '#fff' }}
                            >
                                <UserOutlined
                                    className="p-2 rounded-full"
                                    style={{ fontSize: '18px' }}
                                ></UserOutlined>
                            </Button>
                        </Popover>
                    </ConfigProvider>

                </div>
            </div>
            {path == '/' ?
                <div className="flex items-center gap-3 mt-8">
                    <Link href={'/'} className={`bg-lightDarkCoal px-3 text-sm py-1 rounded-full ${path == '/' ? 'text-black bg-white' : ''}`}>All</Link>
                    <Link href={'/playlist'} className="bg-lightDarkCoal px-3 text-sm py-1 rounded-full text-white">Music</Link>
                    <Link href={'/podcast&show'} className="bg-lightDarkCoal px-3 text-sm py-1 rounded-full text-white">Podcast</Link>
                </div>
                :
                <></>
            }
        </>
    )
}