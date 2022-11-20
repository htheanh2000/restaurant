import { ReactNode } from "react"
import NavBar from "../components/navbar"
import Section from "./section"

type Props = {
    children: ReactNode
}
const Page = (props: Props) => {
    return (
        <div className="">
            <Section>
                <NavBar/>
            </Section>
            {props.children}
        </div>
    )
}

export default Page