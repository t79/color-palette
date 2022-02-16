document.addEventListener('readystatechange', function () {
    if (document.readyState === 'interactive') {
        initPalette();
    }
});

window.addEventListener('resize', function () {
    
});

var t79P = {

}

function initPalette() {
    getElements();
    setupPalette();
}

function setupPalette() {
    const paletteContainer = document.createElement('div');
    paletteContainer.classList.add('palette-container');
    t79P.paletteOutputView.appendChild(paletteContainer);



    const paletteWidth = paletteContainer.clientWidth;

    console.log(paletteWidth);

    const svgPalette = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    svgPalette.setAttribute('width', '' + paletteWidth);
    svgPalette.setAttribute('height', '' + paletteWidth);
    paletteContainer.appendChild(svgPalette);

    const paletteColorRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    paletteColorRect.classList.add('palette-color-rect');
    paletteColorRect.setAttributeNS(null, 'width', '' + paletteWidth);
    paletteColorRect.setAttributeNS(null, 'height', '' + paletteWidth);
    paletteColorRect.style.fill = '#ffffff';
    svgPalette.appendChild(paletteColorRect);

    const corner = document.createElement('div');
    corner.style.position = 'absolute';
    corner.style.top = '0';
    corner.style.left = '0';
    corner.style.width = (paletteWidth/30) + 'px';
    corner.style.height = (paletteWidth/30) + 'px';
    corner.style.borderTop = '0.15em solid black';
    corner.style.borderLeft = '0.15em solid black';
    paletteContainer.appendChild(corner);

    const corner2 = document.createElement('div');
    corner2.style.position = 'absolute';
    corner2.style.top = '0';
    corner2.style.right = '0';
    corner2.style.width = (paletteWidth/30) + 'px';
    corner2.style.height = (paletteWidth/30) + 'px';
    corner2.style.borderTop = '0.15em solid black';
    corner2.style.borderRight = '0.15em solid black';
    paletteContainer.appendChild(corner2);

    const corner3 = document.createElement('div');
    corner3.style.position = 'absolute';
    corner3.style.bottom = '0';
    corner3.style.left = '0';
    corner3.style.width = (paletteWidth/30) + 'px';
    corner3.style.height = (paletteWidth/30) + 'px';
    corner3.style.borderBottom = '0.15em solid black';
    corner3.style.borderLeft = '0.15em solid black';
    paletteContainer.appendChild(corner3);

    const corner4 = document.createElement('div');
    corner4.style.position = 'absolute';
    corner4.style.bottom = '0';
    corner4.style.right = '0';
    corner4.style.width = (paletteWidth/30) + 'px';
    corner4.style.height = (paletteWidth/30) + 'px';
    corner4.style.borderBottom = '0.15em solid black';
    corner4.style.borderRight = '0.15em solid black';
    paletteContainer.appendChild(corner4);

}

function getElements() {
    t79P.paletteOutputView = document.getElementById('output-palette-view');
}