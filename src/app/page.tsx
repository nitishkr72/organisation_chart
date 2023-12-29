import { getAllEmployeeData } from "@/helper/employess_data";
import EmployeeChart from "./component/EmployeeChart";
import ZoomContainer from "./component/ZoomContainer";

const getData = async () => {
  const data = await getAllEmployeeData();
  return data;
};

export default async function Home() {
  const data = await getData();

  return (
    <div className="w-screen h-screen  overflow-auto">
      <ZoomContainer>
        {data && <EmployeeChart employees={data} />}
      </ZoomContainer>
    </div>
  );
}
