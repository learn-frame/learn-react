const userList = [
  { name: '张三', age: 18 },
  { name: '李四', age: 19 },
  { name: '王五', age: 20 },
  { name: '赵六', age: 30 },
];

const sortBy = key => (a, b) =>
  a[key].localeCompare(b[key]);

console.log(userList.sort(sortBy('name')));

