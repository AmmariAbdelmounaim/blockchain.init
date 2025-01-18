const abi = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_awesomeUInt",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "x",
          "type": "uint256"
        }
      ],
      "name": "set",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
] as const

const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3" as const // A MODIFIER

export const IncredibleStorageConfig = {
    address,
    abi
}
