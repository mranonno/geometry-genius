// calculate triangle area:
document.getElementById('btn-triangle-calc').addEventListener('click', function calculateRectangleArea() {
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    const area = 0.5 * base * height;
    setInnerText('triangle-area', area);
})
// calculate rectangle area:
document.getElementById('btn-rectangle-calc').addEventListener('click', function calculateRectangleArea() {
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');
    const area = width * length;
    setInnerText('rectangle-area', area);
})
// calculate parallelogram area:
document.getElementById('btn-parallelogram-calc').addEventListener('click', function calculateRectangleArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = base * height;
    setInnerText('parallelogram-area', area);
})
// calculate rhombus area:
document.getElementById('btn-rhombus-calc').addEventListener('click', function calculateRectangleArea() {
    const diagonal1 = getInputValue('rhombus-diagonal1');
    const diagonal2 = getInputValue('rhombus-diagonal2');
    const area = 0.5 * diagonal1 * diagonal2;
    setInnerText('rhombus-area', area);
})
// calculate pentagon area:
document.getElementById('btn-pentagon-calc').addEventListener('click', function calculateRectangleArea() {
    const perimeter = getInputValue('pentagon-perimeter');
    const apothem = getInputValue('pentagon-apothem');
    const area = 0.5 * perimeter * apothem;
    setInnerText('pentagon-area', area);
})
// calculate ellipse area:
document.getElementById('btn-ellipse-calc').addEventListener('click', function calculateRectangleArea() {
    const axis1 = getInputValue('ellipse-axis1');
    const axis2 = getInputValue('ellipse-axis2');
    const area =(3.14159265359 * axis1 * axis2).toFixed(2);
    setInnerText('ellipse-area', area);
})






function getInputValue(inputText) {
    const inputValue = document.getElementById(inputText).value;
    const input = parseFloat(inputValue);
    return input;
}
function setInnerText(elementById, area) {
    const triangleAreaSpan = document.getElementById(elementById);
    triangleAreaSpan.innerText = area;
 }