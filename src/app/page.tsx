import { EmpDataType, sendData } from "./data/data";
import EmployeeChart from "./ui_component/EmployeeChart";

const getData = async () => {
  const data = await sendData();
  return data;
};

export default async function Home() {
  const data = await getData();

  return (
    <div className="w-full h-screen flex flex-row gap-3 flex-wrap overflow-auto justify-center items-center pt-4">
      <EmployeeChart employees={data} />
    </div>
  );
}
