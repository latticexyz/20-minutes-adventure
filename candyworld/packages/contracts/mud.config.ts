import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  namespace: "candyworld",
  tables: {
    CandyPosition: {
      keySchema: {
        x: "uint32",
        y: "uint32",
      },
      valueSchema: {
        hasCandy: "bool",
      },
    },
    CandyBalance: {
      keySchema: {
        player: "address",
      },
      valueSchema: {
        balance: "uint256",
      },
    },
    Health: {
      keySchema: {
        player: "address",
      },
      valueSchema: "uint32",
    },
    KillStreak: {
      keySchema: {
        player: "address",
      },
      valueSchema: "uint32",
    }
  },
});
