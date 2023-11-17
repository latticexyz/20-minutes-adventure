declare const abi: [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "target",
        "type": "address"
      }
    ],
    "name": "accesses",
    "outputs": [
      {
        "internalType": "bytes32[]",
        "name": "readSlots",
        "type": "bytes32[]"
      },
      {
        "internalType": "bytes32[]",
        "name": "writeSlots",
        "type": "bytes32[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "activeFork",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "forkId",
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
        "name": "privateKey",
        "type": "uint256"
      }
    ],
    "name": "addr",
    "outputs": [
      {
        "internalType": "address",
        "name": "keyAddr",
        "type": "address"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "allowCheatcodes",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "condition",
        "type": "bool"
      }
    ],
    "name": "assume",
    "outputs": [],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "char",
        "type": "string"
      }
    ],
    "name": "breakpoint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "char",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "value",
        "type": "bool"
      }
    ],
    "name": "breakpoint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "broadcast",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "signer",
        "type": "address"
      }
    ],
    "name": "broadcast",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "privateKey",
        "type": "uint256"
      }
    ],
    "name": "broadcast",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newChainId",
        "type": "uint256"
      }
    ],
    "name": "chainId",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "clearMockedCalls",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "path",
        "type": "string"
      }
    ],
    "name": "closeFile",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newCoinbase",
        "type": "address"
      }
    ],
    "name": "coinbase",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "path",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "recursive",
        "type": "bool"
      }
    ],
    "name": "createDir",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "urlOrAlias",
        "type": "string"
      }
    ],
    "name": "createFork",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "forkId",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "urlOrAlias",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "blockNumber",
        "type": "uint256"
      }
    ],
    "name": "createFork",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "forkId",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "urlOrAlias",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "txHash",
        "type": "bytes32"
      }
    ],
    "name": "createFork",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "forkId",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "urlOrAlias",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "blockNumber",
        "type": "uint256"
      }
    ],
    "name": "createSelectFork",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "forkId",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "urlOrAlias",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "txHash",
        "type": "bytes32"
      }
    ],
    "name": "createSelectFork",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "forkId",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "urlOrAlias",
        "type": "string"
      }
    ],
    "name": "createSelectFork",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "forkId",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "newBalance",
        "type": "uint256"
      }
    ],
    "name": "deal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "mnemonic",
        "type": "string"
      },
      {
        "internalType": "uint32",
        "name": "index",
        "type": "uint32"
      }
    ],
    "name": "deriveKey",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "privateKey",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "mnemonic",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "derivationPath",
        "type": "string"
      },
      {
        "internalType": "uint32",
        "name": "index",
        "type": "uint32"
      }
    ],
    "name": "deriveKey",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "privateKey",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newDifficulty",
        "type": "uint256"
      }
    ],
    "name": "difficulty",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "envAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "value",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "delim",
        "type": "string"
      }
    ],
    "name": "envAddress",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "value",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "envBool",
    "outputs": [
      {
        "internalType": "bool",
        "name": "value",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "delim",
        "type": "string"
      }
    ],
    "name": "envBool",
    "outputs": [
      {
        "internalType": "bool[]",
        "name": "value",
        "type": "bool[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "envBytes",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "value",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "delim",
        "type": "string"
      }
    ],
    "name": "envBytes",
    "outputs": [
      {
        "internalType": "bytes[]",
        "name": "value",
        "type": "bytes[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "delim",
        "type": "string"
      }
    ],
    "name": "envBytes32",
    "outputs": [
      {
        "internalType": "bytes32[]",
        "name": "value",
        "type": "bytes32[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "envBytes32",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "value",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "delim",
        "type": "string"
      }
    ],
    "name": "envInt",
    "outputs": [
      {
        "internalType": "int256[]",
        "name": "value",
        "type": "int256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "envInt",
    "outputs": [
      {
        "internalType": "int256",
        "name": "value",
        "type": "int256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "delim",
        "type": "string"
      },
      {
        "internalType": "bytes32[]",
        "name": "defaultValue",
        "type": "bytes32[]"
      }
    ],
    "name": "envOr",
    "outputs": [
      {
        "internalType": "bytes32[]",
        "name": "value",
        "type": "bytes32[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "delim",
        "type": "string"
      },
      {
        "internalType": "int256[]",
        "name": "defaultValue",
        "type": "int256[]"
      }
    ],
    "name": "envOr",
    "outputs": [
      {
        "internalType": "int256[]",
        "name": "value",
        "type": "int256[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "defaultValue",
        "type": "bool"
      }
    ],
    "name": "envOr",
    "outputs": [
      {
        "internalType": "bool",
        "name": "value",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "defaultValue",
        "type": "address"
      }
    ],
    "name": "envOr",
    "outputs": [
      {
        "internalType": "address",
        "name": "value",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "defaultValue",
        "type": "uint256"
      }
    ],
    "name": "envOr",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "delim",
        "type": "string"
      },
      {
        "internalType": "bytes[]",
        "name": "defaultValue",
        "type": "bytes[]"
      }
    ],
    "name": "envOr",
    "outputs": [
      {
        "internalType": "bytes[]",
        "name": "value",
        "type": "bytes[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "delim",
        "type": "string"
      },
      {
        "internalType": "uint256[]",
        "name": "defaultValue",
        "type": "uint256[]"
      }
    ],
    "name": "envOr",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "value",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "delim",
        "type": "string"
      },
      {
        "internalType": "string[]",
        "name": "defaultValue",
        "type": "string[]"
      }
    ],
    "name": "envOr",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "value",
        "type": "string[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "bytes",
        "name": "defaultValue",
        "type": "bytes"
      }
    ],
    "name": "envOr",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "value",
        "type": "bytes"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "defaultValue",
        "type": "bytes32"
      }
    ],
    "name": "envOr",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "value",
        "type": "bytes32"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "int256",
        "name": "defaultValue",
        "type": "int256"
      }
    ],
    "name": "envOr",
    "outputs": [
      {
        "internalType": "int256",
        "name": "value",
        "type": "int256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "delim",
        "type": "string"
      },
      {
        "internalType": "address[]",
        "name": "defaultValue",
        "type": "address[]"
      }
    ],
    "name": "envOr",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "value",
        "type": "address[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "defaultValue",
        "type": "string"
      }
    ],
    "name": "envOr",
    "outputs": [
      {
        "internalType": "string",
        "name": "value",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "delim",
        "type": "string"
      },
      {
        "internalType": "bool[]",
        "name": "defaultValue",
        "type": "bool[]"
      }
    ],
    "name": "envOr",
    "outputs": [
      {
        "internalType": "bool[]",
        "name": "value",
        "type": "bool[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "delim",
        "type": "string"
      }
    ],
    "name": "envString",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "value",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "envString",
    "outputs": [
      {
        "internalType": "string",
        "name": "value",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "envUint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "delim",
        "type": "string"
      }
    ],
    "name": "envUint",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "value",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "target",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "newRuntimeBytecode",
        "type": "bytes"
      }
    ],
    "name": "etch",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "callee",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "msgValue",
        "type": "uint256"
      },
      {
        "internalType": "uint64",
        "name": "gas",
        "type": "uint64"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "expectCall",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "callee",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "msgValue",
        "type": "uint256"
      },
      {
        "internalType": "uint64",
        "name": "gas",
        "type": "uint64"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "internalType": "uint64",
        "name": "count",
        "type": "uint64"
      }
    ],
    "name": "expectCall",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "callee",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "msgValue",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "internalType": "uint64",
        "name": "count",
        "type": "uint64"
      }
    ],
    "name": "expectCall",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "callee",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "expectCall",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "callee",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "internalType": "uint64",
        "name": "count",
        "type": "uint64"
      }
    ],
    "name": "expectCall",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "callee",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "msgValue",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "expectCall",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "callee",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "msgValue",
        "type": "uint256"
      },
      {
        "internalType": "uint64",
        "name": "minGas",
        "type": "uint64"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "expectCallMinGas",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "callee",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "msgValue",
        "type": "uint256"
      },
      {
        "internalType": "uint64",
        "name": "minGas",
        "type": "uint64"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "internalType": "uint64",
        "name": "count",
        "type": "uint64"
      }
    ],
    "name": "expectCallMinGas",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "expectEmit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "checkTopic1",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "checkTopic2",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "checkTopic3",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "checkData",
        "type": "bool"
      }
    ],
    "name": "expectEmit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "checkTopic1",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "checkTopic2",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "checkTopic3",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "checkData",
        "type": "bool"
      },
      {
        "internalType": "address",
        "name": "emitter",
        "type": "address"
      }
    ],
    "name": "expectEmit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "emitter",
        "type": "address"
      }
    ],
    "name": "expectEmit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "revertData",
        "type": "bytes4"
      }
    ],
    "name": "expectRevert",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "revertData",
        "type": "bytes"
      }
    ],
    "name": "expectRevert",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "expectRevert",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "min",
        "type": "uint64"
      },
      {
        "internalType": "uint64",
        "name": "max",
        "type": "uint64"
      }
    ],
    "name": "expectSafeMemory",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "min",
        "type": "uint64"
      },
      {
        "internalType": "uint64",
        "name": "max",
        "type": "uint64"
      }
    ],
    "name": "expectSafeMemoryCall",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newBasefee",
        "type": "uint256"
      }
    ],
    "name": "fee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string[]",
        "name": "commandInput",
        "type": "string[]"
      }
    ],
    "name": "ffi",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "result",
        "type": "bytes"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "path",
        "type": "string"
      }
    ],
    "name": "fsMetadata",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "isDir",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "isSymlink",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "length",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "readOnly",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "modified",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "accessed",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "created",
            "type": "uint256"
          }
        ],
        "internalType": "struct VmSafe.FsMetadata",
        "name": "metadata",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "artifactPath",
        "type": "string"
      }
    ],
    "name": "getCode",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "creationBytecode",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "artifactPath",
        "type": "string"
      }
    ],
    "name": "getDeployedCode",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "runtimeBytecode",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "getLabel",
    "outputs": [
      {
        "internalType": "string",
        "name": "currentLabel",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "getNonce",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "nonce",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRecordedLogs",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes32[]",
            "name": "topics",
            "type": "bytes32[]"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          },
          {
            "internalType": "address",
            "name": "emitter",
            "type": "address"
          }
        ],
        "internalType": "struct VmSafe.Log[]",
        "name": "logs",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "isPersistent",
    "outputs": [
      {
        "internalType": "bool",
        "name": "persistent",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "newLabel",
        "type": "string"
      }
    ],
    "name": "label",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "target",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "slot",
        "type": "bytes32"
      }
    ],
    "name": "load",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "data",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "accounts",
        "type": "address[]"
      }
    ],
    "name": "makePersistent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account0",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "account1",
        "type": "address"
      }
    ],
    "name": "makePersistent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "makePersistent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account0",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "account1",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "account2",
        "type": "address"
      }
    ],
    "name": "makePersistent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "callee",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "msgValue",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "returnData",
        "type": "bytes"
      }
    ],
    "name": "mockCall",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "callee",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "returnData",
        "type": "bytes"
      }
    ],
    "name": "mockCall",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "callee",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "msgValue",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "revertData",
        "type": "bytes"
      }
    ],
    "name": "mockCallRevert",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "callee",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "revertData",
        "type": "bytes"
      }
    ],
    "name": "mockCallRevert",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "stringifiedValue",
        "type": "string"
      }
    ],
    "name": "parseAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "parsedValue",
        "type": "address"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "stringifiedValue",
        "type": "string"
      }
    ],
    "name": "parseBool",
    "outputs": [
      {
        "internalType": "bool",
        "name": "parsedValue",
        "type": "bool"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "stringifiedValue",
        "type": "string"
      }
    ],
    "name": "parseBytes",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "parsedValue",
        "type": "bytes"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "stringifiedValue",
        "type": "string"
      }
    ],
    "name": "parseBytes32",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "parsedValue",
        "type": "bytes32"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "stringifiedValue",
        "type": "string"
      }
    ],
    "name": "parseInt",
    "outputs": [
      {
        "internalType": "int256",
        "name": "parsedValue",
        "type": "int256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "json",
        "type": "string"
      }
    ],
    "name": "parseJson",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "abiEncodedData",
        "type": "bytes"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "json",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "key",
        "type": "string"
      }
    ],
    "name": "parseJson",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "abiEncodedData",
        "type": "bytes"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "parseJsonAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "parseJsonAddressArray",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "parseJsonBool",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "parseJsonBoolArray",
    "outputs": [
      {
        "internalType": "bool[]",
        "name": "",
        "type": "bool[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "parseJsonBytes",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "parseJsonBytes32",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "parseJsonBytes32Array",
    "outputs": [
      {
        "internalType": "bytes32[]",
        "name": "",
        "type": "bytes32[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "parseJsonBytesArray",
    "outputs": [
      {
        "internalType": "bytes[]",
        "name": "",
        "type": "bytes[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "parseJsonInt",
    "outputs": [
      {
        "internalType": "int256",
        "name": "",
        "type": "int256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "parseJsonIntArray",
    "outputs": [
      {
        "internalType": "int256[]",
        "name": "",
        "type": "int256[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "parseJsonString",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "parseJsonStringArray",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "parseJsonUint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "parseJsonUintArray",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "stringifiedValue",
        "type": "string"
      }
    ],
    "name": "parseUint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "parsedValue",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pauseGasMetering",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "msgSender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "txOrigin",
        "type": "address"
      }
    ],
    "name": "prank",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "msgSender",
        "type": "address"
      }
    ],
    "name": "prank",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "newPrevrandao",
        "type": "bytes32"
      }
    ],
    "name": "prevrandao",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "projectRoot",
    "outputs": [
      {
        "internalType": "string",
        "name": "path",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "readCallers",
    "outputs": [
      {
        "internalType": "enum VmSafe.CallerMode",
        "name": "callerMode",
        "type": "uint8"
      },
      {
        "internalType": "address",
        "name": "msgSender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "txOrigin",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "path",
        "type": "string"
      },
      {
        "internalType": "uint64",
        "name": "maxDepth",
        "type": "uint64"
      }
    ],
    "name": "readDir",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "errorMessage",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "path",
            "type": "string"
          },
          {
            "internalType": "uint64",
            "name": "depth",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "isDir",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "isSymlink",
            "type": "bool"
          }
        ],
        "internalType": "struct VmSafe.DirEntry[]",
        "name": "entries",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "path",
        "type": "string"
      },
      {
        "internalType": "uint64",
        "name": "maxDepth",
        "type": "uint64"
      },
      {
        "internalType": "bool",
        "name": "followLinks",
        "type": "bool"
      }
    ],
    "name": "readDir",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "errorMessage",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "path",
            "type": "string"
          },
          {
            "internalType": "uint64",
            "name": "depth",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "isDir",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "isSymlink",
            "type": "bool"
          }
        ],
        "internalType": "struct VmSafe.DirEntry[]",
        "name": "entries",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "path",
        "type": "string"
      }
    ],
    "name": "readDir",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "errorMessage",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "path",
            "type": "string"
          },
          {
            "internalType": "uint64",
            "name": "depth",
            "type": "uint64"
          },
          {
            "internalType": "bool",
            "name": "isDir",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "isSymlink",
            "type": "bool"
          }
        ],
        "internalType": "struct VmSafe.DirEntry[]",
        "name": "entries",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "path",
        "type": "string"
      }
    ],
    "name": "readFile",
    "outputs": [
      {
        "internalType": "string",
        "name": "data",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "path",
        "type": "string"
      }
    ],
    "name": "readFileBinary",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "path",
        "type": "string"
      }
    ],
    "name": "readLine",
    "outputs": [
      {
        "internalType": "string",
        "name": "line",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "linkPath",
        "type": "string"
      }
    ],
    "name": "readLink",
    "outputs": [
      {
        "internalType": "string",
        "name": "targetPath",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "record",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "recordLogs",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "privateKey",
        "type": "uint256"
      }
    ],
    "name": "rememberKey",
    "outputs": [
      {
        "internalType": "address",
        "name": "keyAddr",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "path",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "recursive",
        "type": "bool"
      }
    ],
    "name": "removeDir",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "path",
        "type": "string"
      }
    ],
    "name": "removeFile",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "resetNonce",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "resumeGasMetering",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "snapshotId",
        "type": "uint256"
      }
    ],
    "name": "revertTo",
    "outputs": [
      {
        "internalType": "bool",
        "name": "success",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "accounts",
        "type": "address[]"
      }
    ],
    "name": "revokePersistent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "revokePersistent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newHeight",
        "type": "uint256"
      }
    ],
    "name": "roll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "txHash",
        "type": "bytes32"
      }
    ],
    "name": "rollFork",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "forkId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "blockNumber",
        "type": "uint256"
      }
    ],
    "name": "rollFork",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "blockNumber",
        "type": "uint256"
      }
    ],
    "name": "rollFork",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "forkId",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "txHash",
        "type": "bytes32"
      }
    ],
    "name": "rollFork",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "rpcAlias",
        "type": "string"
      }
    ],
    "name": "rpcUrl",
    "outputs": [
      {
        "internalType": "string",
        "name": "json",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rpcUrlStructs",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "key",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "url",
            "type": "string"
          }
        ],
        "internalType": "struct VmSafe.Rpc[]",
        "name": "urls",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rpcUrls",
    "outputs": [
      {
        "internalType": "string[2][]",
        "name": "urls",
        "type": "string[2][]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "forkId",
        "type": "uint256"
      }
    ],
    "name": "selectFork",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "objectKey",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "valueKey",
        "type": "string"
      },
      {
        "internalType": "address[]",
        "name": "values",
        "type": "address[]"
      }
    ],
    "name": "serializeAddress",
    "outputs": [
      {
        "internalType": "string",
        "name": "json",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "objectKey",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "valueKey",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "value",
        "type": "address"
      }
    ],
    "name": "serializeAddress",
    "outputs": [
      {
        "internalType": "string",
        "name": "json",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "objectKey",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "valueKey",
        "type": "string"
      },
      {
        "internalType": "bool[]",
        "name": "values",
        "type": "bool[]"
      }
    ],
    "name": "serializeBool",
    "outputs": [
      {
        "internalType": "string",
        "name": "json",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "objectKey",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "valueKey",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "value",
        "type": "bool"
      }
    ],
    "name": "serializeBool",
    "outputs": [
      {
        "internalType": "string",
        "name": "json",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "objectKey",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "valueKey",
        "type": "string"
      },
      {
        "internalType": "bytes[]",
        "name": "values",
        "type": "bytes[]"
      }
    ],
    "name": "serializeBytes",
    "outputs": [
      {
        "internalType": "string",
        "name": "json",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "objectKey",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "valueKey",
        "type": "string"
      },
      {
        "internalType": "bytes",
        "name": "value",
        "type": "bytes"
      }
    ],
    "name": "serializeBytes",
    "outputs": [
      {
        "internalType": "string",
        "name": "json",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "objectKey",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "valueKey",
        "type": "string"
      },
      {
        "internalType": "bytes32[]",
        "name": "values",
        "type": "bytes32[]"
      }
    ],
    "name": "serializeBytes32",
    "outputs": [
      {
        "internalType": "string",
        "name": "json",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "objectKey",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "valueKey",
        "type": "string"
      },
      {
        "internalType": "bytes32",
        "name": "value",
        "type": "bytes32"
      }
    ],
    "name": "serializeBytes32",
    "outputs": [
      {
        "internalType": "string",
        "name": "json",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "objectKey",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "valueKey",
        "type": "string"
      },
      {
        "internalType": "int256",
        "name": "value",
        "type": "int256"
      }
    ],
    "name": "serializeInt",
    "outputs": [
      {
        "internalType": "string",
        "name": "json",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "objectKey",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "valueKey",
        "type": "string"
      },
      {
        "internalType": "int256[]",
        "name": "values",
        "type": "int256[]"
      }
    ],
    "name": "serializeInt",
    "outputs": [
      {
        "internalType": "string",
        "name": "json",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "objectKey",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "valueKey",
        "type": "string"
      },
      {
        "internalType": "string[]",
        "name": "values",
        "type": "string[]"
      }
    ],
    "name": "serializeString",
    "outputs": [
      {
        "internalType": "string",
        "name": "json",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "objectKey",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "valueKey",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "value",
        "type": "string"
      }
    ],
    "name": "serializeString",
    "outputs": [
      {
        "internalType": "string",
        "name": "json",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "objectKey",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "valueKey",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "serializeUint",
    "outputs": [
      {
        "internalType": "string",
        "name": "json",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "objectKey",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "valueKey",
        "type": "string"
      },
      {
        "internalType": "uint256[]",
        "name": "values",
        "type": "uint256[]"
      }
    ],
    "name": "serializeUint",
    "outputs": [
      {
        "internalType": "string",
        "name": "json",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "value",
        "type": "string"
      }
    ],
    "name": "setEnv",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "uint64",
        "name": "newNonce",
        "type": "uint64"
      }
    ],
    "name": "setNonce",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "uint64",
        "name": "newNonce",
        "type": "uint64"
      }
    ],
    "name": "setNonceUnsafe",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "privateKey",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "digest",
        "type": "bytes32"
      }
    ],
    "name": "sign",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "v",
        "type": "uint8"
      },
      {
        "internalType": "bytes32",
        "name": "r",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "skipTest",
        "type": "bool"
      }
    ],
    "name": "skip",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "snapshot",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "snapshotId",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "startBroadcast",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "signer",
        "type": "address"
      }
    ],
    "name": "startBroadcast",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "privateKey",
        "type": "uint256"
      }
    ],
    "name": "startBroadcast",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "msgSender",
        "type": "address"
      }
    ],
    "name": "startPrank",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "msgSender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "txOrigin",
        "type": "address"
      }
    ],
    "name": "startPrank",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "stopBroadcast",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "stopPrank",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "target",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "slot",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "value",
        "type": "bytes32"
      }
    ],
    "name": "store",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "value",
        "type": "address"
      }
    ],
    "name": "toString",
    "outputs": [
      {
        "internalType": "string",
        "name": "stringifiedValue",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "toString",
    "outputs": [
      {
        "internalType": "string",
        "name": "stringifiedValue",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "value",
        "type": "bytes"
      }
    ],
    "name": "toString",
    "outputs": [
      {
        "internalType": "string",
        "name": "stringifiedValue",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "value",
        "type": "bool"
      }
    ],
    "name": "toString",
    "outputs": [
      {
        "internalType": "string",
        "name": "stringifiedValue",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "int256",
        "name": "value",
        "type": "int256"
      }
    ],
    "name": "toString",
    "outputs": [
      {
        "internalType": "string",
        "name": "stringifiedValue",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "value",
        "type": "bytes32"
      }
    ],
    "name": "toString",
    "outputs": [
      {
        "internalType": "string",
        "name": "stringifiedValue",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "forkId",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "txHash",
        "type": "bytes32"
      }
    ],
    "name": "transact",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "txHash",
        "type": "bytes32"
      }
    ],
    "name": "transact",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newGasPrice",
        "type": "uint256"
      }
    ],
    "name": "txGasPrice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newTimestamp",
        "type": "uint256"
      }
    ],
    "name": "warp",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "path",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "data",
        "type": "string"
      }
    ],
    "name": "writeFile",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "path",
        "type": "string"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "writeFileBinary",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "json",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "path",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "valueKey",
        "type": "string"
      }
    ],
    "name": "writeJson",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "json",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "path",
        "type": "string"
      }
    ],
    "name": "writeJson",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "path",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "data",
        "type": "string"
      }
    ],
    "name": "writeLine",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]; export default abi;
