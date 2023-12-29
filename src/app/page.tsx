import { EmpDataType, sendData } from "./data/data";
import EmployeeChart from "./ui_component/EmployeeChart";

const getData = async () => {
  const data = await sendData();
  return data;
};

export default async function Home() {
  const data = await getData();

  return (
    <div className="w-screen h-screen  overflow-auto">
      <EmployeeChart employees={data} />
    </div>
  );
}
