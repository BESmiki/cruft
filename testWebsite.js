// item click animation

$(document).ready(function(){
// tees
    $("#tee-one").click(function(){
      $("#tee-one").toggleClass("toggleJs");
    });
   
    $("#tee-two").click(function(){
      $("#tee-two").toggleClass("toggleJs");
    });
  
    $("#tee-three").click(function(){
      $("#tee-three").toggleClass("toggleJs");
    });
  
    $("#tee-four").click(function(){
      $("#tee-four").toggleClass("toggleJs");
    });
  
    $("#tee-five").click(function(){
      $("#tee-five").toggleClass("toggleJs");
    });
  
    $("#tee-six").click(function(){
      $("#tee-six").toggleClass("toggleJs");
    });

// jumpers

    $("#jump-one").click(function(){
      $("#jump-one").toggleClass("toggleJs");
    });
   
    $("#jump-two").click(function(){
      $("#jump-two").toggleClass("toggleJs");
    });
  
    $("#jump-three").click(function(){
      $("#jump-three").toggleClass("toggleJs");
    });
  
    $("#jump-four").click(function(){
      $("#jump-four").toggleClass("toggleJs");
    });
  
    $("#jump-five").click(function(){
      $("#jump-five").toggleClass("toggleJs");
    });

  // totes

    $("#tote-one").click(function(){
      $("#tote-one").toggleClass("toggleJs");
    });
    $("#tote-two").click(function(){
      $("#tote-two").toggleClass("toggleJs");
    });
    $("#tote-three").click(function(){
      $("#tote-three").toggleClass("toggleJs");
    });
    $("#tote-four").click(function(){
      $("#tote-four").toggleClass("toggleJs");
    });
    $("#tote-five").click(function(){
      $("#tote-five").toggleClass("toggleJs");
    });

    $("#tote-five").click(function(){
      $("#tote-five").toggleClass("toggleJs");
    });

// mugs

    $("#mug-one").click(function(){
      $("#mug-one").toggleClass("toggleJs");
    });
    $("#mug-three").click(function(){
      $("#mug-three").toggleClass("toggleJs");
    });
    $("#mug-four").click(function(){
      $("#mug-four").toggleClass("toggleJs");
    });
    $("#mug-five").click(function(){
      $("#mug-five").toggleClass("toggleJs");
    });
    $("#mug-six").click(function(){
      $("#mug-six").toggleClass("toggleJs");
    });
    $("#mug-seven").click(function(){
      $("#mug-seven").toggleClass("toggleJs");
    });
  });
  

// modal //

  const openButton = document.getElementById('aboutOpen');
  const confirmBtn = aboutModal.querySelector('#confirmBtn');

if (typeof aboutModal.showModal !== 'function') {
  favDialog.hidden = true;
}

openButton.addEventListener('click', () => {
  if (typeof aboutModal.showModal === "function") {
    aboutModal.showModal();
  } else {
    outputBox.value = "ERROR... ";
  }
});

// change colour on click LOGO

let colors = ['#7debf5', '#f57e2b', '#f253f5', '#7ff538', '#bababa'];
let button = document.getElementById('cruft');

cruft.addEventListener('click', function(){
    
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('headerTop');

    container.style.background = randomColor;
});


// landing page 

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 4, stagger: 0.40 });
tl.to(".slider", { y: "-100%", duration: 2, delay: 0.4 });
tl.to(".intro", { y: "-100%", duration: .4 }, "-=1.5");

// email validation

function validation(){
  let form = document.getElementById('form');
  let email = document.getElementById('email').value;
  let text = document.getElementById('emailText');
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
  if (email.match(pattern)){
      form.classList.add('valid')
      form.classList.remove('invalid')
    text.innerHTML = 'good';
    text.style.color = 'green';
    }
  
  else{
        form.classList.remove('valid')
      form.classList.add('invalid')
    text.innerHTML = 'bad';
    text.style.color = 'red';
  }   
}

// pricing
$(".card-image-one").each(function(){

  $(this).hover(
    function() {
      $(this).text("//$45 AUD");
    },
    function() {
      $(this).text("");
    }
 );
});
$(".card-image-two").each(function(){

  $(this).hover(
    function() {
      $(this).text("//$85 AUD");
    },
    function() {
      $(this).text("");
    }
 );
});
$(".card-image-three").each(function(){

  $(this).hover(
    function() {
      $(this).text("//$20 AUD");
    },
    function() {
      $(this).text("");
    }
 );
});
$(".card-image-four").each(function(){

  $(this).hover(
    function() {
      $(this).text("//$20 AUD");
    },
    function() {
      $(this).text("");
    }
 );
});
