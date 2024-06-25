// function getTime(){
//     let seconds;
//     let minutes;
//     let hours;
//     function getSecond(){
//         seconds = Math.floor(math.random()*60).toFixed(2, 0)
//         return seconds
//     }
//     function getMinutes(){
//         minutes = Math.floor(math.random()*60).toFixed(2, 0)
//         return minutes
//     }
//     function getHours(){
//         hours = Math.floor(math.random()*24)
//         return hours
//     }
//     console.log(seconds, minutes, hours)
// }

// getTime()

// Fail ^^


// Upon refresh it changes time
function getSeconds(){
    const second = Math.floor(Math.random()*60).toString().padStart(2 ,0) // .toString // padStart(0, 2)
    return second;
}

function getMinutes(){
    let minute = Math.floor(Math.random()*60).toString().padStart(2 ,0) // .toString // padStart(0, 2)
    return minute
}

function getHours(){
    let hour = Math.floor(Math.random()*24).toString().padStart(2 ,0) // .toString // padStart(0, 2)
    return hour
}

console.log (`Time is ${getHours()}:${getMinutes()}:${getHours()}`)

// check if I know how git works?

