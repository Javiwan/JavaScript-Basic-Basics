
function localGreet(locale){
    greet(locale.split('.')[0]);
}


function greet(languaje){
    switch(languaje){
        case 'en_US':
            console.log('Hey!');
            break;

        case 'en_GB':
            console.log('Hello!');
            break;
        
        case 'en_AU': 
            console.log('Howdy!');
            break;
        
        case 'fr_FR':
            console.log('Salut!');
            break;

        default:
            console.log('Not such languaje');
    }
}


localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8');