const froyoOrder = prompt(
  "Enter froyo flavors separated by commas:",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
const froyoArray = froyoOrder.split(",");

const froyoFlavors = {};
for (const key in froyoFlavors) {
  if (froyoFlavors[flavors]) {
    froyoFlavors[key] = froyoFlavors[key] + 1;
  }
}
froyoFlavors.items = froyoArray;

for (let i = 0; i < froyoArray.length; i++) {
  const flavors = froyoArray[i];
  console.log(flavors);
}
