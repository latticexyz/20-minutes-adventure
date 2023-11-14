// SPDX-License-Identifier: MIT
pragma solidity >=0.8.21;

function distance(uint32 fromX, uint32 fromY, uint32 toX, uint32 toY) pure returns (uint32) {
  uint32 deltaX = fromX > toX ? fromX - toX : toX - fromX;
  uint32 deltaY = fromY > toY ? fromY - toY : toY - fromY;
  return deltaX + deltaY;
}