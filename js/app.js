document.addEventListener("DOMContentLoaded",()=>{
    console.log(200)

    class User{
        nom="Gius";
        prenom= "Mili";
    }
    
    let affichage = new User; /* important l'instance */
    console.log(affichage.nom)
    /* 
    schema de class
    */
    class Person{
       constructor(nom, prenom, age){
            this.nom = nom;
            this.prenom = prenom;
            this.age = age;
        }
        
        //getter
        getout(){
            return this.prenom, this.nom;
        }

    }
    const person_1 = new Person("Batman","Bruce", 25);
    console.log(person_1.nom+' '+person_1.prenom+' '+person_1.age);
 
    
    
    class Pres{
        title = 'Classes html, js and css - 2021';
        el = document.querySelector("title");
        heading = document.querySelector("header h1");
    }


    let setTitle = new Pres;
    console.log(setTitle.el)
    setTitle.el.innerText = setTitle.title;
    setTitle.heading.innerHTML = `<span aria-hidden="true">&#128077;</span>${setTitle.title}`;

    /* objet */
    console.log(typeof setTitle)
    let Prod = {
        marque : "Samsung",
        prix : 750,
        annee : 2021,
        dispo: true,
            getout(){
                return this.marque+' '+this.prix;
            }
    }
    /* pour affichder Samsung */
    let affichages = Prod.getout();
    console.log(affichages)

    let aside_title = ({
        title: "Page color palette",
        title_el: document.querySelector("aside h3")
    })
    
  console.log(aside_title.title)
  aside_title.title_el.innerText += aside_title.title
  /* les opérateurs
  =
  += ajouter
  -= l'inverse d'ajouter
  ++
  --
  !=
  !==
  == conditions
  === différent de type et de valeur
  <=
  >=
  ! négation
  &&
  ||
  ?
  */
 
  let x = true
  let y = false
  console.log(!x==y ? true : false) //condition ternaire
  console.log(!x)

  if(!x){
    console.log("ok")
  } 
  else{
      console.log("ko")
  }



    let elements = document.querySelector("figcaption h2")
    console.log(elements.innerText)
    let personnage = { /* données  et DOM */
        alias: "Flash",
        first_name: "Barry",
        speed: "?",
        color: "red",
        age: 25,
        dates: new Date().getFullYear()

    }
    function Chrono () {
        this.chronos = 0;
      
        setInterval(() => {
          //console.log(this.chronos++);
          //elements.innerText = this.chronos++;
            
          if(this.chronos >= 10){
                //document.location.assign('https://www.google.com')
                this.chronos = 0;
                
            }
           

         }, 1000);
      

      }
 
      
      
      let p = new Chrono();
 
    elements.innerText = `${personnage.alias} legend dc, age ${personnage.age} ans `
    console.log(personnage.alias)
    let footer_el = document.querySelector("footer p")
    //let dates = new Date().getFullYear()

    footer_el.innerHTML +=`${personnage.dates}`

    const prix = 250;
    const tva = 0.196 /* 19;6 */
    console.log(250 * tva / 100)
    ttc = 250 * tva / 100;
    console.log(prix + ttc)
    
    //formulaire
    let nom = document.querySelectorAll('input[type="text"]')[0]
    let buttonSubmit = document.querySelector("button")

    buttonSubmit.addEventListener("click",(e)=>{
        e.preventDefault();
        console.log(nom.value)
    })
    
    
    
})