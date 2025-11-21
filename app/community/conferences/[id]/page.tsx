import { NextResponse, NextRequest } from "next/server";
import connect from "@/utils/db"
import Category from "@/modal/Category";

export const GET = async (request: NextRequest,context:{params:Promise<{id:string}>}) => {
    const {id} = await context.params;

    try{
        await connect();
        const conferences = await Category.findById(id);

        return NextResponse.json(conferences, {status:200});
    } catch(err){
        return new NextResponse("Database error", {status:500});
    }
    }