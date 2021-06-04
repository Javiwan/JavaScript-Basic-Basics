let weather = ['sunny', 'rainy', 'other'];

let todayWeather = weather[Math.round(Math.random() * 3)];

switch(todayWeather){
    case 'sunny':
        console.log("It's a beautiful day");
        break;

    case 'rainy':
        console.log("Grab your umbrela!");
        break;

    default:
        console.log("Let's stay inside");
}