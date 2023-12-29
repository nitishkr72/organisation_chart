import { EmployeeDataType } from "@/app/type/EmployeeDataType";
import { connectDb } from "@/helper/db";
import { Employee } from "@/models/employee";
import { NextResponse } from "next/server";

connectDb();

function getNestedObject(data: any[], managerEmail: string | null) {
  const result = [];

  for (const employee of data) {
    if (
      employee.reporting_manager === managerEmail ||
      (managerEmail === null && employee.reporting_manager !== null)
    ) {
      const nestedEmployee: EmployeeDataType = {
        name: employee.name,
        role: employee.role,
        team: employee.team,
        email: employee.email,
        reporting_manager: employee.reporting_manager,
      };
      const managing = getNestedObject(data, employee.email);
      if (managing.length > 0) {
        nestedEmployee.managing = managing;
      }
      result.push(nestedEmployee);
    }
  }

  return result;
}

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
