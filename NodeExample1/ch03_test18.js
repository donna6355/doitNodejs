const Person = function(name, age) {
    this.name = name;
    this.age = age;
//    this.walk = (speed)=>{
//        console.log(`${speed}km 속도로 걸어갑니다.`);
//    };
}

//arrow function's this = global window object!

//프로토타입 객체에 함수를 속성으로 추가하고 싶을때 아래와 같이 작성
//인스턴스 객체를 만들 때 메모리를 효율적으로 관리할 수 있다. 
Person.prototype.walk = (speed)=>{
    console.log(`${speed}km 속도로 걸어갑니다.`);
};

let person01 = new Person('Tigger',20);
let person02 = new Person('Pooh',21);

console.log(`${person01.name} 객체의 walk(10)을 호출합니다. `);
console.log(person01.walk(10));