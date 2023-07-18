import { odd, even } from "./var.mjs";
import checkOddOrEven from "./func.mjs";

function checkStringOddOrEven(str) {
    if(str.length % 2) {
        return odd;
    }
    return even;
}

console.log(this);
console.log(checkOddOrEven(10));
console.log(checkStringOddOrEven('hello'));