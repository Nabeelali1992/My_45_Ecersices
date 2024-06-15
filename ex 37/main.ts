function make_shirt(size:string="Large",message:string="I love TypeScript"){
    console.log(`The size of the shirt is "${size}" and the message printed on it is "${message}"`);
    }
    
    //invoking function
    make_shirt(); 
    
    //recalling function with updating size 
    make_shirt("Medium");
    
    //recalling function with updating size and message
    make_shirt("Small","I love JavaScript");