module.exports = function toReadable(number) {
    const Dgt = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const twoDgt = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let readable = "";
    if (number >= 100) {
        let single = parseInt(number / 100);
        readable += Dgt[single] + " hundred";
        let tens = number % 100;
        if (tens >= 10) {
            if (tens % 10 == 0) {
                tens = parseInt(tens / 10);
                if (tens == 1) {
                    readable += " " + twoDgt[0]
                } else {
                    readable += " " + twoDgt[tens + 8];
                }
            } else {
                if (tens >= 10 && tens < 20) {
                    tens = tens % 10;
                    readable += " " + twoDgt[tens];
                } else {
                    let hundreds = tens % 10;
                    tens = parseInt(tens / 10);
                    readable += " " + twoDgt[tens + 8];
                    readable += " " + Dgt[hundreds];
                }
            }
        } else {
            if (tens != 0) {
                readable += " " + Dgt[tens];
            }
        }
    } else if (number >= 10) {
        if (number % 10 == 0) {
            let tens = parseInt(number / 10);
            if (tens == 1) {
                readable += twoDgt[0]
            } else {
                readable += twoDgt[tens + 8];
            }
        } else {
            if (number >= 10 && number < 20) {
                let teens = number % 10;
                readable += twoDgt[teens];
            } else {
                let single = number % 10;
                let tens = parseInt(number / 10);
                readable += twoDgt[tens + 8];
                readable += " " + Dgt[single];
            }
        }
    } else {
        readable += Dgt[number];
    }
    return readable;
}
