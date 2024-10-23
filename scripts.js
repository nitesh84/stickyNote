let notes=[];
const text_remove = document.getElementById("remove");


function AddButon() {
  let div = document.createElement("div");
  div.classList.add("inner-div")
  let p = document.createElement("p");
  let cross_btn = document.createElement("button");
  let textArea=document.getElementById("text_box");
  let right=document.getElementById("right");
  let color=document.getElementById("select_color");
  cross_btn.innerText="X"
  div.appendChild(p);
  div.appendChild(cross_btn);
  if(textArea.value===""){
    alert("Enter Some text");
    return;
  }
    

  p.innerText=textArea.value;
  textArea.value="";
  notes.push(div);
  console.log(notes);
  div.style.backgroundColor=color.value;
  color.value="#FF0000";
//   div.style.width="100px";
//   div.style.height="100px";
   cross_btn.addEventListener("click",()=>{
    const index=notes.indexOf(div);
    if(index > -1 )
        notes.splice(index,1);

    right.innerHTML="";
    notes.map((ele)=>{
        right.appendChild(ele);
      })
      console.log(text_remove);
   if(notes.length!=0) text_remove.style.display="none"; 
   else text_remove.style.display="block"
      
   })

   
   console.log(text_remove);
   if(notes.length!=0) text_remove.style.display="none"; 
   else text_remove.style.display="block"

  notes.map((ele)=>{
    right.appendChild(ele);
  })
}


function DeleteButon() {
    
    notes.splice(0);
    
  
    const right = document.getElementById("right");
    right.innerHTML = "";

    text_remove.style.display = "block"; 
}