// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;
import { System } from "@latticexyz/world/src/System.sol";

import { Position, PositionData } from "@grassland/src/codegen/index.sol";
import { distance } from "@grassland/src/positionUtils.sol";
import { CandyPosition, CandyBalance, Health, KillStreak } from "../codegen/index.sol";

contract AttackSystem is System {
  function attack(address defender) public {
    address attacker = _msgSender();
    PositionData memory attackerPosition = Position.get(attacker);
    PositionData memory defenderPosition = Position.get(defender);
    if (distance(attackerPosition.x, attackerPosition.y, defenderPosition.x, defenderPosition.y) > 1) {
      revert("can only attack another player at an adjacent position");
    }

    uint256 attackerBalance = CandyBalance.get(attacker);
    if (attackerBalance == 0) {
      revert("attacker must have candy to attack");
    }
    uint256 defenderBalance = CandyBalance.get(defender);
    if (defenderBalance == 0) {
      revert("defender must have candy to be attacked");
    }

    uint256 attackValue;
    if (attackerBalance > defenderBalance) {
      attackValue = attackerBalance - defenderBalance;
    } else {
      attackValue = 1;
    }

    uint32 defenderHealth = Health.get(defender);
    if (attackValue >= defenderHealth) {
      defenderHealth = 0;
    } else {
      defenderHealth -= 1;
    }
    Health.set(defender, defenderHealth);
    if (defenderHealth == 0) {
      CandyBalance.set(attacker, attackerBalance + defenderBalance);
      CandyBalance.set(defender, 0);

      KillStreak.set(attacker, KillStreak.get(attacker) + 1);
      KillStreak.set(defender, 0);
    }
  }
}