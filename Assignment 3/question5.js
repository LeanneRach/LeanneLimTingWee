const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

// Assign each value in the array to a named variable based on its index
const [low, high, open, close, volume] = bacData;

if (close > open) {
   if (volume > 100_000) {
      console.log("Strong Bullish"); 
   } else { console.log("Bullish"); }
 }
else if (close < open) {
   if (volume > 10_000) {
      console.log("Strong Bearish"); 
   } else { console.log("Bearish"); }
 }
else if (close === open) {
   console.log("neutral");
}