let contact = {
    _tel: "207-662-5412",
   get tel() {return this._tel;}
};
console.log(contact.tel);
contact.tel = "100-100-1000";
console.log(contact.tel);
contact.email ="RonaldSMurphy@freepost.org";
console.log(contact.email);
   

let contact1 = {
    _tel: "207-662-5412",
    get tel() {return this._tel;},
    set tel(t) { this._tel = t;}
};

console.log(contact1.tel);
contact1.tel = "100-100-1000";
console.log(contact1.tel);