document.getElementById('btn-tri-calc').addEventListener('click', function () {
    const baseValue = document.getElementById('triangle-base').value;
    const base = parseFloat(baseValue);
    const heightValue = document.getElementById('triangle-height').value;
    const height = parseFloat(heightValue);
    const triangleArea = 0.5 * base * height;
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = triangleArea;
})

