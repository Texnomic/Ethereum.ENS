module.exports = {
  networks: {
    "Ganache": {
      host: "localhost",
      port: 7545,
      network_id: "5777",
      gas: 4000000
    }
  },
  mocha: {
    reporter: "eth-gas-reporter",
    reporterOptions: {
      currency: "USD",
      gasPrice: 1
    }
  }
};
