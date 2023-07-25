let string = "This is the string of the example that I learn.";

console.log(string.length);

console.log(string.toUpperCase());

console.log(string.toLowerCase());

console.log(string.slice(12, 33));

console.log(string.trim());

console.log(string.valueOf());


let isValidPassword = function (password) {
    return password.length >8 && !password.includes("password")
}

console.log(isValidPassword("asdas"));
console.log(isValidPassword("abcd@#$%123"));
console.log(isValidPassword("passwordassd"));