const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags () {
        this.tags.forEach(function(tag) {
            console.log(this, tag);  //from function(tag) to (this,tag), its a callbackfunction
            //a callback function is a regular function
            //so this will reference to a global objection
            //as if this was not inside an object
            //bc the showTags is the method, not the function(tag)
        }, this); //you need to pass this outside of function(tag)
}
};

video.showTags();