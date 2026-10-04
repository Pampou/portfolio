const portfolioFilters = document.querySelectorAll(".portfolio-filter");

const overlay = document.querySelector("#overlay");

const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");

function openDetails(card) {
  overlay.classList.add("active");
  document.body.classList.add("modal-open");

  const portfolioDetails = document.querySelector(".portfolio-details");

  portfolioDetails.innerHTML = `
      <div class="portfolio-details-gallery">
        ${portfolioImagesData[card.dataset.name]?.map(image => `
          <div class="portfolio-details-thumbnail" data-image="${image}">
            <img src="${image}"/>
          </div>
        `).join("")}
      </div>
      <div class="portfolio-details-content">
        <h3 id="detail-title">${card.dataset.title}</h3>
        <div class="portfolio-details-description">
          <p data-i18n="${card.dataset.description}"></p>
          </div>
          ${card.dataset.steam || card.dataset.itchio
      ? `<div class="portfolio-details-downloads">
                <h3 data-i18n="download">Download</h3>
                <div class="portfolio-details-downloads-content">`
      : ""
    }
          ${card.dataset.steam?.trim()
      ? `<a class="portfolio-details-download" href="${card.dataset.steam}" target="_blank" rel="noopener noreferrer" data-i18n="downloadSteam"></a>`
      : ""
    }
          ${card.dataset.itchio?.trim()
      ? `<a class="portfolio-details-download" href="${card.dataset.itchio}" target="_blank" rel="noopener noreferrer" data-i18n="downloadItchio"></a>`
      : ""
    }
          ${card.dataset.steam || card.dataset.itchio
      ? "</div></div>"
      : ""
    }
      </div>
  `;

  const thumbnails = portfolioDetails.querySelectorAll(".portfolio-details-thumbnail");
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      fullscreenImage(thumbnail.dataset.image);
    });
  });

  const savedLang = localStorage.getItem('selectedLang') || 'fr';
  updateLanguage(savedLang);
}

function fullscreenImage(image) {
  lightbox.classList.add("active");
  lightboxImage.src = image;
}

function closeDetails() {
  overlay.classList.remove("active");
  document.body.classList.remove("modal-open");
}

function closeLightbox(){
  lightbox.classList.remove("active");
}

function initializePortfolio() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      openDetails(card);
    });
  });

  portfolioFilters.forEach((portfolioFilter) => {
    portfolioFilter.addEventListener("click", () => {
      const selectedFilter = portfolioFilter.getAttribute("data-filter");
      filterCards(selectedFilter);

      portfolioFilters.forEach(l => l.classList.remove('active'));
      portfolioFilter.classList.add('active');
    });
  });
}

function filterCards(selectedFilter) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const cardCategory = card.dataset.category;
    const shouldDisplay = selectedFilter === "all" || cardCategory === selectedFilter;

    card.classList.toggle("hidden", !shouldDisplay);
  });
}

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    closeDetails();
  }
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

lightboxImage.addEventListener("click", (event) => {
  if (event.target === lightboxImage) {
    closeLightbox();
  }
});

function renderPortfolio() {
  const portfolio = document.querySelector(".portfolio");
  portfolio.innerHTML = portfolioData.map(data => `
        <div class="card"
            data-name="${data.name}"
            data-title="${data.title}"
            data-category="${data.category}"
            data-image="${data.thumbnail}"
            data-description="${data.description}"
            data-itchio="${data.itchio}"
            data-steam="${data.steam}"
            >
            <img src="${data.thumbnail}"/>
            <div class="card-content">
                <h3>${data.title}</h3>
            </div>
        </div>
    `).join("");
}