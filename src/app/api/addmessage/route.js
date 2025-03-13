import {mailOptions, transporter} from "../../Config/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
    try{
        const body = await request.json()
        const {fullname, email, phone,  message} = body;


        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;

        if(!fullname || !email || !phone || !message) {
            return NextResponse.json({
                message: "please fill all fields",
                status: false,
                code: 400
            })
        }

        if(fullname.length < 2){
            return NextResponse.status(400).json({
                message: "name should be a minimum of 2 characters",
                status: false,
                code: 400
            })
        }

        if(!emailRegex.test(email)){
            return NextResponse.json({
                message: "invalid email",
                status: false,
                code: 400
            })
        }

        await transporter.sendMail({
            ...mailOptions,
            subject: "Message for Kwechiri logistics Website",
            html: `<!DOCTYPE html><html lang="en">
            <body>
            <div class="">
            <h1>KWECHIRI lOGISTICS MESSAGE</h1>
             <p>Name:<span>${fullname}</span></p>
            <p>Email:<span>${email}</span></p>
            <p>Phone:<span>${phone}</span> </p>
            <p>Message:<span>${message}</span> </p>
            </div>
            </body>
            </html>`
        })

            return NextResponse.json({
                message: "message sent successfull",
                status: true,
                code: 200
            })
       
    }
    catch(error){
        return NextResponse.json({
            message: "the problem is from us, pls try again",
            status: false,
            code: 500
        })
    }
}