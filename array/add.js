//adding two numbers-----------------------------

function add()
{
    var a=prompt("Ënter a");
    var b=prompt("Enter b");
    var c=Number(a)+Number(b);
    console.log(c);

}

//printing from 1-10-------------------------
function print()
{
    var i=1;
    while(i<=10)
    {
        console.log(i);
        i++;
    }
}

//even numbers from 11 to 21-------------------

function even()
{
    var i=11;
    while(i<=21)
    {
        if(i%2==0)
        {
            console.log(i);
        }
        i++;
    }

}

//odd numbers from 10-21---------------------

function odd()
{
    var i=10;
    for(i=10;i<=21;i++)
    {
        if(i%2!=0)
        {
            console.log(i); 
        }
       
    }
}

//to get the length of the given string----------------------------

function length()
{
    var a=prompt("Enter a string");
    var b=a.length;
    console.log(b);
}

//factorial of a number ---------------------------------------

function fact()
{
    var num=prompt("Enter the number");
    var fact=1;
    var a=1;
    for(a=1;a<=num;a++)
    {
        fact=fact*a;
    }
    console.log(fact);
}
//palindrome--------------------------

function pal()
{
    var rem,temp,final=0;
    var number=prompt("ënter the number");
    temp=number;
    while(number>0)
    {
        rem=number%10;
        number=parseInt(number/10);
        final=final*10+rem;
    }
    if(final==temp)
    {
        alert("palindrome");
    }
    else{
        alert("not a palindrome");
    }

}

//storing odd in array------------------

function oddarray()
{
    var a=[];
    var i=11;
    for(i=11;i<=21;i++)
    {
        if(i%2==0)
        {
            a=i;
        }
        console.log(a);
    }
}

//random numbers between 1 to 10--------------------
function random()
{
    console.log(Math.random()*10)+1;
}

//given a year return the century it is in---------------------------------------------

function  year()
{
    var year=prompt("Enter the year");
     if (year<=100)
     {
         console.log("1sr century");
     }
     else if(year%100==0)
     {
         console.log(year/100,"century");
     }
     else{
         console.log(year/100+1,"century");
     }
        
}

//replace the digits with #--------------------
function replace()
{
    var a=prompt("Enter a string");
    var replace=a.replace(/0|1|2|3|4|5|6|7|8|9/g,"#");
    console.log(replace);
}

//area of a polygon-----------------------


function areaSquare()
{
var a=prompt("Enter the side of the polygon");
var answer = a*a;
console.log(answer);
}

//printing fizz,bizz,fiibizz for the multiples of 3,5 and both----------------------------
function print()
{
    var i=0;
    for(i=1;i<=100;i++)
    {
         if(i%3==0&&i%5==0)
        {
            console.log("FizzBizz");
        }
        else if(i%3==0)
        {
            console.log("fizz");
        }
        else if(i%5==0)
        {
            console.log("bizz");
        }
       
        else
        {
            console.log(i);
        }
    }
}

//
function adjacent()
 {
    var arr = [3,6,-2,-5,7,3];
     var x=0;
     var y=0;
     var p=0;
     for(var i=0;i<arr.length;i++)
     {
       x=arr[i];
       y=arr[i+1];
       if(x*y>p)
       {
        p=x*y;
       }
     }
    console.log(p);
}