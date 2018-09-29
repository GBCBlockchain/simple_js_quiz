//1
function booleanValidate(value) {
    if (value === true || value === false || toString.call(value) === "[object Boolean]") {
        return true;
    } else {
        return false;
    }
}

//2
function errorValidate(value) {
    if (value instanceof Error || toString.call(value) === "[object Error]") {
        return true;
    } else {
        return false;
    }
}

//3
function nanValidate(value) {
    if (value !== value) {
        return true;
    } else {
        return false;
    }
}

//4
function nullValidate(value) {
    if (value === null) {
        return true;
    } else {
        return false;
    }
}

//5
function numberValidate(value) {
    if (!isNaN(value) && toString.call(value) === "[object Number]") {
        return true;
    } else {
        return false;
    }
}

//6
function charValidate(value) {
    if ((value || Object.prototype.toString.call(value) === "[object String]") && value.length === 1) {
        return true;
    } else {
        return false;
    }
}

//7
function sameValidate(value1, value2) {
    if (nanValidate(value1) || nanValidate(value2)) {
        if (nanValidate(value1) === nanValidate(value2)) {
            return true;
        } else {
            return false;
        }
    }
    if (toString.call(value1) === toString.call(value2)) {
        return true;
    } else {
        return false;
    }
}

