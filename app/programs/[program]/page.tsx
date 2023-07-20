"use client"

import { data } from '../../data/programList'
import Image from 'next/image'
import {usePathname} from 'next/navigation'

export default function Page(){
    const route = usePathname()
    const program = data.find(ele=>ele.url.includes(route))
    return (
        <article className='mx-4 md:mx-8 lg:mx-20 xl:mx-28 2xl:mx-36 my-4'>
            <h3 className="title">{program?.title}</h3>
            <Image className='program-img my-2'  width={600} height={400} src={program?.c_image || ''} alt='program image' />
            <div className="program-desc mt-8">
                <p className='my-2'> <span className="font-bold">Program duration: </span> {program?.duration}</p>
                <p className='my-2'> <span className="font-bold">Qualifications:  </span> {program?.qualifications}</p>
                <p>{program?.description}</p>
            <p className='my-4'>{program?.description}</p>
            </div>

        </article>
    )
}