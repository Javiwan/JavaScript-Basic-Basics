function compareByLength(phrase1, phrase2){
    if(phrase1.length === phrase2.length){
        return 0;
    }else if(phrase1 > phrase2){
        return 1;
    }else{
        return -1;
    }
}

console.log(compareByLength('patience', 'perseverance'));
console.log(compareByLength('strength', 'dignity'));
console.log(compareByLength('humor', 'grace'));