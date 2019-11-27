
    var txtScore = document.getElementById('txtScore');
    var champ =document.getElementById('champ');
    var papier = document.getElementById('imgPapier');
    var pierre = document.getElementById('imgPierre');
    var ciseaux = document.getElementById('imgSiceaux');
    var btn = document.getElementById('btn');

    var imgPa = document.getElementById("imgPapierPC");
    var imgPi = document.getElementById("imgPierrePC");
    var imgS = document.getElementById( "imgSiceauxPC");
    var countV = 0;
    var countD = 0;

var random_img = ["image/papier.jpg","image/pierre.jpg","image/siceaux.jpg"];

var imgs_ordi = document.getElementById('ordi_imgs').getElementsByTagName('img');// dans le id 'ordi_imgs' on sible les'img'
var imgs_vous = document.getElementById('vous_imgs').getElementsByTagName('img');


    // Selection images utilisateurs---------------------------

    var imgPa = document.getElementById("imgPapierPC");
    var imgPi = document.getElementById("imgPierrePC");
    var imgS = document.getElementById( "imgSiceauxPC");
    var imgVous =  document.getElementsByClassName("imgVous");
    var choixUtilisateur ='';

    for (var i = 0; i < imgVous.length; i++){
        imgVous[i].addEventListener('click', function () {
            choixUtilisateur = this.id;
            console.log(this.id);
        });
    }


// faire apparaitre aleatoirement les images generer par le PC---------------------------

btn.addEventListener('click', function () {
    var randomImages = Math.floor(Math.random()*random_img.length);
   // alert(imgs_ordi[randomImages].id);
    imgs_ordi[randomImages].style.cssText = "display:block";

    if ( randomImages === 0){ // si le generateur d'image choisi l'image [0], le display des 2 autres sera none
        imgs_ordi[1].style.cssText ="display:none";
        imgs_ordi[2].style.cssText ="display:none";


    }else if (randomImages === 1){  // si le generateur d'image choisi l'image [1], le display des 2 autres sera none
        imgs_ordi[0].style.cssText ="display:none";
        imgs_ordi[2].style.cssText ="display:none";


    }else if(randomImages === 2){                           // etc
        imgs_ordi[0].style.cssText ="display:none";
        imgs_ordi[1].style.cssText ="display:none";

    }

    if ((choixUtilisateur === "imgPapier" && randomImages === 2) ||
        (choixUtilisateur === "imgPierre" && randomImages === 0) ||
        choixUtilisateur === 'imgSiceaux' && randomImages === 1){
        //alert('vous avez perdu')
        countD++;                   // Si utilisateur à perdu = conteur Défaite "countD" s'incremente ++
        txtScore.value = 'vous avez perdu';

    }else if ((choixUtilisateur === "imgPapier" && randomImages === 1) ||
        (choixUtilisateur === "imgPierre" && randomImages === 2) ||
    choixUtilisateur === 'imgSiceaux' && randomImages === 0){
        //alert('vous avez gagner !');
        countV++;                   // Si utilisateur à gagner = conteur gagner "countG" s'incremente ++
        txtScore.value = 'vous avez gagner !'


    }else if ((choixUtilisateur === "imgPapier" && randomImages === 0) ||
        (choixUtilisateur === "imgPierre" && randomImages === 1) ||
        choixUtilisateur === 'imgSiceaux' && randomImages === 2){
       // alert('vous etes à egalité !')

        txtScore.value = 'vous êtes à egalité !'


    }
    champ.value = countV + ' - ' + countD;


    console.log(imgs_ordi[randomImages].id);
    console.log(choixUtilisateur);
    console.log(countV, countD);

});
    //var random_img = ["image/papier.jpg","image/pierre.jpg","image/siceaux.jpg"];

