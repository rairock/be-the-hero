function fibra(valor){
   var colorHexa = [
        '#194918',
        '#C4C04F',
        '#FFF',
        '#1D2B58',
        '#F20505',
        '#AA44C1',
        '#452017',
        '#D071AD',
        '#000',
        '#CCC',
        '#BB6C3E',
        '#79C3D2'
    ]

    for(let i = 0;i < colorHexa.length; i++){
        if(valor <= 12){
            return colorHexa[valor-1];
        }else if(valor > 12 & valor <= 24){
            return colorHexa[valor-13]
        }else if(valor > 24 & valor <= 36){
            return colorHexa[valor-25]
        }else if(valor > 36 & valor <= 48){
            return colorHexa[valor-37]
        }else if(valor > 48 & valor <= 60){
            return colorHexa[valor-49]
        }else if(valor > 60 & valor <= 72){
            return colorHexa[valor-61]
        }
    }
}


function nameColorFiber(valor){
    var nameColor = [
        'VERDE',
        'AMARELO',
        'BRANCO',
        'AZUL',
        'VERMELHO',
        'LILÁS',
        'MARROM',
        'ROSA',
        'PRETO',
        'CINZA',
        'LARANJA',
        'AZUL-PAYSANDU'
    ]

    for(let i = 0;i < nameColor.length; i++){
        if(valor == ""){
            return "";
        }

        if(valor <= 12){
            return nameColor[valor-1];
        }else if(valor > 12 & valor <= 24){
            return  nameColor[valor-13];
        }else if(valor > 24 & valor <= 36){
            return  nameColor[valor-25];
        }else if(valor > 36 & valor <= 48){
            return  nameColor[valor-37];
        }else if(valor > 48 & valor <= 60){
            return  nameColor[valor-49];
        }else if(valor > 60 & valor <= 72){
            return  nameColor[valor-61];
        }else if(valor > 72){
            alert("Desculpe mais ainda não temos mais de 72 fibras!")
            break;
        }else{
            alert("Os dados inseridos não são válidos!")
            break
        }
    }

}

    function groupFiber(valor){
        for(let i = 0;i < nameColor.length; i++){
        if(valor == ""){
            return "";
        }

        if(valor <= 12){
            return "01";
        }else if(valor > 12 & valor <= 24){
            return  "02";
        }else if(valor > 24 & valor <= 36){
            return  "03";
        }else if(valor > 36 & valor <= 48){
            return  "04";
        }else if(valor > 48 & valor <= 60){
            return  "05";
        }else if(valor > 60 & valor <= 72){
            return  "06";
        }else if(valor > 72){
            alert("Desculpe mais ainda não temos mais de 72 fibras!")
            break;
        }else{
            alert("Os dados inseridos não são válidos!")
            break
        }
    }

    }
