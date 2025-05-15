import { Text, View, } from "react-native";

import { styles } from "@/app/index/styles"

export default function index () {
return (
        <View style={styles.container} >
        <Text style={styles.title}>Currículo para os caçadores de troféus</Text>
        <Text style={styles.title2}>Meu Cadastro</Text>
        <Text style={styles.title3}>Nome: Misael </Text> 
        <Text style={styles.title4}>idade: 200 Anos</Text>
        <Text style={styles.title5}>Nacimento: 19/07/2005</Text>
        <Text style={styles.title6}>Nacionalidade: Mandagáscar</Text>
        <Text style={styles.title7}>Cidade: Boca do Acre  </Text>
        <Text style={styles.title8}>Endereço:Praia do gado</Text>
        <Text style={styles.title9}>Telefone: 97 000000000</Text>
        <Text style={styles.title10}>cpf: 000 000 000-00</Text>

        <Text style={styles.title11}>Ola! Sou Mandagáscarzense tenho 200 anos, Meu papel no mundo é caça paca de baladeira.
             Nas horas vagas aposto em brigar de galo.
        </Text>

        <Text style={styles.title12}>Hobby: Caça paca, Aposta em brigar de galo, Assiste brigar de alejado de muleta é
            Assiste corridas do Teleton </Text>
    




        </View>
    );
}

