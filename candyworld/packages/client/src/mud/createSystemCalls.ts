/*
 * Create the system calls that the client can use to ask
 * for changes in the World state (using the System contracts).
 */

import { SetupNetworkResult } from "./setupNetwork";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls({
  worldContract,
  waitForTransaction,
}: SetupNetworkResult) {
  async function move(x: number, y: number) {
    const tx = await worldContract.write.grassland_MoveSystem_move([x, y]);
    await waitForTransaction(tx);
  }
  return { move };
}
