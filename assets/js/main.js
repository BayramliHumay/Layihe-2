
let topImgBtn = document.querySelector(".one");
let bottomImgBtn = document.querySelector(".two");
let btn = document.querySelector(".btn");
let myInput = document.querySelector(".input-text");
let addList = document.querySelector(".add-list");
let list = document.querySelector(".lists");
let plusbtn = document.querySelector(".plus-btn");
let listOne = document.querySelectorAll("li");
let xbtn = document.querySelector(".x-btn");
let yellowDiv = document.querySelector('.container');
let container = document.querySelector('.container1');
const h1Tag = document.querySelector('.text');

list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove()
  }
});
btn.addEventListener("click", () => {
  if (myInput.value === "") {
    alert("Deyer daxil et");
  } else {
    list.style.display = "block";
    addList.style.display = "block";
    let value = myInput.value;
    list.innerHTML += `<li style = "margin-left:315px;">${value} <button class="x-btn">X</button></li>`;
    list.style.display = "flex";
    list.style.flexDirection = "column";
    list.style.justifyContent = "space-evenly";
    yellowDiv.style.width = '49%';
    yellowDiv.style.marginLeft = '50px';
    container.style.width = '605px';
    myInput.style.width = '410px';
    list.style.fontSize = '20px';
    h1Tag.style.marginLeft = '165px';
    myInput.style.marginLeft = '80px';
    topImgBtn.style.marginLeft = '420px';
    btn.style.marginLeft = '200px';
    yellowDiv.style.marginTop = '195px'
    myInput.value = ''
    if (value.length > 40) {
      list.innerHTML += `<li>${value} <button class="x-btn">X</button></li>`;
      list.style.width = "40%";
    }
  }
});

if (
  bottomImgBtn.addEventListener("click", () => {
    topImgBtn.style.display = "block";
    bottomImgBtn.style.display = "none";
    let arr = [];
  const data = [...list.children];
  data.forEach(item =>{
    arr.push(item.innerHTML);
  })
  arr.sort();
  list.innerHTML = '';
  arr.forEach(item =>{
    let li = `<li style = "margin-left:310px;">${item}</li>`;
    list.innerHTML += li;
  })
  })
) {
}
if (
  topImgBtn.addEventListener("click", () => {
    bottomImgBtn.style.display = "block";
    topImgBtn.style.display = "none";
    let arr = [];
    const data = [...list.children];
    data.forEach(item =>{
      arr.push(item.innerHTML);
    })
    arr.sort();
    arr.reverse()
    list.innerHTML = '';
    arr.forEach(item =>{
      let li = `<li style = "margin-left:310px;">${item}</li>`;
      list.innerHTML += li;
    })
  })
) {
}