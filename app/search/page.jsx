import Image from "next/image";
import tempImg from '../../public/reveal.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
    const randomColor = () => {
        const string = 'abcdef0123456789'
        let res = ''
        for (let i = 0; i < 6; i++) {
            res += string[Math.floor(Math.random() * string.length)]
        }
        return '#' + res
    }
    const createArray = (n) => {
        let arr = []
        for (let i = 0; i < n; i++) {
            arr.push(i)
        }
        return arr
    }
    return (
        <div>
            <div className="text-xl font-bold text-white">Recent searches</div>
            <div className="grid grid-cols-6 gap-4 mt-4">
                {createArray(6).map((item, index) => {
                    return (
                        <div className="relative" key={index}>
                            <Image src={tempImg} height={100} width={100} className="w-full rounded-lg" alt=""></Image>
                            <FontAwesomeIcon icon={faXmark} style={{ color: 'white' }} className="absolute top-0 right-0 cursor-pointer rounded-full bg-lightDarkCoal opacity-60 p-1" />
                            <div className="w-full text-ellipsis whitespace-nowrap overflow-hidden mt-2 text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, libero cumque?
                            </div>
                            <div className="mt-1 text-gray-500 text-sm">Lorem ipsum dolor sit amet</div>
                        </div>
                    )
                })}
            </div>
            <div className="text-xl font-bold text-white mt-8">Browse all</div>
            <div className="grid grid-cols-4 gap-4 mt-4">
                {createArray(63).map((item, index) => {
                    return (
                        <div className="col-span-1 p-4 rounded-lg relative overflow-hidden h-40" style={{ backgroundColor: randomColor() }} key={index}>
                            <span className="text-xl font-bold text-white">Music</span>
                            <Image
                                src={tempImg}
                                height={140} width={140}
                                style={{ rotate: '25deg', right: '-15px', bottom: '-15px' }}
                                className="absolute float-end rounded-md"
                                alt=""
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}