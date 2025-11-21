import { NextResponse, NextRequest} from "next/server";
import connect from "@/utils/db";
import Category from "@/modal/Category";

export const GET = async (request: NextRequest) => {
    const url = new URL(request.url);
    const title = url.searchParams.get('title');

    try {
        await connect();
        const workshops = await Category.find(title?{title}:{});

        return new NextResponse(JSON.stringify(workshops), {status: 200});
    } catch (error) {
        return new NextResponse("Database error", {status: 500});
    }   
}