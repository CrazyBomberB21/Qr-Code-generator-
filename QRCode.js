let qrcode;

window.onload = function() {
    qrcode = new QRCode(document.querySelector("#qrcode"));
    qrcode.makeCode("Why did you scan me?");
};

function generateQr() {
    const inputValue = document.querySelector(".input").value.trim();

    if (inputValue === "") {
        alert("Input field is empty");
        return;
    }

    document.getElementById("qrcode").innerHTML = "";

 
    qrcode = new QRCode(document.getElementById("qrcode"), {
        text: inputValue,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
    });

    document.getElementById('downloadBtn').disabled = false;
}

function downloadQrCode() {
    const canvas = document.getElementById('qrcode').querySelector('canvas');
    if (!canvas) {
        alert('No QR code available to download');
        return;
    }

    const imgData = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = imgData;
    link.click();
}
