//1
function CompareInt(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

//2
function signProduct(num1, num2, num3) {
    return num1 * num2 * num3;
}

//3
function sortNum(num1, num2, num3) {
    let arrNum = [num1, num2, num3];
    for (let i = 0; i < arrNum.length; i++) {
        for (let j = 0; j < arrNum.length - i; j++) {
            if (arrNum[j] < arrNum[j + 1]) {
                let temp = arrNum[j];
                arrNum[j] = arrNum[j + 1];
                arrNum[j + 1] = temp;
            }
        }
    }
    return arrNum;
}

//4
function MaxNum(num1, num2, num3, num4, num5) {
    let arrNum = [num1, num2, num3, num4, num5];
    let temp = num1;
    for (let i = 0; i < arrNum.length; i++) {
        if (temp < arrNum[i + 1]) {
            temp = arrNum[i + 1];
        }
    }
    return temp;
}

//5
function oddOrEven() {
    for (let i = 0; i <= 15; i++) {
        if (i % 2 === 0) {
            console.log(i + " is even");
        } else {
            console.log(i + " is odd");
        }
    }
}

//6
function determineGrade() {
    var arrStu = [["David", 80], ["Vinoth", 77], ["Divya", 88], ["Ishitha", 95], ["Thomas", 68]];
    console.log("Name	Range");
    for (let i = 0; i < arrStu.length; i++) {
        if (arrStu[i][1] > 100) {
            console.log(arrStu[i][0] + "    A");
        } else if (arrStu[i][1] > 90) {
            console.log(arrStu[i][0] + "    B");
        } else if (arrStu[i][1] > 80) {
            console.log(arrStu[i][0] + "    C");
        } else if (arrStu[i][1] > 70) {
            console.log(arrStu[i][0] + "    D");
        } else if (arrStu[i][1] > 60) {
            console.log(arrStu[i][0] + "    F");
        }
    }
}

//7
function multipleDisplay() {
    for (let i = 1; i <= 100; i++) {
        let tmp = "";
        if (i % 3 === 0) {
            tmp += "Fizz";
        }
        if (i % 5 === 0) {
            tmp += "Buzz";
        }
        if (tmp === "") {
            tmp = i;
        }
        console.log(tmp);
    }
}

//8
function happyNumberCheck(num) {


    let m, n;
    let arrChecked = [];

    while (num != 1 && arrChecked[num] !== true) {
        arrChecked[num] = true;
        m = 0;
        while (num > 0) {
            n = num % 10;
            m += Math.pow(n, 2);
            num = (num - n) / 10;
        }
        num = m;
    }
    if (num == 1) {
        return true;
    } else {
        return false;
    }
}
function happyNumber() {
    let num = 1;
    let count = 0;
    while (count < 5) {
        while (!happyNumberCheck(num)) {
            num++;
        }
        console.log(num);
        count++;
        num++;
    }
}

//9
function armstrongNumber(num) {
    let n;
    let sum = 0;
    let m = num;
    while (m > 0) {
        n = m % 10;
        sum += Math.pow(n, 3);
        m = (m - n) / 10;
    }
    if (sum == num) {
        console.log(num + " is armstrong number")
    } else {
        console.log(num + " is not armstrong number")
    }
}

//10
function patternConstruct() {
    for (let i = 0; i < 5; i++) {
        let out = "";
        for (let j = 0; j <= i; j++) {
            out += "*";
        }
        console.log(out);
    }
}

//11
function mutipleSum() {
    let sum = 0;
    for (let i = 1; i <= 1000; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            sum += i;
        }
    }
    console.log(sum);
}