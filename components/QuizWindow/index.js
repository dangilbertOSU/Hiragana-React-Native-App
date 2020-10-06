import styles from "../../styles";
import React, { useState } from "react";
import {
	Text,
	View,
	TouchableOpacity,
	ToastAndroid,
	Platform,
	AlertIOS,
} from "react-native";
import {
	hiraganaMap,
	randomizeOrder,
	fourRandomNumbers,
} from "../../utilities";
import CharacterDisplay from "../CharacterDisplay";

const notifyMessage = (msg) => {
	Platform.OS === "android"
		? ToastAndroid.show(msg, ToastAndroid.TOP)
		: AlertIOS.alert(msg);
};

const QuizWindow = (props) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [gameStarted, setGameStarted] = useState(false);
	const [answerOptions, setAnswerOptions] = useState([]);

	const startGame = () => {
		randomizeOrder(hiraganaMap);
		setCurrentIndex(0);
		setGameStarted(true);
		setAnswerOptions([]);
		randomizeOptions(0);
	};

	const randomizeOptions = (newIndex) => {
		const answerOptions = fourRandomNumbers(newIndex, hiraganaMap.length);

		const answerObjectsArray = [
			hiraganaMap[newIndex],
			hiraganaMap[answerOptions[1]],
			hiraganaMap[answerOptions[2]],
			hiraganaMap[answerOptions[3]],
		];

		randomizeOrder(answerObjectsArray);
		setAnswerOptions(answerObjectsArray);
	};

	const checkAnswer = (word) => {
		/*
		 * If the player guesses the correct response, the index is incremented and more
		 * options are randomized
		 */
		if (word == hiraganaMap[currentIndex].pronunciation) {
			const newIndex = currentIndex + 1;
			setCurrentIndex(newIndex);
			randomizeOptions(newIndex);

			/*
			 * If the player reaches the last character in the hiragana map
			 * then the game will end
			 */

			if (currentIndex == hiraganaMap.length - 1) {
				setGameStarted(false);
			}
		} else notifyMessage("wrong!");
	};

	return (
		<View style={styles.container}>
			{!gameStarted && (
				<View>
					<TouchableOpacity
						onPress={() => startGame()}
						style={styles.button}
					>
						<Text style={styles.buttonText}>Start</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => props.setAppMode("menu")}
						style={styles.button}
					>
						<Text style={styles.buttonText}>
							Back to Menu
						</Text>
					</TouchableOpacity>
				</View>
			)}
			{gameStarted && (
				<View>
					<View style={styles.centerText}>
						<CharacterDisplay
							character={
								hiraganaMap[currentIndex].hiragana
							}
						/>
					</View>
					{answerOptions &&
						answerOptions.map((option) => {
							return (
								<View
									style={styles.button}
									key={option.pronunciation}
								>
									<TouchableOpacity
										styles={styles.button}
										onPress={() =>
											checkAnswer(
												option.pronunciation
											)
										}
									>
										<Text
											style={styles.buttonText}
										>
											{option.pronunciation}
										</Text>
									</TouchableOpacity>
								</View>
							);
						})}
				</View>
			)}
		</View>
	);
};

export default QuizWindow;
