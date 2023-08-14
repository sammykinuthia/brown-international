"use client"
import { Button } from "flowbite-react";

type BannerParam = {
    title:string;
    action?:string;
    height?:string;
}

export default function Banner({title, action, height}:BannerParam){

    return (
        <section className={`home-hero ${height != null? height : ""}`}>
            <div className="hero flex justify-center gap-4 flex-col items-start container mx-auto p-4">
                <h4 className="text-white lg:text-2xl font-extrabold">{title}</h4>
                {action && (<Button className="bg-blue-500 px-4">{action}</Button>)}
                
            </div>
        </section>
    )
}