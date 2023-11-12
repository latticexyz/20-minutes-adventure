import { GameMap } from "./GameMap";
import { useMUD } from "./MUDContext";

export const App = () => {
  const {
    network: { useStore, tables },
  } = useMUD();

  const tiles = useStore((store) => {
    return Object.values(store.getRecords(tables.Position)).map((record) => ({
      x: record.value.x,
      y: record.value.y,
      emoji: "👩‍🔬",
    }));
  });

  return <GameMap width={16} height={16} tiles={tiles} />;
};
