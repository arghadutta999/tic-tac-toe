function first() {

    if (turn % 2 == 0 && array[0] != 'x' && array[0] != 'o' && flag != 1 && startt != 0) {

        document.getElementById("turn").innerHTML = play2;

        document.querySelector("#first").innerHTML = "X";

        array[0] = 'x';

        check();

        turn++;

        return;

    } else if (turn % 2 != 0 && array[0] != 'x' && array[0] != 'o' && flag != 1 && startt != 0) {

        document.getElementById("turn").innerHTML = play1;

        document.querySelector("#first").innerHTML = "O";

        array[0] = 'o';

        check();

        turn++;

        return;

    }

}



function second() {

    if (turn % 2 == 0 && array[1] != 'x' && array[1] != 'o' && flag != 1 && startt != 0) {

        document.querySelector("#second").innerHTML = "X";

        document.getElementById("turn").innerHTML = play2;

        array[1] = 'x';

        check();

        turn++;

        return;

    } else if (turn % 2 != 0 && array[1] != 'x' && array[1] != 'o' && flag != 1 && startt != 0) {

        document.querySelector("#second").innerHTML = "O";

        document.getElementById("turn").innerHTML = play1;

        array[1] = 'o';

        check();

        turn++;

        return;

    }

}



function third() {

    if (turn % 2 == 0 && array[2] != 'x' && array[2] != 'o' && flag != 1 && startt != 0) {

        document.querySelector("#third").innerHTML = "X";

        document.getElementById("turn").innerHTML = play2;

        array[2] = 'x';

        check();

        turn++;

        return;

    } else if (turn % 2 != 0 && array[2] != 'x' && array[2] != 'o' && flag != 1 && startt != 0) {

        document.querySelector("#third").innerHTML = "O";

        document.getElementById("turn").innerHTML = play1;

        array[2] = 'o';

        check();

        turn++;

        return;

    }

}



function fourth() {

    if (turn % 2 == 0 && array[3] != 'x' && array[3] != 'o' && flag != 1 && startt != 0) {

        document.querySelector("#fourth").innerHTML = "X";

        document.getElementById("turn").innerHTML = play2;

        array[3] = 'x';

        check();

        turn++;

        return;

    } else if (turn % 2 != 0 && array[3] != 'x' && array[3] != 'o' && flag != 1 && startt != 0) {

        document.querySelector("#fourth").innerHTML = "O";

        document.getElementById("turn").innerHTML = play1;

        array[3] = 'o';

        check();

        turn++;

        return;

    }

}



function fifth() {

    if (turn % 2 == 0 && array[4] != 'x' && array[4] != 'o' && flag != 1 && startt != 0) {

        document.querySelector("#fifth").innerHTML = "X";

        document.getElementById("turn").innerHTML = play2;

        array[4] = 'x';

        check();

        turn++;

        return;

    } else if (turn % 2 != 0 && array[4] != 'x' && array[4] != 'o' && flag != 1 && startt != 0) {

        document.querySelector("#fifth").innerHTML = "O";

        document.getElementById("turn").innerHTML = play1;

        array[4] = 'o';

        check();

        turn++;

        return;

    }

}



function sixth() {

    if (turn % 2 == 0 && array[5] != 'x' && array[5] != 'o' && flag != 1 && startt != 0) {

        document.querySelector("#sixth").innerHTML = "X";

        document.getElementById("turn").innerHTML = play2;

        array[5] = 'x';

        check();

        turn++;

        return;

    } else if (turn % 2 != 0 && array[5] != 'x' && array[5] != 'o' && flag != 1 && startt != 0) {

        document.querySelector("#sixth").innerHTML = "O";

        document.getElementById("turn").innerHTML = play1;

        array[5] = 'o';

        check();

        turn++;

        return;

    }

}



function seventh() {

    if (turn % 2 == 0 && array[6] != 'x' && array[6] != 'o' && flag != 1 && startt != 0) {

        document.querySelector("#seventh").innerHTML = "X";

        document.getElementById("turn").innerHTML = play2;

        array[6] = 'x';

        turn++;

        check();

        return;

    } else if (turn % 2 != 0 && array[6] != 'x' && array[6] != 'o' && flag != 1 && startt != 0) {

        document.querySelector("#seventh").innerHTML = "O";

        document.getElementById("turn").innerHTML = play1;

        array[6] = 'o';

        check();

        turn++;

        return;

    }

}



function eighth() {

    if (turn % 2 == 0 && array[7] != 'x' && array[7] != 'o' && flag != 1 && startt != 0) {

        document.querySelector("#eighth").innerHTML = "X";

        document.getElementById("turn").innerHTML = play2;



        array[7] = 'x';

        check();

        turn++;

        return;

    } else if (turn % 2 != 0 && array[7] != 'x' && array[7] != 'o' && flag != 1 && startt != 0) {

        document.querySelector("#eighth").innerHTML = "O";

        document.getElementById("turn").innerHTML = play1;

        array[7] = 'o';

        check();

        turn++;

        return;

    }

}



function ninth() {

    if (turn % 2 == 0 && array[8] != 'x' && array[8] != 'o' && flag != 1 && startt != 0) {

        document.querySelector("#ninth").innerHTML = "X";

        document.getElementById("turn").innerHTML = play2;

        array[8] = 'x';

        check();

        turn++;

        return;

    } else if (turn % 2 != 0 && array[8] != 'x' && array[8] != 'o' && flag != 1 && startt != 0) {

        document.querySelector("#ninth").innerHTML = "O";

        document.getElementById("turn").innerHTML = play1;

        array[8] = 'o';

        check();

        turn++;

        return;

    }

}





function check() {

    if (array[0] == array[1] && array[1] == array[2]) {

        if (array[0] == 'x' && array[1] == 'x' && array[2] == 'x') {

            flag = 1;

            document.getElementById("turn").innerHTML = play1 + " " + "won";

        } else {

            flag = 1;

            document.getElementById("turn").innerHTML = play2 + " " + "won";

        }

    } else if (array[3] == array[4] && array[4] == array[5]) {

        if (array[3] == 'x' && array[4] == 'x' && array[5] == 'x') {

            flag = 1;

            document.getElementById("turn").innerHTML = play1 + " " + "won";

        } else {

            flag = 1;

            document.getElementById("turn").innerHTML = play2 + " " + "won";

        }

    } else if (array[6] == array[7] && array[7] == array[8]) {

        if (array[6] == 'x' && array[7] == 'x' && array[8] == 'x') {

            flag = 1;

            document.getElementById("turn").innerHTML = play1 + " " + "won";

        } else {

            flag = 1;

            document.getElementById("turn").innerHTML = play2 + " " + "won";

        }

    } else if (array[0] == array[3] && array[3] == array[6]) {

        if (array[0] == 'x' && array[3] == 'x' && array[6] == 'x') {

            flag = 1;

            document.getElementById("turn").innerHTML = play1 + " " + "won";

        } else {

            flag = 1;

            document.getElementById("turn").innerHTML = play2 + " " + "won";

        }

    } else if (array[1] == array[4] && array[4] == array[7]) {

        if (array[1] == 'x' && array[4] == 'x' && array[7] == 'x') {

            flag = 1;

            document.getElementById("turn").innerHTML = play1 + " " + "won";

        } else {

            flag = 1;

            document.getElementById("turn").innerHTML = play2 + " " + "won";

        }

    } else if (array[2] == array[5] && array[5] == array[8]) {

        if (array[2] == 'x' && array[5] == 'x' && array[8] == 'x') {

            flag = 1;

            document.getElementById("turn").innerHTML = play1 + " " + "won";

        } else {

            flag = 1;

            document.getElementById("turn").innerHTML = play2 + " " + "won";

        }

    } else if (array[0] == array[4] && array[4] == array[8]) {

        if (array[0] == 'x' && array[4] == 'x' && array[8] == 'x') {

            flag = 1;

            document.getElementById("turn").innerHTML = play1 + " " + "won";

        } else {

            flag = 1;

            document.getElementById("turn").innerHTML = play2 + " " + "won";

        }

    } else if (array[2] == array[4] && array[4] == array[6]) {

        if (array[2] == 'x' && array[4] == 'x' && array[6] == 'x') {

            flag = 1;

            document.getElementById("turn").innerHTML = play1 + " " + "won";

        } else {

            flag = 1;

            document.getElementById("turn").innerHTML = play2 + " " + "won";

        }



    }





}



function gstart() {

    document.getElementById("turn").innerHTML = play1;

    startt = 1;

}



function rboard() {



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



    play1 = prompt("Enter First player  Name(X)");

    play2 = prompt("Enter Second Player Name(O)");



}



var play1 = prompt("Enter First player  Name(X)");

var play2 = prompt("Enter Second Player Name(O)");

var turn = 0,

    flag = 0,

    startt = 0;

var array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
