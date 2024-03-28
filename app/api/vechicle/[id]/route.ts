import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,params:any){

    try {
        const id=params.params.id;
        const vehicle=await db.user.findMany({
            where:{
              id  
            },
            include:{
                vehicle:{
                    include:{
                        pickUp:true,
                        servicing:true
                    }
                }
            }
        });
        return NextResponse.json({message:"Successfully fetched data",vehicle})
        
    } catch (error) {
        return NextResponse.json({message:"Something went wrong",error},{status:500})
    }
}