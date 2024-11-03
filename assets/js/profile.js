function updateProfilePicture(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profileImg').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }}

    document.getElementById('tombolSimpan').onclick = function() {
        // Ambil nilai dari input
        const nama = document.getElementById('namaInput').value;
        // Tampilkan nama di elemen dengan id 'namaTersimpan'
        document.getElementById('namaTersimpan').innerText = nama;
        // Kosongkan input
        document.getElementById('namaInput').value = '';
    };
    