import { EmpDataType } from "../data/data";
import Card from "./Card";
import Tree, { TreeNode } from "./Tree";
import ZoomContainer from "./ZoomContainer";

function EmployeeTreeNode({ employees }: { employees?: EmpDataType[] }) {
  return (
    <>
      {employees &&
        employees.map((item, idx) => {
          if (item.managing && item.managing.length > 0) {
            return (
              <TreeNode
                label={
                  <Card
                    name={item.name}
                    team={item.team}
                    role={item.designation}
                  />
                }
                key={idx}
              >
                <EmployeeTreeNode employees={item.managing} />
              </TreeNode>
            );
          }

          return (
            <TreeNode
              label={
                <Card
                  name={item.name}
                  team={item.team}
                  role={item.designation}
                />
              }
              key={idx}
            />
          );
        })}
    </>
  );
}

export default function EmployeeChart({
  employees,
}: {
  employees: EmpDataType;
}) {
  return (
    <ZoomContainer>
      <div className="w-full h-full flex justify-center items-center">
        <Tree
          label={
            <Card
              name={employees.name}
              team={employees.team}
              role={employees.designation}
            />
          }
        >
          <EmployeeTreeNode employees={employees.managing} />
        </Tree>
      </div>
    </ZoomContainer>
  );
}
