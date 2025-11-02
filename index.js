import LinkedList from "./linked-list.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(list.size)
console.log(list.head.value)
console.log(list.tail.value)


list.prepend("horse")

console.log(list.toString());
console.log(list.size)
console.log(list.head.value)
console.log(list.tail.value)

console.log(list.at(2))

console.log(list.contains("turtle"));

console.log(list.pop())
console.log(list.toString());

console.log(list.contains("turtle"));

console.log(list.find("0"))
