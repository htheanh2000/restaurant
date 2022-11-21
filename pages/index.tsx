import React from 'react'
import type { NextPage } from 'next'
import Page from '../layouts/page'
import Section1 from '../components/homepage/section1'
import Section2 from '../components/homepage/section2'
import Section3 from '../components/homepage/section3'
import Section4 from '../components/homepage/section4'
import Section5 from '../components/homepage/section5'

const HomePage: NextPage = () => {
    return (
        <Page>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
        </Page>
    )
}

export default HomePage