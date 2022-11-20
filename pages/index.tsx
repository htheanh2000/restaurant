import React from 'react'
import type { NextPage } from 'next'
import Page from '../layouts/page'
import IDish from '../assets/image/dish.png'
import IDish2 from '../assets/image/dish2.png'
import Image from 'next/image'
import Section from '../layouts/section'
const HomePage: NextPage = () => {
    return (
        <Page>
            <Section >
                <div className='mt-8 flex justify-between items-center'>
                    <div className='pb-24'>
                        <div className='bg-orange-20 w-fit rounded-full center py-1 px-8'>
                            <span className='text-orange'>Restaurant</span>
                        </div>
                        <div className='mt-8'>
                            <span className='text-6xl leading-none font-bold text-brown'>Italian Cuisine</span>
                        </div>
                        <p className='mt-8 max-w-md text-brown text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.</p>
                        <div className='flex mt-8'>
                            <div className='w-fit rounded-full center py-3 px-8 bg-orange text-white font-medium mr-6 cursor-pointer'>Order now</div>
                            <div className='w-fit rounded-full center py-3 px-8 bg-green text-white font-medium cursor-pointer'>Reservation</div>
                        </div>
                    </div>
                    <Image src={IDish} alt='dish' />
                </div>
            </Section>
            <Section className='bg-green-10'>
                <div className=' flex justify-between items-center'>
                    <Image src={IDish2} alt='dish' />
                    <div className='pb-24'>
                        <div className='mt-8'>
                            <span className='text-6xl leading-none font-bold text-brown'>Welcome to <span className='text-orange'>delizioso</span></span>
                        </div>
                        <p className='mt-8 max-w-md text-brown text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <div className='flex mt-8'>
                            <div className='w-fit rounded-full center py-3 px-8 bg-orange text-white font-medium mr-6 cursor-pointer'>See our menu</div>
                        </div>
                    </div>
                </div>
            </Section>
        </Page>
    )
}

export default HomePage