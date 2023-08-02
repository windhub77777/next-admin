import connectMongo from "@/dbconfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";

connectMongo()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { id } = reqBody

        const userId = await User.findOne({ _id: id })
        if (userId) {
            return NextResponse.json({ message: "success", code: 200, data: userId })
        } else {
            return NextResponse.json({ message: "not found", code: 404 })
        }
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message }),
            { status: 500 }
    }
}