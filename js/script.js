const objectList = [
  'ferro da stiro',
  'appendi abiti',
  'avvitatore',
  'viti',
  'tasselli da muro',
  'stucco',
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