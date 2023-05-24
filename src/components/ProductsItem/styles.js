import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    categoriesItem: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,
    },
    itemContainer: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 15,
    },
    imageContainer: {
        width: "40%",
        height: "100%",
    },
    image:{
        width: "100%",
        height: "100%",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    textContainer: {
        width: "60%",
        height: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 10,
    },

});

export default styles;