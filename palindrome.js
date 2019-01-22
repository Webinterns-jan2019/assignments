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