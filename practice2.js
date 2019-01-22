function addnum(){
	var a=5;
	var b=3;
	document.write(a+b);
}

function println(){
	for(var a=1;a<=10;a++)
	document.write(a);
}

function printeven(){
	for(var a=11;a<=21;a++)
		if(a%2==0)
	document.write(a);
}

function printodd(){
	for(var a=10;a<=22;a++)
	if(a%2!=0)
	document.write(a);
}

function strlen(){
    var a="hello"
    document.write(a.length);
}

function array(){
	var a='hello';
	document.writeln(a.split(''));
}

function factorial(){
    var fact=1;
    for(var a=5;a>=1;a--)
    fact=fact*a;
    document.write(fact);
}

//8.
function palindrome(){
	var a='dad';
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
	document.write("string is palindrome");
	else
	document.write("string is not palindrome");
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
	var a='hello525';
	for(var i=0;i<a.length;i++)
	{
		if(!isNaN(a.charAt(i)))
		document.writeln('#');
	else
	document.writeln(a.charAt(i));
	}
}





	

	