const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

function playVideo() {
    console.log(this);
}

playVideo();
//this returns the global object because the function playVideo is not a method on a defined object