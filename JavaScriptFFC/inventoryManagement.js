const inventory = [];

function findProductIndex(name){
  const searchName = name.toLowerCase();

  for(let i = 0; i < inventory.length; i++){
    const current = inventory[i].name.toLowerCase();
    if(current === searchName){
      return i;
  }
}
  return -1;
}

function addProduct(obj){
  const objName = obj.name.toLowerCase();
  const index = findProductIndex(objName);

  if(index !== -1){
    inventory[index].quantity += obj.quantity;
    console.log(`${objName} quantity updated`);
  }else{
    inventory.push({name: objName, quantity: obj.quantity});
    console.log(`${objName} added to inventory`);
  }
}

function removeProduct(name, quantity) {
  const lowercaseName = name.toLowerCase();
  const index = findProductIndex(lowercaseName);

  if (index === -1) {
    console.log(`${lowercaseName} not found`);
    return;
  }

  const product = inventory[index];

  if (product.quantity < quantity) {
    console.log(`Not enough ${lowercaseName} available, remaining pieces: ${product.quantity}`);
    return;
  }

  product.quantity -= quantity;
  console.log(`Remaining ${lowercaseName} pieces: ${product.quantity}`);
  
  if (product.quantity === 0) {
    inventory.splice(index, 1);
  }
}

console.log(addProduct({name: "FLOUR", quantity: 5}));