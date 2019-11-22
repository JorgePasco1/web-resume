window.onscroll = () => stickyFunction();

const navBar = document.getElementById("navBar");

const sticky = navBar.offsetTop;

stickyFunction = () => {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add('sticky');

  } else {
    navBar.classList.remove('sticky')
  }
};
