let weather = ['sunny', 'rainy', 'other'];

let todayWeather = weather[Math.round(Math.random() * 3)];

if(todayWeather === 'sunny'){
    console.log("It's a beautiful day!");
}else if(todayWeather === 'rainy'){
    console.log('Grab your umbrella');
}else{
    console.log("Let's stay inside");
}