const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.stop = function() {
    console.log(this);
}
//aqui como eu usei dot notation pra acessar o objeto video
//e incluir a funcao stop nele
//o this vai ser igual ao objeto video
//pq o this eh = ao objeto onde esta o method stop
video.stop();