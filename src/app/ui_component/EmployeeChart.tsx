import { EmpDataType } from "../data/data";
import EmployeeTree from "./EmployeeTree";

export default function EmployeeChart({
  employees,
}: {
  employees: EmpDataType;
}) {
  return (
    <div style={{ maxHeight: "20vh" }}>
      <EmployeeTree employees={employees} />
    </div>
  );
}
