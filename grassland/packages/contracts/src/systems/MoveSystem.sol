// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;
import { System } from "@latticexyz/world/src/System.sol";

import { Position } from "../codegen/index.sol";

contract MoveSystem is System {
  function move(uint32 x, uint32 y) public {
    Position.set(_msgSender(), x, y);
  }
}
