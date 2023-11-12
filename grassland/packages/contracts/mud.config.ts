import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  namespace: "grassland",
  tables: {
    Position: {
      keySchema: {
        player: "address",
      },
      valueSchema: {
        x: "uint32",
        y: "uint32",
      },
    },
  },
});
