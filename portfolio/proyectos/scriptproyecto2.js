//EJERCICIO 2: GALERIA DE IMAGENES//
// Cargar imagenes en la galería
        const totalImagenes = 9;
        const galeria = document.querySelector('.galeria');

        for (let i = 1; i <= totalImagenes; i++) {
            const div = document.createElement('div');
            const img = document.createElement('img');
            img.src = `./img/img${i}.jpeg`; // Cambiar por la ruta de las imágenes
            img.alt = `Imagen ${i}`;
            div.appendChild(img);
            galeria.appendChild(div);
        }

        // Lógica del lightbox
        const lightbox = document.querySelector('.lightbox');
        const lightboxImg = document.querySelector('.lightbox-img');

        galeria.addEventListener('click', function (e) {
            if (e.target.tagName === 'IMG') {
                lightboxImg.src = e.target.src;
                lightbox.classList.add('active');
            }
        });

        // Cerrar lightbox al hacer clic en cualquier parte
        lightbox.addEventListener('click', function () {
            lightbox.classList.remove('active');
            lightboxImg.src = '';
        });

        // Obtener todas las imágenes de la galería
        const imagenes = Array.from(document.querySelectorAll('.galeria img'));

        // Mostrar imagen en lightbox por índice
        function mostrarImagen(idx) {
            currentIndex = (idx + imagenes.length) % imagenes.length;
            lightboxImg.src = imagenes[currentIndex].src;
        }

        // Abrir lightbox y guardar índice actual
        galeria.addEventListener('click', function (e) {
            if (e.target.tagName === 'IMG') {
                currentIndex = imagenes.indexOf(e.target);
                mostrarImagen(currentIndex);
                lightbox.classList.add('active');
            }
        });

        // Navegación botones
        const prevBtn = document.querySelector('.lightbox-btn.prev');
        const nextBtn = document.querySelector('.lightbox-btn.next');

        prevBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            mostrarImagen(currentIndex - 1);
        });

        nextBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            mostrarImagen(currentIndex + 1);
        });

        // Evitar cerrar modal al hacer clic en imagen o botones
        prevBtn.addEventListener('click', function (e) {
            e.stopPropagation();
        });
        nextBtn.addEventListener('click', function (e) {
            e.stopPropagation();
        });