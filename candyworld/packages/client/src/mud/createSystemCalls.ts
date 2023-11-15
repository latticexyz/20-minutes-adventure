/*
 * Create the system calls that the client can use to ask
 * for changes in the World state (using the System contracts).
 */

import { Hex } from "viem";
import { SetupNetworkResult } from "./setupNetwork";
import { toEthAddress } from "@latticexyz/utils";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls({
  worldContract,
  waitForTransaction,
  useStore,
  tables,
  walletClient,
}: SetupNetworkResult) {
  async function collect(x: number, y: number) {
    const hasCandy = useStore
      .getState()
      .getValue(tables.CandyPosition, { x, y })?.hasCandy;

    if (hasCandy) {
      const collectTx =
        await worldContract.write.candyworld_CollectSystem_collect([x, y]);
      await waitForTransaction(collectTx);
    }
  }

  async function tileAction(x: number, y: number) {
    const player = walletClient.account.address;
    const isSpawned = useStore
      .getState()
      .getValue(tables.Spawned, { player })
    if (isSpawned) {
      const players = useStore
        .getState()
        .getRecords(tables.Position)
      const defender = Object.keys(players)
        .find(defender => players[defender]?.value.x === x && players[defender]?.value.y === y);

      if (defender) {
        const defenderAddress = toEthAddress(defender) as Hex;
        if (defenderAddress.toLowerCase() === player.toLowerCase()) return;

        const tx = await worldContract.write.candyworld_AttackSystem_attack([defenderAddress]);
        await waitForTransaction(tx);
      } else {
        const tx = await worldContract.write.grassland_MoveSystem_move([x, y]);
        await waitForTransaction(tx);
      }
    } else {
      const tx = await worldContract.write.grassland_SpawnSystem_spawn([x, y]);
      await waitForTransaction(tx);
    }

    const hasCandy = useStore
      .getState()
      .getValue(tables.CandyPosition, { x, y })
    if (hasCandy) {
      collect(x, y)
    }
  }

  return { tileAction };
}
