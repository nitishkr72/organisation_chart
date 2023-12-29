import React, { ReactNode } from "react";
import "../globals.css";

export function TreeNode({
  label,
  children,
}: {
  label?: ReactNode;
  children?: ReactNode;
}) {
  const hasChildren = React.Children.count(children) > 0;

  return (
    <li className="flex flex-col items-center list-none relative px-2 py-5 node-lines">
      {label}
      {hasChildren && (
        <ul className={`${hasChildren ? "children-container" : ""}`}>
          {children}
        </ul>
      )}
    </li>
  );
}

export default function Tree({
  label,
  children,
}: {
  label: ReactNode;
  children?: ReactNode;
}) {
  return (
    <ul className="flex m-0">
      <TreeNode label={label}>{children}</TreeNode>
    </ul>
  );
}
