function demo(){
    for(var a=0;a<100;a++)
    {
        if(a%3==0&&a%5==0)
        document.writeln('Fizzbuzz')
        else if(a%5==0)
        document.writeln('fizz');
        else if(a%5==0)
        document.writeln('buzz');
        else
        document.writeln(a);
    }
}