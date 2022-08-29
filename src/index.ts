import { Example } from "./Example";

console.log("Starting...");

const example: Example = new Example();
const param = 'This is my param.';
console.log(`Example output: ${example.exampleMethod(param)}`)

console.log("Ending...");