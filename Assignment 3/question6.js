const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
};

// Converting the strings to numbers
const openNum = parseFloat(disneyData["open"]);
const closeNum = parseFloat(disneyData["close"]);
const volumeNum = parseFloat(disneyData["volume"]);

if (closeNum > openNum) {
	if (volumeNum > 100_000) {
		console.log("Strong Bullish"); 
	} else { console.log("Bullish"); }
 }
else if (closeNum < openNum) {
	if (volumeNum > 10_000) {
		console.log("Strong Bearish"); 
	} else { console.log("Bearish"); }
 }
else if (closeNum === openNum) {
	console.log("neutral");
}