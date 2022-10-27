require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/BuMFXoqhRQzJRWmrSaMdujBogsBQof0r",
      accounts: [`0x${"e05beb70838e0a9cd34aa30aa9e54f7ff97d4044cf782c4067a39c13f9504cb7"}`],
    },
  },
};
