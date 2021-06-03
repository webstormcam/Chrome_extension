
let myLeads=[]
const inputEl=document.getElementById('input-el')
const inputBtn=document.getElementById('input-btn')
const ulEl=document.getElementById('ul-el')




inputBtn.addEventListener('click',function(){
    console.log('Button clicked from addEventListener')
    myLeads.push(inputEl.value)
    inputEl.value=''
    localStorage.setItem('myLeads',JSON.stringify(myLeads))
    let leadsFromLocalStorage=JSON.parse(localStorage.getItem('myLeads'))



    renderLeads()
    console.log(leadsFromLocalStorage)
   
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



