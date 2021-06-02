
let myLeads=[]
const inputEl=document.getElementById('input-el')
const inputBtn=document.getElementById('input-btn')
const ulEl=document.getElementById('ul-el')


inputBtn.addEventListener('click',function(){
    console.log('Button clicked from addEventListener')
    myLeads.push(inputEl.value)
    inputEl.value=''
    renderLeads()
})

function renderLeads(){
    let listItems=''
    for(let count=0;count<myLeads.length;count++){
        listItems+='<li>'+myLeads[count]+'</li>'
    }
    ulEl.innerHTML=listItems
}



