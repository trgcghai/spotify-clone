'use client'
import { CheckCircleFilled } from '@ant-design/icons';
import tempImg from '../../public/reveal.jpg'
import Image from "next/image";
import { faBackwardStep, faComputer, faForwardStep, faListOl, faMicrophone, faPause, faPlay, faRotateLeft, faShuffle, faUpRightAndDownLeftFromCenter, faVolumeHigh, faVolumeLow, faVolumeMute, faVolumeOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faClone } from '@fortawesome/free-regular-svg-icons';
import { ConfigProvider, Progress, Slider, Space } from 'antd';
import { useContext, useEffect, useState } from 'react';
import style from '../style.module.css'
import { VisibleContext } from '../_context/Context';
import { useRouter } from 'next/navigation';

export default function PlayMusicBar() {
    const { visible, setVisible } = useContext(VisibleContext)
    const [iconActive, setIconActive] = useState({
        play: visible.nowPlaying,
        lyrics: false,
        queue: visible.queue,
        devices: visible.devices,
        shuffle: false,
        replay: false
    })
    const [volume, setVolume] = useState(100)
    const [mute, setMute] = useState(false)
    const [playing, setPlaying] = useState(true)
    const router = useRouter()

    useEffect(() => {
        setIconActive({ ...iconActive, play: visible.nowPlaying, queue: visible.queue, devices: visible.devices })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible])

    return (
        <>
            <div className="h-20  flex justify-between items-center">
                <div className="flex items-center gap-2 px-2">
                    <Image src={tempImg} width={50} height={50} className="rounded-md" alt="" />
                    <div>
                        <div className="text-white text-sm">Song name</div>
                        <div className="text-gray-500 text-sm">Author name</div>
                    </div>
                    <div className='ml-4'>
                        <CheckCircleFilled style={{ color: 'rgb(34,197,94)' }}></CheckCircleFilled>
                    </div>
                </div>

                <div className='ml-40'>
                    <div className='flex items-center justify-center gap-6 mb-2'>
                        <div className={`${iconActive.shuffle ? style.dotBelow : ''}`}>
                            <FontAwesomeIcon
                                style={{ color: iconActive.shuffle ? 'rgb(34,197,94)' : 'rgb(107,114,128)' }}
                                icon={faShuffle} className='text-xl cursor-pointer'
                                onClick={() => setIconActive({ ...iconActive, shuffle: !iconActive.shuffle })}
                            />
                        </div>
                        <div className=''>
                            <FontAwesomeIcon
                                style={{ color: 'rgb(107,114,128)' }}
                                icon={faBackwardStep}
                                className='text-xl cursor-pointer'
                            />
                        </div>
                        <div className='h-10 aspect-square rounded-full flex items-center justify-center bg-white' onClick={() => setPlaying(!playing)}>
                            {playing ?
                                <FontAwesomeIcon icon={faPause} className='text-xl cursor-pointer' />
                                :
                                <FontAwesomeIcon icon={faPlay} className='text-xl cursor-pointer' />
                            }
                        </div>
                        <div className=''>
                            <FontAwesomeIcon
                                style={{ color: 'rgb(107,114,128)' }}
                                icon={faForwardStep} className='text-xl cursor-pointer'
                            />
                        </div>
                        <div className={`${iconActive.replay ? style.dotBelow : ''}`}>
                            <FontAwesomeIcon
                                style={{ color: iconActive.replay ? 'rgb(34,197,94)' : 'rgb(107,114,128)' }}
                                icon={faRotateLeft} className='text-xl cursor-pointer'
                                onClick={() => setIconActive({ ...iconActive, replay: !iconActive.replay })}
                            />
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-2' >
                        <div className="text-gray-500" style={{ fontSize: '12px' }}>0:00</div>
                        <ConfigProvider theme={{
                            components: {
                                Progress: {
                                    defaultColor: '#fff',
                                    remainingColor: '#666666',
                                    lineBorderRadius: 100
                                }
                            }
                        }}>
                            <Progress showInfo={false} type='line' size={{ height: '5px', width: '600px' }} style={{ marginTop: '-5px' }}></Progress>
                        </ConfigProvider>
                        <div className="text-gray-500" style={{ fontSize: '12px' }}>3:00</div>
                    </div>
                </div>

                <div className='flex items-center gap-4 px-2'>
                    <div className={`${iconActive.play ? style.dotBelow : ''}`}>
                        <FontAwesomeIcon
                            onClick={() => {
                                setIconActive({ ...iconActive, play: !iconActive.play, queue: false, devices: false })
                                setVisible({ ...visible, nowPlaying: !visible.nowPlaying, queue: false, devices: false })
                            }}
                            style={{ color: iconActive.play ? 'rgb(34,197,94)' : 'rgb(107,114,128)' }}
                            height={18}
                            icon={faCirclePlay}
                            className='cursor-pointer'
                        />
                    </div>
                    <div className={`${iconActive.lyrics ? style.dotBelow : ''}`}>
                        <FontAwesomeIcon
                            onClick={() => {
                                setIconActive({ ...iconActive, lyrics: !iconActive.lyrics })
                            }}
                            style={{ color: iconActive.lyrics ? 'rgb(34,197,94)' : 'rgb(107,114,128)' }}
                            height={18}
                            icon={faMicrophone}
                            className='cursor-pointer'
                        />
                    </div>
                    <div className={`${iconActive.queue ? style.dotBelow : ''}`}>
                        <FontAwesomeIcon
                            onClick={() => {
                                setIconActive({ ...iconActive, queue: !iconActive.queue, play: false, devices: false })
                                setVisible({ ...visible, queue: !visible.queue, nowPlaying: false, devices: false })
                            }}
                            style={{ color: iconActive.queue ? 'rgb(34,197,94)' : 'rgb(107,114,128)' }}
                            height={18}
                            icon={faListOl}
                            className='cursor-pointer'
                        />
                    </div>
                    <div className={`${iconActive.devices ? style.dotBelow : ''}`}>
                        <FontAwesomeIcon
                            onClick={() => {
                                setIconActive({ ...iconActive, devices: !iconActive.devices, play: false, queue: false })
                                setVisible({ ...visible, devices: !visible.devices, nowPlaying: false, queue: false })
                            }}
                            style={{ color: iconActive.devices ? 'rgb(34,197,94)' : 'rgb(107,114,128)' }}
                            height={18}
                            icon={faComputer}
                            className='cursor-pointer'
                        />
                    </div>
                    <div className='flex items-center gap-2'>
                        <div onClick={() => setMute(!mute)}>
                            {
                                mute ? <FontAwesomeIcon style={{ color: 'rgb(107,114,128)' }} height={18} icon={faVolumeMute} className='cursor-pointer' /> :
                                    volume < 50 ?
                                        (volume == 0 ? <FontAwesomeIcon style={{ color: 'rgb(107,114,128)' }} height={18} icon={faVolumeMute} className='cursor-pointer' />
                                            :
                                            <FontAwesomeIcon style={{ color: 'rgb(107,114,128)' }} height={18} icon={faVolumeLow} className='cursor-pointer' />)
                                        :
                                        <FontAwesomeIcon style={{ color: 'rgb(107,114,128)' }} height={18} icon={faVolumeHigh} className='cursor-pointer' />
                            }
                        </div>
                        <ConfigProvider
                            theme={{
                                components: {
                                    Slider: {
                                        handleLineWidth: 1,
                                        handleLineWidthHover: 1,
                                        handleSize: 0,
                                        handleSizeHover: 10,
                                        handleActiveColor: 'rgb(107,114,128)',
                                        handleColor: 'rgb(107,114,128)',
                                        railBg: 'rgb(107,114,128)',
                                        railHoverBg: 'rgb(107,114,128)',
                                        trackBg: 'rgb(255,255,255)',
                                        trackHoverBg: 'rgb(34,197,94)'
                                    },
                                },
                            }}
                        >
                            <Slider defaultValue={volume} onChange={(e) => setVolume(e)} style={{ width: '100px' }}></Slider>
                        </ConfigProvider>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            style={{ color: iconActive.pip ? 'rgb(34,197,94)' : 'rgb(107,114,128)' }}
                            height={18}
                            icon={faClone}
                            className='cursor-pointer'
                        />
                    </div>
                    <div>
                        <FontAwesomeIcon
                            style={{ color: iconActive.fullscreen ? 'rgb(34,197,94)' : 'rgb(107,114,128)' }}
                            height={16}
                            icon={faUpRightAndDownLeftFromCenter}
                            className='cursor-pointer'
                        />
                    </div>
                </div>
            </div >
        </>
    )
}