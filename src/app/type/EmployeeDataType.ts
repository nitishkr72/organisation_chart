export type EmployeeDataType = {
  name: string;
  email: string;
  role: string;
  reporting_manager?: string;
  team: string;
  managing?: EmployeeDataType[];
};
