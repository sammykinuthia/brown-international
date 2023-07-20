"use client"
import { FormEvent, useState } from "react";
import Banner from "../components/Banner";
import {Button, TextInput, Textarea} from 'flowbite-react'


export default  function Page(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [enquary, setEnquary] = useState('')

  const handleSubmit = async(e:FormEvent)=>{
    e.preventDefault()
    const data = {
        name,email,enquary
    }
    console.log(data)
    // const res = await useFetchPostForm("http://localhost:3000/contact",data)

  }
    return(
        <>
        <Banner title="Talk to us through"/>
        <div className="form container mx-auto">
            <h3 className="m-4 font-bold text-center">Send us an Enquery and we will respond to you as soon as possible</h3>
            <form onSubmit={handleSubmit} action="post">
                <label  className="mt-4 block">Full Name</label>
                <TextInput onChange={(e)=>setName(e.target.value)}  required placeholder="John Mwangi"/>
                <label  className="mt-4 block">Email</label>
                <TextInput onChange={(e)=>setEmail(e.target.value)} placeholder="mwangi97@gmail.com" required type="email"/>
                <label  className="mt-4 block">Enquary</label>
                <Textarea onChange={(e)=>setEnquary(e.target.value)} placeholder="start typing ..." required/>
                <Button className="mt-4" type="submit">Submit</Button>
            </form>
        </div>
        </>
    )
}