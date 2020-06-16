
function colorDeconstructor(colorOne) {
    if (colorOne === 'orange') {
        return 'Orange is made by combining red and yellow!';
    }
    else if (colorOne === 'purple') {
        return 'Purple is made by combining red and blue!'
    }
    else if (colorOne === 'green') {
        return 'Green is made by combining blue and yellow!'
    }
    else if (colorOne !== 'Orange') {
        return "Sorry, that's not a secondary color!"
    }
    else if (colorOne !== 'purple') {
        return "Sorry, that's not a secondary color!"
    }
    else if (colorOne !== 'green') {
        return "Sorry, that's not a secondary color!"
    }
}


module.exports = colorDeconstructor;