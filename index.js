const froyoOrder = prompt(
  "Enter froyo flavors separated by commas:",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee,coffee"
);
const froyoArray = froyoOrder.split(",");

froyoFlavors = {};

for (let i = 0; i < froyoArray.length; i++) {
  const flavors = froyoArray[i];
  if (froyoFlavors[flavors]) {
    froyoFlavors[flavors] += 1;
  } else {
    froyoFlavors[flavors] = 1;
  }
}
console.log(froyoFlavors);
