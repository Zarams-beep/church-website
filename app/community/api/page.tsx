import connect from "@/utils/db";
import Category from "@/modal/Category";

export async function GET(req: Request) {
  await connect();

  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  let query: any = {};

  // Category filter
  if (category) {
    query.category = category;
  }

  // Search filter
  if (search) {
    query.$text = { $search: search };
  }

  const data = await Category.find(query).sort({ date: -1 });

  return Response.json(data);
}
