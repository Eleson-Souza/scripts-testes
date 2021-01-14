function conversionToHourMinSec(timeInSeconds) {

    let hours = 0, minutes = 0, secounds = 0;
    if(timeInSeconds >= 3600) {
        hours = Math.floor(timeInSeconds / 3600);
        timeInSeconds %= 3600;
    }
    if(timeInSeconds >= 60) {
        minutes = Math.floor(timeInSeconds / 60);
        timeInSeconds %= 60;
    }

    secounds = Math.ceil(timeInSeconds);

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    secounds = secounds < 10 ? `0${secounds}` : secounds;

    return `${hours}h ${minutes}m ${secounds}s`;

}

Console.log(conversionToHourMinSec(5200));