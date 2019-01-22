function array(){
    var a='hello'
    var b=[];
    for(var i=0;i<a.length;i++)
    b.push(a.charAt(i));
    document.writeln(b);
}