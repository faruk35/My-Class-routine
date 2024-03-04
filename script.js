const btn = document.getElementById('btn');
const teacherName = document.getElementById('teacherName');
const subjectName = document.getElementById('subjectName');
const place = document.getElementById('place');
let knowPreviousClass = document.querySelector('.know-previous-class');
let knowNextClass = document.querySelector('.know-next-class');
let pTeacherName = document.getElementById('pTeacherName');
let pSubjectName = document.getElementById('pSubjectName');
let pPlace = document.getElementById('pPlace');
let day = document.getElementById('day');
let duration = document.getElementById('duration');
let currentDate = new Date();
let currentDay = currentDate.getDay();
let currentHours = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();
let getCurrentClass = document.getElementById('get-current-class');
const dayBtn = document.getElementById("dayBtn");
const selectDay = document.getElementById("selectDay");
const subBtn = document.getElementById('subBtn');
const selectSub = document.getElementById("selectSub");
const subInfo = document.getElementById("subInfo");
const sundayClass  = document.getElementById("sundayClass");
const sundayClass1 = document.getElementById('sundayClass1');
const sundayClass2 = document.getElementById('sundayClass2');
const sundayClass3 = document.getElementById('sundayClass3');
const sundayClass4 = document.getElementById('sundayClass4');
const teacherBtn = document.getElementById("teacherBtn");
const selectTeacher = document.getElementById("selectTeacher");
const teacherInfo = document.getElementById("teacherInfo");
const tableOnOff = document.getElementById('tableOnOff');
const tableSection = document.getElementById("tableSection");
const detailesRoutine = document.getElementById('detailesRoutine');

const classNo1 = () => {
    const currentClassInfo = document.createElement('div');
    currentClassInfo.innerHTML =  `
    <span class="current-class"> Current Class </span> <br>
    <span>Teacher: Ashim Dhar Sir</span> <br>
    <span>Civil Engineering Project</span> <br>
    <span>Place: Mason Shop</span> <br>
    <span>Today : Sunday </span> <br>
    <span>From 8:00 AM to 10:15 AM </span>`;
    getCurrentClass.innerHTML = '';
    getCurrentClass.appendChild(currentClassInfo);
}
const nextClassNo1 = () => {
    const nextClassInfo = document.createElement('div');
    nextClassInfo.innerHTML =  `
    <span><b> Next Class </b> </span> <br>
    <span>Ashim Dhar Sir's class</span> <br>
    <span>Design of Structure - 2</span> <br>
    <span>Place: 311 </span> <br>
    <span>10:15 AM to 11:00 AM</span>`;
    knowNextClass.innerHTML = '';
    knowNextClass.appendChild(nextClassInfo);
}
const classNo2 = () => {
    const currentClassInfo = document.createElement('div');
    currentClassInfo.innerHTML =  `
    <span class="current-class"> Current Class </span> <br>
    <span>Teacher: Ashim Dhar Sir</span> <br>
    <span>Design of Structure - 2</span> <br>
    <span>Place: 311</span> <br>
    <span>Today : Sunday </span> <br>
    <span>From 10:15 AM to 11:00 AM </span>`;
    getCurrentClass.innerHTML = '';
    getCurrentClass.appendChild(currentClassInfo);
}
const preClassNo2 = () => {
    const previousClassInfo = document.createElement('div');
    previousClassInfo.innerHTML =  `
    <span><b>Previous Class</b></span> <br>
    <span>Teacher: Ashim Dhar Sir</span> <br>
    <span>Civil Engineering Project</span> <br>
    <span>Place: Mason Shop</span> <br>
    <span> From : 8:00 AM to 10:15 AM`;
    knowPreviousClass.innerHTML = '';
    knowPreviousClass.appendChild(previousClassInfo);
};
const nextClassNo2 = () => {
    const nextClassInfo = document.createElement('div');
    nextClassInfo.innerHTML =  `
    <span><b> Next Class </b> </span> <br>
    <span>Tarif Ullah Sir's class</span> <br>
    <span>Sanitary Engineering </span> <br>
    <span>Place: 311 </span> <br>
    <span>From 11:00 AM to 11:45 AM</span>`;
    knowNextClass.innerHTML = '';
    knowNextClass.appendChild(nextClassInfo);
}
const classNo3 = () => {
    const currentClassInfo = document.createElement('div');
    currentClassInfo.innerHTML =  `
    <span class="current-class"> Current Class </span> <br>
    <span>Tarif Ullah Sir's Class</span> <br>
    <span>Sanitary Engineerinng</span> <br>
    <span>Place: 311</span> <br>
    <span>Today : Sunday </span> <br>
    <span>From 11:00 AM to 11:45 AM</span>`;
    getCurrentClass.innerHTML = '';
    getCurrentClass.appendChild(currentClassInfo);
}
const preClassNo3 = () => {
    const previousClassInfo = document.createElement('div');
    previousClassInfo.innerHTML =  `
    <span><b>Previous Class</b></span> <br>
    <span>Ashim Dhar Sir</span> <br>
    <span>Design of Structure -2</span> <br>
    <span>Place: 311</span> <br>
    <span> From : 10:15 AM to 11:00 AM`;
    knowPreviousClass.innerHTML = '';
    knowPreviousClass.appendChild(previousClassInfo);
};
const classNo4 = () => {
    const currentClassInfo = document.createElement('div');
    currentClassInfo.innerHTML =  `
    <span class="current-class"> Current Class </span> <br>
    <span>Teacher: Kohinur Akther </span> <br>
    <span> Transportation Engineering (2) </span> <br>
    <span>Place: Geotechnical Lab </span> <br>
    <span>Today : Monday </span> <br>
    <span>From 8:00 AM to 10:15 AM </span>`;
    getCurrentClass.innerHTML = '';
    getCurrentClass.appendChild(currentClassInfo);
}
const nextClassNo4 = () => {
    const nextClassInfo = document.createElement('div');
    nextClassInfo.innerHTML =  `
    <span><b> Next Class </b> </span> <br>
    <span>Ashim Dhar Sir's class</span> <br>
    <span>Design of Structure - 2</span> <br>
    <span>Place: 311 </span> <br>
    <span>10:15 AM to 11:00 AM</span>`;
    knowNextClass.innerHTML = '';
    knowNextClass.appendChild(nextClassInfo);
}
const classNo5 = () => {
    const currentClassInfo = document.createElement('div');
    currentClassInfo.innerHTML =  `
    <span class="current-class"> Current Class </span> <br>
    <span>Teacher: Ashim Dhar Sir</span> <br>
    <span>Design of Structure - 2</span> <br>
    <span>Place: 311</span> <br>
    <span>From 10:15 AM to 11:00 AM </span> <br>
    <span>Today : Monday </span>`
    getCurrentClass.innerHTML = '';
    getCurrentClass.appendChild(currentClassInfo);
}
const preClassNo5 = () => {
    const previousClassInfo = document.createElement('div');
    previousClassInfo.innerHTML =  `
    <span><b>Previous Class</b></span> <br>
    <span>Teacher: Kohinur Akther </span> <br>
    <span>Transportation Engineering 2</span> <br>
    <span>Place: Geotechnical Lab </span> <br>
    <span> From : 8:00 AM to 10:15 AM`;
    knowPreviousClass.innerHTML = '';
    knowPreviousClass.appendChild(previousClassInfo);
};
const nextClassNo5 = () => {
    const nextClassInfo = document.createElement('div');
    nextClassInfo.innerHTML =  `
    <span><b> Next Class </b> </span> <br>
    <span>Shahina Akther</span> <br>
    <span>Water Resource Engineering </span> <br>
    <span>Place: 311 </span> <br>
    <span>From 11:00 AM to 12:30 AM</span>`;
    knowNextClass.innerHTML = '';
    knowNextClass.appendChild(nextClassInfo);
}
const classNo6 = () => {
    const currentClassInfo = document.createElement('div');
    currentClassInfo.innerHTML =  `
    <span class="current-class"> Current Class </span> <br>
    <span>Shahina Akther</span> <br>
    <span>Water Resource Engineering </span> <br>
    <span>Place: 311</span> <br>
    <span>Today : Sunday </span> <br>
    <span>From 11:00 AM to 12:30 AM</span>`;
    getCurrentClass.innerHTML = '';
    getCurrentClass.appendChild(currentClassInfo);
}
const preClassNo6 = () => {
    const previousClassInfo = document.createElement('div');
    previousClassInfo.innerHTML =  `
    <span><b>Previous Class</b></span> <br>
    <span>Teacher: Ashim Dhar Sir</span> <br>
    <span>Civil Engineering Project</span> <br>
    <span>Place: 311</span> <br>
    <span> From 10:15 AM to 11:00 AM`;
    knowPreviousClass.innerHTML = '';
    knowPreviousClass.appendChild(previousClassInfo);
};
const nextClassNo6 = () => {
    const nextClassInfo = document.createElement('div');
    nextClassInfo.innerHTML =  `
    <span><b> Next Class </b> </span> <br>
    <span>Sumaiya Akhter Nishi</span> <br>
    <span>Construction Management and Documentation </span> <br>
    <span>Place: 311 </span> <br>
    <span>From 12:30 AM to 1:15 PM </span>`;
    knowNextClass.innerHTML = '';
    knowNextClass.appendChild(nextClassInfo);
}
const classNo7 = () => {
    const currentClassInfo = document.createElement('div');
    currentClassInfo.innerHTML =  `
    <span class="current-class"> Current Class </span> <br>
    <span>Sumaiya Akhter Nishi</span> <br>
    <span>Construction Management and Documentation </span> <br>
    <span>Place: 311</span> <br>
    <span>Today : Sunday </span> <br>
    <span>From 12:30 AM to 1:15 PM </span>`;
    getCurrentClass.innerHTML = '';
    getCurrentClass.appendChild(currentClassInfo);
}
const preClassNo7 = () => {
    const previousClassInfo = document.createElement('div');
    previousClassInfo.innerHTML =  `
    <span><b>Previous Class</b></span> <br>
    <span>Shahina Akhter </span> <br>
    <span>Water Resource Engineering</span> <br>
    <span>Place: 311</span> <br>
    <span> From 11:45 AM to 12:30 PM`;
    knowPreviousClass.innerHTML = '';
    knowPreviousClass.appendChild(previousClassInfo);
};
const classNo8 = () => {
    const currentClassInfo = document.createElement('div');
    currentClassInfo.innerHTML =  `
    <span class="current-class"> Current Class </span> <br>
    <span> MR ZRs </span> <br>
    <span> Innovation and Entrepreneurship </span> <br>
    <span>Place: 311</span> <br>
    <span>Today : Tuessday </span> <br>
    <span>From 8:00 AM to 9:30 AM </span>`;
    getCurrentClass.innerHTML = '';
    getCurrentClass.appendChild(currentClassInfo);
}
const nextClassNo8 = () => {
    const nextClassInfo = document.createElement('div');
    nextClassInfo.innerHTML =  `
    <span><b> Next Class </b> </span> <br>
    <span>Sumaiya Akhter Nishi</span> <br>
    <span>Construction Management and Documentation </span> <br>
    <span>Place: 311 </span> <br>
    <span>From 9:30 AM to 10:15 AM </span>`;
    knowNextClass.innerHTML = '';
    knowNextClass.appendChild(nextClassInfo);
}
const classNo9 = () => {
    const currentClassInfo = document.createElement('div');
    currentClassInfo.innerHTML =  `
    <span class="current-class"> Current Class </span> <br>
    <span> Sumaiya Akther Nishi </span> <br>
    <span> Construction Management and Documentation</span> <br>
    <span>Place: 311</span> <br>
    <span>Today : Tuessday </span> <br>
    <span>From 9:30 AM to 10:15 AM </span>`;
    getCurrentClass.innerHTML = '';
    getCurrentClass.appendChild(currentClassInfo);
}
const preClassNo9 = () => {
    const previousClassInfo = document.createElement('div');
    previousClassInfo.innerHTML =  `
    <span><b>Previous Class</b></span> <br>
    <span>MR ZRs  </span> <br>
    <span>Innovation and Entrepreneurship </span> <br>
    <span>Place: 311</span> <br>
    <span>From 8:00 AM to 9:30 AM `;
    knowPreviousClass.innerHTML = '';
    knowPreviousClass.appendChild(previousClassInfo);
};
const nextClassNo9 = () => {
    const nextClassInfo = document.createElement('div');
    nextClassInfo.innerHTML =  `
    <span><b> Next Class </b> </span> <br>
    <span>Tarif Ullah</span> <br>
    <span>Sanitary Engineering </span> <br>
    <span>Place: 311 </span> <br>
    <span>From 10:15 AM to 11:00 AM</span>`;
    knowNextClass.innerHTML = '';
    knowNextClass.appendChild(nextClassInfo);
}
const classNo10 = () => {
    const currentClassInfo = document.createElement('div');
    currentClassInfo.innerHTML =  `
    <span class="current-class"> Current Class </span> <br>
    <span> Tarif Ullah </span> <br>
    <span>Sanitary Engineering </span> <br>
    <span>Place: 311</span> <br>
    <span>Today : Tuessday </span> <br>
    <span>From 10:15 AM to 11:00 AM </span>`;
    getCurrentClass.innerHTML = '';
    getCurrentClass.appendChild(currentClassInfo);
};
const preClassNo10 = () => {
    const previousClassInfo = document.createElement('div');
    previousClassInfo.innerHTML =  `
    <span><b>Previous Class</b></span> <br>
    <span>Sumaiya Nishi  </span> <br>
    <span> Construction Management and Documentation </span> <br>
    <span>Place: 311</span> <br>
    <span>From 9:30 AM to 10:15 AM `;
    knowPreviousClass.innerHTML = '';
    knowPreviousClass.appendChild(previousClassInfo);
};
const nextClassNo10 = () => {
    const nextClassInfo = document.createElement('div');
    nextClassInfo.innerHTML =  `
    <span><b> Next Class </b> </span> <br>
    <span>Shahina Akhter </span> <br>
    <span>Water Resource Engineering </span> <br>
    <span>Place: Plumbing Shop </span> <br>
    <span>From 11:00 AM to 1:15 PM </span>`;
    knowNextClass.innerHTML = '';
    knowNextClass.appendChild(nextClassInfo);
};
const classNo11 = () => {
    const currentClassInfo = document.createElement('div');
    currentClassInfo.innerHTML =  `
    <span class="current-class"> Current Class </span> <br>
    <span> Shahina Akhter </span> <br>
    <span>Water Resource Engineering</span> <br>
    <span>Plumbing Shop</span> <br>
    <span>Today : Tuessday </span> <br>
    <span>From 11:00 AM to 01:15 AM </span>`;
    getCurrentClass.innerHTML = '';
    getCurrentClass.appendChild(currentClassInfo);
};
const preClassNo11 = () => {
    const previousClassInfo = document.createElement('div');
    previousClassInfo.innerHTML =  `
    <span><b>Previous Class</b></span> <br>
    <span>Tarif Ullah</span> <br>
    <span> Sanitary Engineering </span> <br>
    <span>Place: 311</span> <br>
    <span>From 10:15 AM to 11:00 AM`;
    knowPreviousClass.innerHTML = '';
    knowPreviousClass.appendChild(previousClassInfo);
};
const classNo12 = () => {
    const currentClassInfo = document.createElement('div');
    currentClassInfo.innerHTML =  `
    <span class="current-class"> Current Class </span> <br>
    <span> Sumaiya Nishi </span> <br>
    <span>Construction Management and Documentation </span> <br>
    <span>Mason Shop</span> <br>
    <span>Today : Wednesday </span> <br>
    <span>From 8:00 AM to 10:15 AM </span>`;
    getCurrentClass.innerHTML = '';
    getCurrentClass.appendChild(currentClassInfo);
};
const nextClassNo12 = () => {
    const nextClassInfo = document.createElement('div');
    nextClassInfo.innerHTML =  `
    <span><b> Next Class </b> </span> <br>
    <span>Kohinur Akhtar </span> <br>
    <span>Transportation Engineering 2 </span> <br>
    <span>Place: Mason Shop </span> <br>
    <span>From 10:15 AM to 11:00 AM </span>`;
    knowNextClass.innerHTML = '';
    knowNextClass.appendChild(nextClassInfo);
};
const classNo13 = () => {
    const currentClassInfo = document.createElement('div');
    currentClassInfo.innerHTML =  `
    <span class="current-class"> Current Class </span> <br>
    <span> Kohinur Akhtar </span> <br>
    <span> Transportation Engineering 2 </span> <br>
    <span>Place : Mason Shop</span> <br>
    <span>Today : Wednesday </span> <br>
    <span>From 10:15 AM to 11:00 AM </span>`;
    getCurrentClass.innerHTML = '';
    getCurrentClass.appendChild(currentClassInfo);
};
const preClassNo13 = () => {
    const previousClassInfo = document.createElement('div');
    previousClassInfo.innerHTML =  `
    <span><b>Previous Class</b></span> <br>
    <span>Sumaiya Nishi</span> <br>
    <span> Construction Management and Documentation </span> <br>
    <span>Place:Mason Shop</span> <br>
    <span>From 8:00 AM to 10:15 AM`;
    knowPreviousClass.innerHTML = '';
    knowPreviousClass.appendChild(previousClassInfo);
};
const nextClassNo13 = () => {
    const nextClassInfo = document.createElement('div');
    nextClassInfo.innerHTML =  `
    <span><b> Next Class </b> </span> <br>
    <span> Ashim Dhar Sir Class </span> <br>
    <span> Civil Engineering Project </span> <br>
    <span>Place: Mason Shop </span> <br>
    <span>From 11:00 AM to 01:15 PM </span>`;
    knowNextClass.innerHTML = '';
    knowNextClass.appendChild(nextClassInfo);
};
const classNo14 = () => {
    const currentClassInfo = document.createElement('div');
    currentClassInfo.innerHTML =  `
    <span class="current-class"> Current Class </span> <br>
    <span> Ashim Dhar Sir Class </span> <br>
    <span> Civil Engineering Project </span> <br>
    <span>Place : Mason Shop</span> <br>
    <span>Today : Wednesday </span> <br>
    <span>From 11:00 AM to 01:15 PM </span>`;
    getCurrentClass.innerHTML = '';
    getCurrentClass.appendChild(currentClassInfo); 
};
const preClassNo14 = () => {
    const previousClassInfo = document.createElement('div');
    previousClassInfo.innerHTML =  `
    <span><b>Previous Class</b></span> <br>
    <span>Kohinur Akhtar</span> <br>
    <span> Transportation Engineering 2 </span> <br>
    <span>Place:Mason Shop</span> <br>
    <span>From 10:15 AM to 11:00 AM`;
    knowPreviousClass.innerHTML = '';
    knowPreviousClass.appendChild(previousClassInfo);
};
const classNo15 = () => {
    const currentClassInfo = document.createElement('div');
    currentClassInfo.innerHTML =  `
    <span class="current-class"> Current Class </span> <br>
    <span> Ashim Dhar Sir Class </span> <br>
    <span> Design of Structure 2 </span> <br>
    <span>Place : 310 </span> <br>
    <span>Today : Thursday </span> <br>
    <span>From 08:00 AM to 10:15 AM </span>`;
    getCurrentClass.innerHTML = '';
    getCurrentClass.appendChild(currentClassInfo); 
};
const nextClassNo15 = () => {
    const nextClassInfo = document.createElement('div');
    nextClassInfo.innerHTML =  `
    <span><b> Next Class </b> </span> <br>
    <span> Kohinur Akhtar </span> <br>
    <span> Transportation Engineering </span> <br>
    <span>Place: 311 </span> <br>
    <span>From 11:00 AM to 01:15 PM </span>`;
    knowNextClass.innerHTML = '';
    knowNextClass.appendChild(nextClassInfo);
};
const classNo16 = () => {
    const currentClassInfo = document.createElement('div');
    currentClassInfo.innerHTML =  `
    <span class="current-class"> Current Class </span> <br>
    <span> Kohinur Akhtar </span> <br>
    <span> Transportation Engineering </span> <br>
    <span>Place : 311 </span> <br>
    <span>Today : Thursday </span> <br>
    <span>From 10:15 AM to 11:00 AM </span>`;
    getCurrentClass.innerHTML = '';
    getCurrentClass.appendChild(currentClassInfo); 
};
const preClassNo16 = () => {
    const previousClassInfo = document.createElement('div');
    previousClassInfo.innerHTML =  `
    <span><b>Previous Class</b></span> <br>
    <span>Ashim Dhar Sir Class</span> <br>
    <span> Design of Structure 2 </span> <br>
    <span>Place: 310 </span> <br>
    <span>From 08:00 AM to 10:15 AM`;
    knowPreviousClass.innerHTML = '';
    knowPreviousClass.appendChild(previousClassInfo);
};
const nextClassNo16 = () => {
    const nextClassInfo = document.createElement('div');
    nextClassInfo.innerHTML =  `
    <span><b> Next Class </b> </span> <br>
    <span> Tarif Ullah Sir Class </span> <br>
    <span> Sanitary Engineering </span> <br>
    <span>Place: Plumbing Shop </span> <br>
    <span>From 11:00 AM to 01:15 PM </span>`;
    knowNextClass.innerHTML = '';
    knowNextClass.appendChild(nextClassInfo);
};
const classNo17 = () => {
    const currentClassInfo = document.createElement('div');
    currentClassInfo.innerHTML =  `
    <span class="current-class"> Current Class </span> <br>
    <span> Tarif Ullah Sir Class </span> <br>
    <span> Sanitary Engineering </span> <br>
    <span>Place : Plumbing Shop </span> <br>
    <span>Today : Thursday </span> <br>
    <span>From 11:00 AM to 01:15 PM </span>`;
    getCurrentClass.innerHTML = '';
    getCurrentClass.appendChild(currentClassInfo); 
};
const preClassNo17 = () => {
    const previousClassInfo = document.createElement('div');
    previousClassInfo.innerHTML =  `
    <span><b>Previous Class</b></span> <br>
    <span>Kohinur Akhtar</span> <br>
    <span> Transportation Engineering 2 </span> <br>
    <span>Place: 311 </span> <br>
    <span>From 10:15 AM to 11:00 AM`;
    knowPreviousClass.innerHTML = '';
    knowPreviousClass.appendChild(previousClassInfo);
};

btn.addEventListener('click', () =>{
    // SUNDAY JS FILE STARTS FROM HERE 
    if (currentDay == 0){
        if ((currentHours == 8 && currentMinutes >= 0 && currentMinutes <= 59) || 
            (currentHours == 9 && currentMinutes >= 0 && currentMinutes <= 59) ||
            (currentHours == 10 && currentMinutes >= 0 && currentMinutes <= 15)) {
            classNo1();
            nextClassNo1();
        }
        else if (currentHours == 10 && currentMinutes >= 15 && currentMinutes <= 59) {
            classNo2();
            preClassNo2();
            nextClassNo2();
        }
        else if (currentHours == 11 && currentMinutes >= 0 && currentMinutes <= 45){
            classNo3();
            preClassNo3();
        }
    }

    // MONDAY JS FILE STARTS FROM HERE 

    if (currentDay == 1){
        if ((currentHours == 8 && currentMinutes >= 0 && currentMinutes <= 59) || 
            (currentHours == 9 && currentMinutes >= 0 && currentMinutes <= 59) ||
            (currentHours == 10 && currentMinutes >= 0 && currentMinutes <= 14))  {
                classNo4();
                nextClassNo1(); 
        }
        else if (currentHours == 10 && currentMinutes >= 15 && currentMinutes <= 59) {
            classNo5();
            preClassNo5();
            nextClassNo5();
        }
        else if ((currentHours == 11 && currentMinutes >= 0 && currentMinutes <= 59) || 
                 ( currentHours == 12 && currentMinutes >= 0 && currentMinutes <= 30 )){
                    classNo6();
                    preClassNo6();  
                    nextClassNo6(); 
        }
        else if (( currentHours == 12 && currentMinutes >= 30 && currentMinutes <= 59) || 
                 ( currentHours == 13 && currentMinutes >= 0 && currentMinutes <= 15 )){
                    classNo7();
                    preClassNo7();
        }
    }
    // TUESDAY JS FILE STARTS FROM HERE 
    if (currentDay == 2) {
        if ((currentHours == 8 && currentMinutes >= 0 && currentMinutes <= 59) || 
            (currentHours == 9 && currentMinutes >= 0 && currentMinutes <= 30))  {
                classNo8 ();
                nextClassNo8();
        }
        else if (( currentHours == 9 && currentMinutes >= 30 && currentMinutes <= 59 ) || 
                 ( currentHours == 10 && currentMinutes >= 0 && currentMinutes <= 15 )) {
                    classNo9();
                    preClassNo9();
                    nextClassNo9();
        }
        else if (currentHours == 10 && currentMinutes >= 15 && currentMinutes <= 59) {
            classNo10();
            preClassNo10();
            nextClassNo10();
        }
        else if ((currentHours == 11 && currentMinutes >= 0 && currentMinutes <= 59) ||
                (currentHours == 12 && currentMinutes >= 0 && currentMinutes <= 59 ) ||
                (currentHours == 13 && currentMinutes >= 0 && currentMinutes <= 15 )) {
                    classNo11();
                    preClassNo11();
        }
    }
    // Wednesday js file starts from here 

    if ( currentDay == 3 ) {
        if ((currentHours == 8 && currentMinutes >= 0 && currentMinutes <= 59) 
           ( currentHours == 9 && currentMinutes >= 0 && currentMinutes <= 59 )
           ( currentHours == 10 && currentMinutes >= 0 && currentMinutes <= 15 ))  {
             classNo12();
            nextClassNo12();
        }
        else if ( currentHours == 10 && currentMinutes >= 16 && currentMinutes <= 59) {
            classNo13();
            preClassNo13();
            nextClassNo13();
        }
        else if (( currentHours == 11  && currentMinutes >= 0 && currentMinutes <= 59) 
                ( currentHours == 12  && currentMinutes >= 0 && currentMinutes <= 59)
                ( currentHours == 13  && currentMinutes >= 0 && currentMinutes <= 15)){
                    classNo14();
                    preClassNo14();
        }
    }
    // Thursday js file starts from here 
    if ( currentDay == 4 ) {
        if ((currentHours == 8 && currentMinutes >= 0 && currentMinutes <= 59) 
            ( currentHours == 9 && currentMinutes >= 0 && currentMinutes <= 59 )
            ( currentHours == 10 && currentMinutes >= 0 && currentMinutes <= 15 )) {
            classNo15();
            nextClassNo15();
        }
        else if ( currentHours == 10 && currentMinutes >= 16 && currentMinutes <= 59) {
            classNo16();
            preClassNo16();
            nextClassNo16();
        }
        else if (( currentHours == 11  && currentMinutes >= 0 && currentMinutes <= 59) 
                 ( currentHours == 12  && currentMinutes >= 0 && currentMinutes <= 59)
                 ( currentHours == 13  && currentMinutes >= 0 && currentMinutes <= 15)) {
            classNo17();
            preClassNo17();
        }
    }
    else {
        console.log('no class available today')
    }
});

const class1 = document.createElement('div');
const class2 = document.createElement('div');
const class3 = document.createElement('div');
const class4 = document.createElement('div');
const class5 = document.createElement('div');
const class6 = document.createElement('div');
const class7 = document.createElement('div');
const class8 = document.createElement('div');
const class9 = document.createElement('div');
const class10 = document.createElement('div');
const class11 = document.createElement('div');
const class12 = document.createElement('div');
const class13 = document.createElement('div');
const class14 = document.createElement('div');
const class15 = document.createElement('div');
const class16 = document.createElement('div');
const class17 = document.createElement('div');


selectDay.addEventListener('change', function(event){
    const selectedOption = event.target.value;
    sundayClass.innerHTML='';

    if (selectedOption === "value-1") {

        class1.innerHTML = `
        <span class="current-class"> 1st Class </span> <br>
        <span>Teacher: Ashim Dhar Sir</span> <br>
        <span>Civil Engineering Project</span> <br>
        <span>Place: Mason Shop</span> <br>
        <span>From 8:00 AM to 10:15 AM </span>`;
        class1.classList.add('class1');
        sundayClass.appendChild(class1);

        class2.innerHTML = `
        <span class="current-class"> 2nd Class </span> <br>
        <span>Teacher: Ashim Dhar Sir</span> <br>
        <span>Design of Structure - 2</span> <br>
        <span>Place: 311</span> <br>
        <span>From 10:15 AM to 11:00 AM </span>`;
        sundayClass.appendChild(class2);

        class3.innerHTML = `
        <span class="current-class"> 3rd Class </span> <br>
        <span>Tarif Ullah Sir's Class</span> <br>
        <span>Sanitary Engineerinng</span> <br>
        <span>Place: 311</span> <br>
        <span>From 11:00 AM to 11:45 AM</span>`;
        sundayClass.appendChild(class3);

  

    } else if (selectedOption === "value-2") {

        class4.innerHTML = `
        <span class="current-class"> 4th Class </span> <br>
        <span>Teacher: Kohinur Akhtar</span> <br>
        <span>Civil Engineering Project</span> <br>
        <span>Place: Geotechnical Lab</span> <br>
        <span>From 8:00 AM to 10:15 AM </span>`;
        sundayClass.appendChild(class4);

        class5.innerHTML = `
        <span class="current-class"> 5th Class </span> <br>
        <span>Teacher: Ashim Dhar Sir</span> <br>
        <span>Design of Structure - 2</span> <br>
        <span>Place: 311</span> <br>
        <span>From 10:15 AM to 11:00 AM </span> <br>`;
        sundayClass.appendChild(class5);

        class6.innerHTML = `
        <span class="current-class"> 6th class </span> <br>
        <span>Shahina Akther</span> <br>
        <span>Water Resource Engineering </span> <br>
        <span>Place: 311</span> <br>
        <span>From 11:00 AM to 12:30 AM</span>`;
        sundayClass.appendChild(class6);

        class7.innerHTML = `
        <span class="current-class"> 7th Class </span> <br>
        <span>Sumaiya Akhter Nishi</span> <br>
        <span>Construction Management and Documentation </span> <br>
        <span>Place: 311</span> <br>
        <span>From 12:30 AM to 1:15 PM </span>`;
        sundayClass.appendChild(class7);


    }else if (selectedOption === "value-3") {

        class8.innerHTML = `
        <span class="current-class"> 8th Class </span> <br>
        <span> MR ZRs </span> <br>
        <span> Innovation and Entrepreneurship </span> <br>
        <span>Place: 311</span> <br>
        <span>From 8:00 AM to 9:30 AM </span>`;
        sundayClass.appendChild(class8);

        class9.innerHTML = `
        <span class="current-class"> 9th Class </span> <br>
        <span> Sumaiya Akther Nishi </span> <br>
        <span> Construction Management and Documentation</span> <br>
        <span>Place: 311</span> <br>
        <span>From 9:30 AM to 10:15 AM </span>`;
        sundayClass.appendChild(class9);

        class10.innerHTML = `
        <span class="current-class"> 10th Class </span> <br>
        <span> Tarif Ullah </span> <br>
        <span>Sanitary Engineering </span> <br>
        <span>Place: 311</span> <br>
        <span>From 10:15 AM to 11:00 AM </span>`;
        sundayClass.appendChild(class10);

        class11.innerHTML = `
        <span class="current-class"> 11th Class </span> <br>
        <span> Shahina Akhter </span> <br>
        <span>Water Resource Engineering</span> <br>
        <span>Plumbing Shop</span> <br>
        <span>From 11:00 AM to 01:15 AM </span>`;
        sundayClass.appendChild(class11);

   

    }else if (selectedOption === "value-4") {
        class12.innerHTML = `
        <span class="current-class"> 12th Class </span> <br>
        <span> Sumaiya Nishi </span> <br>
        <span>Construction Management and Documentation </span> <br>
        <span>Mason Shop</span> <br>
        <span>From 8:00 AM to 10:15 AM </span>`;
        sundayClass.appendChild(class12);

        class13.innerHTML = `
        <span class="current-class"> 13th Class </span> <br>
        <span> Kohinur Akhtar </span> <br>
        <span> Transportation Engineering 2 </span> <br>
        <span>Place : Mason Shop</span> <br>
        <span>From 10:15 AM to 11:00 AM </span>`;
        sundayClass.appendChild(class13);

        class14.innerHTML = `
        <span class="current-class"> 14th Class </span> <br>
        <span> Ashim Dhar Sir Class </span> <br>
        <span> Civil Engineering Project </span> <br>
        <span>Place : Mason Shop</span> <br>
        <span>From 11:00 AM to 01:15 PM </span>`;
        sundayClass.appendChild(class14);

    }else if (selectedOption === "value-5") {

        class15.innerHTML =`
        <span class="current-class"> 15th Class </span> <br>
        <span> Ashim Dhar Sir Class </span> <br>
        <span> Design of Structure 2 </span> <br>
        <span>Place : 310 </span> <br>
        <span>From 08:00 AM to 10:15 AM </span>`;
        sundayClass.appendChild(class15);

        class16.innerHTML = `
        <span class="current-class"> 16th Class </span> <br>
        <span> Kohinur Akhtar </span> <br>
        <span> Transportation Engineering </span> <br>
        <span>Place : 311 </span> <br>
        <span>From 10:15 AM to 11:00 AM </span>`;
        sundayClass.appendChild(class16);

        class17.innerHTML =`
        <span class="current-class"> 17th Class </span> <br>
        <span> Tarif Ullah Sir Class </span> <br>
        <span> Sanitary Engineering </span> <br>
        <span>Place : Plumbing Shop </span> <br>
        <span>From 11:00 AM to 01:15 PM </span>`;
        sundayClass.appendChild(class17);
    }
})



selectSub.addEventListener('change', function(event){
    const selectedOption = event.target.value;
    subInfo.innerHTML='';
    const CEP = document.createElement('div');

    if (selectedOption === "value-1") {
        CEP.innerHTML = ` 
        <div class="CEP">
            <h1>Civil Engineering Project</h1>
            <h2>MR Ashim Dhar </h2>
            <table>
                <tr>
                    <th>Theory</th>
                    <th>Practical</th>
                    <th>Credit</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>6</td>
                    <td>2</td>
                </tr>
            </table>
            <h2>Total Days: <span>Sunday, Wednesday</span> </h2>
        </div>`;
        subInfo.appendChild(CEP);

    }else if (selectedOption == 'value-2') {
        CEP.innerHTML = ` 
        <div class="CEP">
            <h1>Sanitary Engineering</h1>
            <h2>MR Tarif Ullah </h2>
            <table>
                <tr>
                    <th>Theory</th>
                    <th>Practical</th>
                    <th>Credit</th>
                </tr>
                <tr>
                    <td>2</td>
                    <td>3</td>
                    <td>3</td>
                </tr>
            </table>
            <h2>Total Days: <span>Sunday, Tuesday. Thursday</span> </h2>
        </div>`;
        subInfo.appendChild(CEP);
    }else if (selectedOption == 'value-3') {
        CEP.innerHTML = ` 
        <div class="CEP">
            <h1>Transportation Engineering 2</h1>
            <h2>Kohinur Akhtar </h2>
            <table>
                <tr>
                    <th>Theory</th>
                    <th>Practical</th>
                    <th>Credit</th>
                </tr>
                <tr>
                    <td>2</td>
                    <td>3</td>
                    <td>3</td>
                </tr>
            </table>
            <h2>Total Days: <span>Monday and Wednesday</span> </h2>
        </div>`;
        subInfo.appendChild(CEP);
    }else if (selectedOption == 'value-4') {
        CEP.innerHTML = ` 
        <div class="CEP">
            <h1>Design of Structure</h1>
            <h2>Mr Ashim Dhar </h2>
            <table>
                <tr>
                    <th>Theory</th>
                    <th>Practical</th>
                    <th>Credit</th>
                </tr>
                <tr>
                    <td>2</td>
                    <td>3</td>
                    <td>3</td>
                </tr>
            </table>
            <h2>Total Days: <span>Sunday, Monday, Tuesday </span> </h2>
        </div>`;
        subInfo.appendChild(CEP);
    }else if (selectedOption == 'value-5') {
        CEP.innerHTML = ` 
        <div class="CEP">
            <h1>Water Resource Engineering</h1>
            <h2>Shahina mam </h2>
            <table>
                <tr>
                    <th>Theory</th>
                    <th>Practical</th>
                    <th>Credit</th>
                </tr>
                <tr>
                    <td>2</td>
                    <td>3</td>
                    <td>3</td>
                </tr>
            </table>
            <h2>Total Days: <span>Monday, Tuesday </span> </h2>
        </div>`;
        subInfo.appendChild(CEP);
    }else if (selectedOption == 'value-6') {
        CEP.innerHTML = ` 
        <div class="CEP">
            <h1>Construction Management and Documentation </h1>
            <h2>Sumaiya Nishi</h2>
            <table>
                <tr>
                    <th>Theory</th>
                    <th>Practical</th>
                    <th>Credit</th>
                </tr>
                <tr>
                    <td>2</td>
                    <td>3</td>
                    <td>3</td>
                </tr>
            </table>
            <h2>Total Days: <span>Monday, Tuesday, Wednesday </span> </h2>
        </div>`;
        subInfo.appendChild(CEP);
    }else if (selectedOption == 'value-7') {
        CEP.innerHTML = ` 
        <div class="CEP">
            <h1>Innovation and Entreprenurship </h1>
            <h2>Mr Zrs</h2>
            <table>
                <tr>
                    <th>Theory</th>
                    <th>Practical</th>
                    <th>Credit</th>
                </tr>
                <tr>
                    <td>2</td>
                    <td>0</td>
                    <td>2</td>
                </tr>
            </table>
            <h2>Total Days: <span>Tuesday </span> </h2>
        </div>`;
        subInfo.appendChild(CEP);
    }
});
selectTeacher.addEventListener('change', function (event){
    const selectedOption = event.target.value;
    const info = document.createElement('div');

    teacherInfo.innerHTML= '';

    if (selectedOption === 'value-1') {
        info.innerHTML = `
        <div id="teacherInfo">
            <h1>Mr Ashim Dhar Sir</h1>
            <h2>Subjects: <span>Civil Engineering Project ,</span> <span>Design of Structure 2</span></h2>
            <h2>Busy Days : Sunday, Monday, Wednesday, Thursday</h2>
         </div>`;
        teacherInfo.appendChild(info);
    }else if (selectedOption === 'value-2') {
        info.innerHTML = `
        <div id="teacherInfo">
            <h1>Tarif Ullah Sir</h1>
            <h2>Subjects: <span>Sanitary Engineering </span></h2>
            <h2>Busy Days : Sunday, Tuesday, Thursday</h2>
         </div>`;
        teacherInfo.appendChild(info);

    }else if (selectedOption === 'value-3') {
        info.innerHTML = `
        <div id="teacherInfo">
            <h1>Kohinur Akhtar</h1>
            <h2>Subjects: <span>Transportation Engineering 2 </span></h2>
            <h2>Busy Days : Monday, Wednesday, Thursday</h2>
         </div>`;
        teacherInfo.appendChild(info);
    }else if (selectedOption === 'value-4') {
        info.innerHTML = `
        <div id="teacherInfo">
            <h1>Shahina</h1>
            <h2>Subjects: <span>Water Resource Engineering </span></h2>
            <h2>Busy Days : Monday, Tuesday</h2>
         </div>`;
        teacherInfo.appendChild(info);
    }else if (selectedOption === 'value-5') {
        info.innerHTML = `
        <div id="teacherInfo">
            <h1>Sumaiya Nishi</h1>
            <h2>Subjects: <span>Construction Management and Documentation </span></h2>
            <h2>Busy Days : Monday, Tuesday, Wednesday</h2>
         </div>`;
        teacherInfo.appendChild(info);
    }else if (selectedOption === 'value-6') {
        info.innerHTML = `
        <div id="teacherInfo">
            <h1>Mr Zrs</h1>
            <h2>Subjects: <span>Innovation and Entrepreneurship</span></h2>
            <h2>Busy Days : Tuesday</h2>
         </div>`;
        teacherInfo.appendChild(info);
    }
})

tableOnOff.addEventListener('change', function(event){
    const selectedOption = event.target.value;
    if (selectedOption === 'value-1') {
        tableSection.style.display='block';
        detailesRoutine.style.display='block';
    }
    if (selectedOption === 'value-2') {
        tableSection.style.display='none';
        detailesRoutine.style.display='none';
    }
})