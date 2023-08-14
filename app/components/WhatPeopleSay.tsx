"use client"

import { Card } from 'flowbite-react'
import { FaUser } from 'react-icons/fa'

export default function WhatPeopleSay() {
    return (
        <div className="container mx-auto">
            <div className='flex justify-center'>
                <h3 className="text-xl py-2 inline font-bold border-b-4 border-blue-500">What People say about us</h3>
            </div>
            <div className="testimonials grid grid-cols-fluid gap-4 justify-center items-center m-4">
                <Card className='p-4'>
                    <h4 className="font-semibold text-center">Gained Invaluable Skills and Knowledge</h4>
                    <p className="text-sm text-grey-600">"Attending MasterBrown International Institute was a transformative experience for me. The faculty members were incredibly knowledgeable and passionate about their subjects, and their dedication to student success was evident. Thanks to the institute, I gained valuable skills and knowledge that have been instrumental in advancing my career."</p>
                    <div className='flex gap-4 justify-center items-center'>
                        <i className="w-12 h-12 bg-green-100 flex justify-center items-center rounded-full">
                            <FaUser />
                        </i>
                        <div>
                            <h4 className="font-bold">Sarah Thompson</h4>
                            <p className="text-grey-400 text-sm">Principal at Petans </p>
                        </div>
                    </div>
                </Card>
                <Card className='p-4'>
                    <h4 className="font-semibold text-center">A Holistic Education Beyond Academics</h4>
                    <p className="text-sm text-grey-600">"MasterBrown International Institute provided me with a holistic education that went beyond academics. The institute emphasized personal development and offered various opportunities for students to enhance their leadership and communication skills. It was an environment that fostered growth and encouraged students to reach their full potential."</p>
                    <div className='flex gap-4 justify-center items-center'>
                        <i className="w-12 h-12 bg-green-100 flex justify-center items-center rounded-full">
                            <FaUser />
                        </i>
                        <div>
                            <h4 className="font-bold">Mark Davis</h4>
                            <p className="text-grey-400 text-sm">Principal at Petans </p>
                        </div>
                    </div>
                </Card>
                <Card className='p-4'>
                    <h4 className="font-semibold text-center">Unparalleled Quality of Education</h4>
                    <p className="text-sm text-grey-600">"The quality of education at MasterBrown International Institute is unparalleled. The curriculum was rigorous, up-to-date, and relevant to the industry. The institute also had state-of-the-art facilities and resources that supported hands-on learning. Thanks to this, I feel confident in my abilities and well-prepared for the challenges of the professional world."</p>
                    <div className='flex gap-4 justify-center items-center'>
                        <i className="w-12 h-12 bg-green-100 flex justify-center items-center rounded-full">
                            <FaUser />
                        </i>
                        <div>
                            <h4 className="font-bold">Emma Johnson</h4>
                            <p className="text-grey-400 text-sm">Principal at Petans </p>
                        </div>
                    </div>
                </Card>
                <Card className='p-4'>
                    <h4 className="font-semibold text-center">Celebrating Diversity and Inclusion</h4>
                    <p className="text-sm text-grey-600">"The career services provided by MasterBrown International Institute were outstanding. They offered comprehensive support in resume building, interview preparation, and job placement. The institute had strong connections with top companies, and their assistance was instrumental in helping me secure a rewarding job after graduation."</p>
                    <div className='flex gap-4 justify-center items-center'>
                        <i className="w-12 h-12 bg-green-100 flex justify-center items-center rounded-full">
                            <FaUser />
                        </i>
                        <div>
                            <h4 className="font-bold">Laura Lee</h4>
                            <p className="text-grey-400 text-sm">Principal at Petans </p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}