function isHeavy(weight) {
    return weight >= 100;
}

function dayName(dayOfWeek) {
    switch (dayOfWeek) {
    case 0:
        return 'Sunday';
    case 1:
        return 'Monday';
    case 2:
        return 'Tuesday';
    case 3:
        return 'Wednesday';
    case 4:
        return 'Thursday';
    case 5:
        return 'Friday';
    case 6:
        return 'Saturday';
    default:
        return null;
    }
}


module.exports = {
    isHeavy,
    dayName,
};
