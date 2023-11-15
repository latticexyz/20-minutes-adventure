import { twMerge } from "tailwind-merge";

type Props = {
  width: number;
  height: number;
  onTileClick?: (x: number, y: number) => void;
  tiles?: {
    x: number;
    y: number;
    emoji: string;
    health?: number;
  }[];
  killStreak: number;
};

const HealthBar = ({ currentHealth, maxHealth }: { currentHealth: number, maxHealth: number }) => {
  const healthPercentage = (currentHealth / maxHealth) * 100;

  return (
    <div className="absolute top-0 flex items-center mb-4">
      <div className="h-1 bg-gray-300 w-8 z-10">
        <div
          className="h-1 bg-red-500 transition-all duration-500 ease-in-out"
          style={{ width: `${healthPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export const GameMap = ({ width, height, onTileClick, tiles }: Props) => {
  const rows = new Array(width).fill(0).map((_, i) => i);
  const columns = new Array(height).fill(0).map((_, i) => i);

  return (
    <div className="inline-grid p-2 bg-lime-500 relative overflow-hidden">
      {rows.map((y) =>
        columns.map((x) => {
          const tile = tiles?.find((t) => t.x === x && t.y === y);

          return (
            <div
              key={`${x},${y}`}
              className={twMerge(
                "relative w-8 h-8 flex items-center justify-center",
                onTileClick ? "cursor-pointer hover:ring" : null
              )}
              style={{
                gridColumn: x + 1,
                gridRow: y + 1,
              }}
              onClick={() => {
                onTileClick?.(x, y);
              }}
            >
              { tile?.health ? <HealthBar currentHealth={tile.health} maxHealth={4} /> : <></> }
              <div className="flex flex-wrap gap-1 items-center justify-center relative">
                {tile ? (
                  <div>
                    <div className="absolute inset-0 flex items-center justify-center text-3xl pointer-events-none bg-green-800">
                      {tile.emoji}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
