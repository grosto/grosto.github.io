const SCROLL_TO_ELEMENT_OFFSET = 100;

function registerListenerForFixedNavbar() {
  const navbar = document.querySelector('nav');
  const navbarOffset = navbar.offsetTop;
  const extraOffset = 50;

  function toggleFixedNavbarClass() {
    if (navbarOffset < window.pageYOffset + extraOffset) {
      navbar.classList.add('navbar-fixed-top');
    } else {
      navbar.classList.remove('navbar-fixed-top');
    }
  }

  toggleFixedNavbarClass();

  document.addEventListener('scroll', toggleFixedNavbarClass);
}

function registerListenerForHambugerMenu() {
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarNav = document.querySelector('.navbar-nav-container');
  navbarToggle.addEventListener('click', () => {
    navbarNav.classList.toggle('navbar-nav-expanded');
  });
}

function registerListenerForSmoothScrolling() {
  const links = document.querySelectorAll('a[href*="#"]:not([href="#"])');

  const isLinkToSamePage = link =>
    window.location.pathname.replace(/^\//, '') ===
      link.pathname.replace(/^\//, '') &&
    window.location.hostname === link.hostname;

  const getTimeStamps = () =>
    'now' in window.performance ? performance.now() : new Date().getTime();

  function scrollToElement(
    elem,
    { duration = 600, offset = SCROLL_TO_ELEMENT_OFFSET } = {}
  ) {
    const start = window.pageYOffset;
    const startTime = getTimeStamps();
    const documentHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const destinationOffset = elem.offsetTop - offset;
    const destinationOffsetToScroll = Math.round(
      documentHeight - destinationOffset < windowHeight
        ? documentHeight - windowHeight
        : destinationOffset
    );
    function scroll() {
      const now = getTimeStamps();
      const time = Math.min(1, (now - startTime) / duration);
      window.scroll(
        0,
        Math.ceil(time * (destinationOffsetToScroll - start) + start)
      );
      if (window.pageYOffset !== destinationOffsetToScroll) {
        requestAnimationFrame(scroll);
      }
    }

    requestAnimationFrame(scroll);
  }

  links.forEach(link => {
    if (isLinkToSamePage(link)) {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.hash);
        scrollToElement(target);
      });
    }
  });
}

function registerListenerForActiveMenuItem() {
  const navLinks = document.querySelectorAll(
    '.navbar-nav a[href*="#"]:not([href="#"])'
  );
  const navLinksArray = Array.from(navLinks);
  const linksParentsCache = navLinksArray.reduce((acc, link) => {
    acc[link.hash] = link.parentElement;
    return acc;
  }, {});
  const sections = navLinksArray
    .map(({ hash }) => hash)
    .map(hash => document.querySelector(hash))
    .filter(Boolean);

  let lastActiveHash = null;
  const activeClassName = 'active';

  function updateActiveNavLink(hash) {
    if (lastActiveHash !== hash) {
      if (lastActiveHash) {
        linksParentsCache[lastActiveHash].classList.remove(activeClassName);
      }
      if (hash) {
        linksParentsCache[hash].classList.add(activeClassName);
      }
      lastActiveHash = hash;
    }
  }

  function handleActiveLinkTransitionOnScroll() {
    const hash = sections.reduce(
      (acc, sec) =>
        sec.offsetTop - SCROLL_TO_ELEMENT_OFFSET <= window.pageYOffset
          ? `#${sec.id}`
          : acc,
      null
    );
    updateActiveNavLink(hash);
  }

  handleActiveLinkTransitionOnScroll();
  document.addEventListener('scroll', handleActiveLinkTransitionOnScroll);
}

function initApp() {
  registerListenerForFixedNavbar();
  registerListenerForHambugerMenu();
  registerListenerForSmoothScrolling();
  registerListenerForActiveMenuItem();
}

initApp();
