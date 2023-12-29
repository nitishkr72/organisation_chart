import { EmployeeDataType } from "../type/EmployeeDataType";
import Card from "../ui_component/Card";
import Tree, { TreeNode } from "../ui_component/Tree";
import ZoomContainer from "./ZoomContainer";

function EmployeeTreeNode({ employees }: { employees?: EmployeeDataType[] }) {
  return (
    <>
      {employees &&
        employees.map((item, idx) => {
          if (item.managing && item.managing.length > 0) {
            // if there are employess that this employee manages
            return (
              <TreeNode
                label={
                  <Card name={item.name} team={item.team} role={item.role} />
                }
                key={idx}
              >
                <EmployeeTreeNode employees={item.managing} />
              </TreeNode>
            );
          }

          // if there are no other employees that this employee manages (TreeNode should not contain any children)
          return (
            <TreeNode
              label={
                <Card name={item.name} team={item.team} role={item.role} />
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
  employees: EmployeeDataType;
}) {
  return (
    <ZoomContainer>
      <div className="w-full h-full flex justify-center items-center">
        <Tree
          label={
            <Card
              name={employees.name}
              team={employees.team}
              role={employees.role}
            />
          }
        >
          <EmployeeTreeNode employees={employees.managing} />
        </Tree>
      </div>
    </ZoomContainer>
  );
}
