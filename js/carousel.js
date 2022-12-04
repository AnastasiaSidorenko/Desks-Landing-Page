logos = document.querySelectorAll(".carousel__logo");
console.log("logos", logos);

for (var i = 0; i < logos.length; i++) {
	logos[i].addEventListener("click", e => { changeText(e.target)});
}

var current_index = 1;

const texts = [
    {
        subtitle: "Lorem ipsum dolor sit amet",
        title: "Consectetur adipiscing elit, sed do eiusmod <br>tempor incididunt ut labore et dolore magna"
    },
    {
        subtitle: "Hablan de nosotros en",
        title: "“Habitasse tellus aliquet aliquam a morbi. <br>Et pulvinar urna venenatis duis quam. ”"
    },
    {
        subtitle: "Ad minim veniam, quis nostrud exercitation",
        title: "Ullamco laboris nisi ut aliquip ex ea commodo<br> Сonsequat duis aute irure dolor"
    }
]

function changeText(node) {
    console.log("here");
    index = node.getAttribute('data-id');
    console.log("index", index);
    if (index === current_index) return;

    title_node = document.getElementsByClassName("carousel__title");
    subtitle_node = document.getElementsByClassName("carousel__subtitle");

    logos.forEach(function(el) { 
        el.classList.remove('focused');
    });
    logos[index].classList.add('focused');
    
    document.getElementsByClassName("carousel__title")[0].innerHTML = texts[index].title;
    document.getElementsByClassName("carousel__subtitle")[0].innerHTML = texts[index].subtitle;
}