//1.
function addnum(){
    var a=5;
    var b=6;
    document.write(a+b);
}

//2.
function printn(){
    for(var a=1;a<=10;a++)
    document.writeln(a);
}

//3.
function printeven(){
    for(var a=11;a<21;a++)
    if(a%2==0)
    document.writeln(a);
}

//4.
function printodd(){
    for(var a=10;a<22;a++)
    if(a%2!=0)
    document.writeln(a);
}

//5.
function strlen(){
    var a='hello'
    document.write(a.length);
}

//6.
function array(){
    var a='hello'
    var b=[];
    for(var i=0;i<a.length;i++)
    b.push(a.charAt(i));
    document.writeln(b);
}

//7.
function factorial(){
    var fact;
    for(var a=5;a>=1;a--)
     fact=fact*a;
    document.write(fact);
}


//8.
function palindrome(){
   var a='dad'
   var b=[];
   for(var i=0;i<a.length;i++)
    b.push(a.charAt(i));
    var c=[];
    c=b.reverse();
    var i;
    while(i<a.length)
    if(b[i]==c[i])
    i++;
    if(i==a.length)
    document.write("String is palindrome");
    else
    document.write("String is not palindrome");
}

//9.
function storeint(){
    var a=[];
    for(var i=11;i<21;i++)
    if(i%2==0)
    a.push(i);
    document.write(a);
}

//10.
function randomnum(){
    document.write(Math.round(Math.random()*10));
}

//12.
function printnumbers(){
    for(var i=1;i<=100;i++)
    {
        if(i%3==0&&i%5==0)
        document.writeln("FizzBuzz");
        else if(i%3==0)
        document.writeln("Fizz ");
        else if(i%5==0)
        document.writeln("Buzz ");
        else
        document.writeln(i);
    }
}

//13.
function replace(){ 
    var a='hello525'
    for(var i=0;i<a.length;i++)
    {
        if(!isNaN(a.charAt(i)))
        document.writeln('#');
    else
    document.writeln(a.charAt(i));
    }
}

//14.





