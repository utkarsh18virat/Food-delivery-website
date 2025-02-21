document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert(`You clicked on ${button.textContent}`);
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    let items = document.querySelectorAll(".carousel-item");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    let currentIndex = Math.floor(items.length / 2); 

    const updateCarousel = () => {
        items.forEach((item, index) => {
            item.classList.remove("active");
            item.style.opacity = "0.5"; 
            item.style.transform = "scale(0.9)";

            if (index === currentIndex) {
                item.classList.add("active");
                item.style.opacity = "1";
                item.style.transform = "scale(1.2)";
            }
        });

       
        const offset = -((currentIndex - 1) * 220);
        carousel.style.transform = `translateX(${offset}px)`;
    };

    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length; 
        updateCarousel();
    });

    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    updateCarousel();
});

document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("strip-video");
    const playIcon = document.getElementById("play-icon");

    function togglePlayPause() {
        if (video.paused) {
            video.play();
            playIcon.style.display = "none"; 
        } else {
            video.pause();
            playIcon.style.display = "block"; 
        }
    }

    
    video.addEventListener("click", togglePlayPause);

    
    playIcon.addEventListener("click", (event) => {
        event.stopPropagation(); 
        togglePlayPause();
    });

    
    video.addEventListener("pause", () => {
        playIcon.style.display = "block";
    });

    
    video.addEventListener("play", () => {
        playIcon.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.querySelector(".cart-icon");
    const modal = document.getElementById("cart-modal");
    const backToMenu = document.querySelector(".back-to-menu");

    
    cartIcon.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    
    backToMenu.addEventListener("click", () => {
        modal.style.display = "none"; 
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".nav-btn");
    const requestDishBtn = document.querySelector(".request-dish-btn"); 
    const requestDishModal = document.getElementById("request-dish-modal");
    const cancelBtn = document.querySelector(".cancel-btn");
    const submitRequestBtn = document.querySelector(".submit-request"); 

   
    buttons.forEach(button => {
        if (!button.classList.contains("request-dish-btn")) { 
            button.addEventListener("click", (event) => {
                event.stopPropagation(); 
                alert(`You clicked on ${button.textContent}`);
            });
        }
    });

   
    requestDishBtn.addEventListener("click", (event) => {
        event.preventDefault(); 
        event.stopPropagation(); 
        requestDishModal.style.display = "flex";
    });

   
    cancelBtn.addEventListener("click", () => {
        requestDishModal.style.display = "none";
    });

    submitRequestBtn.addEventListener("click", (event) => {
        event.preventDefault(); 
        requestDishModal.style.display = "none";
        alert("Your request has been submitted!");
   
    window.addEventListener("click", (event) => {
        if (event.target === requestDishModal) {
            requestDishModal.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const cartIcon = document.querySelector(".cart-icon");
    const cartModal = document.getElementById("cart-modal");
    const requestDishBtn = document.querySelector(".request-dish-btn");
    const requestDishModal = document.getElementById("request-dish-modal");
    const cancelBtns = document.querySelectorAll(".cancel-btn");
    const submitRequestBtn = document.querySelector(".submit-request");

    
    const disableScroll = () => {
        body.style.overflow = "hidden";
    };

    
    const enableScroll = () => {
        body.style.overflow = "auto";
    };

   
    cartIcon.addEventListener("click", () => {
        cartModal.style.display = "flex";
        disableScroll();
    });

    
    requestDishBtn.addEventListener("click", (event) => {
        event.preventDefault();
        requestDishModal.style.display = "flex";
        disableScroll();
    });

    
    cancelBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            cartModal.style.display = "none";
            requestDishModal.style.display = "none";
            enableScroll();
        });
    });

    submitRequestBtn.addEventListener("click", () => {
        requestDishModal.style.display = "none";
        enableScroll();
    });

    
    window.addEventListener("click", (event) => {
        if (event.target === cartModal || event.target === requestDishModal) {
            cartModal.style.display = "none";
            requestDishModal.style.display = "none";
            enableScroll();
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const cartControls = document.querySelectorAll(".cart-controls");

    cartControls.forEach(control => {
        const minusBtn = control.querySelector(".minus-btn");
        const plusBtn = control.querySelector(".plus-btn");
        const countSpan = control.querySelector(".cart-count");

        let count = 0;

        // Increment count
        plusBtn.addEventListener("click", () => {
            count++;
            countSpan.textContent = count;
        });

        // Decrement count (minimum 0)
        minusBtn.addEventListener("click", () => {
            if (count > 0) {
                count--;
                countSpan.textContent = count;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const cartIcon = document.querySelector(".cart-icon");
    const cartModal = document.getElementById("cart-modal");
    const backToMenu = document.querySelector(".back-to-menu"); 
    const requestDishBtn = document.querySelector(".request-dish-btn");
    const requestDishModal = document.getElementById("request-dish-modal");
    const cancelBtns = document.querySelectorAll(".cancel-btn");
    const submitRequestBtn = document.querySelector(".submit-request");

   
    const disableScroll = () => {
        body.style.overflow = "hidden";
    };

    
    const enableScroll = () => {
        body.style.overflow = "auto";
    };

    
    cartIcon.addEventListener("click", () => {
        cartModal.style.display = "flex";
        disableScroll();
    });

    
    requestDishBtn.addEventListener("click", (event) => {
        event.preventDefault();
        requestDishModal.style.display = "flex";
        disableScroll();
    });

    
    cancelBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            cartModal.style.display = "none";
            requestDishModal.style.display = "none";
            enableScroll(); 
        });
    });

    submitRequestBtn.addEventListener("click", () => {
        requestDishModal.style.display = "none";
        enableScroll(); 
    });

    
    window.addEventListener("click", (event) => {
        if (event.target === cartModal || event.target === requestDishModal) {
            cartModal.style.display = "none";
            requestDishModal.style.display = "none";
            enableScroll(); 
        }
    });

    
    backToMenu.addEventListener("click", () => {
        cartModal.style.display = "none";
        enableScroll();
    });
});
});
