const x = 10;
//x = 20; // TypeError: Assignment to constant variable.


const contact = {};
contact = { 
    email: "RonaldSMurphy@freepost.org"
}; // TypeError: Assignment to constant variable.



// The const object can be modified
// changes inside an object – adding a new
// property, changing a value, etc. – do not
// affect the reference.