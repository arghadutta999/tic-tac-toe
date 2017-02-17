function first() {
    if (turn % 2 == 0 && array[0] != 'x' && array[0] != 'o' && flag != 1 && startt != 0) {
        document.querySelector("#first").innerHTML = "X";
        array[0] = 'x';
        document.getElementById("turn1").style.borderBottomColor = "#fff";
        document.getElementById("turn2").style.borderBottomColor = "#0bbfff";
        check();
        turn++;
        return;
    } else if (turn % 2 != 0 && array[0] != 'x' && array[0] != 'o' && flag != 1 && startt != 0) {
        document.querySelector("#first").innerHTML = "O";
        array[0] = 'o';
        document.getElementById("turn1").style.borderBottomColor = "#0bbfff";
        document.getElementById("turn2").style.borderBottomColor = "#fff";
        check();
        turn++;
        return;
    }
}

function second() {
    if (turn % 2 == 0 && array[1] != 'x' && array[1] != 'o' && flag != 1 && startt != 0) {
        document.querySelector("#second").innerHTML = "X";
        array[1] = 'x';
        document.getElementById("turn1").style.borderBottomColor = "#fff";
        document.getElementById("turn2").style.borderBottomColor = "#0bbfff";
        check();
        turn++;
        return;
    } else if (turn % 2 != 0 && array[1] != 'x' && array[1] != 'o' && flag != 1 && startt != 0) {
        document.querySelector("#second").innerHTML = "O";
        array[1] = 'o';
        document.getElementById("turn1").style.borderBottomColor = "#0bbfff";
        document.getElementById("turn2").style.borderBottomColor = "#fff";
        check();
        turn++;
        return;
    }
}

function third() {
    if (turn % 2 == 0 && array[2] != 'x' && array[2] != 'o' && flag != 1 && startt != 0) {
        document.querySelector("#third").innerHTML = "X";
        array[2] = 'x';
        document.getElementById("turn1").style.borderBottomColor = "#fff";
        document.getElementById("turn2").style.borderBottomColor = "#0bbfff";
        check();
        turn++;
        return;
    } else if (turn % 2 != 0 && array[2] != 'x' && array[2] != 'o' && flag != 1 && startt != 0) {
        document.querySelector("#third").innerHTML = "O";
        array[2] = 'o';
        document.getElementById("turn1").style.borderBottomColor = "#0bbfff";
        document.getElementById("turn2").style.borderBottomColor = "#fff";
        check();
        turn++;
        return;
    }
}

function fourth() {
    if (turn % 2 == 0 && array[3] != 'x' && array[3] != 'o' && flag != 1 && startt != 0) {
        document.querySelector("#fourth").innerHTML = "X";
        array[3] = 'x';
        document.getElementById("turn1").style.borderBottomColor = "#fff";
        document.getElementById("turn2").style.borderBottomColor = "#0bbfff";
        check();
        turn++;
        return;
    } else if (turn % 2 != 0 && array[3] != 'x' && array[3] != 'o' && flag != 1 && startt != 0) {
        document.querySelector("#fourth").innerHTML = "O";
        array[3] = 'o';
        document.getElementById("turn1").style.borderBottomColor = "#0bbfff";
        document.getElementById("turn2").style.borderBottomColor = "#fff";
        check();
        turn++;
        return;
    }
}

function fifth() {
    if (turn % 2 == 0 && array[4] != 'x' && array[4] != 'o' && flag != 1 && startt != 0) {
        document.querySelector("#fifth").innerHTML = "X";
        array[4] = 'x';
        document.getElementById("turn1").style.borderBottomColor = "#fff";
        document.getElementById("turn2").style.borderBottomColor = "#0bbfff";
        check();
        turn++;
        return;
    } else if (turn % 2 != 0 && array[4] != 'x' && array[4] != 'o' && flag != 1 && startt != 0) {
        document.querySelector("#fifth").innerHTML = "O";
        array[4] = 'o';
        document.getElementById("turn1").style.borderBottomColor = "#0bbfff";
        document.getElementById("turn2").style.borderBottomColor = "#fff";
        check();
        turn++;
        return;
    }
}

function sixth() {
    if (turn % 2 == 0 && array[5] != 'x' && array[5] != 'o' && flag != 1 && startt != 0) {
        document.querySelector("#sixth").innerHTML = "X";
        array[5] = 'x';
        document.getElementById("turn1").style.borderBottomColor = "#fff";
        document.getElementById("turn2").style.borderBottomColor = "#0bbfff";
        check();
        turn++;
        return;
    } else if (turn % 2 != 0 && array[5] != 'x' && array[5] != 'o' && flag != 1 && startt != 0) {
        document.querySelector("#sixth").innerHTML = "O";
        array[5] = 'o';
        document.getElementById("turn1").style.borderBottomColor = "#0bbfff";
        document.getElementById("turn2").style.borderBottomColor = "#fff";
        check();
        turn++;
        return;
    }
}

function seventh() {
    if (turn % 2 == 0 && array[6] != 'x' && array[6] != 'o' && flag != 1 && startt != 0) {
        document.querySelector("#seventh").innerHTML = "X";
        array[6] = 'x';
        document.getElementById("turn1").style.borderBottomColor = "#fff";
        document.getElementById("turn2").style.borderBottomColor = "#0bbfff";
        turn++;
        check();
        return;
    } else if (turn % 2 != 0 && array[6] != 'x' && array[6] != 'o' && flag != 1 && startt != 0) {
        document.querySelector("#seventh").innerHTML = "O";
        array[6] = 'o';
        document.getElementById("turn1").style.borderBottomColor = "#0bbfff";
        document.getElementById("turn2").style.borderBottomColor = "#fff";
        check();
        turn++;
        return;
    }
}

function eighth() {
    if (turn % 2 == 0 && array[7] != 'x' && array[7] != 'o' && flag != 1 && startt != 0) {
        document.querySelector("#eighth").innerHTML = "X";
        array[7] = 'x';
        document.getElementById("turn1").style.borderBottomColor = "#fff";
        document.getElementById("turn2").style.borderBottomColor = "#0bbfff";
        check();
        turn++;
        return;
    } else if (turn % 2 != 0 && array[7] != 'x' && array[7] != 'o' && flag != 1 && startt != 0) {
        document.querySelector("#eighth").innerHTML = "O";
        array[7] = 'o';
        document.getElementById("turn1").style.borderBottomColor = "#0bbfff";
        document.getElementById("turn2").style.borderBottomColor = "#fff";
        check();
        turn++;
        return;
    }
}

function ninth() {
    if (turn % 2 == 0 && array[8] != 'x' && array[8] != 'o' && flag != 1 && startt != 0) {
        document.querySelector("#ninth").innerHTML = "X";
        array[8] = 'x';
        document.getElementById("turn1").style.borderBottomColor = "#fff";
        document.getElementById("turn2").style.borderBottomColor = "#0bbfff";
        check();
        turn++;
        return;
    } else if (turn % 2 != 0 && array[8] != 'x' && array[8] != 'o' && flag != 1 && startt != 0) {
        document.querySelector("#ninth").innerHTML = "O";
        array[8] = 'o';
        document.getElementById("turn1").style.borderBottomColor = "#0bbfff";
        document.getElementById("turn2").style.borderBottomColor = "#fff";
        check();
        turn++;
        return;
    }
}

function check() {
    if (array[0] == array[1] && array[1] == array[2]) {
        if (array[0] == 'x' && array[1] == 'x' && array[2] == 'x') {
            document.getElementById("table1").style.display = "none";
            document.getElementById("tab").style.display = "block";
            document.getElementById("tab").innerHTML = "X";
            flag = 1;
        } else {
            flag = 1;
            document.getElementById("table1").style.display = "none";
            document.getElementById("tab").style.display = "block";
            document.getElementById("tab").innerHTML = "O";

        }
    } else if (array[3] == array[4] && array[4] == array[5]) {
        if (array[3] == 'x' && array[4] == 'x' && array[5] == 'x') {
            flag = 1;
            document.getElementById("table1").style.display = "none";
            document.getElementById("tab").style.display = "block";
            document.getElementById("tab").innerHTML = "X";
        } else {
            flag = 1;
            document.getElementById("table1").style.display = "none";
            document.getElementById("tab").style.display = "block";
            document.getElementById("tab").innerHTML = "O";
        }
    } else if (array[6] == array[7] && array[7] == array[8]) {
        if (array[6] == 'x' && array[7] == 'x' && array[8] == 'x') {
            flag = 1;
            document.getElementById("table1").style.display = "none";
            document.getElementById("tab").style.display = "block";
            document.getElementById("tab").innerHTML = "X";
        } else {
            flag = 1;
            document.getElementById("table1").style.display = "none";
            document.getElementById("tab").style.display = "block";
            document.getElementById("tab").innerHTML = "O";
        }
    } else if (array[0] == array[3] && array[3] == array[6]) {
        if (array[0] == 'x' && array[3] == 'x' && array[6] == 'x') {
            flag = 1;
            document.getElementById("table1").style.display = "none";
            document.getElementById("tab").style.display = "block";
            document.getElementById("tab").innerHTML = "X";
        } else {
            flag = 1;
            document.getElementById("table1").style.display = "none";
            document.getElementById("tab").style.display = "block";
            document.getElementById("tab").innerHTML = "O";
        }
    } else if (array[1] == array[4] && array[4] == array[7]) {
        if (array[1] == 'x' && array[4] == 'x' && array[7] == 'x') {
            flag = 1;
            document.getElementById("table1").style.display = "none";
            document.getElementById("tab").style.display = "block";
            document.getElementById("tab").innerHTML = "X";
        } else {
            flag = 1;
            document.getElementById("table1").style.display = "none";
            document.getElementById("tab").style.display = "block";
            document.getElementById("tab").innerHTML = "O";
        }
    } else if (array[2] == array[5] && array[5] == array[8]) {
        if (array[2] == 'x' && array[5] == 'x' && array[8] == 'x') {
            flag = 1;
            document.getElementById("table1").style.display = "none";
            document.getElementById("tab").style.display = "block";
            document.getElementById("tab").innerHTML = "X";
        } else {
            flag = 1;
            document.getElementById("table1").style.display = "none";
            document.getElementById("tab").style.display = "block";
            document.getElementById("tab").innerHTML = "O";
        }
    } else if (array[0] == array[4] && array[4] == array[8]) {
        if (array[0] == 'x' && array[4] == 'x' && array[8] == 'x') {
            flag = 1;
            document.getElementById("table1").style.display = "none";
            document.getElementById("tab").style.display = "block";
            document.getElementById("tab").innerHTML = "X";
        } else {
            flag = 1;
            document.getElementById("table1").style.display = "none";
            document.getElementById("tab").style.display = "block";
            document.getElementById("tab").innerHTML = "O";
        }
    } else if (array[2] == array[4] && array[4] == array[6]) {
        if (array[2] == 'x' && array[4] == 'x' && array[6] == 'x') {
            flag = 1;
            document.getElementById("table1").style.display = "none";
            document.getElementById("tab").style.display = "block";
            document.getElementById("tab").innerHTML = "X";
        } else {
            flag = 1;
            document.getElementById("table1").style.display = "none";
            document.getElementById("tab").style.display = "block";
            document.getElementById("tab").innerHTML = "O";
        }
    }
}

function stat() {
    document.getElementById("turn1").style.borderBottomColor = "#0bbfff";
    document.getElementById("turn2").style.borderBottomColor = "#fff";
    startt = 1;
}

function rest() {
    turn = 0, flag = 0, startt = 0;
    array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
    document.querySelector("#first ").innerHTML = " ";
    document.querySelector("#second ").innerHTML = " ";
    document.querySelector("#third ").innerHTML = " ";
    document.querySelector("#fourth ").innerHTML = " ";
    document.querySelector("#fifth ").innerHTML = " ";
    document.querySelector("#sixth ").innerHTML = " ";
    document.querySelector("#seventh ").innerHTML = " ";
    document.querySelector("#eighth").innerHTML = " ";
    document.querySelector("#ninth").innerHTML = " ";
    document.getElementById("turn1").style.borderBottomColor = "#0bbfff";
    document.getElementById("turn2").style.borderBottomColor = "#0bbfff";
    document.getElementById("table1").style.display = "table";
    document.getElementById("tab").style.display = "none";
    document.getElementById("tab").innerHTML = " ";
}
var turn = 0,
    flag = 0,
    startt = 0;
var array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
