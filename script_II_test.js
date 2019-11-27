
var score = document.getElementById('score');
var txtScore = document.getElementById('txtScore');
var btn = document.getElementById('btn');



//----------determiner une variable pour le score-------------
var countV = 0;
var countF = 0;
//------------------------------------------------------------

var allImgPC = ["image/papier.jpg","image/pierre.jpg","image/siceaux.jpg" ];

var imgPC = document.getElementById('imgPC').getElementsByTagName('img');
var imgV = document.getElementsByClassName('imgV');
var choixUtilisateur ='';


//--------------Quand l'utilisateur click==> choisir cet ID pr le comparer au random du PC----------

for (var i = 0; i < imgV.length; i++) {
    imgV[i].addEventListener('click', function () {
        choixUtilisateur = this.id;
        console.log(this.id);

    })
}
//-----------------boutton rejouer--------------



//----------------------------------------------
for (var i = 0; i < allImgPC.length;i++){



    imgV[i].addEventListener('click', function () {
        var randomImagePC = Math.floor(Math.random()*allImgPC.length);
        imgPC[randomImagePC].style.display = 'block';

        if (randomImagePC === 0){
            imgPC[1].style.cssText = 'display:none';
            imgPC[2].style.cssText = 'display:none';

        }
        else if (randomImagePC === 1){
            imgPC[0].style.cssText = 'display:none';
            imgPC[2].style.cssText = 'display:none';

        }
        else if (randomImagePC === 2){
            imgPC[0].style.cssText = 'display:none';
            imgPC[1].style.cssText = 'display:none';

        }
        if ((choixUtilisateur === 'imgPapier' && randomImagePC === 0) ||
            (choixUtilisateur === 'imgPierre' && randomImagePC === 1) ||
            (choixUtilisateur === 'imgSciseaux' && randomImagePC === 2))
        {


            txtScore.value = 'EGALITE';
        }
        else if ((choixUtilisateur === 'imgPapier' && randomImagePC === 1) ||
            (choixUtilisateur === 'imgPierre' && randomImagePC === 2) ||
            (choixUtilisateur === 'imgSciseaux' && randomImagePC === 1))
        {
            countV++;
            txtScore.value = 'VICTOIRE !!';

        }
        else if ((choixUtilisateur === 'imgPapier' && randomImagePC === 2) ||
            (choixUtilisateur === 'imgPierre' && randomImagePC === 0) ||
            (choixUtilisateur === 'imgSciseaux' && randomImagePC === 1))
        {
            txtScore.value = 'PERDU';
            countF++
        }
        if (countF === 3){

            txtScore.value = 'Le PC a gagner contre vous';
            score.style.cssText ='display:none';
            countF = 0;
            countV = 0;
            btn.style.display = 'inline';

        }else if (countV === 3){

            txtScore.value ='Vous avez gagner contre le PC';
            score.style.cssText ='display:none';
            countF = 0;
            countV = 0;
            btn.style.display = 'inline';

        }


        score.value = countV + ' - ' + countF;
        console.log(countV, countF);
        console.log(imgPC[randomImagePC]);



    });

    //function rejouer(){
      //  window.location.reload();}
}
//btn.addEventListener('click', function () {
  //  window.location.reload();








