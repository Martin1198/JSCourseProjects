const game1DolphinsScore = 97;
const game2DolphinsScore = 112;
const game3DolphinsScore = 40;
const game1KoalasScore = 109;
const game2KoalasScore = 95;
const game3KoalasScore = 50;

const averageDolphinsScore = (game1DolphinsScore + game2DolphinsScore + game3DolphinsScore) / 3;

const averageKoalasScore = (game1KoalasScore + game2KoalasScore + game3KoalasScore) / 3;


if (averageDolphinsScore > averageKoalasScore && averageDolphinsScore >= 100) {
    console.log(averageDolphinsScore, averageKoalasScore, "Dolphins Win with higher average score!")
} else if (averageDolphinsScore < averageKoalasScore && averageKoalasScore >= 100) {
    console.log(averageDolphinsScore, averageKoalasScore, "Koalas Win with higher average score!")
} else if (averageDolphinsScore === averageKoalasScore && averageDolphinsScore >= 100 && averageKoalasScore >= 100) {
    console.log(averageDolphinsScore, averageKoalasScore, "It's a DRAW! Both teams have the same average score!")
} else {
    console.log("No team wins");
}