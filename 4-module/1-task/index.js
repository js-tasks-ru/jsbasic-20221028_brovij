function makeFriendsList(friends) {
  let list = document.createElement("ul")
  list.innerHTML = friends.map(friend => `<li> ${friend.firstName}&nbsp;${friend.lastName} </li>`).join('');
  return list
}
