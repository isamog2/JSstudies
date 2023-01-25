//create a blogpost object with these properties
//title body author views comments
//each comment should have (author, body)
//each post needs to have a isLive to see if its true or false

function Post(title, body, author) {
    this.title = 'c';
        this.body = 'd';
        this.author = 'e';
        this.views = 0;
        this.comments = [];
        this.isLive = false;
}

let post = new Post('a', 'b', 'c');
console.log(post);