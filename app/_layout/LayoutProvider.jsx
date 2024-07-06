'use client'
import { useContext } from "react"
import { VisibleContext } from "../_context/Context"
import style from '../style.module.css'
import Header from "../_components/Header"
import Footer from "../_components/Footer"
import NowPlayingView from "../_components/SideBar/NowPlaying"
import Queue from "../_components/SideBar/Queue"
import Devices from "../_components/SideBar/Devices"

export default function LayoutProvider({ children }) {
	const { visible } = useContext(VisibleContext)
	const { devices, nowPlaying, queue } = visible
	return (
		<>
			<div className="col-start-7 bg-darkCoal rounded-md" style={{ height: '852px', gridColumnEnd: (devices | nowPlaying | queue) ? 20 : 25 }}>
				<div className='p-4 h-full relative'>
					<div className="absolute top-0 right-0 left-0 p-4">
						<Header></Header>
					</div>
					<div className={`h-full mt-28 overflow-y-scroll ${style.scrollbar}`}>
						{children}
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