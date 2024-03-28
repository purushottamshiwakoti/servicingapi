import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest){

    try {
        const {vehilceId,date}=await req.json()
        const servicingDate=new Date(date);

   
     const pickup=   await db.pickUp.create({
            data:{
             vehilceId,
            date:servicingDate
            }
        })

      
        

        return NextResponse.json({message:"Successfylly requested servicing dates",pickup},{status:200})
        
    } catch (error) {
        return NextResponse.json({message:"Something went wrong",error},{status:500})
    }
}