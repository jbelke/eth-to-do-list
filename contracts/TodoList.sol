// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TodoList {
    //keep track of number of task
    uint256 public taskCount = 0; //state variable

    //Modelling the tasks using structures
    struct Task {
        uint256 id;
        string content;
        bool completed;
    }

    //how to access storage on blockchain and store the data there?
        //--> we will create a new state variable just like "taskCount"

    mapping(uint256 => Task) public tasks;   //id->task that we will store

    function createTask(string memory _content) public{
        taskCount++;
        tasks[taskCount]=Task(taskCount,_content,false);
    }

    


}
