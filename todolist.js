(function(){
   var ul = document.getElementById("uladd");
   var count = ul.childElementCount;
   console.log(count);
  console.log("Hi");
    var clrbutton = document.getElementById("clear");
    clrbutton.addEventListener('click',remove);
    var input = document.getElementById("additem");
    input.addEventListener('keydown',keydownfunction);
    ul.addEventListener('click',assignlistener);

    function additem(val)
    {
        console.log("Keydown enter")
        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.id = "checkbox"+count;
        var label = document.createElement('label');
        var a = document.createElement('a');
        var hr = document.createElement('hr');
        var labelText = document.createTextNode(val);
        a.innerHTML="Delete";
        a.id = "delete"+count++;
        label.appendChild(labelText);
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(a);
        li.appendChild(hr);
        var ul = document.getElementById("uladd");
        ul.appendChild(li);
        a.href='#';
        a.setAttribute('class','d');
    }

    function assignlistener(event)
    {
        if (event.target.type == 'checkbox')
        {
            var id = event.target.id;
            checkboxEffect(id);
        }
        else if(event.target.classList.contains("d"))
        {
              var id = event.target.id;
              deleteElement(id);
        }
    }

function remove()
{
    document.body.innerHTML=" ";
}
function keydownfunction(event)
{
  
    if(event.keyCode == 13)
    {
        let val = document.getElementById("additem").value;
        additem(val);
    }
}

function checkboxEffect(id)
{
    var checkbox = document.getElementById(id);
    var label = checkbox.nextSibling;
    if(checkbox.checked)
    {
        label.classList.add('labelStyle');
    }
    else 
    {
        label.classList.remove('labelStyle');
    }
}
function deleteElement(id)
{
     var deleteElement = document.getElementById(id);
     deleteElement.parentNode.parentNode.removeChild(deleteElement.parentNode);
}
})();

