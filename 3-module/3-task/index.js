// Вдохновлялся примером из учебника по аналогичной задаче. 
//Возникли трудности с использованием map, все хотел туда вставить if else для проверки. 
//Но как оказалось можно только тернарником.

function camelize(str) {
  return str.split('-').map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
  .join('');
}