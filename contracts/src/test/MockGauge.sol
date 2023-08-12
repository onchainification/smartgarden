// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MockGauge is ERC20 {
  address public lpToken;

  address[] public rewardTokens;

  event RewardClaimed(address acccount, uint256 amount, uint256 timestamp);

  constructor(
    string memory _name,
    string memory _symbol,
    address _lpToken,
    address[] memory _rewardTokens
  ) ERC20(_name, _symbol) {
    lpToken = _lpToken;
    rewardTokens = _rewardTokens;
    rewardTokens.push(address(0));
  }

  function deposit(uint256 amount) external {
    _mint(msg.sender, amount);
    IERC20(lpToken).transferFrom(msg.sender, address(this), amount);
  }

  function withdraw(uint256 amount) external {
    _burn(msg.sender, amount);
    IERC20(lpToken).transfer(msg.sender, amount);
  }

  function getReward(address _account) external {
    uint256 amount = balanceOf(msg.sender);

    for (uint256 i = 0; i < rewardTokens.length; i++) {
      if (rewardTokens[i] == address(0)) break;
      IERC20(rewardTokens[i]).transfer(_account, amount);
      emit RewardClaimed(_account, amount, block.timestamp);
    }
  }
}
