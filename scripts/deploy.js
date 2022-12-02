// imports
const { ethers, run, network } = require('hardhat')

//async main
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory(
    'SimpleStorage'
  )
  console.log('Deploying SimpleStorage...')
  const simpleStorage = await SimpleStorageFactory.deploy()
  await simpleStorage.deployed() // wait till contract is deployed
  console.log(`deployed to: ${simpleStorage.address}`) 
  if(network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY){ // goerli network
    await simpleStorage.deployTransaction.wait(6) // wait for 6 blocks
    await verify(simpleStorage.address, []);
  }

  // interacting with contract
  const currentValue = await simpleStorage.retrieve()
  console.log("Current value: " + currentValue)
  const transactionResponse = await simpleStorage.store(7);
  await transactionResponse.wait(1); // wait for 1 transaction
  const updatedValue = await simpleStorage.retrieve();
  console.log("updatedValue: " + updatedValue)
}
//by default it gets deployed to hardhat default network if no args is passed

async function verify(contractAddress, args) {
  // verify contract code on etherscan
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args
    })

  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Already verified")
    } else {
      console.log(error)
    }
  }
}

//call main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
