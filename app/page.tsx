import Image from 'next/image'
import Banner from './components/Banner'
import avatar from './../public/avatar-1-min.webp'
// import avatar from '../../public/avatar-1-min.webp'

import ImageSlider from './components/ImageSlider'
import TestimonialCard from './components/TestimonialCard'
import Programs from './components/Programs'
import CoreValues from './components/CoreValues'
import Services from './components/Services'

export default function Home() {
  
     const desc = "The institute offers industry-relevant programs that are designed to meet the needs and demands of the current job market. By regularly updating their curriculum and incorporating emerging trends and technologies, MasterBrown International Institute ensures that students are well-prepared for the professional world."
    return (
        <section className="">
            <Banner title="Welcome To Master Brown International Institute" height={"2rem"} />
            <ImageSlider/>
            <div className="container mx-auto  my-8">
                <TestimonialCard author={"Rebecca Eig"} title={"Elements of Success"} description={desc} img={"https://res.cloudinary.com/dbeq8dpkz/image/upload/v1689854812/Brown%20master/avatar-1-min_a8fxtz.webp"} />
                <Programs />
                <CoreValues />
                <Services/>
            </div>
        </section>
    )
}
