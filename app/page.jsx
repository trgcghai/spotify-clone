'use client'
import Image from "next/image";
import tempImg from '../public/reveal.jpg'
import Footer from "./_components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faMusic, faPlay, faX } from "@fortawesome/free-solid-svg-icons";
import style from './style.module.css'
import Header from "./_components/Header";
import { CheckCircleFilled } from "@ant-design/icons";
import { Button, ConfigProvider } from "antd";
import { useState } from "react";

export default function Home() {
	const [isHovered, setHovered] = useState(false)
	return (
		<>
			<div className="col-start-7 bg-darkCoal rounded-md" style={{ height: '852px', gridColumnEnd: 19 }}>
				<div className='p-4 h-full relative'>
					<div className="absolute top-0 right-0 left-0 p-4">
						<Header></Header>
					</div>
					<div className={`h-full mt-28 overflow-y-scroll ${style.scrollbar}`}>
						<div className="flex justify-between gap-4 mt-8">
							{[0, 1, 2, 3].map((item, index) => {
								return (
									<div key={index} className={`flex items-center justify-between gap-4 w-1/4 bg-lightDarkCoal rounded-lg ${style.showIcon}`}>
										<div className="flex items-center gap-4">
											<div className="h-full aspect-square">
												<Image src={tempImg} height={50} width={50} className="h-full w-full rounded-s-lg" alt="" />
											</div>
											<div>
												<div className="font-bold text-sm text-white">Liked Songs</div>
											</div>
										</div>
										<div className={`${style.icon} h-4/5 mr-2 aspect-square rounded-full bg-green-500 flex items-center justify-center`}>
											<FontAwesomeIcon icon={faPlay} className='text-2xl ml-1 cursor-pointer' />
										</div>
									</div>
								)
							})}
						</div>

						<div>
							<div className="mt-12">
								<div className="flex items-center justify-between mb-4">
									<span className="text-2xl text-white capitalize font-bold cursor-pointer hover:underline">Made for cong hai</span>
									<span className="text-sm text-gray-500 capitalize font-bold cursor-pointer hover:underline">Show all</span>
								</div>
								<div className="grid grid-cols-6 gap-6">
									{[1, 2, 3, 4, 5, 6].map((item, index) => {
										return (
											<div className="col-span-1" key={index}>
												<Image src={tempImg} alt="" height={100} width={100} className="w-full rounded-lg" />
												<div className="capitalize text-white mt-2">Daily Mix 1</div>
												<div className="capitalize text-gray-500 mt-2 text-sm">Lorem ipsum dolor, sit amet consectetur.</div>
											</div>
										);
									})}
								</div>
							</div>
							<div className="mt-12">
								<div className="flex items-center justify-between mb-4">
									<span className="text-2xl text-white capitalize font-bold cursor-pointer hover:underline">Best of artists</span>
									<span className="text-sm text-gray-500 capitalize font-bold cursor-pointer hover:underline">Show all</span>
								</div>
								<div className="grid grid-cols-6 gap-6">
									{[1, 2, 3, 4, 5, 6].map((item, index) => {
										return (
											<div className="col-span-1" key={index}>
												<Image src={tempImg} alt="" height={100} width={100} className="w-full rounded-lg" />
												<div className="capitalize text-white mt-2">This is artists name</div>
												<div className="capitalize text-gray-500 mt-2 text-sm">Lorem ipsum dolor, sit amet consectetur.</div>
											</div>
										);
									})}
								</div>
							</div>
							<div className="mt-12">
								<div className="flex items-center justify-between mb-4">
									<span className="text-2xl text-white capitalize font-bold cursor-pointer hover:underline">Recently played</span>
									<span className="text-sm text-gray-500 capitalize font-bold cursor-pointer hover:underline">Show all</span>
								</div>
								<div className="grid grid-cols-6 gap-6">
									{[1, 2, 3, 4, 5, 6].map((item, index) => {
										return (
											<div className="col-span-1" key={index}>
												<Image src={tempImg} alt="" height={100} width={100} className="w-full rounded-lg" />
												<div className="capitalize text-white mt-2">Playlists</div>
												<div className="capitalize text-gray-500 mt-2 text-sm">Lorem ipsum dolor, sit amet consectetur.</div>
											</div>
										);
									})}
								</div>
							</div>
							<div className="mt-12">
								<div className="flex items-center justify-between mb-4">
									<span className="text-2xl text-white capitalize font-bold cursor-pointer hover:underline">Recommended Stations</span>
									<span className="text-sm text-gray-500 capitalize font-bold cursor-pointer hover:underline">Show all</span>
								</div>
								<div className="grid grid-cols-6 gap-6">
									{[1, 2, 3, 4, 5, 6].map((item, index) => {
										return (
											<div className="col-span-1" key={index}>
												<Image src={tempImg} alt="" height={100} width={100} className="w-full rounded-lg" />
												<div className="capitalize text-white mt-2">PLaylists</div>
												<div className="capitalize text-gray-500 mt-2 text-sm">Lorem ipsum dolor, sit amet consectetur.</div>
											</div>
										);
									})}
								</div>
							</div>
							<div className="mt-12">
								<div className="flex items-center justify-between mb-4">
									<span className="text-2xl text-white capitalize font-bold cursor-pointer hover:underline">Your favorite artists</span>
									<span className="text-sm text-gray-500 capitalize font-bold cursor-pointer hover:underline">Show all</span>
								</div>
								<div className="grid grid-cols-6 gap-6">
									{[1, 2, 3, 4, 5, 6].map((item, index) => {
										return (
											<div className="col-span-1" key={index}>
												<Image src={tempImg} alt="" height={100} width={100} className="w-full rounded-full" />
												<div className="capitalize text-white mt-2">PLaylists</div>
												<div className="capitalize text-gray-500 mt-2 text-sm">Lorem ipsum dolor, sit amet consectetur.</div>
											</div>
										);
									})}
								</div>
							</div>
							<div className="mt-12">
								<div className="flex items-center justify-between mb-4">
									<span className="text-2xl text-white capitalize font-bold cursor-pointer hover:underline">Recommended for today</span>
									<span className="text-sm text-gray-500 capitalize font-bold cursor-pointer hover:underline">Show all</span>
								</div>
								<div className="grid grid-cols-6 gap-6">
									{[1, 2, 3, 4, 5, 6].map((item, index) => {
										return (
											<div className="col-span-1" key={index}>
												<Image src={tempImg} alt="" height={100} width={100} className="w-full rounded-lg" />
												<div className="capitalize text-white mt-2">PLaylists</div>
												<div className="capitalize text-gray-500 mt-2 text-sm">Lorem ipsum dolor, sit amet consectetur.</div>
											</div>
										);
									})}
								</div>
							</div>
							<div className="mt-12">
								<div className="flex items-center justify-between mb-4">
									<span className="text-2xl text-white capitalize font-bold cursor-pointer hover:underline">Episodes for you</span>
									<span className="text-sm text-gray-500 capitalize font-bold cursor-pointer hover:underline">Show all</span>
								</div>
								<div className="grid grid-cols-6 gap-6">
									{[1, 2, 3, 4, 5, 6].map((item, index) => {
										return (
											<div className="col-span-1" key={index}>
												<Image src={tempImg} alt="" height={100} width={100} className="w-full rounded-lg" />
												<div className="capitalize text-white mt-2">PLaylists</div>
												<div className="capitalize text-gray-500 mt-2 text-sm">Lorem ipsum dolor, sit amet consectetur.</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
						<Footer></Footer>
					</div>
				</div>
			</div>

			<div className="block bg-darkCoal p-4 rounded-lg relative" style={{ height: '852px', gridColumnStart: 19, gridColumnEnd: 25 }}>
				<div className="absolute top-0 right-0 left-0 h-10 bg-darkCoal rounded-t-lg flex items-center justify-between mt-2 p-4">
					<span className="text-white font-bold text-md">Liked Songs</span>
					<div className="flex items-center gap-4 p-2">
						<FontAwesomeIcon icon={faEllipsis} style={{ fontWeight: "lighter" }} className="text-gray-500 hover:text-white text-xl cursor-pointer" />
						<FontAwesomeIcon icon={faX} style={{ fontWeight: "lighter" }} className="text-gray-500 hover:text-white text-lg cursor-pointer" />
					</div>
				</div>
				<div className={`h-full mt-10 overflow-y-scroll ${style.scrollbar}`}>
					<div className="w-full mb-4">
						<Image src={tempImg} alt="" height={100} width={100} className="w-full aspect-square rounded-lg"></Image>
					</div>
					<div className="flex items-center justify-between mb-6">
						<div>
							<div className="text-white font-bold text-2xl cursor-pointer hover:underline">Song Name</div>
							<div className="text-gray-500 font-bold text-md cursor-pointer hover:underline">Author Name</div>
						</div>
						<div>
							<CheckCircleFilled style={{ color: 'rgb(34,197,94)' }} className="text-2xl"></CheckCircleFilled>
						</div>
					</div>
					<div className="w-full rounded-lg mb-4" style={{ backgroundColor: '#242424' }}>
						<div className="relative">
							<Image src={tempImg} alt="" height={100} width={100} className="w-full aspect-video rounded-t-lg opacity-70"></Image>
							<span className="absolute top-0 left-0 text-white font-bold text-sm p-3">About the artist</span>
						</div>
						<div className="p-3">
							<div className="text-white font-bold text-md mb-3">Author name</div>
							<div className="flex justify-between items-center mb-3">
								<div className="text-gray-500 text-md">992,266 Monthly Listeners</div>
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
								</ConfigProvider>
							</div>
							<p className="text-gray-500 text-sm w-full text-wrap text-ellipsis">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla dolor magni assumenda asperiores corporis dolore iure illum quis quas molestiae modi at autem corrupti
							</p>
						</div>
					</div>
					<div className="w-full rounded-lg p-3 mb-4" style={{ backgroundColor: '#242424' }}>
						<div className="flex items-center justify-between mb-4">
							<div className="text-white font-bold text-md">On tour</div>
							<div className="text-gray-500 font-bold text-sm hover:underline hover:text-white hover:scale-110">Show all</div>
						</div>
						<div className="flex justify-between items-center mb-3">
							<div>
								<div className="text-white font-light text-md">Author Name</div>
								<div className="text-gray-500 text-md">Author roles</div>
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
							</ConfigProvider>
						</div>
					</div>
					<div className="w-full rounded-lg p-3 mb-4" style={{ backgroundColor: '#242424' }}>
						<div className="flex items-center justify-between mb-4">
							<div className="text-white font-bold text-md">Credits</div>
							<div className="text-gray-500 font-bold text-sm hover:underline hover:text-white hover:scale-110">Show all</div>
						</div>
						<div className="">
							<div className="flex items-center gap-2 hover:bg-lightDarkCoal rounded-md cursor-pointer">
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
							<div className="flex items-center gap-2 hover:bg-lightDarkCoal rounded-md cursor-pointer">
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
						</div>
					</div>
					<div className="w-full rounded-lg p-3 mb-10" style={{ backgroundColor: '#242424' }}>
						<div className="flex items-center justify-between mb-4">
							<div className="text-white font-bold text-md">Next in queue</div>
							<div className="text-gray-500 font-bold text-sm hover:underline hover:text-white hover:scale-110">Open queue</div>
						</div>
						<div className="">
							<div className="flex items-center gap-2 p-1 hover:bg-lightDarkCoal rounded-md cursor-pointer"
								onMouseEnter={() => setHovered(true)}
								onMouseLeave={() => setHovered(false)}
							>
								<div >
									{isHovered ?
										<FontAwesomeIcon icon={faPlay} className="text-white ml-1" />
										:
										<FontAwesomeIcon icon={faMusic} className="text-white" />
									}
								</div>
								<div className="w-1/5 p-2">
									<Image src={tempImg} alt="" height={100} width={100} className="w-full aspect-square rounded-lg"></Image>
								</div>
								<div>
									<div className="text-white text-md font-bold">Song name</div>
									<div className="text-gray-500 text-sm">Author Name</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
