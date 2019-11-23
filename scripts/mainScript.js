window.onscroll = () => scrollFunction();

const navBar = document.getElementById("navBar");
const navBarOffsetTop = navBar.offsetTop;

//Animation for each section as the user scrolls down

const viewportHeight = window.innerHeight;

// skillsSection
const skillsSection = document.getElementById("skillsSection");
const skillsTitle = document.getElementById("skillsTitle");
const skillsOffsetTop = skillsSection.offsetTop;
const devSkillsSection = document.getElementById("skillsSection-devContainer");
const profSkillsSection = document.getElementById(
  "skillsSection-profSkillsContainer"
);

// educationSection
const educationSection = document.getElementById("educationSection");
const educationTitle = document.getElementById("educationTitle");
const educationOffsetTop = educationSection.offsetTop;
const schoolEducation = document.getElementById("schoolEducation");
const universityEducation = document.getElementById("universityEducation");

// experienceSection
const experienceSection = document.getElementById("experienceSection");
const experienceTitle = document.getElementById("experienceTitle");
const experienceOffsetTop = experienceSection.offsetTop;
const basterTitle = document.getElementById("basterTitle");
const basterSubtitle = document.getElementById("basterSubtitle");
const basterContent = document.getElementById("basterContent");
const molineraTitle = document.getElementById("molineraTitle");
const molineraSubtitle = document.getElementById("molineraSubtitle");
const molineraContent = document.getElementById("molineraContent");
const colegioSanTitle = document.getElementById("colegioSanTitle");
const colegioSanSubtitle = document.getElementById("colegioSanSubtitle");
const colegioSanContent = document.getElementById("colegioSanContent");

// extraSection 
const extraSection = document.getElementById("extraSection");
const extraOffsetTop = extraSection.offsetTop;
const idioms = document.getElementById("idioms");
const extracurricular = document.getElementById("extracurricular");
const spanish = document.getElementById("spanish");
const english = document.getElementById("english");
const french = document.getElementById("french");
const nationalTeam = document.getElementById("nationalTeam");
const ormChampion = document.getElementById("ormChampion");

const scrollFunction = () => {
  // Sticky navBar
  if (window.pageYOffset >= navBarOffsetTop) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }

  // skillsSection AnimateIn
  if (window.pageYOffset >= skillsOffsetTop - 0.7 * viewportHeight) {
    skillsTitle.classList.add("contentAnimateTopIn");
    devSkillsSection.classList.add("contentAnimateTopIn");
  }

  if (window.pageYOffset >= skillsOffsetTop) {
    profSkillsSection.classList.add("contentAnimateTopIn");
  }

  // educationSection AnimateIn
  if (window.pageYOffset >= educationOffsetTop - 0.7 * viewportHeight) {
    educationTitle.classList.add("contentAnimateTopIn");
    schoolEducation.classList.add("contentAnimateTopIn");
  }

  if (window.pageYOffset >= educationOffsetTop - 0.3 * viewportHeight) {
    universityEducation.classList.add("contentAnimateTopIn");
  }

  //experienceSection AnimateIn
  if (window.pageYOffset >= experienceOffsetTop - 0.7 * viewportHeight) {
    experienceTitle.classList.add("contentAnimateTopIn");
    basterTitle.classList.add("contentAnimateLeftInNoDelay");
    basterSubtitle.classList.add("contentAnimateLeftInFirstDelay");
    basterContent.classList.add("contentAnimateLeftInSecondDelay");
  }

  if (window.pageYOffset >= experienceOffsetTop - 0.3 * viewportHeight) {
    molineraTitle.classList.add("contentAnimateLeftInNoDelay");
    molineraSubtitle.classList.add("contentAnimateLeftInFirstDelay");
    molineraContent.classList.add("contentAnimateLeftInSecondDelay");
  }

  if (window.pageYOffset >= experienceOffsetTop - 0.1 * viewportHeight) {
    colegioSanTitle.classList.add("contentAnimateLeftInNoDelay");
    colegioSanSubtitle.classList.add("contentAnimateLeftInFirstDelay");
    colegioSanContent.classList.add("contentAnimateLeftInSecondDelay");
  }

  // extraSection AnimateIn
  if (window.pageYOffset >= extraOffsetTop - 0.7 * viewportHeight) {
    idioms.classList.add("contentAnimateTopIn");
    extracurricular.classList.add("contentAnimateTopIn");
    spanish.classList.add("contentAnimateLeftInFirstDelay");
    english.classList.add("contentAnimateLeftInSecondDelay");
    french.classList.add("contentAnimateLeftInThirdDelay");
    nationalTeam.classList.add("contentAnimateRightInFirstDelay");
    ormChampion.classList.add("contentAnimateRightInSecondDelay");
  }
};

//TODO: Finish scrolldown animations. Make navBar active items
