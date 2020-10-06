import styles from "./styles";
import React, { useState } from "react";
import QuizWindow from "./components/QuizWindow";
import LearnWindow from "./components/LearnWindow";
import { Text, View, TouchableOpacity } from "react-native";

const App = () => {
	const [appMode, setAppMode] = useState("menu");

	return (
		<View style={styles.container}>
			{appMode == "menu" && (
				<View>
					<TouchableOpacity
						style={styles.button}
						onPress={() => setAppMode("learn")}
					>
						<Text style={styles.buttonText}>Learn</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={() => setAppMode("quiz")}
					>
						<Text style={styles.buttonText}>Quiz</Text>
					</TouchableOpacity>
				</View>
			)}
			{appMode == "quiz" && <QuizWindow setAppMode={setAppMode} />}
			{appMode == "learn" && <LearnWindow setAppMode={setAppMode} />}
		</View>
	);
};

export default App;
