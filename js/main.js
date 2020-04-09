var t1_01 = function () {
  var t1_r1 = document.getElementsByClassName("t1_r1_01")[0].innerText;
  var t1_r2 = document.getElementsByClassName("t1_r1_02")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  t1_r2 = Number(t1_r2);
  var display = document.getElementById("t1_01").value;
  var print = document.getElementsByClassName("t1_r1_05")[0];
  print.innerHTML = ((t1_r1 + t1_r2) * display).toLocaleString();
};

var t1_02 = function () {
  var t1_r1 = document.getElementsByClassName("t1_r2_01")[0].innerText;
  var t1_r2 = document.getElementsByClassName("t1_r2_02")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  t1_r2 = Number(t1_r2);
  var display = document.getElementById("t1_02").value;
  var print = document.getElementsByClassName("t1_r2_05")[0];
  print.innerHTML = ((t1_r1 + t1_r2) * display).toLocaleString();
};

var t1_03 = function () {
  var t1_r1 = document.getElementsByClassName("t1_r3_01")[0].innerText;
  var t1_r2 = document.getElementsByClassName("t1_r3_02")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  t1_r2 = Number(t1_r2);
  var display = document.getElementById("t1_03").value;
  var print = document.getElementsByClassName("t1_r3_05")[0];
  print.innerHTML = ((t1_r1 + t1_r2) * display).toLocaleString();
};

var t1_04 = function () {
  var t1_r1 = document.getElementsByClassName("t1_r4_01")[0].innerText;
  var t1_r2 = document.getElementsByClassName("t1_r4_02")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  t1_r2 = Number(t1_r2);
  var display = document.getElementById("t1_04").value;
  var print = document.getElementsByClassName("t1_r4_05")[0];
  print.innerHTML = ((t1_r1 + t1_r2) * display).toLocaleString();
};

var t1_05 = function () {
  var t1_r1 = document.getElementsByClassName("t1_r5_01")[0].innerText;
  var t1_r2 = document.getElementsByClassName("t1_r5_02")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  t1_r2 = Number(t1_r2);
  var display = document.getElementById("t1_05").value;
  var print = document.getElementsByClassName("t1_r5_05")[0];
  print.innerHTML = ((t1_r1 + t1_r2) * display).toLocaleString();
};

var t1_06 = function () {
  var t1_r1 = document.getElementsByClassName("t1_r6_01")[0].innerText;
  var t1_r2 = document.getElementsByClassName("t1_r6_02")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  t1_r2 = Number(t1_r2);
  var display = document.getElementById("t1_06").value;
  var print = document.getElementsByClassName("t1_r6_05")[0];
  print.innerHTML = ((t1_r1 + t1_r2) * display).toLocaleString();
};

var t1_07 = function () {
  var t1_r1 = document.getElementsByClassName("t1_r7_01")[0].innerText;
  var t1_r2 = document.getElementsByClassName("t1_r7_02")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  t1_r2 = Number(t1_r2);
  var display = document.getElementById("t1_07").value;
  var print = document.getElementsByClassName("t1_r7_05")[0];
  print.innerHTML = ((t1_r1 + t1_r2) * display).toLocaleString();
};

var t1_08 = function () {
  var t1_r1 = document.getElementsByClassName("t1_r8_01")[0].innerText;
  var t1_r2 = document.getElementsByClassName("t1_r8_02")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  t1_r2 = Number(t1_r2);
  var display = document.getElementById("t1_08").value;
  var print = document.getElementsByClassName("t1_r8_05")[0];
  print.innerHTML = ((t1_r1 + t1_r2) * display).toLocaleString();
};

var t1_sum = function () {
  var print1 = document.getElementsByClassName("t1_r1_05")[0].innerText;
  var print2 = document.getElementsByClassName("t1_r2_05")[0].innerText;
  var print3 = document.getElementsByClassName("t1_r3_05")[0].innerText;
  var print4 = document.getElementsByClassName("t1_r4_05")[0].innerText;
  var print5 = document.getElementsByClassName("t1_r5_05")[0].innerText;
  var print6 = document.getElementsByClassName("t1_r6_05")[0].innerText;
  var print7 = document.getElementsByClassName("t1_r7_05")[0].innerText;
  var print8 = document.getElementsByClassName("t1_r8_05")[0].innerText;
  print1 = print1.replace(/,/g, '');
  print2 = print2.replace(/,/g, '');
  print3 = print3.replace(/,/g, '');
  print4 = print4.replace(/,/g, '');
  print5 = print5.replace(/,/g, '');
  print6 = print6.replace(/,/g, '');
  print7 = print7.replace(/,/g, '');
  print8 = print8.replace(/,/g, '');
  print1 = Number(print1);
  print2 = Number(print2);
  print3 = Number(print3);
  print4 = Number(print4);
  print5 = Number(print5);
  print6 = Number(print6);
  print7 = Number(print7);
  print8 = Number(print8);
  var print = document.getElementsByClassName("t1_sum")[0];
  print.innerHTML =
    (print1 + print2 + print3 + print4 + print5 + print6 + print7 + print8 ).toLocaleString();
};

var t2_01 = function () {
  var t1_r1 = document.getElementsByClassName("t2_r1_01")[0].innerText;
  var t1_r2 = document.getElementsByClassName("t2_r1_02")[0].innerText;
  var t1_r3 = document.getElementsByClassName("t2_r1_03")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r3 = t1_r3.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  t1_r2 = Number(t1_r2);
  t1_r3 = Number(t1_r3);
  var display = document.getElementById("t2_01").value;
  var print = document.getElementsByClassName("t2_r1_05")[0];
  print.innerHTML = ((t1_r1 + t1_r2 + t1_r3) * display).toLocaleString();
};

var t2_02 = function () {
  var t1_r1 = document.getElementsByClassName("t2_r2_01")[0].innerText;
  var t1_r2 = document.getElementsByClassName("t2_r2_02")[0].innerText;
  var t1_r3 = document.getElementsByClassName("t2_r2_03")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r3 = t1_r3.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  t1_r2 = Number(t1_r2);
  t1_r3 = Number(t1_r3);
  var display = document.getElementById("t2_02").value;
  var print = document.getElementsByClassName("t2_r2_05")[0];
  print.innerHTML = ((t1_r1 + t1_r2 + t1_r3) * display).toLocaleString();
};

var t2_03 = function () {
  var t1_r1 = document.getElementsByClassName("t2_r3_01")[0].innerText;
  var t1_r2 = document.getElementsByClassName("t2_r3_02")[0].innerText;
  var t1_r3 = document.getElementsByClassName("t2_r3_03")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r3 = t1_r3.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  t1_r2 = Number(t1_r2);
  t1_r3 = Number(t1_r3);
  var display = document.getElementById("t2_03").value;
  var print = document.getElementsByClassName("t2_r3_05")[0];
  print.innerHTML = ((t1_r1 + t1_r2 + t1_r3) * display).toLocaleString();
};

var t2_04 = function () {
  var t1_r1 = document.getElementsByClassName("t2_r4_01")[0].innerText;
  var t1_r2 = document.getElementsByClassName("t2_r4_02")[0].innerText;
  var t1_r3 = document.getElementsByClassName("t2_r4_03")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r3 = t1_r3.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  t1_r2 = Number(t1_r2);
  t1_r3 = Number(t1_r3);
  var display = document.getElementById("t2_04").value;
  var print = document.getElementsByClassName("t2_r4_05")[0];
  print.innerHTML = ((t1_r1 + t1_r2 + t1_r3) * display).toLocaleString();
};

var t2_sum = function () {
  var print1 = document.getElementsByClassName("t2_r1_05")[0].innerText;
  var print2 = document.getElementsByClassName("t2_r2_05")[0].innerText;
  var print3 = document.getElementsByClassName("t2_r3_05")[0].innerText;
  print1 = print1.replace(/,/g, '');
  print2 = print2.replace(/,/g, '');
  print3 = print3.replace(/,/g, '');
  print1 = Number(print1);
  print2 = Number(print2);
  print3 = Number(print3);
  var print = document.getElementsByClassName("t2_sum")[0];
  print.innerHTML = (print1 + print2 + print3).toLocaleString();
};

var t3_01 = function () {
  var t1_r1 = document.getElementsByClassName("t3_r1_01")[0].innerText;
  var t1_r2 = document.getElementsByClassName("t3_r1_02")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  t1_r2 = Number(t1_r2);
  var display = document.getElementById("t3_01").value;
  var print = document.getElementsByClassName("t3_r1_05")[0];
  print.innerHTML = ((t1_r1 + t1_r2) * display).toLocaleString();
};

var t3_02 = function () {
  var t1_r1 = document.getElementsByClassName("t3_r2_01")[0].innerText;
  var t1_r2 = document.getElementsByClassName("t3_r2_02")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  t1_r2 = Number(t1_r2);
  var display = document.getElementById("t3_02").value;
  var print = document.getElementsByClassName("t3_r2_05")[0];
  print.innerHTML = ((t1_r1 + t1_r2) * display).toLocaleString();
};

var t3_03 = function () {
  var t1_r1 = document.getElementsByClassName("t3_r3_01")[0].innerText;
  var t1_r2 = document.getElementsByClassName("t3_r3_02")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  t1_r2 = Number(t1_r2);
  var display = document.getElementById("t3_03").value;
  var print = document.getElementsByClassName("t3_r3_05")[0];
  print.innerHTML = ((t1_r1 + t1_r2) * display).toLocaleString();
};

var t3_04 = function () {
  var t1_r1 = document.getElementsByClassName("t3_r4_01")[0].innerText;
  var t1_r2 = document.getElementsByClassName("t3_r4_02")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  t1_r2 = Number(t1_r2);
  var display = document.getElementById("t3_04").value;
  var print = document.getElementsByClassName("t3_r4_05")[0];
  print.innerHTML = ((t1_r1 + t1_r2) * display).toLocaleString();
};

var t3_sum = function () {
  var print1 = document.getElementsByClassName("t3_r1_05")[0].innerText;
  var print2 = document.getElementsByClassName("t3_r2_05")[0].innerText;
  var print3 = document.getElementsByClassName("t3_r3_05")[0].innerText;
  var print4 = document.getElementsByClassName("t3_r4_05")[0].innerText;
  print1 = print1.replace(/,/g, '');
  print2 = print2.replace(/,/g, '');
  print3 = print3.replace(/,/g, '');
  print4 = print4.replace(/,/g, '');
  print1 = Number(print1);
  print2 = Number(print2);
  print3 = Number(print3);
  print4 = Number(print4);

  var print = document.getElementsByClassName("t3_sum")[0];
  print.innerHTML = (print1 + print2 + print3 + print4).toLocaleString();
};

var t4_01 = function () {
  var t1_r1 = document.getElementsByClassName("t4_r1_01")[0].innerText;
  var t1_r2 = document.getElementsByClassName("t4_r1_02")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  t1_r2 = Number(t1_r2);
  var display = document.getElementById("t4_01").value;
  var print = document.getElementsByClassName("t4_r1_05")[0];
  print.innerHTML = ((t1_r1 + t1_r2) * display).toLocaleString();
};

var t4_02 = function () {
  var t1_r1 = document.getElementsByClassName("t4_r2_01")[0].innerText;
  var t1_r2 = document.getElementsByClassName("t4_r2_02")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  t1_r2 = Number(t1_r2);
  var display = document.getElementById("t4_02").value;
  var print = document.getElementsByClassName("t4_r2_05")[0];
  print.innerHTML = ((t1_r1 + t1_r2) * display).toLocaleString();
};

var t4_03 = function () {
  var t1_r1 = document.getElementsByClassName("t4_r3_01")[0].innerText;
  var t1_r2 = document.getElementsByClassName("t4_r3_02")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r2 = t1_r2.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  t1_r2 = Number(t1_r2);
  var display = document.getElementById("t4_03").value;
  var print = document.getElementsByClassName("t4_r3_05")[0];
  print.innerHTML = ((t1_r1 + t1_r2) * display).toLocaleString();
};

var t4_04 = function () {
  var t1_r1 = document.getElementsByClassName("t4_r4_01")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  var display = document.getElementById("t4_04").value;
  var print = document.getElementsByClassName("t4_r4_05")[0];
  print.innerHTML = ((t1_r1) * display).toLocaleString();
};
var t4_05 = function () {
  var t1_r1 = document.getElementsByClassName("t4_r5_01")[0].innerText;
  t1_r1 = t1_r1.replace(/,/g, '');
  t1_r1 = Number(t1_r1);
  var display = document.getElementById("t4_05").value;
  var print = document.getElementsByClassName("t4_r5_05")[0];
  print.innerHTML = ((t1_r1) * display).toLocaleString();
};

var t4_sum = function () {
  var print1 = document.getElementsByClassName("t4_r1_05")[0].innerText;
  var print2 = document.getElementsByClassName("t4_r2_05")[0].innerText;
  var print3 = document.getElementsByClassName("t4_r3_05")[0].innerText;
  var print4 = document.getElementsByClassName("t4_r4_05")[0].innerText;
  var print5 = document.getElementsByClassName("t4_r5_05")[0].innerText;
  print1 = print1.replace(/,/g, '');
  print2 = print2.replace(/,/g, '');
  print3 = print3.replace(/,/g, '');
  print4 = print4.replace(/,/g, '');
  print5 = print5.replace(/,/g, '');
  print1 = Number(print1);
  print2 = Number(print2);
  print3 = Number(print3);
  print4 = Number(print4);
  print5 = Number(print5);

  var print = document.getElementsByClassName("t4_sum")[0];
  print.innerHTML = (print1 + print2 + print3 + print4 + print5).toLocaleString();
};

var all_sum = function () {
  var print1 = document.getElementsByClassName("t1_sum")[0].innerText;
  var print2 = document.getElementsByClassName("t2_sum")[0].innerText;
  var print3 = document.getElementsByClassName("t3_sum")[0].innerText;
  var print4 = document.getElementsByClassName("t4_sum")[0].innerText;
  print1 = print1.replace(/,/g, '');
  print2 = print2.replace(/,/g, '');
  print3 = print3.replace(/,/g, '');
  print4 = print4.replace(/,/g, '');
  print1 = Number(print1);
  print2 = Number(print2);
  print3 = Number(print3);
  print4 = Number(print4);

  var print = document.getElementsByClassName("all_sum")[0];
  print.innerHTML = (print1 + print2 + print3 + print4).toLocaleString();
};

function t2_l2() {
  $(".t2_l2").css("display", "table-cell");
  $(".t2_l3").css("display", "none");
  $(".t2_l4").css("display", "none");

  $(".t2_l3").empty();
  $(".t2_l4").empty();
}
function t2_l3() {
  $(".t2_l2").css("display", "none");
  $(".t2_l3").css("display", "table-cell");
  $(".t2_l4").css("display", "none");

  $(".t2_l2").empty();
  $(".t2_l4").empty();
}
function t2_l4() {
  $(".t2_l2").css("display", "none");
  $(".t2_l3").css("display", "none");
  $(".t2_l4").css("display", "table-cell");

  $(".t2_l2").empty();
  $(".t2_l3").empty();
}

function t3_l2() {
  $(".t3_l2").css("display", "table-cell");
  $(".t3_l3").css("display", "none");

  $(".t3_l3").empty();
}
function t3_l3() {
  $(".t3_l2").css("display", "none");
  $(".t3_l3").css("display", "table-cell");

  $(".t3_l2").empty();
}

function t4_l2() {
  $(".t4_l2").css("display", "table-cell");
  $(".t4_l3").css("display", "none");

  $(".t4_l3").empty();
}
function t4_l3() {
  $(".t4_l2").css("display", "none");
  $(".t4_l3").css("display", "table-cell");

  $(".t4_l2").empty();
}

function show01() {
  $(".t1").toggleClass("on");
}
function show02() {
  $(".t2").toggleClass("on");
}
function show03() {
  $(".t3").toggleClass("on");
}
function show04() {
  $(".t4").toggleClass("on");
}
