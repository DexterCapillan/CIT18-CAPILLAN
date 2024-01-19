function showAboutMePopup() {
    var popup = document.getElementById('about-me-popup');
    popup.style.display = 'block';
    
    document.body.style.backdropFilter = 'blur(5px)';
    
    setTimeout(function () {
        popup.style.opacity = 1;
    }, 10);
}

function closeAboutMePopup() {
    var popup = document.getElementById('about-me-popup');
    popup.style.opacity = 0;
    document.body.style.backdropFilter = 'none';
    setTimeout(function () {
        popup.style.display = 'none';
    }, 500); 
}
function showEducationPopup() {
    var popup = document.getElementById('education-popup');
    popup.style.display = 'block';
    setTimeout(function () {
        popup.style.opacity = 1;
    }, 10);
}

function closeEducationPopup() {
    var popup = document.getElementById('education-popup');
    popup.style.opacity = 0;
    setTimeout(function () {
        popup.style.display = 'none';
    }, 500); 
}
function showExperiencePopup() {
    var popup = document.getElementById('experience-popup');
    popup.style.display = 'block';
    setTimeout(function () {
        popup.style.opacity = 1;
    }, 10);
}

function closeExperiencePopup() {
    var popup = document.getElementById('experience-popup');
    popup.style.opacity = 0;
    setTimeout(function () {
        popup.style.display = 'none';
    }, 500); 

}
function showSkillsPopup() {
    var popup = document.getElementById('skills-popup');
    popup.style.display = 'block';
    setTimeout(function () {
        popup.style.opacity = 1;
    }, 10);
}

function closeSkillsPopup() {
    var popup = document.getElementById('skills-popup');
    popup.style.opacity = 0;
    setTimeout(function () {
        popup.style.display = 'none';
    }, 500); 

}
function showContactsPopup() {
    var popup = document.getElementById('contacts-popup');
    popup.style.display = 'block';
    setTimeout(function () {
        popup.style.opacity = 1;
    }, 10);
}

function closeContactsPopup() {
    var popup = document.getElementById('contacts-popup');
    popup.style.opacity = 0;
    setTimeout(function () {
        popup.style.display = 'none';
    }, 500); 

}