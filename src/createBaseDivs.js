
class CreateDiv {
    basicDiv(divPosition, ...divName) {
        for(let i = 0; i < divName.length; i++){
            let element = document.createElement("div");
            element.setAttribute("id", divName);
            element.classList.add(divName);
            divPosition.appendChild(element)
        }
    } 
}

let theStart = new CreateDiv();

theStart.basicDiv(document.body, "content")