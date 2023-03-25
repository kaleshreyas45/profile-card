let str_counter = 0;
let array_counter = 0;
let arr = ["Specialist Programmer @Infosys", "Skills : HTML | CSS | JS | React | Node + MongoDB","Education : Bachelor of Engineering, 2022", "Branch : IT", "College : AISSMS IOIT, Pune", "University : University of Pune","CGPA : 8.97"];
function show() {
    const desc = document.getElementById(`desc-${array_counter}`);
    if (array_counter < arr.length) {
        if (str_counter < arr[array_counter].length) {
            desc.innerHTML += arr[array_counter][str_counter];
            str_counter++;
            setTimeout(show, 50);
        }
        else {
            str_counter = 0;
            array_counter++;
            setTimeout(show, 50);
        }
    }


}
setTimeout(() => {
    show();
}, 3000)

