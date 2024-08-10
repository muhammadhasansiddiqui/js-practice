// Detect Anagram word
// Input: ["bat", "tap", "cat","tab", "pat"]
// Output: [["bat", "tab"], ["tap", "pat"]]

function AnagramsFOO(e) {
  const ARR = {};
  const darr ={}

  e.forEach((word) => {
    const anaWORD = word.split("").sort().join("");
    if (!ARR[anaWORD]) ARR[anaWORD] = [];
    var abc =  ARR[anaWORD].push(word);
    abc.darr
  });

  return Object.values(ARR);
}

const input = ["bat", "tap", "cat", "tab", "pat"];
const output = AnagramsFOO(input);

console.log(output);
