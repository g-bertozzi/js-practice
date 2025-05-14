const input = document.getElementById("input") /**get single element by its id */

function reverseString(str) {
    return str.split("").reverse().join("")

}

function check() {
    const value = input.value;
    const reverse = reverseString(value);

    if (value === reverse) {
        alert("Palindrome!")
    } else {
        alert("Not palindrome.")
    }
    
    input.value = "";
}
