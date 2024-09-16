var first_num;
var second_num;
var output;

function getInputs(){
    first_num = Number(document.getElementById("first-num").value);
    second_num = Number(document.getElementById("second-num").value);
    if (isNaN(first_num) || isNaN(second_num)) {
        document.getElementById("output").innerText = "Please enter valid numbers!";
        document.getElementById("output").style.color = "red";
        return false;
    }
    console.log("first = " + first_num);
    console.log("second = " + second_num);
    document.getElementById("output").style.color = "blue";
    return true;
}

function calcAdd() {
    if (getInputs()) {
        output = first_num + second_num;
        document.getElementById("output").innerText = output;
        if (output < 0) {
            document.getElementById("output").style.color = "red";
        }
    }
}

function calcSub() {
    if (getInputs()) {
        output = first_num - second_num;
        document.getElementById("output").innerText = output;
        if (output < 0) {
            document.getElementById("output").style.color = "red";
        }
    }
}

function calcMul() {
    if (getInputs()) {
        output = first_num * second_num;
        document.getElementById("output").innerText = output;
        if (output < 0) {
            document.getElementById("output").style.color = "red";
        }
    }
}

function calcDiv() {
    if (getInputs()) {
        if (second_num == 0) {
            document.getElementById("output").innerText = "Divisor must be different from 0!";
            document.getElementById("output").style.color = "red";
            return;
        }
        output = first_num / second_num;
        document.getElementById("output").innerText = output;
        if (output < 0) {
            document.getElementById("output").style.color = "red";
        }
    }
}

function calcPow() {
    if (getInputs()) {
        output = 1;
        if (second_num > 0) {
            for (let i = 0; i < second_num; i++) {
                output = output * first_num;
            }
        } else if (second_num == 0) {
            output = 1;
        } else {
            for (let i = 0; i < -second_num; i++) {
                output = output * (1/first_num);
            }
        }

        document.getElementById("output").innerText = output;
        if (output < 0) {
            document.getElementById("output").style.color = "red";
        }
    }

}

function clearInput() {
    document.getElementById("first-num").value = "";
    document.getElementById("second-num").value = "";
    document.getElementById("output").innerText = "";
}
