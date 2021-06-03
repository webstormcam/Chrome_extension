
let myLeads=[]
const inputEl=document.getElementById('input-el')
const inputBtn=document.getElementById('input-btn')
const ulEl=document.getElementById('ul-el')
let leadsFromLocalStorage=JSON.parse(localStorage.getItem('myLeads'))

if (leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    renderLeads()

}





inputBtn.addEventListener('click',function(){
    myLeads.push(inputEl.value)
    inputEl.value=''
    localStorage.setItem('myLeads',JSON.stringify(myLeads))
  
    renderLeads()

   
})



function renderLeads(){
    let listItems=''
    for(let count=0;count<myLeads.length;count++){
        listItems+=`
        <li>
            <a target='_blank' href="${myLeads[count]}">
            ${myLeads[count]}
                 </a>
            </li>
        `
    }
    ulEl.innerHTML=listItems
}



