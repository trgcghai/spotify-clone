'use client'
import Image from "next/image";
import NotFoundLayout from "./_layout/NotFoundLayout";
import icon from '../public/icon.png'
import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {
    useEffect(() => {
        document.title = 'Page not found'
    }, [])

    return (
        <NotFoundLayout>
            <div>
                <div className="flex justify-center">
                    <Image src={icon} alt="" height={60} width={60} className="mb-10" />
                </div>
                <div className="text-white font-bold text-5xl mb-5 text-center">
                    Page not found
                </div>
                <div className="text-gray-500 text-md text-center mb-10">
                    We can’t seem to find the page you are looking for.
                </div>
                <div className="flex justify-center mb-5">
                    <Link href='/' className="inline-block py-4 px-8 rounded-full bg-white text-black font-bold text-center hover:scale-105">
                        Home
                    </Link>
                </div>
                <div className="flex justify-center">
                    <Link href='/' className="inline-block py-4 px-6 text-white font-bold text-center hover:underline">
                        Help
                    </Link>
                </div>
            </div>
        </NotFoundLayout>
    )
}