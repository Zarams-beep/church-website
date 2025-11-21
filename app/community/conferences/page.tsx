import { NextResponse, NextRequest} from "next/server";
import connect from "@/utils/db";
import Conferences from "@/modal/Conferences";

export const GET = async (request: NextRequest) => {
    const url = new URL(request.url);
    const title = url.searchParams.get('title');

    try {
        await connect();
        const conferences = await Conferences.find(title?{title}:{});

        return new NextResponse(JSON.stringify(conferences), {status: 200});
    } catch (error) {
        return new NextResponse("Database error", {status: 500});
    }   
}