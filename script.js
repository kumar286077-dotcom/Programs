/* =========================================================
   VYAPAARX - FINAL JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    const faqQuestions =
        document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const currentItem =
                question.closest(".faq-item");

            if (!currentItem) return;

            const isOpen =
                currentItem.classList.contains("active");

            /* Close all FAQ items */

            document.querySelectorAll(".faq-item")
                .forEach(function (item) {

                    item.classList.remove("active");

                    const button =
                        item.querySelector(".faq-question");

                    if (button) {

                        button.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                });


            /* Open selected FAQ */

            if (!isOpen) {

                currentItem.classList.add("active");

                question.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        });

    });



    /* =====================================================
       CONTACT FORM → WHATSAPP
    ===================================================== */

    const contactForm =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById("name")
                    .value
                    .trim();

                const phone =
                    document.getElementById("phone")
                    .value
                    .trim();

                const message =
                    document.getElementById("message")
                    .value
                    .trim();


                /* Validation */

                if (!name || !phone || !message) {

                    if (formMessage) {

                        formMessage.textContent =
                            "Please fill all required fields.";

                    }

                    return;
                }


                /* =========================================
                   TESTING WHATSAPP NUMBER
                   9149177658
                ========================================= */

                const businessWhatsApp =
                    "919149177658";


                const whatsappText =
                    "Hello VyapaarX,\n\n" +
                    "Name: " + name + "\n" +
                    "Phone: " + phone + "\n" +
                    "Message: " + message;


                const whatsappURL =
                    "https://wa.me/" +
                    businessWhatsApp +
                    "?text=" +
                    encodeURIComponent(
                        whatsappText
                    );


                if (formMessage) {

                    formMessage.textContent =
                        "Opening WhatsApp...";

                }


                /* Open WhatsApp */

                window.open(
                    whatsappURL,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );

    }



    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");


    if (menuToggle && mainNav) {


        menuToggle.addEventListener(
            "click",
            function () {

                const isOpen =
                    mainNav.classList.toggle(
                        "active"
                    );


                menuToggle.classList.toggle(
                    "active",
                    isOpen
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen
                        ? "true"
                        : "false"
                );


                document.body.classList.toggle(
                    "menu-open",
                    isOpen
                );

            }
        );


        /* Close menu when link is clicked */

        mainNav
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        mainNav.classList.remove(
                            "active"
                        );

                        menuToggle.classList.remove(
                            "active"
                        );

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        document.body.classList.remove(
                            "menu-open"
                        );

                    }
                );

            });

    }



    /* =====================================================
       SCROLL TO TOP BUTTON
    ===================================================== */

    const scrollTopButton =
        document.getElementById("scrollTop");


    if (scrollTopButton) {


        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 500) {

                    scrollTopButton.classList.add(
                        "visible"
                    );

                } else {

                    scrollTopButton.classList.remove(
                        "visible"
                    );

                }

            }
        );


        scrollTopButton.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }



    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear =
        document.getElementById(
            "currentYear"
        );


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }



    /* =====================================================
       INTERNAL SMOOTH SCROLL
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(function (link) {


            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });

});