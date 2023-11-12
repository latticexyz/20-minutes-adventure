/*
 * Create the system calls that the client can use to ask
 * for changes in the World state (using the System contracts).
 */

import { SetupNetworkResult } from "./setupNetwork";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls({
  worldContract,
  waitForTransaction,
  useStore,
  tables,
}: SetupNetworkResult) {
  async function moveAndCollect(x: number, y: number) {
    const moveTx = await worldContract.write.grassland_MoveSystem_move([x, y]);
    await waitForTransaction(moveTx);

    const hasCandy = useStore
      .getState()
      .getValue(tables.CandyPosition, { x, y })?.hasCandy;

    if (hasCandy) {
      const collectTx =
        await worldContract.write.candyworld_CollectSystem_collect([x, y]);
      await waitForTransaction(collectTx);
    }
  }
  return { moveAndCollect };
}
