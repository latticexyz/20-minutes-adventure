import { GameMap } from "./GameMap";
import { useMUD } from "./MUDContext";

export const App = () => {
  const {
    network: { useStore, tables },
    systemCalls: { moveAndCollect },
  } = useMUD();

  const tiles = useStore((store) => {
    const players = Object.values(store.getRecords(tables.Position)).map(
      (record) => ({
        x: record.value.x,
        y: record.value.y,
        emoji: "👩‍🔬",
      })
    );

    const candy = Object.values(store.getRecords(tables.CandyPosition))
      .filter((record) => record.value.hasCandy)
      .map((record) => ({
        x: record.key.x,
        y: record.key.y,
        emoji: "🍬",
      }));

    return [...players, ...candy];
  });

  return (
    <GameMap
      width={16}
      height={16}
      tiles={tiles}
      onTileClick={moveAndCollect}
    />
  );
};
