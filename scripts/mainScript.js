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

//activeItem on navBar
const aboutSection = document.getElementById("aboutSection");
const aboutOffsetTop = aboutSection.offsetTop;
const aboutLink = document.getElementById("aboutLink");
const skillsLink = document.getElementById("skillsLink");
const educationLink = document.getElementById("educationLink");
const experienceLink = document.getElementById("experienceLink");
const extraLink = document.getElementById("extraLink");

const scrollFunction = () => {
  // Sticky navBar
  if (window.pageYOffset >= navBarOffsetTop) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }

  if (window.pageYOffset >= aboutOffsetTop - 0.7 * viewportHeight && window.pageYOffset <= skillsOffsetTop - 0.5 * viewportHeight) {
    aboutLink.classList.add("redTitle");
  }else {
    aboutLink.classList.remove("redTitle");
  }

  // skillsSection AnimateIn
  if (window.pageYOffset >= skillsOffsetTop - 0.5 * viewportHeight && window.pageYOffset <= educationOffsetTop - 0.5 * viewportHeight) {
    skillsTitle.classList.add("contentAnimateTopIn");
    devSkillsSection.classList.add("contentAnimateTopIn");
    skillsLink.classList.add("redTitle");
  }else {
    skillsLink.classList.remove("redTitle");
  }

  if (window.pageYOffset >= skillsOffsetTop) {
    profSkillsSection.classList.add("contentAnimateTopIn");
  }

  // educationSection AnimateIn
  if (window.pageYOffset >= educationOffsetTop - 0.5 * viewportHeight && window.pageYOffset <= experienceOffsetTop - 0.5 * viewportHeight) {
    educationTitle.classList.add("contentAnimateTopIn");
    schoolEducation.classList.add("contentAnimateTopIn");
    educationLink.classList.add("redTitle");
  } else {
    educationLink.classList.remove("redTitle");
  }

  if (window.pageYOffset >= educationOffsetTop - 0.3 * viewportHeight) {
    universityEducation.classList.add("contentAnimateTopIn");
  }

  //experienceSection AnimateIn
  if (window.pageYOffset >= experienceOffsetTop - 0.5 * viewportHeight && window.pageYOffset <= extraOffsetTop - 0.5 * viewportHeight) {
    experienceTitle.classList.add("contentAnimateTopIn");
    basterTitle.classList.add("contentAnimateLeftInNoDelay");
    basterSubtitle.classList.add("contentAnimateLeftInFirstDelay");
    basterContent.classList.add("contentAnimateLeftInSecondDelay");
    experienceLink.classList.add("redTitle");
  } else {
    experienceLink.classList.remove("redTitle");
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
  if (window.pageYOffset >= extraOffsetTop - 0.5 * viewportHeight) {
    idioms.classList.add("contentAnimateTopIn");
    extracurricular.classList.add("contentAnimateTopIn");
    spanish.classList.add("contentAnimateLeftInFirstDelay");
    english.classList.add("contentAnimateLeftInSecondDelay");
    french.classList.add("contentAnimateLeftInThirdDelay");
    nationalTeam.classList.add("contentAnimateRightInFirstDelay");
    ormChampion.classList.add("contentAnimateRightInSecondDelay");
    extraLink.classList.add("redTitle");
  } else {
    extraLink.classList.remove("redTitle");
  }
};

//TODO: Make navBar active items
