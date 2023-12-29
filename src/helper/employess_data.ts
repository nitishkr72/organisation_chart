import { Employee } from "@/models/employee";
import { getNestedObject } from "./Utils";

export async function getAllEmployeeData() {
  try {
    const employees = await Employee.find();
    const final_data = getNestedObject(employees, null);

    return final_data[0];
  } catch (error) {
    return null;
  }
}
