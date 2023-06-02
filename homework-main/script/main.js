jQuery(function($){
    $("#tel").mask("+7(999) 999-99-99");
});
function order(){
    document.querySelector(".orderform").style.display="block";
    document.getElementById('myAudio').play();
}
function sendMail(){
    var params = {
        name: document.getElementById("phone1").value
    };
    const serviceID = "service_ed3futx";
    const templateID = "template_y8spxye";
    
    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("phone1").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    }).catch(err=>console.log(err));
}
const orderObject = {
    orderElement: document.querySelector('.order'),
    audioElement: document.getElementById('myAudio'),
    handleClick: function() {
        document.getElementById("orderform").style.display="block";
        document.getElementById("orderblur").style.display="block";
    },
    handleMouseOver: function() {
        this.orderElement.style.color="black";
        this.orderElement.style.background="white";
        this.orderElement.style.border="solid";
    },
    handleKeyPress: function(event) {
        if (event.key === 'Enter') {
            document.getElementById("orderform").style.display="none";
            document.getElementById("orderblur").style.display="none";
        }
    },
    addEventListeners: function() {
        this.orderElement.addEventListener('click', this.handleClick.bind(this));
        this.orderElement.addEventListener('mouseover', this.handleMouseOver.bind(this));
        window.addEventListener('keypress', this.handleKeyPress.bind(this));
    },

};
orderObject.addEventListeners();
const newspaperSpinning = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
  ];
  
  const newspaperTiming = {
    duration: 2000,
    iterations: 1,
  };
  
  const newspaper = document.querySelector(".newspaper");
  
  newspaper.addEventListener("click", () => {
    newspaper.animate(newspaperSpinning, newspaperTiming);
});