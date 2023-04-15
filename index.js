let inputBtn = document.getElementById("input-btn")

let myLeads = []


let ulEl = document.getElementById("ul-el")

let inputEl = document.getElementById("input-el")
let deleteBtn = document.getElementById("delete-btn")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


deleteBtn.addEventListener("click", function(){
    myleads = []
    localStorage.clear()
    ulEl.innerHTML = ""
})

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    inputEl.value = ""
    renderLeads()
})
function renderLeads(){
    let listItems = ""

    for(let i = 0; i < myLeads.length; i++){
        listItems += "<li> <a target='_blank' href='"  + myLeads[i] + "'>"   + myLeads[i] + "</a></li>" 

        
    }
    
    ulEl.innerHTML = listItems
}
