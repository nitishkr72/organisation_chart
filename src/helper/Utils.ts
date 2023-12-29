import { EmployeeDataType } from "@/app/type/EmployeeDataType";

export function getNestedObject(data: any[], managerEmail: string | null) {
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
