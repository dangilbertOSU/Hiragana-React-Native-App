import React from "react";
import { Text, View } from "react-native";

const CharacterDisplay = (props) => {
	return (
		<View>
			<Text style={{ fontSize: 200 }}>{props.character}</Text>
		</View>
	);
};

export default CharacterDisplay;
