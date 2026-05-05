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
    let removebtn=document.createElement("button");
    let editbtn=document.createElement("button");
    let doneBtn = document.createElement("button"); //✅
    let cancelBtn = document.createElement("button"); //✅

    span.textContent= input.value;

    removebtn.textContent="remove";
    editbtn.textContent="Edit";
    doneBtn.textContent="done"; //✅
    cancelBtn.textContent="cancle";

    Toastify({
     text: "Success",
     gravity: "top",
     position: "center"
    }).showToast();

    li.style.backgroundColor = "pink";

    li.appendChild(span);
    h4.appendChild(removebtn);
    h4.appendChild(editbtn);
    h3.appendChild(doneBtn); //✅
    h3.appendChild(cancelBtn); //✅
    li.appendChild(h4);
    div.appendChild(h3);
    ul.appendChild(li);

     h3.style.display = "none";
    removebtn.addEventListener("click", function () {
     li.remove();
     h3.remove(); //
     Toastify({
       text: "Removed",
       gravity: "top",
       position: "center",
     }).showToast();
});

   editbtn.addEventListener("click", function () {
    input.focus(); //✅
    btn.style.display= "none"; //✅
    h3.style.display="inline"; //✅
    // input.value= span.textContent; //✅
});

     doneBtn.addEventListener("click", function () { //✅
      span.textContent= input.value; //✅
         Toastify({
          text: "Edited",
          gravity: "top",
          position: "center"
         }).showToast();
      input.value="";
      h3.style.display="none"; //✅
      btn.style.display= "inline"; //✅
      console.log("done?");
      
     });
     
    cancelBtn.addEventListener("click", function () {
      input.value="";
      h3.style.display="none"; //✅
      btn.style.display= "inline"; //✅
     });
    input.value="";
});