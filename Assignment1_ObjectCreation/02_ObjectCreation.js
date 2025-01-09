let contact = {};

contact.tel = "9876543210";

console.log(contact);
console.log(contact.tel);




let contact1 = {
    tel: "9876543210",
    email: "abc@gmail.com"
    };

    console.log(contact1);
    console.log(contact1.tel);


//  Wrong:  because if key has space then we need to use quotes 

// let contact = {
// first name: "Ronald"
// };


//   Right:
let contact2 = {
"first name": "Ronald"
};

console.log(typeof console); // -> object
console.log(typeof console.log); // -> function