let inputBtn = document.getElementById("input-btn")

let myLeads = []


let ulEl = document.getElementById("ul-el")

let inputEl = document.getElementById("input-el")


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(inputEl.value)
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
