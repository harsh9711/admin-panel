import { connectMongoDB } from "@/libs/models/MongoConnect";
import Product from "@/libs/models/Product";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, URLParams: any) {
  try {
    const id = URLParams.params.id;
    await connectMongoDB();
    await Product.findByIdAndDelete(id);

    return NextResponse.json({ msg: "Deleted Successfully" });
  } catch (error) {
    return NextResponse.json(
      {
        error,
        msg: "Something Went Wrong",
      },
      {
        status: 400,
      }
    );
  }
}
