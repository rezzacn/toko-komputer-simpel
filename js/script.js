document.querySelectorAll('.btn-detail').forEach(function (item) {
  item.addEventListener('click', function (e) {
    let parent = e.target.parentNode.parentNode;
    let gambar = parent.querySelector('.card-img-top').src;
    let harga = parent.querySelector('.harga').innerHTML;
    let judul = parent.querySelector('.card-title').innerHTML;
    let deskirpsi = parent.querySelector('.deskirpsi') ? parent.querySelector('.deskirpsi').innerHTML : 'Tidak ada informasi yang tersedia';
    let btnModal = document.querySelector('.btnModal');
    btnModal.click();

    document.querySelector('.modalTitle').innerHTML = judul;
    let image = document.createElement('img');
    image.src = gambar;
    document.querySelector('.modalImage ').innerHTML = '';
    document.querySelector('.modalImage ').appendChild(image);
    document.querySelector('.modalDeskripsi').innerHTML = deskirpsi;
    document.querySelector('.modalHarga').innerHTML = harga;

    const nohp = '6289676035509';

    // Tambahkan URL gambar dan deskripsi ke dalam pesan
    let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=Halo Bang, saya ingin beli produk ini: %0A${gambar} %0A${deskirpsi}`;

    document.querySelector('.btnBeli').href = pesan;
  });
});
