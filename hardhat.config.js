require('@nomicfoundation/hardhat-toolbox')
require('@nomiclabs/hardhat-etherscan')
require('dotenv').config()
require('./tasks/block-number')
require("hardhat-gas-reporter")
require('solidity-coverage')

/** @type import('hardhat/config').HardhatUserConfig */

const goerliRPCUrl = process.env.GOERLI_RPC_URL || "https://eth-rinkeby"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key"
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "key"

module.exports = {
    defaultNetwork: 'hardhat',
    networks: {
        // add additional networks here
        goerli: {
            url: goerliRPCUrl,
            accounts: [PRIVATE_KEY],
            chainId: 5, // chainId for goerli = 5
        },
        localhost: {
            url: 'http://127.0.0.1:8545/',
            chainId: 31337, // same chaid as hardhat
        },
    },
    solidity: '0.8.8',
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: false,
        outputFile: 'gas-report.txt', // optional: Output report to a file
        noColors: true,
        currency: 'USD',
        coinmarketcap: COINMARKETCAP_API_KEY,
    },
}
