let wrapper = document.querySelector(".wrapper");
let signupBtn = document.querySelector(".signupBtn");
let loginBtn = dokument.querySelector(".loginBtn");

signupBtn.addEventListener("click", ()=>{
    wrapper.classList.add("active");
});


loginBtn.addEventListener("click", ()=>{
    wrapper.classList.remove("active");
});