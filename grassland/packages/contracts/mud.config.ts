import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  namespace: "grassland",
  tables: {
    Spawned: {
      keySchema: {
        player: "address",
      },
      valueSchema: "bool",
    },
    Position: {
      keySchema: {
        player: "address",
      },
      valueSchema: {
        x: "uint32",
        y: "uint32",
      },
    },
    Obstruction: {
      keySchema: {
        x: "uint32",
        y: "uint32",
      },
      valueSchema: "bool"
    }
  },
});
