import connect from "@/utils/db";
import Category from "@/modal/Category";
import { Types } from "mongoose";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  await connect();

  const { id } = await context.params;

  const isObjectId = Types.ObjectId.isValid(id);

  const data = isObjectId
    ? await Category.findById(id)
    : await Category.findOne({ slug: id });

  if (!data) {
    return new Response("Not found", { status: 404 });
  }

  return Response.json(data);
}