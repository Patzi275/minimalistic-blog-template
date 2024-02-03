import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Avatar from './avatar'

function HeroSection() {
    return (
        <section>
            <div className="mx-auto mb-8 w-3/4 text-center">
                <h1 className="mb-4 text-4xl font-bold sm:text-6xl">The tech blog</h1>
                <p>The last industry new, technologies and resources</p>
            </div>
            <div className="flex flex-col gap-6 sm:relative sm:text-white">
                <Image
                    src="https://picsum.photos/700/600?random=1" width={300} height={200} alt="hero image"
                    className="max-h-[300px] min-w-full rounded-3xl object-cover object-center sm:max-h-[600px]"
                />
                <div className="sm:absolute sm:bottom-0 sm:m-8 sm:rounded-2xl sm:border sm:border-white/30 sm:p-6 sm:py-8 sm:backdrop-blur-2xl">
                    <div className="flex flex-col gap-1 sm:max-w-[80%] sm:gap-2">
                        <div className="font-bold sm:block">Most popular</div>
                        <Link href="post">
                            <h3 className="text-3xl font-bold sm:text-3xl">Lorem ipsum dolor sit amet consectetur.</h3>
                        </Link>
                        <Link href="post">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim illum quo architecto aspernatur, nisi necessitatibus tempora suscipit expedita ullam tenetur...</p>
                        </Link>
                        <div className="mt-2 flex items-center gap-1 font-bold sm:hidden">
                            <Avatar src="https://picsum.photos/300/200?random=1" alt="avatar" size={32} />
                            <p className="ml-2">FirsName Last</p>
                            •
                            <p>16 janv 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection