document.addEventListener('readystatechange', function () {
    if (document.readyState === 'interactive') {
        initPalette();
    }
});

window.addEventListener('resize', function () {
    
});

var t79P = {

    colorList: {
        "Yellow": { "Type": "Primary", "colorValues": { "r": 254, "g": 254, "b": 51 }, "quantity": 0},
        "Orange": { "Type": "Secondary", "colorValues": { "r": 255, "g": 128, "b": 1 }, "quantity": 0},
        "Red": { "Type": "Primary", "colorValues": { "r": 254, "g": 38, "b": 19 }, "quantity": 0},
        "Purple": { "Type": "Secondary", "colorValues": { "r": 128, "g": 0, "b": 128 }, "quantity": 0},
        "Blue": { "Type": "Primary", "colorValues": { "r": 2, "g": 71, "b": 254 }, "quantity": 0},
        "Green": { "Type": "Secondary", "colorValues": { "r": 3, "g": 169, "b": 52 }, "quantity": 0},
    }

}

function initPalette() {
    getElements();
    setupInputControlers();
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

    t79P.paletteColorRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    t79P.paletteColorRect.classList.add('palette-color-rect');
    t79P.paletteColorRect.setAttributeNS(null, 'width', '' + paletteWidth);
    t79P.paletteColorRect.setAttributeNS(null, 'height', '' + paletteWidth);
    t79P.paletteColorRect.style.fill = '#ffffff';
    svgPalette.appendChild(t79P.paletteColorRect);

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

function setupInputControlers() {

    for (colorKey in t79P.colorList) {

        const colorContainer = document.createElement('div');
        t79P.controlerInputView.appendChild(colorContainer);

        colorContainer.setAttribute('data-color', colorKey);
        colorContainer.addEventListener('click', addColor);


        let color = 'rgb(';
        color += t79P.colorList[colorKey]['colorValues']['r'];
        color += ',';
        color += t79P.colorList[colorKey]['colorValues']['g'];
        color += ',';
        color += t79P.colorList[colorKey]['colorValues']['b'];
        color += ')';


        colorContainer.style.width = '10%';
        colorContainer.style.height = '8em';
        colorContainer.style.backgroundColor = color;


    }

}

function addColor(e) {
    color = e.target.getAttribute('data-color');


    t79P.colorList[color]['quantity'] += 1;

    console.log(color + ' ' + t79P.colorList[color]['quantity']);

    t79P.paletteColorRect.style.fill = calculateColor();

}

function calculateColor() {

    let quantity = 0;

    let valueRed = 0;
    let valueGreen = 0;
    let valueBlue = 0;

    for (colorKey in t79P.colorList) {

        quantity += t79P.colorList[colorKey]['quantity'];

        valueRed += t79P.colorList[colorKey]['colorValues']['r'] * t79P.colorList[colorKey]['quantity'];
        valueGreen += t79P.colorList[colorKey]['colorValues']['g'] * t79P.colorList[colorKey]['quantity'];
        valueBlue += t79P.colorList[colorKey]['colorValues']['b'] * t79P.colorList[colorKey]['quantity'];

        console.log(colorKey + ' ' + t79P.colorList[colorKey]['quantity'] + ' ' + quantity + ' ' + valueRed + ' ' + valueGreen + ' ' + valueBlue )

    }

    valueRed = valueRed / quantity;
    valueGreen = valueGreen / quantity;
    valueBlue = valueBlue / quantity;

    return 'rgb(' + valueRed + ',' + valueGreen + ',' + valueBlue + ')';
}

function getElements() {
    t79P.paletteOutputView = document.getElementById('output-palette-view');
    t79P.controlerInputView = document.getElementById('controler-view');
}