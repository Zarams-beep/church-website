import { NextResponse, NextRequest} from "next/server";
import connect from "@/utils/db";
import Fellowships from "@/modal/Fellowships";

export const GET = async (request: NextRequest) => {
    const url = new URL(request.url);
    const title = url.searchParams.get('title');

    try {
        await connect();
        const fellowships = await Fellowships.find(title?{title}:{});

        return new NextResponse(JSON.stringify(fellowships), {status: 200});
    } catch (error) {
        return new NextResponse("Database error", {status: 500});
    }   
}