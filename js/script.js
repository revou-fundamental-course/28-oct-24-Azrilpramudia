// Fungsi Untuk Menghitung BMI
function calculateBMI() {
    // Mengambil Nilai Input Pada Formulir
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; // Konversi cm Ke meter
    var gender = document.querySelector('input[name="gender"]:checked');
    
    // Validasi Input
    if (isNaN(weight) || isNaN(height) || !gender) {
        alert('Tolong masukkan data yang valid.');
        return;
    }

    // Kalkulator BMI
    var bmi = weight / (height * height);
    var status = '';
    var description = '';

    // Tentukan status BMI berdasarkan hasil
    if (bmi < 18.5) {
        status = 'Berat Badan Kurang';
        description = 'Anda memiliki berat badan di bawah normal. Sebaiknya berkonsultasi dengan ahli gizi.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'Berat Badan Normal';
        description = 'Selamat! Anda memiliki berat badan yang sehat.';
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = 'Berat Badan Lebih';
        description = 'Anda memiliki berat badan berlebih. Disarankan untuk berolahraga dan menjaga pola makan.';
    } else {
        status = 'Obesitas';
        description = 'Anda mengalami obesitas. Harap konsultasi dengan ahli gizi atau dokter.';
    }

    // Menampilkan hasil
    document.getElementById('bmi-value').innerText = bmi.toFixed(1);
    document.getElementById('bmi-status').innerText = status;
    document.getElementById('bmi-description').innerText = description;

    // Menampilkan Bagian Hasil
    document.getElementById('bmi-result').style.display = 'block';
}

// Fungsi Untuk Reset Form & Menyembunyikan Hasil
function resetForm() {
    document.getElementById('bmi-result').style.display = 'none';
}