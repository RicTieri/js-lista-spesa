const objectList = [
  'punte diamantate',
  'avvitatore',
  'saldatore a stagno',
  'viti',
  'tasselli da muro',
  'stucco',
  'barattoli per conserve',
]

let i=0;

const divCard = document.querySelector('div.card');
const printList = document.createElement('ul');


divCard.appendChild(printList)

while (i < objectList.length){
  const listItem = document.createElement('li');
  printList.appendChild(listItem);
  listItem.append(objectList[i]);
  i++;
}