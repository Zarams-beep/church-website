import { NextResponse, NextRequest } from "next/server";
import connect from "@/utils/db"
import Retreats from "@/modal/Retreats";

export const GET = async (request: NextRequest,context:{params:Promise<{id:string}>}) => {
    const {id} = await context.params;

    try{
        await connect();
        const retreats = await Retreats.findById(id);

        return NextResponse.json(retreats, {status:200});
    } catch(err){
        return new NextResponse("Database error", {status:500});
    }
    }