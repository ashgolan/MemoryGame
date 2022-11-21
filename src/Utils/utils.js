export const randomCards = () => {
  let arr = ["image1", "image2", "image3", "image4", "image5", "image6"];
  let arr2 = arr.slice();
  let arr3 = arr.concat(arr2);
  const randomArr = [];
  for (let i = 0; i < 12; i++) {
    const randomNumber = Math.floor(Math.random() * arr3.length);
    randomArr.push(arr3[randomNumber]);
    arr3.splice(randomNumber, 1);
  }
  return randomArr;
};
