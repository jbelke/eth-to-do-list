// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Token{
    string public name="dank token";
    string public symbol="DAPP";
    uint256 public decimals=18;
    uint256 public totalSupply;


    constructor()  public {
        totalSupply=1000000*(10**decimals);
    }
}