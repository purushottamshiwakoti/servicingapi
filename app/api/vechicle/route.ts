import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest){

    try {
        const {name,type,number,userId}=await req.json()

   
     const vehicle=   await db.vehilce.create({
            data:{
               name,
               type,
               number,
               userId
            }
        })

      
        

        return NextResponse.json({message:"Vehicle registered successfully",vehicle},{status:200})
        
    } catch (error) {
        return NextResponse.json({message:"Something went wrong",error},{status:500})
    }
}