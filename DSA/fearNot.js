function fearNotLetters(str){
    for(let i =0;  i < str.length; i++){
        if(!(str.charCodeAt(i) - str.charCodeAt(i-1) == 1)){
            return String.fromCharCode(str.charCodeAt(i)-1)
        }
    }

    return undefined;
}

console.log(fearNotLetters("abce"));