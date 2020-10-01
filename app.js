//GET 
const getText = () => {
  fetch('test.txt')
    .then((res) => {
      return res.text();
    })
  .then((data) => {
    console.log(data);
    document.querySelector('#output').innerHTML = data;
  })
  .catch((err) => console.log(err))
}

const getJSON = () => {
  fetch('posts.json')
    .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
      })
    .catch((err) => console.log(err));
}

document.querySelector('#button1').addEventListener('click', getText);
document.querySelector('#button2').addEventListener('click', getJSON)