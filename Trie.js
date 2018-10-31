const Node = require('./Node');

class Trie {
  constructor() {
    // what instance properties shall we set?
  }

  insert(word) {
    // insert should take in a word and insert it into the trie
  }

  traverseDown(word) {
    // traverseDown should take in a word and navigate down
    // the tree until it is at the Node that represents the
    // final letter of the word passed in
  }

  findWords(currentNode, suggestions) {
    // find words should take in a currentNode (wherever we are in 
    // our trie at the moment) and check for all the completeWord values
    // that exist on any branch 
  }

  suggest(prefix) { 
    // pseucode here
  }

  populate(words) {
    words.forEach(word => this.insert(word));
  }
}

module.exports = Trie;
