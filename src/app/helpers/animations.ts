const isMobile = false;

let headerAnimation = {};
let titleAnimation = {};
let subTitleAnimation = {};
let paragraphAnimation = {};
let buttonAnimation = {};
let aboutMeParagraph = {};
let projectTitle = {};
let projectDescription = {};
let contactTitle = {};
let formAnimation = {};
let heroImgAnimation = {};

if (!isMobile) {
  headerAnimation = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3,
      },
    },
  };
}

if (!isMobile) {
  titleAnimation = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };
}

if (!isMobile) {
  subTitleAnimation = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1,
        type: "spring",
      },
    },
  };
}

if (!isMobile) {
  paragraphAnimation = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };
}

if (!isMobile) {
  buttonAnimation = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.8,
        delay: 1,
        type: "spring",
        stiffness: 30,
      },
    },
  };
}

if (!isMobile) {
  heroImgAnimation = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2.2,
        delay: 1.5,
        type: "spring",
        stiffness: 40,
      },
    },
  };
}

if (!isMobile) {
  aboutMeParagraph = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.2,
      },
    },
  };
}

if (!isMobile) {
  projectTitle = {
    hidden: {
      x: -300,
    },
    visible: {
      x: 0,

      transition: {
        duration: 3,

        type: "spring",
        stiffness: 70,
      },
    },
  };
}

if (!isMobile) {
  projectDescription = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 100,
      x: 0,

      transition: {
        duration: 3,

        type: "spring",
        stiffness: 70,
      },
    },
  };
}

if (!isMobile) {
  contactTitle = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.5,
        type: "spring",
        stiffness: 70,
      },
    },
  };
}

if (!isMobile) {
  formAnimation = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.2,
        type: "spring",
        stiffness: 70,
      },
    },
  };
}

export {
  formAnimation,
  contactTitle,
  projectDescription,
  headerAnimation,
  titleAnimation,
  subTitleAnimation,
  paragraphAnimation,
  buttonAnimation,
  heroImgAnimation,
  aboutMeParagraph,
  projectTitle,
};
