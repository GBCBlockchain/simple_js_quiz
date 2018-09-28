// lab1, 1
function larger (number1, number2) {
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}

// lab1, 2
function sign (number1, number2, number3) {
    var result = number1 * number2 * number3;
    if (result > 0) {
        return "+";
    } else {
        return "-";
    }
}

// lab1, 3
function sort (number1, number2, number3) {
    var numbers = [number1, number2, number3];
    alert(numbers.sort(function(a, b){return a - b}));
}

// lab1, 4
function sort2 (number1, number2, number3, number4, number5) {
    var numbers = [number1, number2, number3, number4, number5];
    var sorted = numbers.sort(function(a, b){return a - b});
    alert(sorted[0]);
}

// lab1, 5
for (var i = 0; i < 16; i++) { 
    if ((i % 2) === 0) {
        console.log(i + " is even.");
    } else {
        console.log(i + " is odd.")
    }
}


// lab1, 6
var marks = [80, 77, 88, 95, 68];

function average (arry) {
    var total = 0;
    for (var x = 0; i < arry.length; x++) {
        total += x;
    }
    return total / arry.length;
}
average(marks);

// lab1, 7
function fizzbuzz () {
    for (var y = 0;y < 101; y++) { 
        if ((y % 3) === 0) && ((y % 5) === 0) {
            console.log("fizzbuzz");
        } else if (((y % 3) === 0) && ((y % 5) != 0)) {
            console.log("fizz");
        } else if (((y % 3) != 0) && ((y % 5) === 0)) {
            console.log("buzz")
        } else {
            console.log(y);
        }
    }
}

// lab1, 8
function test (num) {
    var sum = 0;
    var str = num.toString();
    for (var z = 0;y < str.length; z++) {
        sum += Number(str.charAt(z)) * Number(str.charAt(z));
    }
    if (sum != 1) {
        test(sum);
    } else {
        return true;
    }
}

function happynum () {
    var happycount = 0;
    var r = 0;

    while (happycount < 5) {
        if (test(r)) {
            console.log(r);
            happycount += 1;
        }
        r += 1;
    }
}
happynum();


// lab1, 9
function armstrong () {
    var sum = 0;
    for (var q = 0;q < 99999999; q++) {
        var str = q.toString();
        for (var w = 0;w < str.length; w++) {
            sum += (Number(str.charAt(w)) * Number(str.charAt(w)) * Number(str.charAt(w)));
        }
        if (sum === q) {
            console.log(q);
        }
    }
}

// lab1, 10
function nestedloop () {
    var str = "";
    for (var o=0; o<5; o++) {
        for (var j=0; j<=o; j++) {
            str += "* ";
        }
        console.log(str);
        str = "";
    }
}

// lab1, 11
function multsum() {
    var sum = 0;
    for (var s=0; s<5; s++) {
        if ((s % 3) === 0) && ((s % 5) === 0) {
            sum += s;
        }
    }
}

// lab3, 1
function isBool (something) {
    if (typeof(something) === "boolean") {
        return true;
    } else {
        return false;
    }
}

// lab3, 2
function isError (something) {
    return value instanceof Error && typeof value.message !== 'undefined';
}

// lab3, 3
function isNaN (something) {
    if (typeof(something) === "NaN") {
        return true;
    } else {
        return false;
    }
}

// lab3, 4
function isNull (something) {
    if (typeof(something) === null) {
        return true;
    } else {
        return false;
    }
}

// lab3, 5
function isNumber (something) {
    if (typeof(something) === "number") {
        return true;
    } else {
        return false;
    }
}

// lab3, 6
function isChar (something) {
    if (typeof(something) === "string") {
        if (something.length === 1) {
            return true;
        }
        return false;
    } else {
        return false;
    }
}

// lab3, 7
function isSame (something, something2) {
    if (typeof(something) === typeof(something2)) {
        return true;
    } else {
        return false;
    }
}


// lab2, 1
function modPara() {
    document.getElementById("text").textContent="Consider your paragraph modified.";
}
modPara();

// lab2, 2
function firstLast() {
    var firstName = document.getElementsByName("fname")[0].value;
    var lastName = document.getElementsByName("lname")[0].value;
    var rearray = [firstName, lastName];
    return rearry;
}

// lab2, 3
function backgroundColor() {
    paras = docBody.getElementsByTagName("p");
    for (var t=0; t < paras.length; t++) {
        paras[t].style.backgroundColor = "red";
    }
}

// lab2, 4
function getAttributes() {
    var hreflang = document.getElementById("w3r").hreflang;
    var href = document.getElementById("w3r").href;
    var rel = document.getElementById("w3r").rel;
    var target = document.getElementById("w3r").target;
    var type = document.getElementById("w3r").type;
    var rearray = [hreflang, href, rel, target, type];
    return rearry;
}

// lab2, 5
function addRow() {
    var table = document.getElementById("sampleTable");
    var newRow = table.insertRow(0);
    var newCell1 = newRow.insertCell(0);
    var newCell2 = newRow.insertCell(1);
    newCell1.innerHTML = "New Cell 1.";
    newCell2.innerHTML = "New Cell 2.";
}

// lab2, 6
function changeContent(row, col, str) {
    var table = document.getElementById('myTable');
    myTable.rows[row].cells[col].innerHTML = str;
}

// lab2, 7
