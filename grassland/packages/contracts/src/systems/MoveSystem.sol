// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

import { System } from "@latticexyz/world/src/System.sol";

import { Position, PositionData, Spawned, Obstruction } from "../codegen/index.sol";
import { distance } from "../positionUtils.sol";

contract MoveSystem is System {
  function move(uint32 x, uint32 y) public {
    address player = _msgSender();

    if (!Spawned.get(player)) {
      revert("can only move after being spawned");
    }
    if (Obstruction.get(x, y)) {
      revert("this space is obstructed");
    }

    PositionData memory from = Position.get(player);
    if (distance(from.x, from.y, x, y) > 1) {
      revert("can only move to adjacent spaces");
    }
    Position.set(player, x, y);

    Obstruction.set(from.x, from.y, false);
    Obstruction.set(x, y, true);
  }
}
