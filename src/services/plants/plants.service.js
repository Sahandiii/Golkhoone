import { plants } from "./mock/plants.json";

export const plantsRequest = () => {
  return new Promise((resolve, reject) => {
    const plant = plants;
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
