'use client';
import Image from "next/image";

type TestimonialCardType = {
  img: any,
  title: String,
  author: String,
  description: string
}


export default function TestimonialCard({ img, title, author, description, }: TestimonialCardType) {
  return (
    <div className='shadow-sm grid gap-4 grid-cols-fluid '>
      <Image height={100} width={100} className='w-1/2 mx-auto rounded-full self-center' src={img} alt="avatar of the principal" />
      <div className="px-4 py-2 flex flex-col justify-between">
        <h5 className="text-2xl  tracking-tight text-gray-900 dark:text-white py-2 font-bold text-center">
          <p>{title}</p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 text-lg text-center">
            {description}
        </p>
        <h5 className="text-sm font-semibold border-l-4 border-blue-500 pl-4 tracking-tight text-gray-900 dark:text-white my-2">
            {author} - Principal
        </h5>
      </div>
    </div>
  )
}


