showNotes();
let add=document.getElementById("add");
let del=document.getElementById("del");
let notes=localStorage.getItem("notes");
let topic=document.getElementById("topic");
add.addEventListener("click",func1)
function func1(){
    let addText=document.getElementById("addText");
    
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesobj=[];
    }
    else
    {
        notesobj=JSON.parse(notes);
    }
    // console.log(txt);
    let myObj={
         txt:addText.value,
         head:topic.value
    }
    notesobj.push(myObj);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    addText.value="";topic.value="";
    showNotes();
}
function func2(index) {
    let rem = document.getElementById(`card${index}`);
    rem.remove();
    let notes=localStorage.getItem("notes");
    notesobj=JSON.parse(notes);
    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    showNotes();
}
function showNotes() {
    let notes=localStorage.getItem("notes");
    let notesSsection=document.getElementById("notes")
    if(notes==null)
    {
         let empty =document.createElement("p");
         empty.innerText=`Nothing to show!!Use "Add notes" section to add notes`;
         notesSsection.appendChild(empty);
    }
    else
    {   
        let notesobj=JSON.parse(notes);
        let html="";
        notesobj.forEach(function(element,index){
           html+=`<div class="card mx-4 my-2" id="card${index}"style="width: 18rem;">
                     <div class="card-body">
                        <h5 class="card-title"><b>${element.head}</b></h5>
                        <p class="card-text">${element.txt}</p>
                        <a href="#" onclick="func2('${index}')" class="btn btn-primary" id="del">Delete Note</a>
                     </div>
                 </div>`;
        });
        notesSsection.innerHTML=html;
    }
}

let search=document.getElementById("search")
search.addEventListener("input",func3)
function func3() {
    
    let stxt=search.value;
    let cards=document.getElementsByClassName("card");
    console.log(typeof cards);
    Array.from(cards).forEach(function(element){
        let para=element.getElementsByTagName('p');
        
        if(para[0].innerText.indexOf(stxt)==-1)
        {
            element.style.display="none";
        }
        else
        {
            element.style.display="block";
        }
    })
}