(function () {
  class Menu {
    init = () => {
      this.getMenuElementsAndAddEvents();
      this.getMenuElementsAndAddEventsByDataAttrs("type");
      this.getMenuElementsAndAddEventsByDataAttrs("role");
      this.getNavbarElementsAndAddEventsByDataThqAttrs();
      return this;
    };

    getMenuElementsAndAddEventsByDataAttrs = (dataAttr) => {
      const allHeaders = teleport.getAllElementsByDataAttribute(
        "role",
        "Header"
      );

      allHeaders.forEach((header) => {
        const burgerBtn = teleport.getElByDataAttribute(
          dataAttr,
          "BurgerMenu",
          header
        );
        const mobileMenu = teleport.getElByDataAttribute(
          dataAttr,
          "MobileMenu",
          header
        );
        const closeBtn = teleport.getElByDataAttribute(
          dataAttr,
          "CloseMobileMenu",
          header
        );

        if (!burgerBtn || !mobileMenu || !closeBtn) {
          return;
        }

        burgerBtn.addEventListener("click", () => {
          mobileMenu.classList.add("teleport-show");
        });

        closeBtn.addEventListener("click", () => {
          mobileMenu.classList.remove("teleport-show");
        });
      });
    };

    getNavbarElementsAndAddEventsByDataThqAttrs = () => {
      const allNavbars = teleport.getAllElementsByDataAttribute(
        "thq",
        "thq-navbar"
      );

      const bodyOverflow = document.body.style.overflow;

      allNavbars.forEach((navbar) => {
        const burgerBtn = teleport.getElByDataAttribute(
          "thq",
          "thq-burger-menu",
          navbar
        );
        const mobileMenu = teleport.getElByDataAttribute(
          "thq",
          "thq-mobile-menu",
          navbar
        );
        const closeBtn = teleport.getElByDataAttribute(
          "thq",
          "thq-close-menu",
          navbar
        );

        if (!burgerBtn || !mobileMenu || !closeBtn) {
          return;
        }

        burgerBtn.addEventListener("click", () => {
          window.addEventListener(
            "click",
            function checkSameLinkClicked(event) {
              if (!event) {
                return;
              }

              // check for links in ascendent elements
              let currentElement = event.target;

              while (currentElement !== document.body && !currentElement.href) {
                currentElement = currentElement.parentNode;
              }

              if (!currentElement.href) {
                return;
              }

              if (!mobileMenu) {
                return;
              }

              if (currentElement.href) {
                document.body.style.overflow = bodyOverflow;
              }

              if (currentElement.pathname === window.location.pathname) {
                mobileMenu.classList.remove("teleport-show");
                mobileMenu.classList.remove("thq-show");
                mobileMenu.classList.remove("thq-translate-to-default");
              }

              this.removeEventListener("click", checkSameLinkClicked);
            }
          );
          document.body.style.overflow = "hidden";

          mobileMenu.classList.add("teleport-show");
          mobileMenu.classList.add("thq-show");
          mobileMenu.classList.add("thq-translate-to-default");
        });

        closeBtn.addEventListener("click", () => {
          document.body.style.overflow = bodyOverflow;

          mobileMenu.classList.remove("teleport-show");
          mobileMenu.classList.remove("thq-show");
          mobileMenu.classList.remove("thq-translate-to-default");
        });
      });
    };

    getMenuElementsAndAddEvents = () => {
      const menuElements = teleport.getAllElByClass("teleport-menu-burger");

      if (menuElements.length === 0) {
        teleport.log("No teleport-menu-burger items found");
        return;
      }

      menuElements.forEach((burgerMenuElement) => {
        const mobileMenuElement =
          burgerMenuElement.nextElementSibling?.className.includes(
            "teleport-menu-mobile"
          )
            ? burgerMenuElement.nextElementSibling
            : null;
        if (!mobileMenuElement) {
          teleport.log(
            `${burgerMenuElement} has no corresponding element with class 'teleport-menu-mobile' as the next sibling.`
          );
          return;
        }

        const closeMenuElement = mobileMenuElement.querySelector(
          '*[class*="teleport-menu-close"]'
        );
        if (!closeMenuElement) {
          teleport.log(
            `${mobileMenuElement} has no child element with class 'teleport-menu-close'`
          );
          return;
        }

        burgerMenuElement.addEventListener("click", () => {
          mobileMenuElement.classList.add("teleport-show");
        });
        closeMenuElement.addEventListener("click", () => {
          mobileMenuElement.classList.remove("teleport-show");
        });
      });
    };
  }

  class Accordion {
    init = () => {
      this.getAccordionElementsAndAddEvents("type");
      this.getAccordionElementsAndAddEvents("role");
    };

    getAccordionElementsAndAddEvents = (dataAttr) => {
      const allAccordions = teleport.getAllElementsByDataAttribute(
        "role",
        "Accordion"
      );

      allAccordions.forEach((accordion) => {
        const accordionHeader = teleport.getElByDataAttribute(
          dataAttr,
          "AccordionHeader",
          accordion
        );
        const accordionContent = teleport.getElByDataAttribute(
          dataAttr,
          "AccordionContent",
          accordion
        );

        if (!accordionHeader || !accordionContent) {
          return;
        }

        accordionHeader.addEventListener("click", () => {
          accordionContent.style.maxHeight
            ? (accordionContent.style.maxHeight = "")
            : (accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`);
        });
      });
    };
  }

  const listenForUrlChanges = () => {
    let url = location.href;
    document.body.addEventListener(
      "click",
      () => {
        requestAnimationFrame(() => {
          if (url !== location.href) {
            new Menu().init();
            new Accordion().init();
            url = location.href;
          }
        });
      },
      true
    );
  };

  const teleport = {
    debug: false,
    log: (msg, obj) => {
      if (teleport.debug) {
        console.log("teleport: " + msg, obj || "");
      }
    },
    error: (msg, object) => {
      console.error("teleport-error: " + msg, object);
    },
    getElByClass: (className) => {
      const el = document.querySelector(`*[class*="${className}"]`);
      if (!el) {
        teleport.log(`did not find element with "${className}" class`);
      }
      return el;
    },
    getElByDataAttribute: (attribute, value, scope = document) => {
      const el = scope.querySelector(`[data-${attribute}="${value}"]`);
      if (!el) {
        teleport.log(`did not find element with "data-${attribute}=${value}"`);
      }
      return el;
    },
    getAllElByClass: (className) => {
      const elements = document.querySelectorAll(`*[class*="${className}"]`);
      if (!elements) {
        teleport.log(`did not find any elements with "${className}" class`);
      }
      return elements;
    },
    getAllElementsByDataAttribute: (attribute, value, scope = document) => {
      const elements = scope.querySelectorAll(`[data-${attribute}="${value}"]`);
      if (!elements) {
        teleport.log(
          `did not find any elements with "data-${attribute}=${value}"`
        );
      }
      return elements;
    },
    Menu,
    Accordion,
  };

  const appDiv = document.getElementById("app");

  if (appDiv) {
    const observer = new MutationObserver(() => {
      new Menu().init();
      new Accordion().init();
      observer.disconnect();
      delete observer;
    });
    observer.observe(document.getElementById("app"), { childList: true });
  } else {
    new Menu().init();
    new Accordion().init();
  }

  listenForUrlChanges();
})();