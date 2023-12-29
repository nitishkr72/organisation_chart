import { EmpDataType } from "@/app/data/data";
import { connectDb } from "@/helper/db";
import { Employee } from "@/models/employee";
import { NextResponse } from "next/server";

const result_data: EmpDataType = {
  name: "Anubhav Singh Bassi",
  email: "anubhav@gmail.com",
  designation: "CEO",
  team: "Comedy",
  managing: [
    {
      name: "Biswa Kalyan Rath",
      email: "biswa@gmail.com",
      designation: "VP",
      reporting_manager: "anubhav@gmail.com",
      team: "Staging",
      managing: [
        {
          name: "Aditi Mittal",
          email: "aditi@gmail.com",
          designation: "Director",
          reporting_manager: "biswa@gmail.com",
          team: "Political",
        },
        {
          name: "Vir Das",
          email: "vir@gmail.com",
          designation: "Director",
          reporting_manager: "biswa@gmail.com",
          team: "Overseas",
        },
        {
          name: "Kenny Sebastian",
          email: "kenny@gmail.com",
          designation: "Director",
          reporting_manager: "biswa@gmail.com",
          team: "Accounting",
        },
      ],
    },
    {
      name: "Tanmay Bhatt",
      email: "tanmay@gmail.com",
      designation: "VP",
      reporting_manager: "anubhav@gmail.com",
      team: "Retail",
      managing: [
        {
          name: "Kanna Gill",
          email: "kanna@gmail.com",
          designation: "Comedian",
          reporting_manager: "tanmay@gmail.com",
          team: "Marketing",
        },
        {
          name: "Ankush Kumar",
          email: "ankus@gmail.com",
          designation: "Brand manager",
          reporting_manager: "tanmay@gmail.com",
          team: "Brand Management",
          managing: [
            {
              name: "Vinay Pathak",
              email: "vinay2@gmail.com",
              designation: "Associate Brand Manager",
              reporting_manager: "ankus@gmail.com",
              team: "Brand Management",
            },
            {
              name: "Shreyas Iyer",
              email: "shreyas@gmail.com",
              designation: "Associate Brand Ambassdor",
              reporting_manager: "ankus@gmail.com",
              team: "Brand Management",
            },
            {
              name: "Virat Kohli",
              email: "virat@gmail.com",
              designation: "Associate Brand Ambassdor",
              reporting_manager: "ankus@gmail.com",
              team: "Brand Management",
            },
          ],
        },
      ],
    },
    {
      name: "Abhishek Upmanyu",
      email: "abhishek@gmail.com",
      designation: "SVP",
      reporting_manager: "anubhav@gmail.com",
      team: "Staging",
      managing: [
        {
          name: "Ravi Gupta",
          email: "ravi@gmail.com",
          designation: "Comedian",
          reporting_manager: "abhishek@gmail.com",
          team: "Content Creations",
        },
        {
          name: "Nitish Kumar",
          email: "nitish@gmail.com",
          designation: "Writer",
          reporting_manager: "abhishek@gmail.com",
          team: "Content Creations",
        },
        {
          name: "Zakir Khan",
          email: "zakir@gmail.com",
          designation: "Writer",
          reporting_manager: "abhishek@gmail.com",
          team: "Content Creations",
          managing: [
            {
              name: "Rahul Dua",
              email: "rahul@gmail.com",
              designation: "Comedian",
              reporting_manager: "zakir@gmail.com",
              team: "Content Creations",
            },
          ],
        },
      ],
    },
  ],
};

connectDb();

function getNestedObject(data, managerEmail) {
  const result = [];

  for (const employee of data) {
    if (
      employee.reporting_manager === managerEmail ||
      (managerEmail === null && employee.reporting_manager !== null)
    ) {
      const nestedEmployee: EmpDataType = {
        name: employee.name,
        role: employee.role,
        team: employee.team,
        email: employee.email,
        reporting_manager: employee.reporting_manager,
      };
      const managing = getNestedObject(data, employee.email);
      if (managing.length > 0) {
        nestedEmployee.managing = managing;
      }
      result.push(nestedEmployee);
    }
  }

  return result;
}

export async function GET() {
  try {
    const employees = await Employee.find();
    const final_data = getNestedObject(employees, null);

    return NextResponse.json(final_data[0]);
  } catch (error) {
    return NextResponse.json({
      message: "Falied to get the employee data",
      success: false,
    });
  }
}
