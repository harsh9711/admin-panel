import { connectMongoDB } from "@/libs/models/MongoConnect";
import Product from "@/libs/models/Product";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest, URLParams: any) {
  try {
    const body = await request.json();
    const id = URLParams.params.id;
    const { name, category, price } = body;
    await connectMongoDB();
    console.log(id, body);
    const data = await Product.findOneAndUpdate(
      {
        _id: new Types.ObjectId(id),
      },
      {
        $set: {
          name,
          category,
          price,
        },
      }
    );
    return NextResponse.json({ msg: "Updated Successfully", data });
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
