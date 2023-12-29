export type EmpDataType = {
  name: string;
  email: string;
  role: string;
  reporting_manager?: string;
  team: string;
  managing?: EmpDataType[];
};

// const data: Array<EmpDataType> = [
//   {
//     name: "Anubhav Singh Bassi",
//     email: "anubhav@gmail.com",
//     designation: "CEO",
//     team: "Comedy",
//   },
//   {
//     name: "Biswa Kalyan Rath",
//     email: "biswa@gmail.com",
//     role: "VP",
//     reporting_manager: "anubhav@gmail.com",
//     team: "Staging",
//   },
//   {
//     name: "Tanmay Bhatt",
//     email: "tanmay@gmail.com",
//     role: "VP",
//     reporting_manager: "anubhav@gmail.com",
//     team: "Retail",
//   },
//   {
//     name: "Abhishek Upmanyu",
//     email: "abhishek@gmail.com",
//     role: "SVP",
//     reporting_manager: "anubhav@gmail.com",
//     team: "Staging",
//   },
//   {
//     name: "Aditi Mittal",
//     email: "aditi@gmail.com",
//     role: "Director",
//     reporting_manager: "biswa@gmail.com",
//     team: "Political",
//   },
//   {
//     name: "Vir Das",
//     email: "vir@gmail.com",
//     role: "Director",
//     reporting_manager: "biswa@gmail.com",
//     team: "Overseas",
//   },
//   {
//     name: "Kenny Sebastian",
//     email: "kenny@gmail.com",
//     role: "Director",
//     reporting_manager: "biswa@gmail.com",
//     team: "Accounting",
//   },
//   {
//     name: "Kanna Gill",
//     email: "kanna@gmail.com",
//     role: "Comedian",
//     reporting_manager: "tanmay@gmail.com",
//     team: "Marketing",
//   },
//   {
//     name: "Ravi Gupta",
//     email: "ravi@gmail.com",
//     role: "Comedian",
//     reporting_manager: "abhishek@gmail.com",
//     team: "Content Creations",
//   },
// ];

// export const sendData: () => Promise<EmpDataType> = function () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(result_data);
//     }, 0);
//   });
// };
