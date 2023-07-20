import ProgramsCard from "./ProgramsCard";
import { data } from "../data/programList";

export default function Programs() {
    const programsList = data.slice(0,4)

    return (
        <section className="bg-green-50 my-8 p-2">
            <h3 className="text-xl font-semibold text-center border-b-2 w-auto border-blue-500 mb-4">Our Programs</h3>
            <div className="grid grid-cols-fluid">
           {programsList.map(program=>{
            return <ProgramsCard key={program.id} c_image={program.c_image} description={program.description} title={program.title} url={program.url} />
           })}
            </div>
        </section>
    );
}