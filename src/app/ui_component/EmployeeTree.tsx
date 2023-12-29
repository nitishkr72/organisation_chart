import { EmpDataType } from "../data/data";
import Card from "./Card";

export default function EmployeeTree({
  employees,
}: {
  employees: EmpDataType;
}) {
  return (
    <div className="flex flex-col items-center gap-10">
      <Card
        name={employees.name}
        role={employees.designation}
        team={employees.team}
      />
      <div className="flex flex-row gap-10">
        {employees.managing &&
          employees.managing.map((item, index) => {
            return <EmployeeTree employees={item} key={index} />;
          })}
      </div>
    </div>
  );
}
