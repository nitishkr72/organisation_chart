import { getNestedObject } from "@/helper/Utils";
import { connectDb } from "@/helper/db";
import { Employee } from "@/models/employee";
import { NextResponse } from "next/server";

connectDb();

export async function GET() {
  try {
    const employees = await Employee.find();
    const final_data = getNestedObject(employees, null);

    return NextResponse.json(final_data[0]);
  } catch (error) {
    return NextResponse.json({
      message: "Falied to get the employee data",
      success: false,
    });
  }
}
