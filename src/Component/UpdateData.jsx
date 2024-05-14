import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UpdateData() {
    let [id, setId] = useState(0)
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    const history = useNavigate()

    useEffect(()=>{
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    },[])

    let updateData = (e)=>{
        e.preventDefault()

        try {
            axios.put(`https://663a67171ae792804bef3b8b.mockapi.io/crud/${id}`, {
                name: name,
                email: email
            })
            .then(()=>{
                history("/read")
            })
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <>
      <div className="w-[80%] h-screen bg-[#FFFFFF] py-16 mx-auto">
        <h2 className="text-2xl ">Update Method</h2>

        <h1 className="pt-20 text-[18px] capitalize font-semibold">Profile</h1>
        <p className="text-[#A5AAB1] text-sm font-normal ">
          This information will be displayed publicly so be careful what you
          share.
        </p>
        <form action="" className="pt-20">
          <div className="name flex items-start justify-center flex-col">
            <label htmlFor="name" className="pb-3">
              Name *
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-[400px] h-12 border outline-none text-lg p-4"
              value={name}
              onChange={(e)=> setName(e.target.value)}
              required
            />
          </div>
          <div className="password flex items-start justify-center flex-col py-10">
            <label htmlFor="password" className="pb-3">
              Email *
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-[400px] h-12 border outline-none text-lg p-4"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              required
            />
          </div>
          <input
            type="Submit"
            className="border w-20 h-10 cursor-pointer"
            onClick={updateData}
          />
        </form>
      </div>
    </>
  )
}

export default UpdateData