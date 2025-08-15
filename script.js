const reviews = [
    {
        id: 1,
        name: 'Jayden John',
        job: 'Student',
        img: '#',
        text: 'Genesis is great at explaining tough concepts, whether it is math, coding, or even swimming techniques. She is always willing to help and still manages to stay focused on her own goals.',
    },
    {
        id: 2,
        name: 'Lisa Perez',
        job: 'Teacher',
        img: '#',
        text: 'Genesis consistently delivers top-notch work, whether it is crafting unique short stories or writing debate essays. Her diligence and sharp mind make her one of the brightest students I have worked with.',
    },
    {
        id: 3,
        name: 'Micheal Trainer',
        job: 'Teacher',
        img: '#',
        text: 'As a teacher, I am constantly impressed by how quickly Genesis grasps complex concepts. Her ability to excel in math and coding, while maintaining a 97% average, speaks volumes about her intelligence and dedication to learning.',
    },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

// Load initial item
window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


nextBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length - 1){
        currentItem = 0
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1
    }
    showPerson(currentItem)
});















 console.log("Hello World!");

 //String has quotes/Number no quotes
//  let myTest = "123";
//  console.log(typeof myTest);

//  console.log(10 + " eggs");
//  console.log(10 + 8 + " eggs");
// // console.log("eggs " + 10 + 8)

// //Both conditions need to be true
// console.log(7>3)&&(5>2);

// //Only one condition must be true
// console.log(10>3)||(10>12);

// //Logical not
// console.log(!5>3);

 function introduction(name,age){
     console.log("Hello, my name is "+ name + " and I am "+ age + " years old.");
 }

 introduction("Genesis",14)

 const hour = new Date().getHours();
 let greeting = "";

 if (hour<12){
     greeting = "Good Morning ☀";
 }else if(hour<18){
     greeting = "Good Afternoon 🌥";
 }else{
     greeting = "Good Evening 🌙";
 }

 document.getElementById("greeting").innerText = greeting;