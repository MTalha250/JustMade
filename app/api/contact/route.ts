import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db/mongodb";
import Contact from "@/lib/db/models/contact";
import nodemailer from "nodemailer";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await dbConnect();
    const result = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json({
      result,
      status: "success",
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "Error",
        message: "Something Went Wrong",
        error: error,
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await dbConnect();
    const { name, email, phone, message } = await req.json();

    const result = await Contact.create({
      name,
      email,
      phone,
      message,
    });
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "tbcgulfmarketing@gmail.com",
    //     pass: "gyqj dwxp nrmo qobv",
    //   },
    // });

    // const mailOptions = {
    //   from: "tbcgulfmarketing@gmail.com",
    //   to: "info@justmade.io",
    //   subject: "New Enquiry Received from Website",
    //   text: `You have a new enquiry from the website:

    //              Name: ${name}
    //              Email: ${email}
    //              Phone: ${phone}
    //              Message: ${message}`,
    // };
    // await transporter.sendMail(mailOptions);

    return NextResponse.json({
      result,
      message: "Message Sent",
      status: "success",
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "Error",
        message: "Something Went Wrong",
        error: error,
      },
      {
        status: 500,
      }
    );
  }
};
