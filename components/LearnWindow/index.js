import styles from "../../styles";
import React, { useState } from "react";
import { hiraganaMap } from "../../utilities";
import CharacterDisplay from "../CharacterDisplay";
import GestureRecognizer from "react-native-swipe-gestures";
import { Text, View, TouchableOpacity } from "react-native";

const LearnWindow = (props) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const moveBackward = () => {
		if (currentIndex != 0) setCurrentIndex(currentIndex - 1);
	};

	const moveForward = () => {
		if (currentIndex != hiraganaMap.length - 1)
			setCurrentIndex(currentIndex + 1);
	};

	const config = {
		velocityThreshold: 0.3,
		directionalOffsetThreshold: 80,
	};

	return (
		<GestureRecognizer
			onSwipeLeft={() => moveForward()}
			onSwipeRight={() => moveBackward()}
			config={config}
			style={{
				flex: 1,
				backgroundColor: "#fff",
				justifyContent: "center",
			}}
		>
			<View>
				<View style={styles.centerText}>
					<CharacterDisplay
						character={hiraganaMap[currentIndex].hiragana}
					/>
				</View>
				<View style={styles.centerText}>
					<Text style={{ fontSize: 100 }}>
						{hiraganaMap[currentIndex].pronunciation}
					</Text>
				</View>
				<View style={styles.centerText}>
					<Text style={{ fontSize: 30 }}>
						Character {currentIndex + 1} /{" "}
						{hiraganaMap.length}
					</Text>
				</View>
				<TouchableOpacity
					onPress={() => props.setAppMode("menu")}
					style={styles.button}
				>
					<Text style={styles.buttonText}>Exit</Text>
				</TouchableOpacity>
			</View>
		</GestureRecognizer>
	);
};

export default LearnWindow;
