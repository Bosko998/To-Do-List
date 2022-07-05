let prviElementListe = document.getElementById("prviElementListe");
let drugiElementListe = document.getElementById("drugiElementListe");
let treciElementListe = document.getElementById("treciElementListe");
let sviElementi = document.getElementsByTagName("ul");
let list = document.querySelector('ul')


prviElementListe.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }

})



drugiElementListe.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }

})

treciElementListe.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }

})
