import connectDB from "@/config/database";
import Property from "@/models/Property";

export async function GET(request, { params }) {
  try {
    await connectDB();

    const property = await Property.findById(params.id);
    if (!property) {
      return new Response("Property Not Found", { status: 404 });
    }
    return Response.json({ message: property }, { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
}
