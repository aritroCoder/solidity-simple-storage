// imports
const { ethers } = require("hardhat");

//async main
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying SimpleStorage...");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();
  console.log(`deployed to: ${simpleStorage.address}`);
}
//by default it gets deployed to hardhat default network

async function verify(contractAddress, args){
  
}

//call main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }
);