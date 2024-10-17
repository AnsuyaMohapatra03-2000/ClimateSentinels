// Modal references
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const buttons = document.querySelectorAll(".openModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalText = document.getElementById("modalText");

const modalData = {
    "Indian Ocean Tsunami (2004)": {
        hunger: {
            image: "Images/image1.jpg",
            text: "Hunger impact in Indian Ocean Tsunami: Overview of how the disaster worsened hunger."
        },
        poverty: {
            image: "Images/image1.jpg",
            text: "Poverty impact in Indian Ocean Tsunami: Effects on poverty and economic disparities."
        },
        literacy: {
            image: "Images/image1.jpg",
            text: "Literacy impact in Indian Ocean Tsunami: Educational challenges caused by the disaster."
        },
        employment: {
            image: "Images/image1.jpg",
            text: "Employment impact in Indian Ocean Tsunami: How jobs were affected."
        }
    },
    "Southeast Asian Haze Crisis (1997-1998)": {
        hunger: {
            image: "Images/image1.jpg",
            text: "Hunger impact in Southeast Asian Haze Crisis: Overview of the crisis's effects on hunger."
        },
        poverty: {
            image: "Images/image1.jpg",
            text: "Poverty impact in Southeast Asian Haze Crisis: Widespread poverty issues triggered by haze."
        },
        literacy: {
            image: "Images/image1.jpg",
            text: "Literacy impact in Southeast Asian Haze Crisis: Challenges in maintaining education levels."
        },
        employment: {
            image: "Images/image1.jpg",
            text: "Employment impact in Southeast Asian Haze Crisis: Job losses and economic damage."
        }
    },
    "Mekong River Flooding": {
        hunger: {
            image: "Images/image1.jpg",
            text: "Hunger impact in Mekong River Flooding: Food supply disruption due to flooding."
        },
        poverty: {
            image: "Images/image1.jpg",
            text: "Poverty impact in Mekong River Flooding: Economic setbacks due to floods."
        },
        literacy: {
            image: "Images/image1.jpg",
            text: "Literacy impact in Mekong River Flooding: Impact on education systems."
        },
        employment: {
            image: "Images/image1.jpg",
            text: "Employment impact in Mekong River Flooding: How local jobs were affected."
        }
    },
    "Typhoon Ketsana (2009)": {
        hunger: {
            image: "Images/image1.jpg",
            text: "Hunger impact in Typhoon Ketsana: Food shortages due to storm devastation."
        },
        poverty: {
            image: "Images/image1.jpg",
            text: "Poverty impact in Typhoon Ketsana: Economic struggles caused by the typhoon."
        },
        literacy: {
            image: "Images/image1.jpg",
            text: "Literacy impact in Typhoon Ketsana: Disruption to schooling and education."
        },
        employment: {
            image: "Images/image1.jpg",
            text: "Employment impact in Typhoon Ketsana: Impact on local economies and jobs."
        }
    }
};

// Event listeners for modal buttons
buttons.forEach(button => {
    button.addEventListener("click", function () {
        const category = this.getAttribute("data-category");
        const disasterTitle = this.closest('.disaster-content').querySelector('.disaster-title').textContent;
        const disasterData = modalData[disasterTitle][category];
        
        // Show modal and populate with appropriate data
        modal.style.display = "flex";
        modalTitle.textContent = `Impact of ${category.charAt(0).toUpperCase() + category.slice(1)} in ${disasterTitle}`;
        modalImage.src = disasterData.image;
        modalText.textContent = disasterData.text;
        
        // Reset slide index to 0 when opening modal
        slideIndex = 0;
        showSlides(slideIndex);
    });
});

// Close modal on span click
span.onclick = function () {
    modal.style.display = "none";
};

// Close modal if clicking outside of the modal content
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Slideshow functionality
const arrows = document.querySelectorAll(".arrow");
let slideIndex = 0;

function showSlides(n) {
    let slides = document.querySelectorAll(".mySlides");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => (slide.style.display = "none"));
    slides[slideIndex].style.display = "block";
}

// Arrow navigation for slideshow
arrows.forEach(arrow => {
    arrow.addEventListener("click", function () {
        if (this.classList.contains("left")) {
            slideIndex--;
        } else {
            slideIndex++;
        }
        showSlides(slideIndex);
    });
});
