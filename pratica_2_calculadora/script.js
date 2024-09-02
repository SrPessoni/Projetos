var calculei = false;
var operei = false;
var expressao = '';

function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    var exp = document.getElementById('exp')

    if (calculei){
        if(n === '-' || num === '+' || num === '/' || num === '*'){
            document.getElementById('resultado').innerHTML = numero + num;
            calcular(true);
            expressao = expressao + num;
            calculei = true;
            operei = true;
        }
        else {
            document.getElementById('resultado').innerHTML = num;
            expressao = num;
        };
        calculei = false;
    }
    else {
        if(num === '-' || num === '+' || num === '/' || num === '*'){
            calcular(true);
            expressao = expressao + num;
            operei = true;
        }
    
        else {
            if(operei){
                document.getElementById('resultado').innerHTML = num;
                expressao = expressao + num;
                operei = false;
            }
            else {
                if (numero === "0"){
                    document.getElementById('resultado').innerHTML = num;
                }
                else{
                    document.getElementById('resultado').innerHTML = numero + num;
                };
                expressao = expressao + num;
            };
        };
    };
};
exp.innerHTML = expressao;

function clean(){
    document.getElementById('resultado').innerHTML = 0;
    expressao = "";
};

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
    expressao.substring(0, expressao.length - 1);

};

function calcular(parcial = false) {
    var resultado = document.getElementById('resultado').innerHTML;
    if (expressao){
        document.getElementById('resultado').innerHTML = eval(expressao);
        expressao = document.getElementById('resultado').innerHTML;
            if (parcial){
                calculei = false;
            }
            else {
                calculei = true;
            }
    }
    else {
        document.getElementById('resultado').innerHTML = "ERROR";
    }
};