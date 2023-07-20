export default function Services(){
    return(
        <article className="my-4">
            <h3 className="text-xl font-bold text-center mb-2">Services</h3>
           <div className="grid grid-cols-fluid">
            <ServicesCard service="Academic programs" desc="MasterBrown offers a variety of academic programs, from early childhood education to university-level courses. These programs are designed to prepare students for success in their chosen field."/>
            <ServicesCard service="Academic programs" desc="MasterBrown offers a variety of academic programs, from early childhood education to university-level courses. These programs are designed to prepare students for success in their chosen field."/>
            <ServicesCard service="Academic programs" desc="MasterBrown offers a variety of academic programs, from early childhood education to university-level courses. These programs are designed to prepare students for success in their chosen field."/>
            <ServicesCard service="Academic programs" desc="MasterBrown offers a variety of academic programs, from early childhood education to university-level courses. These programs are designed to prepare students for success in their chosen field."/>
           </div>
        </article>
    )
}

function ServicesCard({service, desc}:{service:string, desc:string}){
    return(
        <div className="border bg-gray-50 border-gray-50 p-4 m-2">
            <h3 className="font-bold text-center">{service}</h3>
            <p className="desc">{desc}</p>
        </div>
    )
}
