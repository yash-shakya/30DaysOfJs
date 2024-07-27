// Day 9: DOM Manipulation

// Activity 1:Selecting and Manipulating Elements

// Task 1:
const para=document.getElementById("para");
para.innerText="Task 1 completed: text changed"

// Task 2:
const div=document.getElementsByClassName("color");
div[0].style.background="grey";


// Activity 2:

// Task 3: 
const body=document.getElementsByTagName("body");
const newdiv=document.createElement("div");
newdiv.innerText="New div Created by js";
body[0].appendChild(newdiv);

// Task 4: 
const list=document.getElementById("list");
const thursday=document.createElement("li");
thursday.innerText="thursday";
list.appendChild(thursday);


// Activity 3: Removing Elements

// Task 5:
const remove=document.getElementById("remove");
remove.remove();

// Task 6:
list.removeChild(list.lastChild);


// Activity 4: Modifying Attributes and Classes

// Task 7: 
const img=document.querySelector("img");
img.setAttribute("src","https://img-c.udemycdn.com/course/240x135/3641342_9c74.jpg");

// Task 8: Add and remove a CSS class to/from and HTML element
list.classList.add("days");
list.classList.remove("week");


// Activity 5: Event Handling

// Task 9:
const btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    const changed=document.getElementById("btn-change");
    changed.innerText="This content is changed";
})

// Task 10:
const brdr=document.getElementById("task10");
brdr.addEventListener("mouseover",()=>{
    brdr.style.border="2px solid"
})