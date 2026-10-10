const equipmentLedger = {
  "1": { 
    type: "PC", 
    status: "CheckedOut", 
    borrower: { 
        name: "John Smith", 
        email: "john@acme.org" 
    }, 
    dueDate: "11/30/2025" 
    },
  "2": { 
    type: "Laptop", 
    status: "CheckedIn", 
    borrower: { 
        name: "", 
        email: "" 
    }, 
    dueDate: "" 
    },
  "3": { 
    type: "Laptop", 
    status: "CheckedOut", 
    borrower: { 
        name: "Jane Doe", 
        email: "jane@acme.org" 
    }, 
    dueDate: "10/31/2025" 
    },
  "4": { 
    type: "iPad", 
    status: "CheckedIn", 
    borrower: { 
        name: "", 
        email: "" 
    }, 
    dueDate: "" 
    }
};


function serializeLedger(ledger){
  return JSON.stringify(ledger);
}

function loadLedger(ledger){
  return JSON.parse(ledger);
}


function checkoutDevice(ledger, assetTag, borrower){
   // 1. If the device is missing, return unchanged records + message.
   if(!Object.hasOwn(ledger, assetTag)){
    return {
      ledger,
      message: `Device ${assetTag} was not found`
    };
   }

  // 2. If already checked out, return unchanged records + message.
  if(ledger[assetTag].status === "CheckedOut"){
    return {
      ledger,
      message: `Device ${assetTag} is already checked out`
    };
  }

  // 3. Make a copy using the two helper functions.
  const updatedLedger = loadLedger(serializeLedger(ledger));

  // 4. Update the requested device's name, email, and status in the copy.
  updatedLedger[assetTag].borrower.name = borrower.name;
  updatedLedger[assetTag].borrower.email = borrower.email;
  updatedLedger[assetTag].status = "CheckedOut";


  // 5. Return the copied records + success message.
  return {
    ledger: updatedLedger,
    message: `Device Successfully ${assetTag} Borrowed by ${updatedLedger[assetTag].borrower.name}`
  };
}

function checkinDevice(ledger, assetTag){
  
  // if the device missing, return object and message
  if(!Object.hasOwn(ledger, assetTag)){
    return{
      ledger,
      message: `Device ${assetTag} was not found`
    };
  }

  const updatedLedger = loadLedger(serializeLedger(ledger));

  updatedLedger[assetTag].borrower.name = "";
  updatedLedger[assetTag].borrower.email = "";
  updatedLedger[assetTag].dueDate = "";
  updatedLedger[assetTag].status = "CheckedIn";

  return {
    ledger: updatedLedger,
    message: `Device Successfully Returned ${assetTag}`
  };
}

function dateToNumber(dateString){
  const [month, day, year] = dateString.split("/").map(Number);

  return year * 10000 + month * 100 + day;
}

function listOverdueDevices(ledger, today) {
  const todayNumber = dateToNumber(today);

  return Object.values(ledger)
    .filter(device =>
      device.status === "CheckedOut" &&
      device.dueDate !== "" &&
      dateToNumber(device.dueDate) < todayNumber
    )
    .sort((a, b) =>
      dateToNumber(a.dueDate) - dateToNumber(b.dueDate)
    );
}

console.log(checkoutDevice(equipmentLedger, "2", {name: "G", email: "asqeqw@gmail.com"}));

