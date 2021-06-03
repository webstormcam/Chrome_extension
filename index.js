
let myLeads=[]
const inputEl=document.getElementById('input-el')
const inputBtn=document.getElementById('input-btn')
const ulEl=document.getElementById('ul-el')
const leadsFromLocalStorage=JSON.parse(localStorage.getItem('myLeads'))
const deleteBtn=document.getElementById('delete-btn')
const tabBtn=document.getElementById('tab-btn')




if (leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)

}

 deleteBtn.addEventListener('dblclick',function(){
    localStorage.clear()
    myLeads=[]
    ulEl.innerHTML=''
    render(myLeads)
})


tabBtn.addEventListener('click',function(){
chrome.tabs.query({active:true,currentWindow:true},function(tabs){
console.log(tabs)
myLeads.push(tabs[0].url)
localStorage.setItem('myLeads',JSON.stringify(myLeads))
render(myLeads)
})
})





inputBtn.addEventListener('click',function(){
    myLeads.push(inputEl.value)
    inputEl.value=''
    localStorage.setItem('myLeads',JSON.stringify(myLeads))
    render(myLeads)
})



function render(leads){
    let listItems=''
    for(let count=0;count<leads.length;count++){
        listItems+=`
        <li>
            <a target='_blank' href="${leads[count]}">
            ${leads[count]}
                 </a>
            </li>
        `
    }
    ulEl.innerHTML=listItems
}



