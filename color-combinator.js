
function colorCombinator(colorOne, colorTwo) {
    if (colorOne === 'red' && colorTwo === 'yellow') {
        return 'When you combine red and yellow, you get orange!';
    } 
    else if (colorOne === 'red' && colorTwo === 'blue') {
        return 'When you combine red and blue, you get purple!'; 
    }
    else if (colorOne === 'yellow' && colorTwo === 'blue') {
        return  'When you combine yellow and blue, you get green!'
    }
    else if (colorOne !== 'blue' && colorOne !== 'red' && colorOne !== 'yellow') {
        return 'Sorry, one of those colors is not a primary color!'
    }
    else if (colorTwo !== 'blue' && colorTwo !== 'red' && colorTwo !== 'yellow') {
        return 'Sorry, one of those colors is not a primary color!'
    }

}




module.exports = colorCombinator;