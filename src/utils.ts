import { NewDiaryEntry, Weather, Visibility } from "./types"; 



// Type Guards

const isString = (text:unknown): text is string => {
    
    return typeof text === 'string' || text instanceof String;
}

const parseComment = (comment: unknown): string => {

    if (!comment || !isString(comment)) {
      throw new Error('Incorrect or missing comment');
    }
  
    return comment;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
  };  

// For Date
const parseDate = (date: unknown): string => { 
    
    if(!date || !isString(date) || !isDate(date)){
        throw new Error('Incorrect or missing date: '+ date);
    }

    return date;
}

// const isWeather = (str: string):str is Weather => {
//     return ['sunny','rainy','cloudy', 'stormy'].includes(str);
// }

const isWeather = (param: string):param is Weather => {
    return Object.values(Weather).map(v => v.toString()).includes(param);
}

const parseWeather = (weather: unknown): Weather => {
    
    if(!weather || !isString(weather) || !isWeather(weather)){
        throw new Error('Incorrect or missing weather');
    }
    return weather;
}

const isVisibility = (param: string): param is Visibility => {
    return Object.values(Visibility).map(v => v.toString()).includes(param);
}

const parseVisibility = (visibility: unknown): Visibility => {
    
    if(!isString(visibility) || !isVisibility(visibility)){
        throw new Error('Incorrect or missing visibility' + visibility);
    }
    return visibility;  
}

//unknown is the ideal type for our kind of situation of input validation
const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {

    if(!object || typeof object !== 'object'){
        throw new Error('Incorrect or missing data');
    }

    if('comment' in object && 'date' in object && 'weather' in object && 'visibility' in object){
        const newEntry:NewDiaryEntry = {
            comment: parseComment(object.comment),
            date: parseDate(object.date),
            weather: parseWeather(object.weather),
            visibility: parseVisibility(object.visibility)
            
            }
    
    return newEntry;
    }
    throw new Error('Incorrect data: some fields are missing');
}

export default toNewDiaryEntry;