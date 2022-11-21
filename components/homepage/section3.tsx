import Section from "../../layouts/section"
import Image from 'next/image'
import { useRouter } from "next/router"
import Link from "next/link"
import data from '../../mockdata/food.json'
import food1 from '../../assets/image/food/1.png'
import star from '../../assets/icon/star.svg'
import starOutline from '../../assets/icon/star-outline.svg'
const tabs = [
    {
        label: 'All catagory',
        value: '/'
    },
    {
        label: 'Dinner',
        value: "/#dinner"
    },
    {
        label: 'Lunch',
        value: '/#lunch'
    },
    {
        label: 'Dessert',
        value: '/#dessert'
    },
    {
        label: 'Drink',
        value: '/#drink'
    },
]

const stars = ['', '', '', '', '']

const Section2 = () => {
    const router = useRouter()

    return (
        <Section className='mb-20'>
            <h1 className='my-20 text-center text-7xl font-medium text-brown'>Our popular menu</h1>
            <div className='flex justify-between'>
                {
                    tabs.map(tab =>
                        <div key={tab.label}>
                            <Link href={tab.value}>
                                <div className={`text-base font-medium ${tab.value === router.asPath ? 'bg-brown text-white' : 'bg-gray'}  px-12 py-4 rounded-full hover:bg-brown hover:text-white cursor-pointer `}>
                                    {tab.label}
                                </div>
                            </Link>
                        </div>)
                }


            </div>
            <div className="grid grid-cols-3 gap-12 mt-8 cursor-pointer ">
                {
                    data.map(item =>
                        <div className="bg-gray flex flex-col justify-center items-center rounded-3xl p-3 mb-8 hover:drop-shadow-2xl">
                            <Image src={food1} alt='' />
                            <p className="font-medium text-brown text-center text-3xl">{item.name}</p>
                            <div className="flex justify-center mt-4">
                                {
                                    stars.map((_,index) => <Image key={index} className="mx-2" src={index < item.rate ? star : starOutline} alt='' />)
                                }
                            </div>
                            <p className="max-w-xs text-center mt-4 text-brown">{item.description}</p>
                            <div className="flex items-center justify-evenly w-full mt-8 mb-4">
                                <p className="text-brown font-semibold text-2xl">{item.price} $</p>
                                <div className="bg-orange text-white rounded-full py-4 px-8 font-semibold">Order now</div>
                            </div>
                        </div>)
                }
            </div>
        </Section>
    )
}

export default Section2