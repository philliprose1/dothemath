function add() {
var adda = parseFloat(document.getElementById("adda").value);
var addb = parseFloat(document.getElementById("addb").value);
var addc = adda + addb;
document.getElementById("postAddAnswer").innerHTML= "Your Answer is: " + addc;
}
function sub() {
 var mina = parseFloat(document.getElementById("mina").value);
 var minb = parseFloat(document.getElementById("minb").value);
 var minc = mina - minb;
 document.getElementById("postMinAnswer").innerHTML= "Your Answer is: " + minc;   
}
function mul() {
    var mula = parseFloat(document.getElementById("mula").value);
    var mulb = parseFloat(document.getElementById("mulb").value);
    var mulc = mula * mulb;
    document.getElementById("postMulAnswer").innerHTML= "Your Answer is: " + mulc;
}
function div() {
    var diva = parseFloat(document.getElementById("diva").value);
    var divb = parseFloat(document.getElementById("divb").value);
    var divc = diva / divb;
    document.getElementById("postDivAnswer").innerHTML= "Your Answer is: " + divc;
}
function per() {
    var pera = parseFloat(document.getElementById("pera").value);
    var perb = parseFloat(document.getElementById("perb").value);
    var perc = pera / 100 * perb;

    document.getElementById("postPerAnswer").innerHTML= "Your Answer is: " + perc;
}
