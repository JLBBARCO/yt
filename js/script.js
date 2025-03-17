// Hides parts of the site that are shown after selecting an option
let change1 = document.querySelector("div#change1");
change1.style.display = "none";
let change2 = document.querySelector('div#change2');
change2.style.display = "none";
let change3 = document.querySelector('div#change3');
change3.style.display = "none";
let change4 = document.querySelector('div#change4');
change4.style.display = "none";

// Functions
let url = document.getElementById('url');
let option = document.querySelector('form#preferencia');
option.addEventListener("submit", function(event) {
    event.preventDefault(); // Avoids the default behavior of the form
    
    // Get the selected option
    let optionSelected = document.querySelector('input[name="select"]:checked');
    let idOption = optionSelected.value;
    
    // Check which option was selected and perform what each one should do
    if (idOption == 'watch') {
        // Show the previously hidden box, referring to the option
        change1.style.display = "block";

        // Iframe settings to show the video
        let iframe = document.querySelector('iframe#video');
        iframe.src = url;
    } else if (idOption == 'resume') {
        // Show the previously hidden box, referring to the option
        change2.style.display = 'block';

        // Declares the bar and percentage of the txt download hidden
        txt.style.display = "none";

        // Create a video summary
        let resume = document.querySelector("input#resume");
        
        // Declares that the txt_download variable receives the txt download button
        let txt_download = document.querySelector("input#txt_download");

        // Listen when the button is clicked and call the functions
        txt_download.addEventListener('click', function(event){
            // Declares that the bar and percentage of the txt download be shown
            let txt = document.querySelector('section#txt');
            txt.style.display = "block";
            
            // Declares that the progress bar and percentage be related to the download
            let changed1 = document.querySelector("div#changed1");
            changed1.style.width = `${progress1}%`;
            let percent1 = document.querySelector('div#percent1')
            changed1.style.width = `${progress1}%`;
            percent1.innerHTML = `${progress1}%`;
        })
    } else if (idOption == 'mp3') {
        // Show the previously hidden box, referring to the option
        change3.style.display = "block";

        // Declares that the bar and percentage of the download be related to the download
        let changed2 = document.querySelector('div#changed2');
        let percent2 = document.querySelector('div#percent2');
        changed2.style.width = `${progress2}%`;
        percent2.innerHTML = `${progress2}%`;
    } else if (idOption == 'mp4') {
        // Show the reference part
        change4.style.display = "block";

        // Declares that the bar and percentage of the progress be related to the download in real time
        let changed3 = document.querySelector("div#changed3");
        let percent3 = document.querySelector("div#percent3");
        changed3.style.width = `${progress3}%`;
        percent3.innerHTML = `${progress3}%`;
    };
});