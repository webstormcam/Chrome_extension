
let myLeads=['dog','cat','rat']
const inputEl=document.getElementById('input-el')

const inputBtn=document.getElementById('input-btn')

const ulEl=document.getElementById('ul-el')

inputBtn.addEventListener('click',function(){
    console.log('Button clicked from addEventListener')
    myLeads.push(inputEl.value)
    for(let count=0;count<myLeads.length;count++){
        ulEl.innerHTML+='<li>'+myLeads[count]+'</li>'
    }
})


