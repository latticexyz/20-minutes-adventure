// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;
import {System} from "@latticexyz/world/src/System.sol";

import { Position, PositionData } from "@grassland/src/codegen/index.sol";
import { CandyPosition, CandyBalance } from "../codegen/index.sol";

contract CollectSystem is System {
  function collect(uint32 x, uint32 y) public {
    PositionData memory playerPosition = Position.get(_msgSender());
    require(x == playerPosition.x && y == playerPosition.y, "can only pick up candy at current position");
    require(CandyPosition.getHasCandy(x,y), "no candy to collect here");

    CandyPosition.deleteRecord(x,y);
    CandyBalance.set(_msgSender(), CandyBalance.get(_msgSender()) + 1);
  }
}