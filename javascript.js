// Seleciona o cursor personalizado que é usado no site
const site_wide_cursor = document.querySelector('.custom-cursor.site-wide');

// Quando o mouse entra na página, o cursor é exibido
document.addEventListener('mouseenter', () => {
    site_wide_cursor.style.display = 'block';
});

// Quando o mouse sai da página, o cursor é ocultado
document.addEventListener('mouseleave', () => {
    site_wide_cursor.style.display = 'none';
});

// O evento 'mousemove' atualiza a posição do cursor personalizado
document.addEventListener('mousemove', TrackCursor);

// Quando o botão do mouse é pressionado, adiciona a classe 'active' ao cursor
document.addEventListener('mousedown', () => site_wide_cursor.classList.add('active'));

// Quando o botão do mouse é liberado, remove a classe 'active' do cursor
document.addEventListener('mouseup', () => site_wide_cursor.classList.remove('active'));

// Função que rastreia o movimento do cursor na página
function TrackCursor(evt) {
    const w = site_wide_cursor.clientWidth;  // Largura do cursor
    const h = site_wide_cursor.clientHeight; // Altura do cursor

    // Atualiza a posição do cursor para seguir o mouse
    site_wide_cursor.style.transform = 
        `translate(${evt.clientX - w / 2}px, ${evt.clientY - h / 2}px)`;
}

// Seleciona todas as caixas que possuem a classe 'box' dentro de um elemento com a classe 'boxes'
const boxes = document.querySelectorAll('.boxes .box');

// Itera sobre cada caixa para adicionar eventos de interação com o cursor
for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    const cursor = box.querySelector('.custom-cursor'); // Cursor específico para a caixa

    // Quando o mouse entra em uma caixa, o cursor principal (site_wide_cursor) é ocultado
    box.addEventListener('mouseenter', () => {
        site_wide_cursor.style.display = 'none';
    });

    // Quando o mouse sai da caixa, o cursor principal é mostrado novamente
    box.addEventListener('mouseleave', () => {
        site_wide_cursor.style.display = 'block';
    });

    // Atualiza a posição do cursor específico da caixa
    document.addEventListener('mousemove', TrackBoxCursor.bind(box));

    // Adiciona a classe 'active' ao cursor específico quando o mouse é pressionado
    document.addEventListener('mousedown', () => cursor.classList.add('active'));

    // Remove a classe 'active' quando o mouse é liberado
    document.addEventListener('mouseup', () => cursor.classList.remove('active'));
}

// Função que rastreia o movimento do cursor dentro de uma caixa específica
function TrackBoxCursor(evt) {
    const box = this;  // Referência à caixa atual
    const cursor = box.querySelector('.custom-cursor'); // Cursor específico da caixa

    const boxRect = box.getBoundingClientRect(); // Obtém a posição da caixa

    // Calcula a posição do mouse dentro da caixa e move o cursor específico para essa posição
    const x = evt.clientX - boxRect.left;
    const y = evt.clientY - boxRect.top;

    cursor.style.transform = `translate(${x}px, ${y}px)`;
}
