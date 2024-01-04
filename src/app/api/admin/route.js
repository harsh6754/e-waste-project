import { connectDb } from "@/Helper/db";
import { Admin } from "@/Models/admin";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

connectDb();

export async function POST(request) {
    const{name,mobileNumber,password,confirmPassword} = await request.json();

    const user = new Admin({
        name,mobileNumber,password,confirmPassword
    });

    try{
        user.password , user.confirmPassword = bcrypt.hashSync(
            user.password, parseInt(process.env.BCRYPT_SALT)
        );

        const createdAdmin = await user.save();
        const response = NextResponse.json(
            user, {
                status:201,
                message: "Admin Created",
            });

        return response;
    } catch (error) {
        return NextResponse.json({
            message: "failed to connect",
            status: false,
        });
    }
}