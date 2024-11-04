const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const buttons = document.querySelectorAll(".openModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalText = document.getElementById("modalText");

const modalData = {
    "Indian Ocean Tsunami (2004)": {
        hunger: {
            image: "Assets/tsunami_hunger.png",
           text: `
                <ul>
                    <li>Severely impacted countries: Myanmar, Malaysia, Indonesia, and Thailand.</li>
                    <li>Global Hunger Index data lacks clarity for 2004-2005, but studies show significant food scarcity.</li>
                    <li>Tsunami caused agricultural losses and economic hardship, leading to food insecurity.</li>
                    <li>Government reforms and aid by 2005-2006 improved food security, reducing hunger levels below 2000 levels.</li>
                </ul>
            `
        },
        poverty: {
            image: "Assets/tsunami_poverty.png",
            text: `
                <ul>
                    <li>Countries heavily impacted: Myanmar, Malaysia, Indonesia, and Thailand.</li>
                    <li>Poverty levels rose in 2004-2005 due to habitat destruction, livelihood losses, agricultural devastation, and financial impacts from the tsunami.</li>
                    <li>Post-tsunami recovery efforts helped reduce poverty, but economic resilience remained limited.</li>
                    <li>Government-led reconstruction was not deeply sustainable, with continued stagnation in agriculture and manufacturing.</li>
                </ul>
            `
        },
        literacy: {
            image: "Assets/tsunami_literacy.png",
            text: `
                <ul>
                    <li>Literacy rates in Myanmar, Malaysia, Indonesia, and Thailand remained largely stable post-tsunami.</li>
                    <li>Immediate access to education was disrupted as schools were damaged or destroyed.</li>
                    <li>Rapid response from governments and aid organizations restored literacy programs by 2006.</li>
                    <li>Targeted reforms and infrastructure rebuilding supported educational recovery.</li>
                </ul>
            `
        },
        employment: {
            image: "Assets/tsunami_unemployment.png",
            text: `
                <ul>
                    <li>Unemployment rates in Myanmar, Malaysia, Indonesia, and Thailand remained relatively stable during 2004-2005.</li>
                    <li>Informal recovery and community resilience helped absorb employment shocks.</li>
                    <li>Government aid and relief efforts played a role in stabilizing employment levels.</li>
                    <li>Underlying economic hardships were more visible in poverty and productivity impacts, especially in agriculture and fisheries.</li>
                </ul>
            `
        }
    },
    "Southeast Asian Haze Crisis (1997-1998)": {
        hunger: {
            image: "Assets/haze_hunger.png",
            text: `
                <ul>
                    <li>Food security was significantly affected across Southeast Asia, though Global Hunger Index (GHI) data was not available until after 2000.</li>
                    <li>Haze disrupted crop yields and reduced sunlight, leading to local food shortages and higher prices, making food less accessible to low-income households.</li>
                    <li>Healthcare costs from haze-related illnesses further limited families' ability to buy food.</li>
                    <li>The crisis underscored the need for sustainable land practices and protections to prevent future impacts on food security.</li>
                </ul>
            `
        },
        poverty: {
            image: "Assets/haze_poverty.png",
            text: `
                <ul>
                    <li>The haze crisis from forest fires in Indonesia severely impacted Brunei, Indonesia, Malaysia, the Philippines, Singapore, and Thailand.</li>
                    <li>Widespread air pollution disrupted agriculture, tourism, and transportation, affecting income and increasing poverty rates in countries like Indonesia.</li>
                    <li>Respiratory illnesses surged, raising healthcare costs and putting financial strain on vulnerable households.</li>
                    <li>Temporary government relief was provided, but the crisis highlighted the need for stronger environmental regulations.</li>
                    <li>Long-term impacts revealed gaps in governance, challenging poverty alleviation and economic resilience in the region.</li>               
                </ul>
            `
        },
        literacy: {
            image: "Assets/haze_literacy.png",
            text: `
                <ul>
                    <li>Despite the crisis, literacy rates continued to improve steadily across Brunei, Singapore, the Philippines, Indonesia, Malaysia, and Thailand.</li>
                    <li>Educational policies and investments in literacy programs allowed rates to rise uninterrupted, even during economic disruptions.</li>
                    <li>By 2021, most countries had literacy rates close to 100%, supporting socio-economic resilience in the region.</li>
                </ul>
            `
        },
        employment: {
            image: "Assets/haze_unemployment.png",
            text: `
                <ul>
                    <li>Unemployment trends varied during 1997-98, influenced by both the haze crisis and the Asian Financial Crisis.</li>
                    <li>The Philippines saw a slight rise in unemployment, while Vietnam remained stable, being less exposed to global markets.</li>
                    <li>Cambodia and Laos, with informal labor reliance, saw minimal impact on unemployment rates.</li>
                    <li>The crisis emphasized the need for diversified, resilient employment structures to withstand economic challenges in Southeast Asia.</li>
                </ul>
            `
        }
    },
    "Typhoon Ketsana (2009)": {
        hunger: {
            image: "Assets/typhoon_hunger.png",
            text: `
                <ul>
                    <li>GHI data shows slowed hunger reduction progress in 2009-10 due to Typhoon Ketsana.</li>
                    <li>The typhoon disrupted agriculture, affecting food supplies and access, particularly in Vietnam and the Philippines.</li>
                    <li>Cambodia and Laos saw slower food security improvements, reflecting regional food distribution challenges.</li>
                    <li>Reinforced the need for sustainable agriculture and disaster preparedness for future food security.</li>
                </ul>
            `
        },
        poverty: {
            image: "Assets/typhoon_poverty.png",
            text: `
               <ul>
                    <li>Majorly affected countries: Philippines, Vietnam, Laos, Cambodia.</li>
                    <li>Vietnam saw a significant spike in poverty, with rural communities heavily impacted due to agriculture and infrastructure loss.</li>
                    <li>The Philippines, Laos, and Cambodia faced economic hardship, especially in rural areas, but poverty spikes were less marked.</li>
                    <li>Highlighted the need for resilient infrastructure and sustainable practices to protect poverty alleviation progress.</li>
                </ul>
            `
        },
        literacy: {
            image: "Assets/typhoon_literacy.png",
            text:`
                <ul>
                    <li>The Philippines and Vietnam maintained high literacy rates, approaching 100% by the 2000s.</li>
                    <li>Laos and Cambodia, though starting lower, made steady literacy gains, with Cambodia showing growth after 2010.</li>
                    <li>Typhoon Ketsana did not hinder literacy trends, as educational progress continued in these countries.</li>
                    <li>Demonstrated resilience in literacy growth despite economic and environmental disruptions.</li>
                </ul>
            `
        },
        employment: {
            image: "Assets/typhoon_unemployment.png",
            text: `
                <ul>
                    <li>The Philippines experienced a slight rise in unemployment around 2009-10 due to economic impacts from Ketsana.</li>
                    <li>Vietnam’s unemployment remained stable, reflecting resilience in a diversified economy.</li>
                    <li>Laos and Cambodia maintained low unemployment rates due to reliance on informal labor.</li>
                    <li>Showed the importance of economic diversification and preparedness for labor stability amid crises.</li>
                </ul>
            `
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
        modalText.innerHTML = disasterData.text; // Use innerHTML to render lists
        
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
