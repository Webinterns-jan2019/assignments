(function (){
    let button=document.getElementById("addButton");
    button.addEventListener('click',addNumbers)
})()
function addNumbers(){
    let no1=Number(document.getElementById("num1").value);
    let no2=Number(document.getElementById("num2").value);
    document.getElementById("sum").value=no1+no2;

}