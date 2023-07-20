'use client'
import { Footer, } from "flowbite-react"
import logo from '../../public/LOGO.png'
import Image from "next/image";


export default function MyFooter(){
  const hoverLink = "text-gray-500 hover:text-blue-500";
    return (
        <Footer className="container mx-auto border-none mt-8 border-t-2 border-gray-300">
      <div className="w-full">
        <div className="grid w-full gap-6 px-6 py-8 grid-cols-2">
          <div className="flex justify-center flex-col md:flex-row">
            <Image width={180} height={180} className="h-40 " src={logo} alt="" />
            <div>
            <h4 className="text-gray-500 font-bold">Master Brown International Institute</h4>
            <p className="pt-2 text-gray-400">Master Brown International Institute is your dream school. We are focused on giving the best to our students.</p>
            </div>
          </div>
          <div>
            <Footer.Title className="" title="Master Brown" />
            <Footer.LinkGroup col>
              <Footer.Link className={`${hoverLink} `} href="about">
                About Us
              </Footer.Link>
              <Footer.Link className={`${hoverLink} `} href="programs">
               Our Programs
              </Footer.Link>
              <a className={`${hoverLink} `} href="mailto:info@masterbrown.co.ke">info@masterbrown.co.ke</a>
              <a className={`${hoverLink} `} href="mailto:Masterbrown1980@gmail.com">Masterbrown1980@gmail.com</a>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Address" />
            <p className="text-gray-500">We are located at Kahawa Sukari avenue 200 Metres from Quick Matt supermarket. Formerly The SEARCH COMPREHENSIVE School</p>
          </div>
        </div>
          <Footer.Copyright
          className={`${hoverLink}  text-center border-t-2 py-4` }
            by="Pamatech Solutions, Nairobi"
            href="#"
            year={2023}
          />
          
        </div>
    </Footer>
    )
}