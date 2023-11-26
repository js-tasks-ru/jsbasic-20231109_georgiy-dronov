function makeFriendsList(friends) {
  const ulElement = document.createElement('ul');

  friends.forEach(element => {
    const liElement = document.createElement('li')
    liElement.textContent = `${element.firstName} ${element.lastName}`
    ulElement.appendChild(liElement)
  });

  return ulElement
}
