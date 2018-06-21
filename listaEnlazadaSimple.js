let n6 = { value: 11, tail: null};
let n5 = { value: 21, tail: n6};
let n4 = { value: 11, tail: n5};
let n3 = { value: 2, tail: n4};
let n2 = { value: 2, tail: n3};
let n1 = { value: 1, tail: n2};

let stringJSON = JSON.stringify(n1, null, 4);  // stringify convierte un objeto en string para poder mandarlo a otros programas, documentos,...

console.log(stringJSON);

let obj = JSON.parse(stringJSON);
console.log(obj);


let o = {
    first: 1,
    second: 3,
    "3": "Third"
};
let oStr = JSON.stringify(o, null, 4);
console.log(oStr);

//------------------------------------------------//

class Node {
    constructor(value, tail) {
        this.value = value;
        this.tail = tail ? tail : null;
    }
    addTail(value) {
        this.tail = new Node(value, null);
        return this.tail;
    }
}

let myList = new Node(0);
let last = myList;
for (let i = 1; i < 10; i++) {
    last = last.addTail(i);
}

console.log(JSON.stringify(myList, null, 4));