function add()
{
    var a='HPE MANGALORE';
    //console.log(a.substring(2,5));
    // console.log( "\nslice a=",a.slice(2,5),"\n");
     console.log(a)
     
     var b='HPE MANGALORE';
     console.log(a.split(''));
   
     // console.log(a.split('  '));
     //console.log(a.split(','))
    
     var c=["html","css","js","PHP","Read JS","Node js"];
     console.log(c.reverse());
    
     // var b=["html","css","js","PHP","Read JS","Node js"];
    // console.log("\nsplice b=",b.splice(2,2),"\n");
    // console.log("b",b);
    var a =["H","P","E","","M","A","N","G","A","L","O","R","E","",""];
    console.log(a.join(''));
   
    var a='      HPE MANGALORE     ';
    console.log(a.trim());
    
    var a=["html","css","js","PHP","Read JS","Node js"]
    console.log(a.indexOf("PHP"));

    var a="hpe mangalore";
    console.log(a.toUpperCase());
    console.log(a.toLowerCase());

    var a="HPE MANGALORE";
    console.log(a.charAt(0));

    var a=["H","P","E","","M","A","N","G","A","L","O","R","E","",""];
    console.log(a.toString());
    console.log(a.join('').toString());

    var a=9.4575765483;
    console.log(a.toPrecision(3));

    var a = '3';
    console.log(a+3);
    console.log(Number(a)*3);

    var a=4.2;
    var b=-4;

    console.log(Math.ceil(a));
    console.log(Math.floor(a));
    console.log(Math.round(a));
    console.log(Math.abs(a));
    console.log(Math.random(a));

    var a=["html","css","js","PHP","Read JS","Node js"];
    a.push("PostgreSQL");
    console.log(a);

    var a=["html","css","js","PHP","Read JS","Node js"];
    a.pop();
    console.log(a);

    var d=new Date();
    console.log(d.getFullYear()); 
    console.log(d.getDay()); 
    console.log(d.getMonth()); 
    console.log(d.getHours());
    console.log(d.getDate());
    console.log(d.getMinutes());
    console.log(d.getSeconds());
    console.log(d.getTime());     
   
}