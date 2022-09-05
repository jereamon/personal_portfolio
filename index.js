window.addEventListener("load", function() {
    let blue       = "#4786a7",
        light_grey = "#e1edf5";

    let projects = {
        0: {
            "title": "Rambo with Bear",
            "img": "images/20200807_171326.jpg",
            "link": "#",
            "text": `Sed viverra leo vitae enim volutpat fermentum. 
            Vivamus consectetur sapien ut urna finibus pretium.
            Aliquam egestas suscipit ultrices. Phasellus auctor nisl
            elit, vel tincidunt turpis vehicula efficitur.
            Ut sollicitudin feugiat nulla et vulputate. Phasellus
            euismod neque quis leo rhoncus bibendum.
            In dui eros, dapibus non nunc mattis, ullamcorper
            vulputate quam. Nulla a euismod nisi.`
        },
        1: {
            "title": "Stuff and things",
            "img": "images/DSC01115-square_crop.jpg",
            "link": "#",
            "text": `You know just some text here.`
        }
    }

    let dot_menu   = document.querySelector(".dot-menu"),
        project    = document.querySelector(".project"),
        proj_title = document.querySelector(".project-title"),
        proj_image = document.querySelector(".project-image"),
        proj_link  = document.querySelector(".project-link"),
        proj_text  = document.querySelector(".project-text");

    for (let i = 0; i < dot_menu.children.length; i++) {
        dot_menu.children[i].addEventListener("click", function(e) {
            for (let i = 0; i < dot_menu.children.length; i++) {
                if (e.target == dot_menu.children[i]) {
                    e.target.style.backgroundColor = blue;
                    project.style.opacity = "0%";

                    setTimeout(function() {
                        proj_title.innerHTML = projects[i]["title"];
                        proj_image.src  = projects[i]["img"];
                        proj_link.href  = projects[i]["link"];
                        proj_text.innerHTML  = projects[i]["text"];

                        project.style.opacity = "100%";
                        
                    }, 305);
                } else {
                    dot_menu.children[i].style.backgroundColor = light_grey;
                }
            }
        });
    }
});