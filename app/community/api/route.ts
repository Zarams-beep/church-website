// app/community/api/route.ts
import connect from "@/utils/db";
import Category from "@/modal/Category";

export async function GET(req: Request) {
  try {
    await connect();

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    
    const search = searchParams.get("search");

    console.log("=== API CALLED ===");
    console.log("Category param:", category);
    console.log("Search param:", search);

    let query: any = {};

    if (category) {
      query.category = category;
    }

    if (search) {
      query.$text = { $search: search };
    }

    console.log("Query object:", query);

    const data = await Category.find(query).sort({ date: -1 });
    
    console.log("Found documents:", data.length);
    if (data.length > 0) {
      console.log("First document:", JSON.stringify(data[0], null, 2));
    }

    return Response.json(data);
  } catch (error) {
    console.error("API ERROR:", error);
    return Response.json({ error: String(error) }, { status: 500 });
  }
}