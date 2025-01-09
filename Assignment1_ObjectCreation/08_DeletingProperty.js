let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};


contact.email = {
    private: "RonaldSMurphy@freepost.org",
    work: "rsmurphy@briazz.com"
};


delete contact.email.work;
console.log(contact.email.work);
console.log(contact.email.private);
