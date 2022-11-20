import { ReactNode } from "react"

type Props = {
    children: ReactNode
    className?: string
}
const Section = (props: Props) => {
    const {className = ''} = props
    return (
        <div className={className }>
            <div className="container mx-auto">
                {props.children}
            </div>
        </div>
    )
}

export default Section