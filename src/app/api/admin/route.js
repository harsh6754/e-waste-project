import { connectDb } from "@/Helper/db";
import { Admin } from "@/Models/admin";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

connectDb();

export async function POST(request) {
    try {
        const { name, email, mobileNumber, password, confirmPassword } = await request.json();

        // Validate inputs
        if (!name || !email || !mobileNumber || !password || !confirmPassword) {
            return NextResponse.json({
                message: "All fields are required",
                status: false,
            });
        }

        if (password !== confirmPassword) {
            return NextResponse.json({
                message: "Password and confirmPassword do not match",
                status: false,
            });
        }

        // Hash the password
        const hashedPassword = bcrypt.hashSync(password, parseInt(process.env.BCRYPT_SALT));

        // Create a new Admin instance
        const user = new Admin({
            name,
            email,
            mobileNumber,
            password: hashedPassword,
            confirmPassword: hashedPassword, // It's not necessary to store hashed confirmPassword
        });

        // Save the user to the database
        const createdAdmin = await user.save();

        // Return success response
        const response = NextResponse.json({
            user: createdAdmin,
            status: 201,
            message: "Admin Created",
        });

        return response;
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({
            message: "Failed to connect",
            status: false,
        });
    }
}
