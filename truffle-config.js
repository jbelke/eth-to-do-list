require("babel-register");
require("babel-polyfill");
require("dotenv").config();

module.exports = {
  networks: {
    dvelopment: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "1337",
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis",
  mocha: {},

  compilers: {
    solc: {
      version: "0.8.11",
      optimizer:{
        enabled:true,
        runs:200,
      }
    },
  },
};
