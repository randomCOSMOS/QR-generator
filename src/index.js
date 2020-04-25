var qrcode = new QRCode("qrcode");

function makeCode() {
    var elText = document.getElementById("text");

    qrcode.makeCode(elText.value);
}

document.getElementById('text').addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        makeCode();
    }
})

makeCode();