const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const that = this;
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
}

video.showTags();