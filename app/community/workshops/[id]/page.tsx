import { NextResponse, NextRequest } from "next/server";
import connect from "@/utils/db"
import Workshops from "@/modal/Workshops";

export const GET = async (request: NextRequest,context:{params:Promise<{id:string}>}) => {
    const {id} = await context.params;

    try{
        await connect();
        const workshops = await Workshops.findById(id);

        return NextResponse.json(workshops, {status:200});
    } catch(err){
        return new NextResponse("Database error", {status:500});
    }
    }