import Section from "../../layouts/section"
import Image from 'next/image'
import IDish from '../../assets/image/dish.png'
const Section1 = () => {
    return (
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
            <Image className='max-w-[50%]' src={IDish} alt='dish' />
        </div>
    </Section>
    )
}

export default Section1