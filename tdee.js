import { Data, BMR } from "@lukaswhite/bmr";

function calculateBMR(gender, age, height, weight) {
  const data = new Data()
    .setGender(gender)
    .setAge(age)
    .setHeight(height)
    .setWeight(weight);

  const bmr = new BMR(BMR.HARRIS_BENEDICT);
  const calculatedBMR = bmr.calculate(data);

  console.log("Calculated BMR:", calculatedBMR);

  return calculatedBMR;
}

export { calculateBMR };
