window.addEventListener('load', (event) => {
    console.log('Page loaded');

    let home_sect = document.querySelector(".home-page"),
        skills_sect = document.querySelector(".skills"),
        proj_sect = document.querySelector(".projects"),
        contact_sect = document.querySelector(".contact");

    let section_arr = [home_sect, skills_sect, proj_sect, contact_sect];
    let state_tracker = 0;
    

    window.addEventListener("wheel", function(e) {
        console.log(e.deltaY);
        if ((e.deltaY > 0 && state_tracker < section_arr.length - 1) || (e.deltaY < 0 && state_tracker >= 1)) {
            if (e.deltaY > 0) {
                state_tracker += 1;
            } else {
                state_tracker -= 1;
            }
            console.log(state_tracker);

            for (let i = 0; i < section_arr.length; i++) {
                if (i == state_tracker) {
                    section_arr[i].style.display = "flex";
                }
                else {
                    section_arr[i].style.display = "none";
                }
            }
        }
    })
})