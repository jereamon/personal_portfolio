window.addEventListener("load", function() {
    let blue       = "#4786a7",
        light_grey = "#e1edf5";

    //#region Mobile Nav Handlers
    let nav_height       = document.querySelector("nav").offsetHeight,
        burger_container = document.querySelector(".burger-container"),
        burger_open      = false,
        mobile_links     = document.querySelector(".mobile-nav-links"),
        desktop_links    = document.querySelector(".nav-links");

    let home = document.querySelector(".home-page"),
        skills = document.querySelector(".skills"),
        projects = document.querySelector(".projects"),
        contact  = document.querySelector(".contact"),
        sections = [home, skills, projects, contact];

    burger_container.addEventListener("click", toggle_mobile_nav);
    this.window.addEventListener("scroll", close_mobile_nav);
    this.window.addEventListener("scroll", check_active_nav_link);
    

    function toggle_mobile_nav() {
        if (burger_open == true) {
            close_mobile_nav()
        } else {
            open_mobile_nav();
        }
    }

    function close_mobile_nav() {
        mobile_links.style.height = "0px";

        setTimeout(() => {
            mobile_links.style.display = "none";
        }, 500);
        burger_open = false;
    }

    function open_mobile_nav() {
        mobile_links.style.display = "flex";
            
        setTimeout(() => {
            mobile_links.style.height = "300px";
        }, 5);
        
        burger_open = true;
    }


    function check_active_nav_link() {
        for (let i = 0; i < sections.length; i++) {
            if (window.scrollY >= sections[i].offsetTop - (sections[i].clientHeight * .45) && window.scrollY < sections[i].offsetTop + (sections[i].clientHeight * .55)) {
                clear_current_link_class();
                mobile_links.children[i].classList.add("current-link");
                desktop_links.children[i].classList.add("current-link");
            }
        }
    }

    function clear_current_link_class() {
        for (let i = 0; i < mobile_links.children.length; i++) {
            mobile_links.children[i].classList.remove("current-link");
            desktop_links.children[i].classList.remove("current-link");
        }
    }
    //#endregion Mobile Nav Handlers


    //#region Project Handlers
    let project_list = [
        {
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
        {
            "title": "Stuff and things",
            "img": "images/DSC01115-square_crop.jpg",
            "link": "#",
            "text": `You know just some text here.`
        },
        {
            "title": "Stuff and things",
            "img": "images/DSC01115-square_crop.jpg",
            "link": "#",
            "text": `You know just some text here.`
        },
        {
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
    ]

    let dot_menu   = document.querySelector(".dot-menu"),
        projects_outer = document.querySelector(".projects-outer"),
        project    = document.querySelector(".project"),
        proj_title = document.querySelector(".project .project-title"),
        proj_image = document.querySelector(".project .project-image"),
        proj_link  = document.querySelector(".project .project-link"),
        proj_text  = document.querySelector(".project .project-text");


    function set_values_projects(e) {
        if (twoProj) {
            let project2    = document.querySelector(".project2"),
                proj_title2 = document.querySelector(".project2 .project-title"),
                proj_image2 = document.querySelector(".project2 .project-image"),
                proj_link2  = document.querySelector(".project2 .project-link"),
                proj_text2  = document.querySelector(".project2 .project-text");

            for (let i = 0; i < dot_menu.children.length; i++) {
                if (e.target == dot_menu.children[i]) {
                    e.target.style.backgroundColor = blue;
                    project.style.opacity = "0%";
                    project2.style.opacity = "0%";

                    setTimeout(function() {
                        proj_title.innerHTML = project_list[i*2]["title"];
                        proj_image.src  =      project_list[i*2]["img"];
                        proj_link.href  =      project_list[i*2]["link"];
                        proj_text.innerHTML  = project_list[i*2]["text"];

                        proj_title2.innerHTML = project_list[(i * 2) + 1]["title"];
                        proj_image2.src  =      project_list[(i * 2) + 1]["img"];
                        proj_link2.href  =      project_list[(i * 2) + 1]["link"];
                        proj_text2.innerHTML  = project_list[(i * 2) + 1]["text"];

                        setTimeout(function() {
                            project.style.opacity = "100%";
                            project2.style.opacity = "100%";
                        }, 300);
                    }, 300);
                } else {
                    dot_menu.children[i].style.backgroundColor = light_grey;
                }
            }
        } else {
            for (let i = 0; i < dot_menu.children.length; i++) {
                if (e.target == dot_menu.children[i]) {
                    e.target.style.backgroundColor = blue;

                    setTimeout(function() {
                        proj_title.innerHTML = project_list[i]["title"];
                        proj_image.src  =      project_list[i]["img"];
                        proj_link.href  =      project_list[i]["link"];
                        proj_text.innerHTML  = project_list[i]["text"];

                        setTimeout(function() {
                            project.style.opacity = "100%";
                        }, 300);
                    }, 300);
                } else {
                    dot_menu.children[i].style.backgroundColor = light_grey;
                }
            }
        }
    }


    for (let i = 0; i < dot_menu.children.length; i++) {
        dot_menu.children[i].addEventListener("click", (e) => {
            set_values_projects(e);
        });        
    }


    let twoProj = false;
    function set_num_projects() {
        if (window.screen.width > 480) {
            if (!twoProj) {
                let project2 = project.cloneNode(true);

                project2.classList.remove("project");
                project2.classList.add("project2");

                // Sets the new project's img src, title, link href, and text
                project2.children[0].src                   = project_list[1]["img"];
                project2.children[1].children[0].innerHTML = project_list[1]["title"];
                project2.children[1].children[1].href      = project_list[1]["link"];
                project2.children[1].children[2].innerHTML = project_list[1]["text"];

                projects_outer.appendChild(project2);
            }

            twoProj = true;
        } else {
            for (let i = 0; i < projects_outer.children.length; i++) {
                if (projects_outer.children[i].classList.contains("project2")) {
                    projects_outer.children[i].remove();
                    break;
                }
            }
            twoProj = false;
        }
    }

    // this.window.addEventListener('resize', set_num_projects());
    set_num_projects();
    this.window.addEventListener("resize", () => {
        set_num_projects();
    })
    //#endregion Project Handlers

});