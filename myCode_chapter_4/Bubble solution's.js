var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];
var costs = [.25, .27, .25, .25, .25, .25,
             .33, .31, .25, .29, .27, .22,
             .31, .25, .25, .33, .21, .25,
             .25, .25, .28, .25, .24, .22,
             .20, .25, .30, .25, .24, .25,
             .25, .25, .27, .25, .26, .29];
//var tests = 0;
function bubbleSolution(scores) {
    var hiScore = 0;
    for (var i = 0; i < scores.length; i++) {
        console.log('Bubble solution #' + i + ' score: ' + scores[i]);
        //tests++;
        if (scores[i] >= hiScore) {
            hiScore = scores[i];
        }
        }
    return hiScore;
    }
function computeSolHiScore(scores, hiScore) {
    var solHiScore = [];
    for (var i = 0, j = 0; i < scores.length; i++) {
        if (scores[i] == hiScore) {
            //solHiScore.push('#' + i);
            solHiScore.push(i);
            // solHiScore[j] = '#' + i;
            // j++;
        }
    }
    return solHiScore;
    // for (var k = 0; k < solHiScore.length; k++) {
    //     console.log('#' + solHiScore.join(', #'));
    //     // if (k == (solHiScore.length - 1)) {
    //     //     console.log('#' + solHiScore[k]);
    //     // } else {
    //     //     console.log('#' + solHiScore[k].join(', '));
    //     }
    }
function computeBestCost(costs, bestSolutions) {
    var minCost = 1;
    var number = 0;
    for (var i = 0; i < costs.length; i++) {
        for (var j = 0; j < bestSolutions.length; j++) {
            if (i == bestSolutions[j] && costs[i] < minCost) {
                minCost = costs[i];
                number = bestSolutions[j];
            }
        }
    }
    return number;
}


var highScore = bubbleSolution(scores);
var bestSolutions = computeSolHiScore(scores, highScore);
var bestCost = computeBestCost(costs, bestSolutions);

//computeSolHiScore(solHiScore);
//console.log('Bubble tests: ' + tests);
console.log('Bubble tests: ' + scores.length);
console.log('Highest bubble score: ' + highScore);
//console.log('Solutions with highest score: ' + solHiScore.join(', '));
console.log('Solutions with highest score: ' + bestSolutions);
console.log("Bubble Solution #" + bestCost + " is the most cost effective");