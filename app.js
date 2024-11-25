let input = document.querySelector("input");
let add = document.querySelector(".add");
let ul = document.querySelector("ul");


add.addEventListener("click", function () {
    let list = document.createElement("li");
    list.innerText=input.value;

    let delet = document.createElement("button");
    delet.innerText ="Delete";
    delet.classList.add("delete");

    list.appendChild(delet);
    ul.appendChild(list);
    input.value="";
});

ul.addEventListener("click",function (e){
    if(e.target.nodeName == "BUTTON"){
        let par = e.target.parentElement;

        par.remove();
    }

});


// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function (){
//         let par = this.parentElement;
//         par.remove();
//     });
// }