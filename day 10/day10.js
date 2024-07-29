// Day 10: Event Handling

// Activity 1: Basic Event Handling

// Task 1:
const changeBtn=document.getElementById("change-btn");
changeBtn.addEventListener("click",()=>{
    const para=document.getElementById("task1");
    para.innerText="Changed"
});

// Task 2:
const img=document.getElementById("task2");
img.addEventListener("dblclick",()=>{
    img.style.visibility="hidden"
});


// Activity 2: Mouse Events

// Task 3:
const para=document.getElementById("task3");
para.addEventListener("mouseover",()=>{
    para.style.background="grey"
});

// Task 4:
para.addEventListener("mouseout",()=>{
    para.style.background="none"
});


// Activity 3: Keyboard Events

// Task 5:
const inp=document.getElementById("task5");
inp.addEventListener("keydown",()=>{
    const outp=document.getElementById("output");
    outp.innerText=`You pressed "${event.key}"`;
});

// Task 6:
inp.addEventListener("keyup",()=>{
    const display=document.getElementById("task6");
    display.innerText=`you entered ${event.target.value}`;
});


// Activity 4: Form Events

// Task 7:
const form=document.getElementById("task7");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const fname=document.getElementById("fname").value;
    const lname=document.getElementById("lname").value;
    console.log(fname,lname);
});

// Task 8:
const sel=document.getElementById("task8");
sel.addEventListener("change",()=>{
    const selp=document.getElementById("select");
    selp.innerText=sel.value;
})


// Activity 5:

// Task 9:
const itemList = document.getElementById("item-list");
const p = document.querySelector("#list");
itemList.addEventListener("click",(event)=>{
    if (event.target && event.target.matches("li.list-item")) {
        console.log("Clicked on: " + event.target.textContent);
        p.innerText = "Clicked on: " + event.target.textContent;
    }
});

// Task 10:
const add = document.querySelector("#add-item");
add.addEventListener("click",()=>{
    const newitem = document.createElement("li");
    newitem.classList.add("list-item");
    newitem.textContent = "new item";
    itemList.appendChild(newitem);
})