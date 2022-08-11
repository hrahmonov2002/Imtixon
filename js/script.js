let elForm = document.querySelector(".order__form");
let elBreadSelect = elForm.querySelector(".bread__select");
let elStr = document.querySelector(".output__str");


let arrBread = ["Yupqa","O'rtacha","Qalin"];
let arrSize = ["25sm" , "30sm" , "35sm"];
let arr = ["Pomidor","Kurka go'shti","Zaytun","Tuzlangan bodring","Qo'ziqorin","Qazi"];
let arr3 = ["Achchiq","Sosiskali"];
let arrList = [];


function breadselect(array, list) {

   for (let i = 0; i < array.length; i++) {

         let elOption = document.createElement("option");
         elOption.setAttribute("value", array[i]);
         elOption.setAttribute("class", ".option_val");
         elOption.textContent = array[i];
         elOption.value = array[i];
         list.appendChild(elOption); 

   }

};

breadselect(arrBread,elBreadSelect);

elBreadSelect.addEventListener('change', function(evt){
    evt.preventDefault();

    let elStrCout = evt.target.value;
    elStr.textContent =  elStrCout;
    
 });

              //  =========== PIZZA-SIZE =========

 let elInputSmall = document.querySelector(".size__small");
 let elInputMiddle = document.querySelector(".size__middle");
 let elInputBig = document.querySelector(".size__big");
 let elResultSize = document.querySelector(".output__size");

 
 elInputSmall.addEventListener("click", function(evt) {
    evt.preventDefault();

    if (elInputSmall.checked == true) {
        elResultSize.textContent = '25 sm';
    } 
 });

 elInputMiddle.addEventListener("click", function(evt) {
    evt.preventDefault();

    if (elInputMiddle.checked == true) {
        elResultSize.textContent = '30 sm';
    }
 });

 elInputBig.addEventListener("click", function(evt) {
    evt.preventDefault();

    if (elInputBig.checked == true) {
        elResultSize.textContent = '35 sm';
    }
 });


// =================== PIZZA-ON =============


let elSubTom = document.querySelector(".on__product-tom");
let elSubMeat = document.querySelector(".on__product-meat");
let elSubOlive = document.querySelector(".on__product-olive");
let elSubCuc = document.querySelector(".on__product-cuc");
let elSubMush = document.querySelector(".on__product-mush");
let elSubGas = document.querySelector(".on__product-gas");

let elOnResultTom = document.querySelector(".output__on-tom");
let elOnResultMeat = document.querySelector(".output__on-meat");
let elOnResultOlive = document.querySelector(".output__on-olive");
let elOnResultCuc = document.querySelector(".output__on-cuc");
let elOnResultMush = document.querySelector(".output__on-mush");
let elOnResultGas = document.querySelector(".output__on-gas");

elSubTom.addEventListener('change', (event) => {

  if (elSubTom.checked == true) {
    elOnResultTom.textContent = 'Pomidor';
  } else {
    elOnResultTom.textContent = '';
  }

});

elSubMeat.addEventListener('change', (event) => {

    if (elSubMeat.checked == true) {
      elOnResultMeat.textContent = "Kurka go'shti";
    } else {
      elOnResultMeat.textContent = '';
    }

});


elSubOlive.addEventListener('change', (event) => {

    if (elSubOlive.checked == true) {
      elOnResultOlive.textContent = "Zaytun";
    } else {
      elOnResultOlive.textContent = '';
    }

  });
  
  elSubCuc.addEventListener('change', (event) => {

    if (elSubCuc.checked == true) {
      elOnResultCuc.textContent = "Tuzlangan bodring";
    } else {
      elOnResultCuc.textContent = '';
    }

  });

  elSubMush.addEventListener('change', (event) => {

    if (elSubMush.checked == true) {
      elOnResultMush.textContent = "Qo'ziqorin";
    } else {
      elOnResultMush.textContent = '';
    }
  
  });

  elSubGas.addEventListener('change', (event) => {

    if (elSubGas.checked == true) {
      elOnResultGas.textContent = 'Qazi';
    } else {
      elOnResultGas.textContent = '';
    }
  
  });


//   ============================ PIZZA-EXTRA ===========================

let elExtraBit = document.querySelector(".extra__food-bitter");
let elExtraSaus = document.querySelector(".extra__food-sausage");

let elResultBit = document.querySelector(".output__extra-bit");
let elResultSaus = document.querySelector(".output__extra-saus");

elExtraBit.addEventListener('change', (evt) => {
    
    if (elExtraBit.checked == true) {
        elResultBit.textContent = 'Achchiq';
    } else {
        elResultBit.textContent = '';
    }
});

elExtraSaus.addEventListener('change', (evt) => {
    
    if (elExtraSaus.checked == true) {
        elResultSaus.textContent = 'Sosiskali';
    } else {
        elResultSaus.textContent = '';
    }
});