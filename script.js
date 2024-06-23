function CaracterCounter (caracter){
    let char_count = 0 ;
    let word_count = 0 ;
    let vowel_count = 0
}

// liste des voyelles pour la vérification
const voyelles = "aeiouAEIOU";

for (let char of sentence) {
    char_count++;
    
    if (char === ' ') {
        word_count++;
    }
    
    if (vowels.includes(char)) {
        vowel_count++;
    }
}

word_count++;

return {
    char_count: char_count,
    word_count: word_count,
    vowel_count: vowel_count
};

