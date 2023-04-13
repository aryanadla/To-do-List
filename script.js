
function handleSubmit(event,id){
event.preventDefault();
    const txt=document.getElementById(id).value;
    //alert("jo");
    // make a item in unordered list and add it
    //alert(txt);

    const newItem=document.createElement('li');
    newItem.textContent=txt;
    document.getElementById('list').appendChild(newItem);

    document.getElementById(id).value='';
}