// Deteksi Palindrom
const checkPalindrome = (word) => {
    let reversedWord = word.toLowerCase().split('').reverse().join('');
    if(word.toLowerCase() === reversedWord) {
        console.log(`${word} adalah kata palindrom`);
    }else {
        console.log(`${word} bukan kata palindrom`);
    }
};

checkPalindrome('Malam');


