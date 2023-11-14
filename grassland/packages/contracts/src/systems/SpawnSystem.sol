// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

import { System } from "@latticexyz/world/src/System.sol";

import { Position, PositionData, Spawned, Obstruction } from "../codegen/index.sol";

contract SpawnSystem is System {
  function spawn(uint32 x, uint32 y) public {
    address player = _msgSender();

    if (Spawned.get(player)) {
      revert("can only spawn once");
    }
    if (Obstruction.get(x, y)) {
      revert("this space is obstructed");
    }

    Spawned.set(player, true);
    Position.set(player, x, y);
    Obstruction.set(x, y, true);
  }
}
