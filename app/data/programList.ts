import informationTech from '../../public/it-min.webp'
import driving from '../../public/driving-min.webp'
import catering from '../../public/catering-min.webp'
import homecare from '../../public/homecare-min.webp'
import vocational from '../../public/hospitality-min.webp'

export const data = [ {
        id: 1,
        title: "Driving",
        description: "MBI Driving School is still awaiting accreditetion by NTSA. We are the best Driving school in Kenya – We give you lots of quality practical time on the drivers seat, have large training areas, professional instructors to walk with you, a friendly learning environment and at Sensei driving school, you become part of our big family.",
        c_image: "https://res.cloudinary.com/dbeq8dpkz/image/upload/v1689854813/Brown%20master/driving-min_vonf8p.webp",
        // c_image: driving,
        url:'/programs/driving',
        duration:'3 months',
        qualifications:"National ID"
    },
    {
        id: 2,
        title: "Home Care Management",
        description: "The Ministry of Labour and Social Protection in collaboration with IOM, the UN Migration Agency and various stakeholders launched the Homecare Management Curriculum on 17, October 2018. The aim of the curriculum is to equip Kenyan migrant workers, youth and workers in the domestic sector with knowledge, skills, attitudes and values to enable them provide effective management of the home and resources, childcare and home nursing both locally and abroad.",
        c_image: 'https://res.cloudinary.com/dbeq8dpkz/image/upload/v1689854813/Brown%20master/hospitality-min_s0c4ka.webp',
        // c_image: homecare,
        url:"/programs/homecare",
        duration:'3 months',
        qualifications:"National ID"


    },
    {
        id: 3,
        title: "Guidance & Counseling",
        description: "We have qualified guidance counsellors who support students, staff and families that may have social, emotional or other needs that need to be addressed to ensure a successful school experience.",
        // c_image: catering,
        c_image: "https://res.cloudinary.com/dbeq8dpkz/image/upload/v1689854813/Brown%20master/counseling-min_glcym0.webp",
        url:"/programs/counseling",
        duration:'3 months',
        qualifications:"KCSE certificate"


    },
    {
        id: 4,
        title: "Partnerships for Scholarships",
        description: "The Ministry of Labour and Social Protection in collaboration with IOM, the UN Migration Agency and various stakeholders launched the Homecare Management Curriculum on 17, October 2018. The aim of the curriculum is to equip Kenyan migrant workers, youth and workers in the domestic sector with knowledge, skills, attitudes and values to enable them provide effective management of the home and resources, childcare and home nursing both locally and abroad.",
        c_image: "https://res.cloudinary.com/dbeq8dpkz/image/upload/v1689854813/Brown%20master/catering-min_shu40k.webp",
        // c_image: catering,
        url:"/programs/scholarship",
        qualifications:"National ID"

    },
    {
        id: 5,
        title: "Information Technology Virtual & Physical Classes",
        description: "We have qualified guidance counsellors who support students, staff and families that may have social, emotional or other needs that need to be addressed to ensure a successful school experience.",
        c_image: "https://res.cloudinary.com/dbeq8dpkz/image/upload/v1689584296/samples/people/kitchen-bar.jpg",
        // c_image: informationTech,
        url:"/programs/it",
        duration:'12 year',
        qualifications:"D+ KCSE "
    },
    {
        id: 6,
        title: "Vocational Programs (Awaiting credation)",
        description: "We have qualified guidance counsellors who support students, staff and families that may have social, emotional or other needs that need to be addressed to ensure a successful school experience.",
        // c_image: vocational,
        c_image: "https://res.cloudinary.com/dbeq8dpkz/image/upload/v1689854814/Brown%20master/student-min_swqles.webp",
        url:"/programs/vocational",
        duration:'6 months'

    }
]
