import Section from "../../layouts/section"
import Image from 'next/image'
import IDish2 from '../../assets/image/dish2.png'
const Section2 = () => {
    return (
        <Section className='bg-green-10'>
            <div className=' flex justify-between items-center'>
                <Image className='max-w-[50%]' src={IDish2} alt='dish' />
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
    )
}

export default Section2