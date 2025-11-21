import { NextResponse, NextRequest } from "next/server";
import connect from "@/utils/db"
import Celebrations from "@/modal/Celebrations";

export const GET = async (request: NextRequest,context:{params:Promise<{id:string}>}) => {
    const {id} = await context.params;

    try{
        await connect();
        const celebration = await Celebrations.findById(id);

        return NextResponse.json(celebration, {status:200});
    } catch(err){
        return new NextResponse("Database error", {status:500});
    }
    }