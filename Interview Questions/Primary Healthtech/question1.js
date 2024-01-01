function findFriendsCount(inputList) {
  const friendsCount = {}

  for (const friendship of inputList) {
    for (const person of friendship) {
      if (!friendsCount[person]) {
        friendsCount[person] = 0
      }

      if (friendship.length > 1) {
        friendsCount[person]++
      }
    }
  }
  console.log(friendsCount)
  const outputList = []

  const maxPersonId = Object.keys(friendsCount).length
  for (let personId = 1; personId <= maxPersonId; personId++) {
    outputList.push(friendsCount[personId] || 0)
  }

  return outputList
}

// Example usage
const result = findFriendsCount([[2, 3], [3, 4], [5], [2, 6], [2, 4], [6, 1], [5, 1, 2]])
console.log(result)
