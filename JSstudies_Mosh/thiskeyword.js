//This = object that is executing the current function

//if a function is part of an object we call it method
//if that function is a regular function, this = global(node) or window(browser) object

const video = {
    title: 'a',
    play() { //bc play is a method on the video object
        console.log(this); //this references the object itself
    }
};

video.play();
//a funcao play, printa o this no console
//qnd eu mando printar o this no console, o retorno eh o objeto video
//pq this = td q ta no objeto video
//pq this dentro de um method, eh = ao objeto onde se encontra a funcao q ta sendo executada