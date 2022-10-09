require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */

const goerliRPCUrl = process.env.GOERLI_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goerli:{
      url: goerliRPCUrl,
      accounts:[PRIVATE_KEY],
      chainId: 5,
    }
  },
  solidity: "0.8.8",
};
