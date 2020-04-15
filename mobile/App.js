import React, { useState, version } from 'react';
import { Switch, Text, Image, View, TextInput } from 'react-native';

import logoImg from './src/assets/logo.png';

import styles from './src/styles.js';


export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [ number, setNumber] = useState();
  
 
  var numberGroup = groupFiber(number);
  
  
  if(isEnabled){
    var color = nameColorFiberSix(number);
    var backgroundFiber = fiberSix(number);
    var numberGroup = groupFiberSix(number);
  }else{
    var color = nameColorFiber(number);
    var backgroundFiber = fiber(number);
    var numberGroup = groupFiber(number);
  }


  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
          <Image source={logoImg}/>
          <Text style={styles.headerText}>
            FIBERCOLORVIEW
          </Text>
      </View>

      <View style={styles.card}>
    
        <Text style={styles.headerTextBold}>CONSULTA FIBRA ÓPTICA</Text>
        
        <View style={styles.switchBox}>

        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#333" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
        <Text style={styles.swithcText}>06 FIBRAS</Text>

        </View>

        <View style={{backgroundColor: backgroundFiber, height: 60}}/>
        <View style={styles.boxFiber}>
          <Text style={styles.textFiber}>FIBRA : { color }</Text>
        </View>

        <View style={styles.boxGroup}>
          <Text style={styles.textFiberGroup}>GRUPO: { numberGroup }</Text>
        </View>

        <TextInput style={styles.input}
        keyboardType = 'numeric'
        onChangeText={(val) => setNumber(val)}/>

    </View>
      <View style={styles.footer}>
      <Text style={styles.footerText}>
        Desenvolvido por Rairock @ConexãoNet-Pacajá
      </Text>
    </View>


</View>
      
  );
/**
 * FIBRA TUBOLOOSE DE SEIS 
 */
  function nameColorFiberSix(valor){
    var nameColor = [
        'VERDE',
        'AMARELO',
        'BRANCO',
        'AZULS',
        'VERMELHO',
        'LILÁS'
    ]

    for(let i = 0;i < nameColor.length; i++){
        if(valor == ""){
            return "";
        }

        if(valor <= 6){
            return nameColor[valor-1];
        }else if(valor > 6 & valor <= 12){
            return  nameColor[valor-7];
        }else if(valor > 12 & valor <= 18){
            return  nameColor[valor-13];
        }else if(valor > 18 & valor <= 24){
            return  nameColor[valor-19];
        }else if(valor > 24 & valor <= 30){
            return  nameColor[valor-25];
        }else if(valor > 30 & valor <= 36){
            return  nameColor[valor-31];
        }else if(valor > 36){
            alert("Desculpe mais ainda não temos mais de 36 fibras!")
            break;
        }
    }
}

function fiberSix(valor){
    var colorHexa = [
        '#194918',
        '#C4C04F',
        '#FFF',
        '#1D2B58',
        '#F20505',
        '#AA44C1'
    ]
  
    for(let i = 0;i < colorHexa.length; i++){
        if(valor <= 6){
            return colorHexa[valor-1];
        }else if(valor > 6 & valor <= 12){
            return  colorHexa[valor-7];
        }else if(valor > 12 & valor <= 18){
            return  colorHexa[valor-13];
        }else if(valor > 18 & valor <= 24){
            return  colorHexa[valor-19];
        }else if(valor > 24 & valor <= 30){
            return  colorHexa[valor-25];
        }else if(valor > 30 & valor <= 36){
            return  colorHexa[valor-31];
        }
    }
  }

  function groupFiberSix(valor){
    for(let i = 0; i < 12; i++){
    if(valor == ""){
        return "";
    }

    if(valor <= 6){
        return "01";
    }else if(valor > 6 & valor <= 12){
        return  "02";
    }else if(valor > 12 & valor <= 18){
        return  "03";
    }else if(valor > 18 & valor <= 24){
        return  "04";
    }else if(valor > 24 & valor <= 30){
        return  "05";
    }else if(valor > 30 & valor <= 36){
        return  "06";
    }else if(valor > 36){
        alert("Desculpe mais ainda não temos mais de 72 fibras!")
        break;
    }
}

}

/**
 * FIBRA TUBOLOOSE DE 12 
 */
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
        }
    }

}

function fiber(valor){
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

    function groupFiber(valor){
        for(let i = 0; i < 12; i++){
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
        }
    }

    }

}
