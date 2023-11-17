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
  walletClient,
}: SetupNetworkResult) {
  async function tileAction(x: number, y: number) {
    const isSpawned = useStore
      .getState()
      .getValue(tables.Spawned, { player: walletClient.account.address })
    if (isSpawned) {
      const tx = await worldContract.write.grassland_MoveSystem_move([x, y]);
      await waitForTransaction(tx);
    } else {
      const tx = await worldContract.write.grassland_SpawnSystem_spawn([x, y]);
      await waitForTransaction(tx);
    }
  }

  return { tileAction };
}
