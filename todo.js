(function(){
    var ul=document.getElementById("unlist");
    console.log(count);
    var count=ul.childElementCount;
    var clrbutton=document.getElementById("clear");
    clrbutton.addEventListener('click',remove);
    var input=document.getElementById("input");
    input.addEventListener('keydown',keydownFunction);
    ul.addEventListener('click',assignListener);

    function addItems(val){
        var li=document.createElement('li');
        var checkbox=document.createElement('input');
        checkbox.id="check"+count;
        var label=document.createElement('label');
        var a=document.createElement('a');
        a.id="delete"+count++;
        var hr=document.createElement('hr');
        checkbox.type="checkbox";
        var labelText=document.createTextNode(val);
        a.innerHTML="Delete";
        label.appendChild(labelText);
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(a);
        li.appendChild(hr);
        var ul=document.getElementById("unlist");
        ul.appendChild(li);
        a.classList.add('delete');
        a.href="#";
        a.setAttribute('class','d')
    }
    function remove(){
        document.body.innerHTML="";
    }
    function keydownFunction(event){
        if(event.keyCode==13)
        {
            let val=document.getElementById("input").value;
            addItems(val);
        }
    }

    function assignListener(event){
        if(event.target.type=='checkbox'){
            var id=event.target.id;
            checkboxEffect(id);
        }
        else if(event.target.classList.contains("d")){
            var id=event.target.id;
            deleteElement(id);
        }
    }
    function checkboxEffect(id){
        var checkbox=document.getElementById(id);
        var label=checkbox.nextSibling;
        if(checkbox.checked){
            label.classList.add('labelStyle');
        }
        else{
            label.classList.remove('labelStyle');
        }
    }
    function deleteElement(id){
        var deleteEle=document.getElementById(id);
        deleteEle.parentNode.parentNode.removeChild(deleteEle.parentNode);
    }
})();




