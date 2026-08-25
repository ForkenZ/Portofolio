// Script sederhana untuk interaksi

const links = document.querySelectorAll('.link a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        console.log('Link diklik: ' + this.href);
    });
});

// Alert saat halaman selesai dimuat
window.addEventListener('load', function() {
    console.log('Landing page sudah dimuat');
});
