"use strict";
// usa-se os implements
// parecido com o extends
// criar métodos que várias classes terão em comum
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é ${this.title}`;
    }
}
const myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());
