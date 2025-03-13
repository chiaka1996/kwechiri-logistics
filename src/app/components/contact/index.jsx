import { useState, useEffect } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
       fullname: "",
       email: "",
       phone: "",
       message: ""
    })

    const onChangeInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setData({
            ...data, 
            [name] : value
        })
    }

    console.log(data)

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

    const submitBtn = async (e) => {
        try{
            e.preventDefault();
            setLoading(true)
        const {fullname, email, phone, message} = data;
  
        if(!fullname || !email || !phone || !message) {
            setLoading(false)
            return  toast.error("please fill all required fields.", {
                position: "top-right",
                theme: "colored",
                });
        }
  
        if(fullname.length < 2){
            setLoading(false)
            return toast.error("name should be a minimum of 2 characters", {
                position: "top-right",
                theme: "colored",
                });
        }
  
        if(!emailRegex.test(email)){
            setLoading(false)
            return toast.error("invalid email", {
                position: "top-right",
                theme: "colored",
                });
        }
  
        const fetchRequest = await fetch('../api/addmessage',{
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
  
        const response = await fetchRequest.json();
  
        if(response.status){
            setLoading(false)
            toast.success(`${response.message}`, {
              position: "top-right",
              theme: "colored",
              });
  
            setData({
              fullname: "",
              email: "",
              phone: "",
              message: ""
            })
        }
        else{
            setLoading(false)
            toast.error(`${response.message}`, {
                position: "top-right",
                theme: "colored",
                });
        }
    }
    catch(error){
        setLoading(false)
        return toast.error(`${error.message}`, {
            position: "top-right",
            theme: "colored",
            });
    }
    }
  
    return (
        <section className="py-[10rem] text-[1.6rem]" id="contact">
             <ToastContainer  className="text-[16px]"/>
            <div className="bg-primary_color mb-[1rem] rounded-[10px] text-[#fff] font-[500] w-[15rem] h-[45px] px-[2rem] mx-auto flex items-center justify-center">CONTACT US</div>
            <h2 className="text-secondary_color text-[4.4rem] text-center font-[700] leading-[5.5rem]">Let’s Connect & Move Forward</h2>
            <h3 className="max-w-[50rem] mx-auto text-center mb-[3rem] text-[1.8rem]">Have questions or need a logistics solution? Reach out to us—we’re here to help! 📦✈🚛</h3>
            <div className="max-w-[100rem] mx-auto flex flex-col gap-[3rem]">
                <div className="gridStyle gap-[5rem] mt-[2rem]">
                <div className="w-full">
                    <label className="font-[500]">Fullname</label><br/>
                    <input 
                    type="text"
                    name="fullname"
                    value={data.fullname}
                    onChange={onChangeInput}
                    placeholder="john doe" className="mt-[0.5rem] w-full h-[5rem] rounded-[10px] border border-text_color outline-none px-[1rem]" />
                </div>
                <div className="w-full">
                    <label className="font-[500]">Phone</label><br/>
                    <input 
                    type="text" 
                    name="phone"
                    value={data.phone}
                    onChange={onChangeInput}
                    placeholder="08150456780"
                     className="mt-[0.5rem] w-full h-[5rem] rounded-[10px] border border-text_color outline-none px-[1rem]" />
                </div>
            </div>
                <div className="w-full">
                    <label className="font-[500]">Email</label><br/>
                    <input 
                    type="email" 
                    name="email"
                    value={data.email}
                    onChange={onChangeInput}
                    placeholder="08150456780"
                     className="mt-[0.5rem] w-full h-[5rem] rounded-[10px] border border-text_color outline-none px-[1rem]" />
                </div>
                <div className="w-full">
                    <label className="font-[500]">Message</label><br/>
                  <textarea 
                  name="message"
                  value={data.message}
                  onChange={onChangeInput}
                  className="h-[12rem] w-full rounded-[10px] border border-text_color p-[1rem] outline-none"> 
                  </textarea>
                </div>  

                <button 
                onClick={submitBtn}
                disabled={loading}
                className="bg-primary_color h-[5rem] w-full rounded-[10px] outline-none border border-primary_color text-[#fff] font-[500]">
                    {loading ? "Sending..." : "SEND MESSAGE!!"}
                </button>     
            </div>
        </section>
    )
}