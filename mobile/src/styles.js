import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#cecece',
    },

    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal:20,
        backgroundColor: '#333',
        height: 100,
    },

    headerText:{
        fontSize: 15,
        color: '#737380',
    },

    card: {
        paddingHorizontal: 20,
    },

    switchBox:{
        marginBottom: 10,
        flexDirection: 'row',
        alignItems:'center',
    },

    boxColor: {

        paddingHorizontal:20,
        height: 60,
        backgroundColor: '#333',
        marginBottom:20,
        borderRadius:10,
    },

    boxFiber:{
        paddingHorizontal:20,
        backgroundColor: "#ddd",
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },

    boxGroup : {
        backgroundColor: "#eee",
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerTextBold: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 16,
        marginTop: 48,
        textAlign: 'center',
    },
    input:{
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: '#00BFA5',
        padding: 8,
        margin: 10,
        fontSize: 18,
    },

    footer: {
        marginTop: 134,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333',
        height: 100,
    },

    footerText: {
        color: '#ccc',
    }

});