import { GameMap } from "./GameMap";
import { useMUD } from "./MUDContext";

export const App = () => {
  const {
    network: { useStore, tables, walletClient },
    systemCalls: { tileAction },
  } = useMUD();

  const tiles = useStore((store) => {
    const players = Object.values(store.getRecords(tables.Position)).map((record) => {
      const player = record.key.player
      const health = store.getValue(tables.Health, { player })
      return {
        x: record.value.x,
        y: record.value.y,
        emoji: health?.value ? "👩‍🚀" : "👩‍🔬",
        health: health?.value,
      }
    });

    const candy = Object.values(store.getRecords(tables.CandyPosition))
      .filter((record) => record.value.hasCandy)
      .map((record) => ({
        x: record.key.x,
        y: record.key.y,
        emoji: "🍬",
      }));

    return [...players, ...candy];
  });

  const killStreak = useStore((store) => {
    const player = walletClient.account.address;
    return store.getValue(tables.KillStreak, { player })
  })

  return (
    <GameMap
      width={16}
      height={16}
      tiles={tiles}
      onTileClick={tileAction}
      killStreak={killStreak?.value}
    />
  );
};
