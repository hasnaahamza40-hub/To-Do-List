// let input = document.getElementById("taskInput");
// let btn= document.getElementById("bn");
// let ul= document.querySelector(".parent");

// btn.addEventListener("click" , function (e) {
//     let li = document.createElement("li");
//     let span = document.createElement("span");
//     let div = document.createElement("div");
//     let h4 = document.createElement("h4");
//     let but=document.createElement("button");
//     let butto=document.createElement("button");
//     span.textContent= input.value;
//     li.style.backgroundColor = "pink";
//     li.appendChild(span);
//     li.appendChild(h4);
//     h4.appendChild(but);
//     h4.appendChild(butto);
//     ul.appendChild(li);
//     ul.appendChild(div);

//     but.addEventListener("click", function () {
//      li.remove();
// });

//    butto.addEventListener("click", function () {
//     let q = document.createElement("input");
//     div.appendChild(q); 
//     q.addEventListener("click", function () {
//       let val = document.createElement("button");
//       let val2 = document.createElement("button");
//     div.appendChild(val); 
//     div.appendChild(val2); 
//      val.textContent="done";
//      val.addEventListener("click", function () {
//       span.textContent= q.value;
//       div.remove();
//      });
//     val2.textContent="cancle";
//     val2.addEventListener("click", function () {
//       q.remove();
//       val.remove();
//       val2.remove();
//      });
//     });
// });
//     but.textContent="remove";
//     butto.textContent="Edit";
//     input.value="";
// });


let input = document.getElementById("taskInput");
let btn= document.getElementById("bn");
let ul= document.querySelector(".parent");
let div= document.querySelector(".par");

btn.addEventListener("click" , function (e) {
    let li = document.createElement("li");
    let span = document.createElement("span");
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    let but=document.createElement("button");
    let butto=document.createElement("button");
    let val = document.createElement("button"); //✅
    let val2 = document.createElement("button"); //✅
    span.textContent= input.value;

    Toastify({
  text: "Success",
  gravity: "top",
  position: "center"
}).showToast();

    li.style.backgroundColor = "pink";
     div.appendChild(h3);
    li.appendChild(span);
    li.appendChild(h4);
    h4.appendChild(but);
    h4.appendChild(butto);
    ul.appendChild(li);

    but.addEventListener("click", function () {
     li.remove();
        Toastify({
  text: "Removed",
  gravity: "top",
  position: "center",
}).showToast();
});

   butto.addEventListener("click", function () {
    input.focus(); //✅
    btn.style.display= "none"; //✅
    h3.style.display="inline"; //✅
  
    h3.appendChild(val); //✅
    h3.appendChild(val2); //✅

     val.textContent="done"; //✅
     val.addEventListener("click", function () { //✅
      span.textContent= input.value; //✅
         Toastify({
          text: "Edited",
          gravity: "top",
          position: "center"
         }).showToast();
      input.value="";
      h3.style.display="none"; //✅
      btn.style.display= "inline"; //✅
     });
     
    val2.textContent="cancle";
    val2.addEventListener("click", function () {
      input.value="";
      h3.style.display="none"; //✅
      btn.style.display= "inline"; //✅
     });
  
});
    but.textContent="remove";
    butto.textContent="Edit";
    input.value="";
});