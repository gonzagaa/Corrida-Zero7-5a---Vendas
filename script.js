
AOS.init(
  {
      duration: 1200,
  }
);

const larguraDaTela = window.innerWidth
  
if (larguraDaTela < 800) {
    var swiper3 = new Swiper(".mySwiper3", {
        grabCursor: true,
        effect: "creative",
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
        creativeEffect: {
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
} else {
    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}

if (larguraDaTela < 800) {
  var swiper4 = new Swiper(".mySwiper4", {
      grabCursor: true,
      autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
} else {
  var swiper4 = new Swiper(".mySwiper4", {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
}

const capaJhone = document.getElementById("depoimentoJhone");
  const modalJhone = document.getElementById("modalJhone");
  const videoContainer = document.getElementById("video-containerJhone");
  const closeBtn = document.querySelector(".close-depoimento");

  capaJhone.addEventListener("click", () => {
    // Exibe o modal
    modalJhone.style.display = "flex";

    // Insere o iframe com autoplay
    videoContainer.innerHTML = `
      <iframe src="https://www.youtube.com/embed/ShcucfOriyI?autoplay=1&si=zB2kYOP0X8xTSmZY"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    `;
  });

  closeBtn.addEventListener("click", () => {
    // Esconde o modal e remove o iframe
    modalJhone.style.display = "none";
    videoContainer.innerHTML = "";
  });

  // Fecha o modal clicando fora do conteúdo
  window.addEventListener("click", (e) => {
    if (e.target === modalJhone) {
      modalJhone.style.display = "none";
      videoContainer.innerHTML = "";
    }
  });

  const modalGeral = document.getElementById("modalDepoimentos");
const videoContainerGeral = document.getElementById("video-container-geral");
const closeBtnGeral = document.querySelector(".close-depoimento-geral");

// Seleciona apenas os depoimentos genéricos
document.querySelectorAll(".depoimento").forEach((depoimento) => {
  depoimento.addEventListener("click", () => {
    const videoUrl = depoimento.getAttribute("data-video");
    if (!videoUrl) return;

    modalGeral.style.display = "flex";
    videoContainerGeral.innerHTML = `
      <iframe src="${videoUrl}&autoplay=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    `;
  });
});

// Fechar modal ao clicar no botão X
closeBtnGeral.addEventListener("click", () => {
  modalGeral.style.display = "none";
  videoContainerGeral.innerHTML = "";
});

// Fechar modal ao clicar fora do conteúdo
window.addEventListener("click", (e) => {
  if (e.target === modalGeral) {
    modalGeral.style.display = "none";
    videoContainerGeral.innerHTML = "";
  }
});

const vslDiv = document.getElementById("vsl");

vslDiv.addEventListener("click", () => {
  vslDiv.innerHTML = `
    <iframe width="100%" height="100%" 
      src="https://www.youtube.com/embed/acnq8_PvW_k?autoplay=1&si=GACYvwVrbYLsIfzE"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  `;
});


