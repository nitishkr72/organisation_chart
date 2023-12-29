import EmployeeChart from "./component/EmployeeChart";
import ZoomContainer from "./component/ZoomContainer";

const getData = async () => {
  const data = await fetch(`${process.env.API_URL}/api/employees`);
  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }
  return data.json();
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
