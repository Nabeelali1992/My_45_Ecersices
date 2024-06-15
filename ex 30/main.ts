let userName = ["Admin","Nabeel","Ummat","kausar","Anwar"];

userName.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log("Hello Admin,would you like to see a status report?")
    }
    else{
        console.log(`"Hello,"${oneUser}""Thankyou for logging in again."`)
    }
})