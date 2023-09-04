document.querySelectorAll('.btn-detail').forEach(function (item) {
  item.addEventListener('click', function (e) {
    // Mengambil referensi ke elemen orang tua dari tombol yang diklik
    let parent = e.target.parentNode.parentNode;

    // Mengambil informasi dari elemen-elemen di dalam elemen orang tua
    let gambar = parent.querySelector('.card-img-top').src;
    let harga = parent.querySelector('.harga').innerHTML;
    let judul = parent.querySelector('.card-title').innerHTML;
    let deskirpsi = parent.querySelector('.deskirpsi') ? parent.querySelector('.deskirpsi').innerHTML : 'Tidak ada informasi yang tersedia';

    // Mengambil referensi ke tombol modal dan memicu klik
    let btnModal = document.querySelector('.btnModal');
    btnModal.click();

    // Memasukkan informasi yang diambil ke dalam elemen modal
    document.querySelector('.modalTitle').innerHTML = judul;
    let image = document.createElement('img');
    image.src = gambar;
    document.querySelector('.modalImage').innerHTML = '';
    document.querySelector('.modalImage').appendChild(image);
    document.querySelector('.modalDeskripsi').innerHTML = deskirpsi;
    document.querySelector('.modalHarga').innerHTML = harga;

    // Mendapatkan waktu saat ini
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    // Fungsi untuk menentukan periode waktu
    function getWaktu() {
      if (currentHour >= 3 && currentHour < 9) {
        return 'pagi';
      } else if (currentHour >= 9 && currentHour < 14) {
        return 'siang';
      } else if (currentHour >= 14 && currentHour < 18) {
        return 'sore';
      } else {
        return 'malam';
      }
    }

    // Menampilkan pesan berdasarkan periode waktu
    const periodeWaktu = getWaktu();

    const nohp = '6289676035509';

    // Tambahkan URL gambar dan deskripsi ke dalam pesan
    let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=Selamat ${periodeWaktu} Kak 👋🏻👋🏻%0A
Saya ingin memesan Produk:%0A
Nama Produk: ${judul}%0A
Harga: ${harga}`;

    document.querySelector('.btnBeli').href = pesan;
  });
});

// Gallery start
const gallery = document.querySelector('section#gallery .container');
const jumbo = document.querySelector('section#gallery .container .jumbo');
const thumbs = document.querySelectorAll('section#gallery .container .thumb');
gallery.addEventListener('click', function (e) {
  if (e.target.className == 'thumb') {
    jumbo.src = e.target.src;

    jumbo.classList.add('fade');
    setTimeout(function () {
      jumbo.classList.remove('fade');
    }, 500);
    thumbs.forEach(function (thumb) {
      thumb.className = 'thumb';
    });
    e.target.classList.add('active');
  }
});
// Gallery end

// navbar scrole with active clas
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

  let currentSection = '';

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  navbarLinks.forEach(function (link) {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === currentSection) {
      link.classList.add('active');
    }
  });
});
