import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
	},
	button: {
		alignSelf: "stretch",
		backgroundColor: "#84CDCA",
		borderColor: "#274746",
		borderWidth: 2,
		height: 100,
		justifyContent: "center",
	},
	buttonText: {
		textAlign: "center",
		fontSize: 30,
	},
	centerText: {
		alignSelf: "center",
	},
	absolute: {
		marginLeft: 20,
		marginTop: 40,
		position: "absolute",
	},
});

export default styles;
