function drawOmLogo() {
    var canvas = document.getElementById('logoCanvas');
    var ctx = canvas.getContext('2d');

    // Set the font properties
    ctx.fillStyle = '#FF9900'; // Color for the Om symbol
    ctx.font = 'bold 40px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Draw the Om symbol
    ctx.fillText('ॐ', canvas.width / 2, canvas.height / 2); // Draw Om symbol in the center
}

// Call the drawOmLogo function when the page is loaded
document.addEventListener('DOMContentLoaded', drawOmLogo);