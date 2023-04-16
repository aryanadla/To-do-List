
function handleSubmit(event,id){
event.preventDefault();
    const txt=document.getElementById(id).value;
    const newItem=document.createElement('li');
    newItem.innerHTML=`<strong>${txt}</strong>`;
    const btn=document.createElement('button');
    btn.classList.add('btn');
    btn.textContent='Done';
    btn.addEventListener('click',function(){
    newItem.remove();
    });
    newItem.appendChild(btn);
    document.getElementById('list').appendChild(newItem);
    document.getElementById(id).value='';

}