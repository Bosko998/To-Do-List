let inputID = document.getElementById("inputID");
let dugme = document.getElementById("mojeDugme");
let mainUL = document.getElementById("mainUl");
let sviRadioDugmici = document.getElementsByName("sviRadioDugmici");
let klasaUl = document.querySelectorAll('.firstElement'); 
let listItems = document.getElementsByTagName("li");
let sviListElementi = document.querySelectorAll(".firstElement")

    dugme.addEventListener("click",()=>{
    let noviElement = document.createElement("li");
    let vrednostInputa = document.getElementById("inputID").value;
    let t = document.createTextNode(vrednostInputa);
    noviElement.appendChild(t);
    
            for(let i = 1 ; i < sviRadioDugmici.length ; i++){
            if(vrednostInputa !== '' && sviRadioDugmici[0].checked ){ 
                console.log("radi prvi")
                // document.getElementById("mainUl").appendChild(noviElement);
                noviElement.setAttribute('id', 'idNovogElementa');
                noviElement.classList = 'firstElement';
                mainUL.insertBefore(noviElement, mainUL.firstChild);
                document.getElementById("inputID").value = "";
                
           
            }else if(vrednostInputa !== '' && sviRadioDugmici[1].checked ){
                console.log("radi drugi")   
                // document.getElementById("mainUl").appendChild(noviElement);
                noviElement.setAttribute('id', 'idNovogElementa');
                noviElement.classList = 'firstElement';
                mainUL.insertBefore(noviElement, mainUL.lastChild);
                document.getElementById("inputID").value = "";
               

            }else{ 
                alert("Unos ne sme biti prazno polje");
            } 
            
        } 

        noviElement.addEventListener("click",()=>{
            noviElement.style.display = "none";
        });
        
});


sviListElementi.forEach(el => {
    el.addEventListener("click",()=>{
        el.style.display = "none";
            
        }); 
});
// for(let i = 0 ; i < sviListElementi.length ; i++){
//     sviListElementi[i].addEventListener("click",()=>{
//         sviListElementi[i].style.display = "none";
    
// }); 
// } 

function writeOnEnter(event){
    event.preventDefault();
    if(event.keyCode === 13){
        dugme.click();
        inputID.focus();
    }
}
inputID.addEventListener("keyup", writeOnEnter)








