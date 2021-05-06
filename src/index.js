console.log(data);
// We create individual components here

// DOG LIST BUTTON
function addDogListButton(dog){
    let dogList = document.querySelector(".dogs-list")
    let button = document.createElement("li")
    button.setAttribute("class", "dogs-list__button")
    button.setAttribute("id", dog.id)
    button.innerText = dog.name

    button.addEventListener("click",displayDog)
    dogList.append(button)
}


function displayDog(){
    
    let dataLocator = null
    for(i = 0; i < data.length; i++){
      
        if (parseFloat(data[i].id) === parseFloat(this.id)) {
            dataLocator = i
            break;
        }
    }

    let cleanContent = document.querySelector(".main__dog-section")
    cleanContent.remove()

    let main = document.querySelector(".main")
    let mainDogSection = document.createElement("section")
    mainDogSection.setAttribute("class", "main__dog-section")

    main.append(mainDogSection)

    let h2Name = document.createElement("h2")
    h2Name.innerText = data[dataLocator].name

    let dogImageLink = data[dataLocator].image

    let dogImage = document.createElement("img")
    dogImage.setAttribute("style", "width:400px; height:300px")
    dogImage.setAttribute("src", dogImageLink)

    // main__dog-section__desc
    let dogDesc = document.createElement("div")
    dogDesc.setAttribute("class", "main__dog-section__desc")

    let h3Bio = document.createElement("h3")
    h3Bio.innerText = "Bio"

    let bioContent = document.createElement("p")
    bioContent.innerText = data[dataLocator].bio

    // main__dog-section__btn
    let mainButton = document.createElement("div")
    mainButton.setAttribute("class","main__dog-section__btn")
    
    let paraEl = document.createElement("p")
    let emEl = document.createElement("em")
    emEl.innerText = "Is naughty? "

    let spanEl = document.createElement("span")
    let badDogButton = document.createElement("button")
    
    if(data[dataLocator].isGoodDog === true) {
        spanEl.innerText = " No "
        badDogButton.innerText = "Good Dog"
    }
    else {
        spanEl.innerText = " Yes "
        badDogButton.innerText = "Bad Dog"
    }
    
    badDogButton.addEventListener("click", selectGoodBadDog)

    mainDogSection.append(h2Name, dogImage, dogDesc, mainButton)
    dogDesc.append(h3Bio, bioContent)
    mainButton.append(paraEl, badDogButton)
    paraEl.append(emEl, spanEl)
}

function selectGoodBadDog(){
    let badDogButton = document.querySelector(".main__dog-section__btn button")
    let spanEl = document.querySelector(".main__dog-section__btn span")

   if (badDogButton.innerText === "Bad Dog"){
    spanEl.innerText = " No "
    badDogButton.innerText = "Good Dog"
   }
   else{
    spanEl.innerText = " Yes "
    badDogButton.innerText = "Bad Dog"
   }
}

// Generate the page

for (dog of data){
    addDogListButton(dog)
}

