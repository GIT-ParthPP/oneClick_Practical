$(".autoplay").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

$(".product-slider").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

function cardNumberDetect() {
  var cardNumber = document.getElementById("card-number").value;

  let masked = cardNumber.replace(/^\d{12}/, "**** **** **** ");
  if (cardNumber.length > 0) {
    document.getElementById("card-number-show").innerHTML = masked;
  } else {
    document.getElementById("card-number-show").innerHTML =
      "**** **** **** 0329";
  }
}

function cardNumberDetect() {
  var cardNumber = document.getElementById("card-number").value;

  let masked = cardNumber.replace(/^\d{12}/, "**** **** **** ");
  if (cardNumber.length > 0) {
    document.getElementById("card-number-show").innerHTML = masked;
  } else {
    document.getElementById("card-number-show").innerHTML =
      "**** **** **** 0329";
  }
}

function expDateDetect() {
  var expireNumber = document.getElementById("expire-number").value;
  let masked = expireNumber
    .substr(0, 2)
    .concat("/")
    .concat(expireNumber.substr(2));
  console.log(" expireNumber", masked);
  if (expireNumber.length > 0) {
    document.getElementById("expire-number-show").innerHTML = masked;
  } else {
    document.getElementById("expire-number-show").innerHTML = "03/24";
  }
}
