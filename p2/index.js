fetch('https://doc.deepthought.education/files/ipx/list.json')
  .then(response => response.json())
  .then(data => console.log(data))
//   console.log(a);
//   const data=a.data;
//   console.log(data);