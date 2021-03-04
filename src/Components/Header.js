import React from 'react';
function Header() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
    
    var today = new Date();
    var day = today.getDate();
    var month = monthNames[today.getMonth()];
    var year = today.getFullYear();
    if (day < 10) {
        day = '0' + day
    }
    var date = day + " " +month + " " + year;
     return (
    <div className = "info">
              <div class = "date">
                 <div id="output">{date}</div>
              </div>
    </div>
     )
    }
    export default Header