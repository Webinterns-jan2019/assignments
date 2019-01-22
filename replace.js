function demo(){ 
    var a='hello525'
    for(var i=0;i<a.length;i++)
    {
        if(!isNaN(a.charAt(i)))
        document.writeln('#');
    else
    document.writeln(a.charAt(i));
    }
}