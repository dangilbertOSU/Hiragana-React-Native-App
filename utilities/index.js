const hiraganaMap = [
	{
		hiragana: "あ",
		pronunciation: "a",
	},
	{
		hiragana: "か",
		pronunciation: "ka",
	},
	{
		hiragana: "さ",
		pronunciation: "sa",
	},
	{
		hiragana: "た",
		pronunciation: "ta",
	},
	{
		hiragana: "な",
		pronunciation: "na",
	},
];

const randomizeOrder = (array) => {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

const generateRandomNumber = (max) => {
	return Math.floor(Math.random() * Math.floor(max));
};

const fourRandomNumbers = (answerIndex, max) => {
	const indexSet = new Set([answerIndex]);

	while (indexSet.size !== 4) {
		indexSet.add(generateRandomNumber(max));
	}

	return [...indexSet];
};

module.exports = {
	hiraganaMap,
	generateRandomNumber,
	randomizeOrder,
	fourRandomNumbers,
};
