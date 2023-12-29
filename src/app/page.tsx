import EmployeeChart from "./component/EmployeeChart";
import ZoomContainer from "./component/ZoomContainer";

const getData = async () => {
  const data = await fetch("http://localhost:3000/api/employees");
  const json_data = data.json();
  return json_data;
};

export default async function Home() {
  const data = await getData();

  return (
    <div className="w-screen h-screen  overflow-auto">
      <ZoomContainer>
        <EmployeeChart employees={data} />
      </ZoomContainer>
    </div>
  );
}
