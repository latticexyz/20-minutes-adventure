// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

import { System } from "@latticexyz/world/src/System.sol";

import { Position, PositionData } from "@grassland/src/codegen/index.sol";
import { CandyPosition, CandyBalance, Health } from "../codegen/index.sol";

uint32 constant INITIAL_HEALTH = 4;

contract CollectSystem is System {
  function collect(uint32 x, uint32 y) public {
    address player = _msgSender();
    PositionData memory playerPosition = Position.get(player);
    if (x != playerPosition.x || y != playerPosition.y) {
      revert("can only pick up candy at current position");
    }
    if (!CandyPosition.getHasCandy(x, y)) {
      revert("no candy to collect here");
    }

    CandyPosition.deleteRecord(x, y);
    uint256 initialBalance = CandyBalance.get(player);
    CandyBalance.set(player, initialBalance + 1);

    if (initialBalance == 0) {
      Health.set(player, INITIAL_HEALTH);
    } else {
      Health.set(player, Health.get(player) + 1);
    }

    // try to respawn candy
    uint32 singleRandom = uint32(predictableRandom(16 * 16));
    uint256 i = 0;
    while (true) {
      if (i >= 32) {
        // unable to find an area without candy to respawn candy
        return;
      }
      uint32 randomX = singleRandom / 16;
      uint32 randomY = singleRandom % 16;
      if (CandyPosition.get(randomX, randomY)) {
        i += 1;
      } else {
        CandyPosition.set(randomX, randomY, true);
        break;
      }
    }
  }
}

function predictableRandom(uint256 max) view returns (uint256) {
  return uint256(keccak256(abi.encodePacked(blockhash(block.number - 1), gasleft()))) % max;
}
