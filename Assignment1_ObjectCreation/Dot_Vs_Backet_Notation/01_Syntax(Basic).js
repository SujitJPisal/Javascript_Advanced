let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};


contact.email = {
    private: "RonaldSMurphy@freepost.org",
    work: "rsmurphy@briazz.com"
};

contact.tel === contact["tel"];
contact.email.work === contact["email"]["work"];

console.log(contact["tel"]);
console.log(contact["email"]["work"]);