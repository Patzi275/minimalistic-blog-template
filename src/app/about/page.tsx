import Avatar from '@/components/avatar';
import React from 'react'
import { FaFacebook, FaGithub, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function About() {
    const iconSize = 32;

    return (
        <main className='mb-auto'>
            <h1 className="title-xl">About</h1>
            <div className='flex flex-col gap-12 sm:flex-row'>
                <div className='flex flex-col items-center gap-2 sm:flex-1 sm:gap-4'>
                    <Avatar
                        src='https://picsum.photos/300/200?random=1'
                        alt='avatar'
                        size={128}
                        className='sm:hidden'
                    />
                    <Avatar
                        src='https://picsum.photos/300/200?random=1'
                        alt='avatar'
                        size={200}
                        className='hidden sm:block'
                    />
                    <h2 className='text-2xl font-bold'>John Doe</h2>
                    <p className='text-center'>Web developer | Software engineer</p>
                    <div className='flex gap-4 opacity-80 sm:mt-4'>
                        <a href=""><MdEmail size={iconSize} /></a>
                        <a href=""><FaGithub size={iconSize} /></a>
                        <a href=""><FaFacebook size={iconSize} /></a>
                        <a href=""><FaYoutube size={iconSize} /></a>
                    </div>
                </div>
                <p className='text-center sm:flex-[2] sm:text-left'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quam odit quae,
                    sequi delectus a animi eum quis ipsum odio reprehenderit rerum velit vero.
                    Nisi ipsam obcaecati sunt quam labore iusto est exercitationem facere quasi
                    nobis sapiente, reprehenderit modi enim.
                </p>
            </div>
        </main>
    )
}

export default About;