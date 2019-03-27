//Array para armazenar os cadastros de pessoas
let dados = []

function calcular(){
    //PEGAR O CONTEÚDO DO CAMPO NOME
    let nome = document.getElementById("nome").value;
    //PEGAR O CONTEÚDO DO CAMPO ALTURA
    let altura = parseFloat(document.getElementById("altura").value);
    //PEGAR O CONTEÚDO DO CAMPO PESO
    let peso = parseFloat(document.getElementById("peso").value);

    if(nome != "" && altura > 0 && peso > 0){
        let IMC = calcularIMC(altura, peso);
        let situacao = gerasituacao(IMC);
        
        let pessoa = {};
            pessoa.nome = nome;
            pessoa.altura = altura;
            pessoa.peso = peso;
            pessoa.imc = IMC.toFixed(2);
            pessoa.situacao = situacao;

        dados.push(pessoa);
        montaTela();
        limpaCampo();
    } else {
        alert ("Preencha todos os campos corretamente");
    }
}

function limpaCampo(){
    document.getElementById("nome").value = '';
    document.getElementById("altura").value = '';
    document.getElementById("peso").value = '';
}

function calcularIMC(altura, peso){
    //CALCULAR O IMC E RETORNAR O RESULTADO
    return peso / (altura * altura);
}

//CRIAR FUNÇÃO GERASITUAÇÃO
//ESSA FUNÇÃO DEVE RECEBER O IMC E RETORNAR A SITUAÇÃO
// OBESIDADE 1, NORMAL, ETC

function gerasituacao(IMC){
    if(IMC < 18.5){
        return "Baixo Peso";
    }
    
    else if(IMC >=18.5 && IMC <= 24.9){
        return "Peso normal";
    }

    else if(IMC >=25 && IMC <=29.9){
        return "Pré-Obeso";
    }

    else if(IMC >=30 && IMC <= 34.9){
        return "Obeso I";
    }

    else if(IMC >=35 && IMC <= 39.9){
        return "Obeso II";
    }

    else if(IMC >=40){
        return "Obeso III";
    }
}

function montaTela(){
    //rodar um for para montar todas as linhas de tabela e depois inserir no html
    let template = "";
    for(let i = 0; i < dados.length; i++){
        template += `
        <tr>
            <td>${dados[i].nome}</td>
            <td>${dados[i].altura}</td>
            <td>${dados[i].peso}</td>
            <td>${dados[i].imc}</td>
            <td>${dados[i].situacao}</td>
        </tr>
        `
    }

    document.getElementById("cadastro").innerHTML = template;
}