let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};


contact.email = {
    private: "RonaldSMurphy@freepost.org",
    work: "rsmurphy@briazz.com"
};



if(contact.notes) { 
    console.log(contact.notes);
}
console.log(contact.notes); // -> undefined


console.log(contact.email.private);
console.log(contact.email.private1);