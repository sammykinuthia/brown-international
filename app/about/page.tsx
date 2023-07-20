import Banner from "../components/Banner";
import Mission from "../components/Mission";
import WhatPeopleSay from "../components/WhatPeopleSay";

export default function Page() {
    return (
        <section>
            <Banner title="Brown International Institute" />
            <article className="container px-4 mx-auto my-8">
                <h4 className="text-lg font-bold mb-4 text-center">Our History</h4>
                <p className="text-gray-600 py-2">We are Kenya's flagship Vocational College. We hope you will be inspired by the many fascinating facets that make MBII a leading global College centered in Africa. At MBII we pride ourselves as being at the forefront of educational innovation and we have implemented a range of initiatives to prepare our students for the future. Come discover our exciting and vibrant campus and find out why #MBIILife is invigorating and fulfilling.</p>
                <p className="text-gray-600 py-2">
                    Sure, here is an about page for MasterBrown International Institute:
                    MasterBrown International Institute is a leading provider of education in Kenya. We offer a wide range of programs, from early childhood education to university-level courses. Our mission is to provide our students with the knowledge and skills they need to succeed in today's global economy.<br /><br />
                    We believe that education is the key to a better future. That's why we are committed to providing our students with the highest quality education possible. Our teachers are highly qualified and experienced, and our curriculum is constantly updated to reflect the latest trends in education.<br /><br />
                    We also believe that education should be accessible to everyone. That's why we offer a variety of financial aid options to help our students pay for their education. We also offer flexible learning options, so that our students can learn at their own pace and in their own way.<br /><br />
                    MasterBrown International Institute is more than just a school. We are a community of learners who are passionate about education. We believe that by working together, we can create a better future for our students and our country.
                </p>
            </article>
            <Mission/>
            <WhatPeopleSay />
        </section>
    )
}