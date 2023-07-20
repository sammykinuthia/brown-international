import { StaticImageData } from "next/image"

type ProgramsCardType = {
    c_image: string,
    title: string,
    description: string,
    url:string
}


export default function ProgramsCard({ c_image: c_image, title, description, url }: ProgramsCardType) {
    return (
        <div className="max-w-xs shadow-md rounded-sm p-4 mx-auto ">
            <img className="aspect-video object-cover object-top" src={c_image} alt="program" />
            <div className="px-4">
                <h4 className="text-xl font-semibold my-4">{title}</h4>
                <p className="text-sm line-clamp-5">{description}</p>
                <div>
                    <a className="text-blue-600 underline text-sm cursor-pointer" href={url} >More..</a>
                </div>
            </div>
        </div>
    )
}