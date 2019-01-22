(function(){
    var ul=document.getElementById("a");
    ul.addEventListener('click',assignListner);
    var count=ul.childElementCount;
    console.log(count);
    var clrbutton=document.getElementById("but");
    clrbutton.addEventListener('click',remove);
    var input=document.getElementById('text');
    input.addEventListener("keydown",keydownfunction);
    
    
function remove()
{
    document.body.innerHTML="";
}
function keydownfunction(event)
{
    if(event.keyCode==13)
    {
        console.log("ënter pressed")
        let val=document.getElementById("text").value;
        addItems(val);
    }

}
function addItems(val)
{
    
    var li=document.createElement('li');
    var checkbox=document.createElement('input');
    checkbox.type="checkbox";
    checkbox.id="check"+count;
    var a=document.createElement('a');
    a.href="#";
    var hr=document.createElement('hr');
    var label=document.createElement('label');
    a.innerHTML="delete";
    a.classList.add("deleteStyle")
    a.id="delete"+count;
    var labelText=document.createTextNode(val);
    label.appendChild(labelText);
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(a);
    li.appendChild(hr);
    var ul=document.getElementById("a");
    ul.appendChild(li);
  
    
    count++;
    

}

function assignListner(event)
{
    if(event.target.type=='checkbox')
    {
        var id=event.target.id;
        checkboxEffect(id);

    }
    else if(event.target.classList.contains("deleteStyle")){
        var id=event.target.id;
        console.log(id)
        deleteElement(id);
    }
}
function  deleteElement(id){
    var deleteEle=document.getElementById(id);
    deleteEle.parentNode.parentNode.removeChild(deleteEle.parentNode);
}

function checkboxEffect(id)
{
    console.log(id);
    var checkbox=document.getElementById(id);
    var label=checkbox.nextSibling
    if(checkbox.checked)
    {
        label.classList.add("labelStyle");
    }
    else{
        label.classList.remove("labelStyle");
    }
}
})();
