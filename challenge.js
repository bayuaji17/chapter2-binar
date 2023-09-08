// NOMOR 1
console.log("=========================")
console.log("NOMOR 1 \n")
const kalimat1 = 'Andini sangat mencintai kamu selamanya'
const kalimat2 = 'gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu'

function changeWord(selectedText, changedText, text) {
    // Menggunakan metode replace untuk mengganti kata
    const newText = text.replace(selectedText, changedText);
    // mengembalikan nilai newText
    return newText;

}
console.log(changeWord('mencintai', 'membeci', kalimat1))
// Output yang diharapkan
// 'Andini sangat membenci kamu selamanya'
console.log(changeWord('bromo', 'semeru', kalimat2))
// 'Gunung sangat membenci kamu selamanya'

// NOMOR 2
console.log("=========================")
console.log("\nNOMOR 2 \n")
const checkTypeNumber = (givenNumber) => {
    if (givenNumber == undefined) {
        return "error: bro where is the parameter ?"
    } else if (typeof givenNumber != "number") {
        return "error: Invalid data type"
    } else if (givenNumber % 2 == 0) {
        return "genap"
    } else {
        return "ganjil"
    }
}

//Expected Result
console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber("3")) //Output yang keluar => "error : Invalid data type" 
console.log(checkTypeNumber({})) //Output yang keluar => "error : Invalid data type"
console.log(checkTypeNumber([])) //Output yang keluar => "error : Invalid data type"
console.log(checkTypeNumber()) //Output yang keluar => "error : bro where is the parameter ?"


// NOMOR 3
console.log("=========================")
console.log("\nNOMOR 3 \n")
// Buat Function
function getAngkaTerbesarKedua(bayu) {
    // Jika inputannya kosong/undefined maka error
    if (typeof (bayu) === "undefined") {
        return "Error : Karena undefined atau tidak ada inputan"
        // jika inputannya bukan array maka error 
    } else if (!Array.isArray(bayu)) {
        return "Error : Karena bukan array tetapi number"
    }
    // Sorting/ mengurutkan dari besar ke kecil
    // lalu mengambil nilai ke 2 yaitu index 1
    bayu.sort((a, b) => b - a)
    return bayu[1]
}
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8]
console.log(getAngkaTerbesarKedua(dataAngka))
console.log(getAngkaTerbesarKedua(2)) // BUKAN ARRAY
console.log(getAngkaTerbesarKedua()) // KOSONG 

// Nomor 4
console.log("=========================")
console.log("\nNOMOR 4 \n")
const dataPenjualanPakAldi = [
    {
        namaProduct: 'sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan: 760000,
        kategori: "Sepatu Sport",
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Black Brown High',
        hargaSatuan: 960000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 37,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Maroon High',
        hargaSatuan: 360000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
        hargaSatuan: 120000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 90,
    },
]
function hitungTotalPenjualan(dataPenjualan) {

    if (typeof dataPenjualan !== "object") {
        return "Error BRO"
    }

    let totalTerjualArr = dataPenjualan.map((value) => {
        return value.totalTerjual
    })

    let hasilTotalTerjual = totalTerjualArr.reduce((defaultValue, firstValue) => {
        return defaultValue + firstValue
    }, 0)

    return hasilTotalTerjual

}
// console.log(hitungTotalPenjualan(1))
console.log(hitungTotalPenjualan(dataPenjualanPakAldi))

console.log("=========================")
console.log("\nNOMOR 5 \n")
const dataPenjualanNovel = [
    {
        idProduct: 'BOOK002421',
        namaProduk: 'Pulang - Pergi',
        penulis: 'Tere Liye',
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idProduct: 'BOOK002351',
        namaProduk: 'Selamat Tinggal',
        penulis: 'Tere Liye',
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Garis Waktu',
        penulis: 'Fiersa Besari',
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Laskar Pelangi',
        penulis: 'Andrea Hirata',
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    },
];


function getInfoPenjualan(dataPenjualanBuku) {
    if (typeof dataPenjualanBuku !== "object") {
        return "Error BRO"
    }

    const formatCurrency = (jumlah) =>
        new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(jumlah);
    // totalKeuntungan
    let totalKeuntunganArr = dataPenjualanBuku.map((value) => {
        return (value.hargaJual - value.hargaBeli) * value.totalTerjual
    })

    let totalKeuntungan = totalKeuntunganArr.reduce((defaultValue, firstValue) => {
        return defaultValue + firstValue
    }, 0)

    // totalModal
    let modalUsaha = dataPenjualanBuku.map((value) => {
        return value.hargaBeli * (value.sisaStok + value.totalTerjual)
    })
    let totalModal = modalUsaha.reduce((defaultValue, firstValue) => {
        return defaultValue + firstValue
    }, 0)
    // persentaseKeuntungan
    let totalJual = dataPenjualanBuku.map((value) => {
        return value.hargaJual * value.totalTerjual
    })
    let totalPenjualanFinal = totalJual.reduce((defaultValue, firstValue) => {
        return defaultValue + firstValue
    })
    // Perubahan format persen
    let persentase = ((totalPenjualanFinal - totalModal) / totalModal) * 100
    const persentaseKeuntungan = persentase.toFixed(2) + "%"
    // produk Buku terlaris
    dataPenjualanBuku.sort((a, b) => {
        return b.totalTerjual - a.totalTerjual;
    });

    const bukuTerlaris = dataPenjualanBuku[0];

    const produkBukuTerlaris = bukuTerlaris.namaProduk;
    const penulisTerlaris = bukuTerlaris.penulis;

    return {
        totalKeuntungan: formatCurrency(totalKeuntungan),
        totalModal: formatCurrency(totalModal),
        persentaseKeuntungan,
        produkBukuTerlaris,
        penulisTerlaris
    }

}

console.log(getInfoPenjualan(dataPenjualanNovel))