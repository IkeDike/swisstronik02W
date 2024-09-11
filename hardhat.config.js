require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x958bcbfab33a16571b14f88551f051f312d79682212dda249856e473cd73e855"],
    },
  },
};
