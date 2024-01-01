function findFriendsCount(inputList) {
  // Create an object to store the number of friends for each person
  const friendsCount = {};

  // Iterate through each friendship in the input list
  for (const friendship of inputList) {
      for (const person of friendship) {
          // If the person is not in the object, initialize their count to 0
          if (!friendsCount[person]) {
              friendsCount[person] = 0;
          }

          // Increment the friend count for the person
          friendsCount[person]++;
      }
  }
  console.log(friendsCount);
  // Create an array to store the output friend count for each person
  const outputList = [];

  // Iterate through all person ids and retrieve their friend count from the object
  for (let personId = 1; personId <= Object.keys(friendsCount).length; personId++) {
      // If the person has no friends, assign 0; otherwise, retrieve the count
      outputList.push(friendsCount[personId] || 0);
  }

  return outputList;
}

// Example usage
const result = findFriendsCount([[2, 3], [3, 4], [5], [2, 6], [2, 4], [6, 1]]);
// console.log(result);