function greet(languaje){
    switch(languaje){
        case 'en':
            console.log('Hi!');
            break;

        case 'fr':
            console.log('Salut!');
            break;
        
        case 'es': 
            console.log('¡Hola!');
            break;
        
        case 'sv':
            console.log('Hej!');
            break;

        default:
            console.log('Not such languaje');
    }
}

greet('en');
greet('es');
greet('sv');