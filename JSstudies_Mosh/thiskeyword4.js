const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('b');
// the this now is referencing to a new empty object
// bc the new operator creates a new empty object
// and sets this to the empty object {}