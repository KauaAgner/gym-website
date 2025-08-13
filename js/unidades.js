let swiperInstance = null;
let videoLightbox = null;

function carregarUnidade(unidade) {
    const unidadePath = `images/unidade${unidade}/unidade.json`;
    const unidadeContainer = document.getElementById('unidade');

    unidadeContainer.classList.add('hidden');

    setTimeout(() => {
        fetch(unidadePath)
            .then(response => response.json())
            .then(data => {
                document.getElementById('nome-unidade').innerText = data.nome;

                const galleryContainer = document.getElementById('lightgallery');
                galleryContainer.innerHTML = '';

                data.galeria.forEach(image => {
                    const slide = document.createElement('div');
                    slide.className = 'swiper-slide';
                    slide.innerHTML = `
                        <a href="images/unidade${unidade}/${image}">
                            <img src="images/unidade${unidade}/${image}" alt="Foto">
                        </a>`;
                    galleryContainer.appendChild(slide);
                });

                document.getElementById('endereco').innerText = data.endereco;
                document.getElementById('telefone').innerText = data.telefone;
                document.getElementById('whatsapp').innerText = data.whatsapp;
                document.getElementById('horarios-seg-a-seg').innerText = `Seg a Sex: ${data.horarios.seg_a_sex}`;
                document.getElementById('horarios-sab-dom').innerText = `Sáb: ${data.horarios.sab} | Dom: ${data.horarios.dom}`;
                document.getElementById('mapa-img').src = `images/${data.mapa}`;
                document.getElementById('link-mapa').href = data.link_mapa;
                document.getElementById('btn-link-mapa').href = data.link_mapa;

                lightGallery(galleryContainer, {
                    selector: 'a',
                    plugins: [lgZoom],
                    speed: 500
                });

                if (swiperInstance) swiperInstance.destroy(true, true);
                swiperInstance = new Swiper('.unidade-gallery-swiper', {
                    slidesPerView: 'auto',
                    spaceBetween: 12,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }
                });

                document.querySelectorAll('.deg-12 button').forEach(btn => btn.classList.remove('active'));
                const btnAtual = document.getElementById(`btn-unidade-${unidade}`);
                if (btnAtual) btnAtual.classList.add('active');

                if (videoLightbox) {
                    videoLightbox.destroy();
                }

                if (data.video) {
                    videoLightbox = GLightbox({
                        elements: [
                            {
                                href: `videos/unidade${unidade}/${data.video}`,
                                type: 'video',
                                source: 'local',
                                autoplay: true,
                            }
                        ]
                    });

                    const openVideoBtn = document.getElementById('open-video');
                    if (openVideoBtn) {
                        openVideoBtn.onclick = () => videoLightbox.open();
                        openVideoBtn.style.display = 'inline-block';
                    }
                } else {
                    const openVideoBtn = document.getElementById('open-video');
                    if (openVideoBtn) {
                        openVideoBtn.onclick = null;
                        openVideoBtn.style.display = 'none';
                    }
                }

                unidadeContainer.classList.remove('hidden');
            })
            .catch(err => {
                console.error('Erro ao carregar dados da unidade:', err);
                document.getElementById('nome-unidade').innerText = 'Erro ao carregar unidade';
                unidadeContainer.classList.remove('hidden');
            });
    }, 180);
}

document.addEventListener("DOMContentLoaded", function () {
    carregarUnidade(1);
});
