let contact = {
    email_1: "abc@gmail.com",
    email_2: "xyz@gmail.com"
    };

    
    for(i=1; i<=2; i++) {
    let key = "email_" + i;
    console.log(key);
    console.log(contact[key]);
    }