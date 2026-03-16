tsParticles.load({
    id: "tsparticles",
    options: {
        background: {
            color: "#000",
            repeat: "no-repeat",
            size: "40%",
            position: "60% 50%"
        },
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "repulse"
                },
                onHover: {
                    enable: true,
                    mode: "bubble"
                }
            },
            modes: {
                bubble: {
                    distance: 200,
                    duration: 2,
                    opacity: 0,
                    size: 0,
                    speed: 3
                },
                repulse: {
                    distance: 400,
                    duration: 0.4
                }
            }
        },
        particles: {
            color: { value: "#fcae07ff" },
            move: {
                direction: "none",
                enable: true,
                outModes: "out",
                random: true,
                speed: 2
            },
            number: {
                density: {
                    enable: true
                },
                value: 600
            },
            opacity: {
                animation: {
                    enable: true,
                    speed: 5
                },
                value: { min: 0.3, max: 0.6 }
            },
            shape: {
                type: "circle"
            },
            size: {
                value: 1
            }
        }
    }
});

// toggel

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("mobile-menu");
    const nav = document.querySelector(".nav");
    const navItems = document.querySelectorAll(".nav-item a"); // كل اللينكات جوا الليستات

    // لما تضغط على زرار الموبايل مينيو
    toggle.addEventListener("click", function () {
        nav.classList.toggle("mobile-nav");
        this.classList.toggle("is-active");
    });

    // لما تدوس على أي لينك من القايمة
    navItems.forEach(item => {
        item.addEventListener("click", function () {
            nav.classList.remove("mobile-nav");
            toggle.classList.remove("is-active");
        });
    });
});


// slider skills
$('.slider').each(function () {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;

    function move(newIndex) {
        var animateLeft, slideLeft;

        advance();

        if ($group.is(':animated') || currentIndex === newIndex) {
            return;
        }

        bulletArray[currentIndex].removeClass('active');
        bulletArray[newIndex].addClass('active');

        if (newIndex > currentIndex) {
            slideLeft = '100%';
            animateLeft = '-100%';
        } else {
            slideLeft = '-100%';
            animateLeft = '100%';
        }

        $slides.eq(newIndex).css({
            display: 'block',
            left: slideLeft
        });
        $group.animate({
            left: animateLeft
        }, function () {
            $slides.eq(currentIndex).css({
                display: 'none'
            });
            $slides.eq(newIndex).css({
                left: 0
            });
            $group.css({
                left: 0
            });
            currentIndex = newIndex;
        });
    }

    function advance() {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            if (currentIndex < ($slides.length - 1)) {
                move(currentIndex + 1);
            } else {
                move(0);
            }
        }, 2000);
    }

    $('.next_btn').on('click', function () {
        if (currentIndex < ($slides.length - 1)) {
            move(currentIndex + 1);
        } else {
            move(0);
        }
    });

    $('.previous_btn').on('click', function () {
        if (currentIndex !== 0) {
            move(currentIndex - 1);
        } else {
            move(3);
        }
    });

    $.each($slides, function (index) {
        var $button = $('<a class="slide_btn">&bull;</a>');

        if (index === currentIndex) {
            $button.addClass('active');
        }
        $button.on('click', function () {
            move(index);
        }).appendTo('.slide_buttons');
        bulletArray.push($button);
    });

    advance();
});

// projects
// document.addEventListener("DOMContentLoaded", () => {
//     const buttons = document.querySelectorAll(".buttons button");
//     const projects = document.querySelectorAll(".project");
//     projects.forEach(p => p.style.display = "block");

//     buttons.forEach(btn => {
//         btn.addEventListener("click", () => {
//             buttons.forEach(b => b.classList.remove("active"));
//             btn.classList.add("active");

//             const filter = btn.dataset.filter;

//             projects.forEach(project => {
//                 if (filter === "all" || project.classList.contains(filter)) {
//                     project.style.display = "block";

//                 } else {
//                     project.style.display = "none";
//                 }
//             });
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".buttons button");
    const projects = document.querySelectorAll(".project");
    // const msgReact = document.getElementById("msgReact");

    // msgReact.style.display = "none";

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;

            projects.forEach(project => {
                if (filter === "all" || project.classList.contains(filter)) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
                AOS.init({ once: true });
            });

            // if (filter === "react") {
            //     msgReact.style.display = "block";
            // } else {
            //     msgReact.style.display = "none";
            // }
        });
    });
});







// contactanimation
document.addEventListener("DOMContentLoaded", () => {
    let animation;
    animation = lottie.loadAnimation({
        container: document.getElementById('contactAnimation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/baa61397-657a-42fe-ba1f-bec05d3068c6/OiF7xqC0oq.json'
    });
})

// loader
window.addEventListener("load", function () {
  const loader = document.getElementById("page-loader");
  loader.style.opacity = "0";
    loader.style.display = "none";
    AOS.init({ once: true });

});



function sendToWhatsApp(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }
  
  const phoneNumber = '201128638676';
  const text = `*New Message from Portfolio*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
  
  // فتح الواتساب في تاب جديد
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
  window.open(whatsappUrl, '_blank');
  
  // مسح الحقول بعد الإرسال (اختياري)
  document.getElementById('contactForm').reset();
};