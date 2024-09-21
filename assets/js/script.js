
//Es una funciton automatica
let sugerencias = (() => {
    function video(url, id){
        let player = document.getElementById(id);
        player.setAttribute('src', url);
    };

    return {
        playVideo : (url,id) => {
        video(url, id);
    },
    }
})();

// Clase Madre Videos
class Videos{
    constructor(url){
        this._url = url;
    }

    get url(){
        return this._url;
    }

    changeURL(){
        return "Aca cambiamos la url de chistis";
    }
}


//Clase hija Play, hereda el parametro url de Videos y tiene su propio parametro llamado ID
class Play extends Videos{
    constructor(url, id){
        super(url);
        this._id = id;
    }

    get id(){
        return this._id
    }
    playMultimedia(){ 
        // return sugerencias(this._url, this._id)
        sugerencias.playVideo(this._url, this._id)
    }
    chargeURL(urlChanged){
        this._url = `${this._url}&start=${urlChanged}`;
    }
}
let playMusica = new Play('https://www.youtube.com/embed/widZEAJc0QM?si=Jmr3GZ2y2t6CdY4s','musica');
playMusica.chargeURL(40);
playMusica.playMultimedia();
let playpeliculas = new Play('https://www.youtube.com/embed/UOrNESb8T4I?si=KIZmzyPJquqPR07C','peliculas');
playpeliculas.chargeURL(4);
playpeliculas.playMultimedia();
let playseries = new Play('https://www.youtube.com/embed/8G4jvn-ncPE?si=ZALxOO_fIyqhBejy','series');
playseries.chargeURL(30);
playseries.playMultimedia();


