const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData){
  const shipment = [];
  const seenSku = [];

  for(let i = 0; i < rawData.length; i++){
    const parts = rawData[i].split("|");
    const trimmedParts = [];

    for(let j = 0; j < parts.length; j++){
      trimmedParts.push(parts[j].trim());
    }

    const sku = trimmedParts[0];
    const name = trimmedParts[1];
    const qty = trimmedParts[2];
    const expires = trimmedParts[3];
    const zone = trimmedParts[4];

    if(seenSku.includes(sku)){
      continue;
    }

    seenSku.push(sku);

    shipment.push({
      sku: sku || "Unknown",
      name: name || "Unknown",
      qty: Number(qty),
      expires: expires || "Unknown",
      zone: zone || "general"
    });
  }

  return shipment;
}

function planRestock(pantry, shipment){

  const action = [];

  for(let i = 0; i < shipment.length; i++){

    const item = shipment[i];
    let type;

    if(item.qty <= 0){
      type = "discard";
    }else if(pantry.some(pantryItem => pantryItem.sku === item.sku)){
      type = "restock";
    }else{
      type = "donate";
    }

    action.push({
      type: type,
      item: item,
      });
  }
  return action;
}

function groupByZone(actions) {
  const grouped = {};

 
  for(let i = 0; i < actions.length; i++){
    const action = actions[i];
    const zone = action.item.zone;

    if(!grouped[zone]){
      grouped[zone] = [];
    }
    grouped[zone].push(action);

  }
  return grouped;
}

function clonePantry(pantry){
  return JSON.parse(JSON.stringify(pantry));
}

const pantryCopy = clonePantry(pantry);
const updatedData = parseShipment(rawData);
const plan = planRestock(pantryCopy, updatedData);
const group = groupByZone(plan);

console.log(JSON.stringify(group, null, 2));
