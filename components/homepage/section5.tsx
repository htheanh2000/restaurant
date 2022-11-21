import Section from "../../layouts/section"
import Image from 'next/image'
import { useRouter } from "next/router"
import Link from "next/link"
import bg from '../../assets/image/section4.png'
import chef1 from '../../assets/image/chef/1.png'
import chef2 from '../../assets/image/chef/2.png'
import chef3 from '../../assets/image/chef/3.png'

const chefs = [
    {
        image: chef1,
        name: 'Betran Komar',
        position: 'Head chef'
    },
    {
        image: chef2,
        name: 'Betran Komar',
        position: 'Chef'
    },
    {
        image: chef3,
        name: 'Betran Komar',
        position: 'Chef'
    }
]

const Section4 = () => {
    return (
        <Section className='mb-20 '>
           <h1 className="mt-12 text-7xl text-center text-brown font-semibold mb-20">Our greatest chef</h1>
           <div className="flex justify-evenly">
            {
                chefs.map(chef => <div className="cursor-pointer">
                    <Image className="" src={chef.image} alt=''/>
                    <p className="mt-6 font-medium text-brown text-center text-3xl">{chef.name}</p>
                    <p className="mt-2  text-[#A08D76] text-center text-xl">{chef.position}</p>
                </div>)
            }
           </div>
           <div className="rounded-full bg-orange text-white px-20 py-4 mt-20 font-medium w-fit mx-auto cursor-pointer">View All</div>
        </Section>
    )
}

export default Section4