
function handleSubmit(event,id){
event.preventDefault();
    const txt=document.getElementById(id).value;
    const newItem=document.createElement('li');
    newItem.textContent=txt;
    document.getElementById('list').appendChild(newItem);
    document.getElementById(id).value='';
}