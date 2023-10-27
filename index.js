class Formatter {


  static capitalize(str) {
    if (!str || str.length === 0) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, "");
  }

  
  static titleize(str) {
    const smallWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    return str.split(" ").map((word, index) => {
      if (index === 0 || !smallWords.includes(word.toLowerCase())) {
        return this.capitalize(word);
      }
      return word;
    }).join(" ");
  }
}


console.log(Formatter.capitalize("hello"));  
console.log(Formatter.sanitize("hello!@# world- 'test'"));  
console.log(Formatter.titleize("the quick brown fox"));  