const Node = require('./Node');

class Trie {
  constructor() {
    this.wordCount = 0;
    this.root = new Node().children;
  }

  insert(word) {
    let letters = word.split('');
    let currentNode = this.root;

    while (letters.length) {
      let currentLetter = letters.shift();

      if (!currentNode[currentLetter]) {
        currentNode[currentLetter] = new Node();
      }

      if (!letters.length && !currentNode[currentLetter].completeWord) {
        this.wordCount++;
        currentNode[currentLetter].completeWord = word;
      }

      currentNode = currentNode[currentLetter].children;
    }
  }

  traverseDown(word) {
    let letters = word.split('');
    let currentNode = this.root;

    while (letters.length) { 
      let currentLetter = letters.shift();

      // try to find the currentLetter in the children of our currentNode
      let foundLetter = Object.keys(currentNode).find(letter => 
        letter === currentLetter);

      // if it finds it, reset the current node to that child's children
      if (foundLetter) {
        currentNode = currentNode[currentLetter].children;
      }
    }

    return currentNode;
  }

  findWords(currentNode, suggestions) {
    let letters = Object.keys(currentNode);

    letters.forEach(letter => {
      if (currentNode[letter].completeWord) {
        suggestions.push(currentNode[letter].completeWord);
      }

      // if there are more children beneath our currentNode[letter]
      if (Object.keys(currentNode[letter].children).length) {
        this.findWords(currentNode[letter].children, suggestions);
      }
    });

    return suggestions;
  }

  suggest(prefix) { 
    let currentNode = this.traverseDown(prefix);

    return this.findWords(currentNode, []);
  }

  populate(words) {
    words.forEach(word => this.insert(word));
  }
}

module.exports = Trie;
