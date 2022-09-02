// window.addEventListener('load', (event) => {

//     let home_sect = document.querySelector(".home-page"),
//         skills_sect = document.querySelector(".skills"),
//         proj_sect = document.querySelector(".projects"),
//         contact_sect = document.querySelector(".contact");

//     let section_arr = [home_sect, skills_sect, proj_sect, contact_sect];
//     let state_tracker = 0;
//     let nav_bar_height = 60;



//     for (let i = 0; i < section_arr.length; i++) {
//         section_arr[i].style.height = (window.innerHeight - nav_bar_height).toString() + "px";
//     }


//     let start_time = Date.now();
//     let start_time2 = Date.now();
//     let scroll_count = 0;

//     let touchStartY = 0;
//     let touchEndY = 0;

//     function screen_change(direction) {
//         if (direction > 0 && state_tracker < section_arr.length - 1) {
//             state_tracker += 1;

//             section_arr[state_tracker].style.top = window.innerHeight.toString() + "px";
//             section_arr[state_tracker].style.display = "flex";

//             setTimeout(() => {
//                 section_arr[state_tracker].style.top = "0px";
//                 section_arr[state_tracker - 1].style.top = (0 - window.innerHeight).toString() + "px";
//             }, 1);
//         } else if (direction < 0 && state_tracker >= 1) {
//             state_tracker -= 1;

//             section_arr[state_tracker].style.top = (0 - window.innerHeight).toString() + "px"
//             section_arr[state_tracker].style.display = "flex";

//             setTimeout(() => {
//                 section_arr[state_tracker].style.top = "0px";
//                 section_arr[state_tracker + 1].style.top = window.innerHeight.toString() + "px";
//             }, 10);
//         }
//         console.log(state_tracker);

//         setTimeout(() => {
//             for (let i = 0; i < section_arr.length; i++) {
                
//                     if (i != state_tracker) {
//                         section_arr[i].style.display = "none";
//                     }
        
//         }}, 500);
//     }


//     window.addEventListener('touchstart', function(e) {
//         touchStartY = e.changedTouches[0].screenY;
//     });

//     window.addEventListener('touchend', function(e) {
//         touchEndY = e.changedTouches[0].screenY;
//         if (touchEndY > touchStartY) {
//             screen_change(-1);
//         } else {
//             screen_change(1);
//         }
//     });

//     window.addEventListener("wheel", function(e) {
//         // THIS CODE IS CURRENTLY POINTLESS
//         // but i need to come up with a better way to manage scroll events
//         // where a new page scroll won't be triggered by a coasting scroll
//         // wheel/trackpad and this is the start.
//         // I'm thinking I'll count up the scroll events that happen in too
//         // short a timespan which indicates they're a coasting scroll.
//         // While more events are being added on window move code won't
//         // be triggered.
//         // if (Date.now() - start_time2 < 25) {
//         //     scroll_count += 1;
//         // } else {
//         //     console.log("end scroll");
//         //     scroll_count = 0;
//         // }
//         // start_time2 = Date.now();
//         // End pointless code


//         if (Date.now() - start_time >= 750) {
//             start_time = Date.now();
//             let scroll_dir = e.deltaY;
//             screen_change(scroll_dir);            
//         }
//     })
// })