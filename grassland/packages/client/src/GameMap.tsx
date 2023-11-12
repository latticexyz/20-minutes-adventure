import { twMerge } from "tailwind-merge";

type Props = {
  width: number;
  height: number;
  onTileClick?: (x: number, y: number) => void;
  tiles?: {
    x: number;
    y: number;
    emoji: string;
  }[];
};

export const GameMap = ({ width, height, onTileClick, tiles }: Props) => {
  const rows = new Array(width).fill(0).map((_, i) => i);
  const columns = new Array(height).fill(0).map((_, i) => i);

  return (
    <div className="inline-grid p-2 bg-lime-500 relative overflow-hidden">
      {rows.map((y) =>
        columns.map((x) => {
          const tile = tiles?.find((t) => t.x === x && t.y === y)?.emoji;

          return (
            <div
              key={`${x},${y}`}
              className={twMerge(
                "w-8 h-8 flex items-center justify-center",
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
              <div className="flex flex-wrap gap-1 items-center justify-center relative">
                {tile ? (
                  <div className="absolute inset-0 flex items-center justify-center text-3xl pointer-events-none bg-green-800">
                    {tile}
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
