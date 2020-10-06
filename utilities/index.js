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

const generateRandomNumber = (notNumber, max) => {
	const randomNumber = Math.floor(Math.random() * Math.floor(max));

	if (notNumber.includes(randomNumber))
		return generateRandomNumber(notNumber, max);

	return randomNumber;
};

const fourRandomNumbers = (answerIndex, max) => {
	let randomArray = [answerIndex];
	for (let i = 0; i < 3; i++) {
		randomArray.push(generateRandomNumber(randomArray, max));
	}

	return randomArray;
};

module.exports = {
	hiraganaMap,
	generateRandomNumber,
	randomizeOrder,
	fourRandomNumbers,
};
