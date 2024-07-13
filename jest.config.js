function timeWord(time){
    const [hour, minute] = time.split(':').map(Number);
    const hours= ['twelve','one','two','three','four','five','six','seven','eight','nine','ten','eleven'];
    const minutes= ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','quarter','sixteen','seventeen','eighteen','nineteen','twenty','twenty one','twenty two','twenty three','twenty four','twenty five','twenty six','twenty seven','twenty eight','twenty nine','half'];

    if(time==='00:00') return 'midnight';
    if(time==='12:00') return 'noon';

    let result = '';

    if(hour===0){
        result += 'twelve';
    } else if(hour>12){
        result += hours[hour-12];
    } else{
        result += hours[hour];
    }

    if(minute===0){
        result += ' o\' clock';
    } else if(minute<10){
        result += ' oh ' + minutes[minute];
    } else if(minute<=30){
        result += ' ' + minutes[minute];
    } else if(minute===30){
        result += ' thirty';
    } else{
        result += ' ' + minutes[30+minute%10];
    }

    result += hour<12 ? ' am' : ' pm';
    return result.trim();
}

module.exports = timeWord;