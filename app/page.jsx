'use client'
import Image from "next/image";
import tempImg from '../public/reveal.jpg'
import Footer from "./_components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import style from './style.module.css'

export default function Home() {
	return (
		<div>
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
						<span className="text-2xl text-white capitalize font-bold cursor-pointer">Made for cong hai</span>
						<span className="text-sm text-gray-500 capitalize font-bold cursor-pointer">Show all</span>
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
				<div className="mt-8">
					<div className="flex items-center justify-between mb-4">
						<span className="text-2xl text-white capitalize font-bold cursor-pointer">Made for cong hai</span>
						<span className="text-sm text-gray-500 capitalize font-bold cursor-pointer">Show all</span>
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
				<div className="mt-8">
					<div className="flex items-center justify-between mb-4">
						<span className="text-2xl text-white capitalize font-bold cursor-pointer">Made for cong hai</span>
						<span className="text-sm text-gray-500 capitalize font-bold cursor-pointer">Show all</span>
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
			</div>
		</div>
	);
}
