const lunches = [];
let temparr;

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  if (arr.length == 0) {
    console.log("No lunches to remove.");
  } else {
    temparr = arr.pop();
    console.log(`${temparr} removed from the end of the lunch menu.`);
  }
  return arr;
}

function removeFirstLunch(arr) {
  if (arr.length == 0) {
    console.log("No lunches to remove.");
  } else {
    temparr = arr.shift();
    console.log(`${temparr} removed from the start of the lunch menu.`);
  }  return arr;
}

function getRandomLunch(arr) {
  if (arr.length == 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const selectedItem = arr[randomIndex];
    console.log(`Randomly selected lunch: ${selectedItem}`);
  }
}

function showLunchMenu(arr) {
  if (arr.length > 0) {
    console.log(`Menu items: ${arr.join(", ")}`);
  } else {
    console.log("The menu is empty.");
  }
}

addLunchToEnd(["Pizza", "Tacos"], "Burger");
