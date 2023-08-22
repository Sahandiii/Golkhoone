import { plants_data } from "./mock/plants";

export const plantsRequest = () => {
  return new Promise((resolve, reject) => {
    const plant = plants_data.plants;
    if (!plant) {
      reject("Not found");
    }
    resolve(plant);
  });
};
// plantsRequest().then((result) => {
//   console.log(result).catch((err) => {
//     console.log(err);
//   });
// });
