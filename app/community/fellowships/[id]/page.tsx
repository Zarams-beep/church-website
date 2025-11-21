import { NextResponse, NextRequest } from "next/server";
import connect from "@/utils/db"
import Fellowships from "@/modal/Fellowships";

export const GET = async (request: NextRequest,context:{params:Promise<{id:string}>}) => {
    const {id} = await context.params;

    try{
        await connect();
        const fellowships = await Fellowships.findById(id);

        return NextResponse.json(fellowships, {status:200});
    } catch(err){
        return new NextResponse("Database error", {status:500});
    }
    }