"use client"
import student from '../../public/student-min.webp'
import student1 from '../../public/student1-min.webp'
import counseling from '../../public/counseling-min.webp'
import hospitality from '../../public/hospitality-min.webp'
import driving from '../../public/driving-min.webp'

import Image from 'next/image'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
export default function ImageSlider(){
    const fadeImages = [
        {
          url:"https://res.cloudinary.com/dbeq8dpkz/image/upload/v1689854813/Brown%20master/driving-min_vonf8p.webp",
          caption: 'Driving'
        },
        {
            url:"https://res.cloudinary.com/dbeq8dpkz/image/upload/v1689854814/Brown%20master/student-min_swqles.webp",
            caption: 'We offer the best to our students. Come and be part of us.'
          },
        {
          url: "https://res.cloudinary.com/dbeq8dpkz/image/upload/v1689854813/Brown%20master/catering-min_shu40k.webp",
          caption: 'Home Care Management'
        },
        {
          url: "https://res.cloudinary.com/dbeq8dpkz/image/upload/v1689854813/Brown%20master/counseling-min_glcym0.webp",
          caption: 'Guidance & Counseling'
        },
        {
            url: "https://res.cloudinary.com/dbeq8dpkz/image/upload/v1689854812/Brown%20master/homecare-min_fwolw4.webp",
            caption: 'Guidance & Counseling'
          },
      ];

    return(
        <div className="slide-container">
      <Fade duration={4000}>
        {fadeImages.map((fadeImage, index) => (
          <div className='img-slider' key={index}>
            <Image width={1000} height={700} alt='slider image' className='slide-img aspect-video' src={fadeImage.url} />
            <h2 className='img-caption'>{fadeImage.caption}</h2>
            <a className='program-link py-2 px-4 rounded-md bg-blue-500 text-white' href={''}>Learn More</a>
          </div>
        ))}
      </Fade>
    </div>
    )
}