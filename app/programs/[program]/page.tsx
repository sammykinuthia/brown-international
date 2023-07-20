"use client"

import { data } from '../../data/programList'
import Image from 'next/image'
import {usePathname} from 'next/navigation'

export default function Page(){
    const route = usePathname()
    console.log(route);
    
    const program = data.find(ele=>ele.url.includes(route))
    console.log(program);
    
    return (
        <article className='container mx-auto my-4'>
            <h3 className="title">{program?.title}</h3>
            <Image className='program-img my-2'  width={600} height={400} src={program?.c_image} />
            <div className="program-desc mt-8">
                <p className='my-2'> <span className="font-bold">Program duration: </span> {program?.duration}</p>
                <p className='my-2'> <span className="font-bold">Qualifications:  </span> {program?.qualifications}</p>
                <p>{program?.description}</p>
            <p className='my-4'>{program?.description}</p>
            </div>

        </article>
    )
}