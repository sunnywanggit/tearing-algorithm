// todo

const arr = [];
let data = [
  { id: 1, time: '1' },
  { id: 2, time: '2' },
  { id: 2, time: '3' },
];
for (const val of data) {
  arr.push(val.id);
}
const newArr = [];
const newArr2 = [];
for (let i = 0; i < arr.length - 1; i++) {
  if (newArr.indexOf(arr[i]) == -1) {
    newArr.push(arr[i]);
    newArr2.push(data[i]);
  }
}
data = newArr2;
