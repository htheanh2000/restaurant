import Section from "../../layouts/section"
import Image from 'next/image'
import { useRouter } from "next/router"
import Link from "next/link"
import bg from '../../assets/image/section4.png'

const Section4 = () => {
    return (
        <Section className='mb-20 bg-skin-40'>
            <div className="flex items-center justify-between">
                <Image className="py-20" src={bg} alt='' />
                <div>
                    <h1 className="font-medium text-brown text-7xl">Let's reserve</h1>
                    <h1 className="font-medium text-orange text-7xl">a table</h1>
                    <p className="max-w-xs mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                    <div className="rounded-full bg-orange text-white px-12 py-4 mt-12 font-medium w-fit">Reservation</div>
                </div>
            </div>
        </Section>
    )
}

export default Section4