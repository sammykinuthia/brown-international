import { FaCheck } from 'react-icons/fa'

export default function CoreValues() {
    return (
        <section className='container mx-auto border p-4'>
            <h3 className="text-xl font-bold text-center">Core Values</h3>
            <div>
                <Value name='INTEGRITY' />
                <Value name='QUALITY' />
                <Value name='STUDENT SUCCESS' />
                <Value name='EXCELLENCE' />
                <Value name='STEWARDSHIP' />
                <Value name='INNOVATION' />
                <Value name='DIVERSITY' />
            </div>
        </section>
    )
}

function Value({ name }: { name: string }) {
    return (
        // <div className="">
        <div className="w-full m-2 shadow-inner shadow-green-500 hover:bg-green-200 p-3 bg-green-100">
            <p className=''>
                <i className='px-8'>
                    <FaCheck className="text-blue-500 inline" />
                </i>
                {name}
            </p>
        </div>
    )
}

// import { animated } from 'react-spring/web'

// export default function MyComponent() {
//     return (
//         <div className=''>

//             <animated.div>
//                 <Value name='INTEGRITY' />
//                 <Value name='QUALITY' />
//                 <Value name='STUDENT SUCCESS' />
//                 <Value name='EXCELLENCE' />
//                 <Value name='STEWARDSHIP' />
//                 <Value name='INNOVATION' />
//                 <Value name='DIVERSITY' />
//             </animated.div>
//         </div>

//     )
// }