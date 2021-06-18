const grid = document.querySelector('.grid')
const images = document.querySelectorAll('input[type="image"]')
const eraser = images[1]
const displayBorder = images[0]
let inputColor = document.querySelector('input[name="color"]')
let inputNumber = document.querySelector('input[name="totalBlocks"]')
let colorfulMode = document.querySelector('input[type="checkbox"]')

function generateBlocks(blockNumber) {
    grid.style.gridTemplateColumns = `repeat(${blockNumber}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${blockNumber}, 1fr)`;
    for (let i = 0; i < blockNumber*blockNumber ; i++ ) {
        let gridDiv = document.createElement("div");
        grid.insertAdjacentElement('beforeend', gridDiv)
    }

    let gridPixels = grid.querySelectorAll("div")
    gridPixels.forEach(pixel => pixel.addEventListener("mouseover", paintGrid))
}

function removeBlocks() {
    grid.innerHTML = '';
}

function paintGrid() {
    if (colorfulMode.checked === true) { this.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16); }
    else { this.style.backgroundColor = inputColor.value; }
}

eraser.addEventListener("click", function() {
    removeBlocks()
    generateBlocks(Number(inputNumber.value))
})

displayBorder.addEventListener("click", () => grid.style.gap == '1px' ? grid.style.gap = 0 : grid.style.gap = '1px')
inputColor.addEventListener("change", paintGrid)
inputNumber.addEventListener("change", function () {
    removeBlocks()
    generateBlocks(Number(inputNumber.value))
})

generateBlocks(Number(inputNumber.value))