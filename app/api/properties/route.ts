import connectDB from "@/config/database";

export const GET = async (resquest: Request) => {
  try {
    await connectDB();

    return Response.json({ message: "Hello, from properties" });
  } catch (error) {
    console.log(error);
  }
};
