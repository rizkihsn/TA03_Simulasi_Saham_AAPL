# TA-03: Data-Driven Monte Carlo Simulation — Saham AAPL

## 📌 Deskripsi
Simulasi Monte Carlo berbasis data historis untuk memprediksi pergerakan harga saham Apple (AAPL) dan menghitung probabilitas penurunan harga lebih dari 10% dalam 30 hari ke depan.

## 📊 Hasil Utama
- **Probabilitas turun >10% dalam 30 hari: 8.98%** (Risiko RENDAH)
- Harga awal: $209.65
- Rata-rata harga akhir simulasi: $216.68
- Jumlah simulasi: 5.000 skenario
- Distribusi: Normal (μ = 0.001068, σ = 0.018171)

## 📁 Struktur File
```
├── templates/
│   └── index.html                       # Web Dashboard
├── static/
│   ├── style.css                        # Stylesheet dashboard (Digital Cover aesthetic)
│   └── script.js                        # Logic, Chart.js & simulasi interaktif
├── hasil_simulasi/                      # Folder output hasil run notebook
│   ├── analisis_risiko_notebook.png    # Grafik analisis risiko (VaR)
│   ├── histogram_return_notebook.png   # Histogram fitting distribusi return
│   ├── jalur_monte_carlo_notebook.png  # Grafik 100 jalur simulasi Monte Carlo
│   └── hasil_simulasi_monte_carlo.csv  # Output data 5.000 skenario simulasi
├── AAPL_stock_data.csv                  # Dataset Kaggle (Historical Stock Price)
├── TA03_ModSim_Simulasi_Saham_AAPL.ipynb # Jupyter Notebook (kode & visualisasi lengkap)
├── data_aapl_final.csv                  # Data bersih hasil cleaning
├── vercel.json                          # Konfigurasi routing deploy Vercel
└── README.md
```

## 🚀 Deployment
Aplikasi web di-deploy ke Vercel: https://ta03-simulasi-saham-aapl.vercel.app/ 

## 🛠️ Teknologi
- **Python**: pandas, numpy, matplotlib
- **Web**: HTML, CSS, JavaScript, Chart.js
- **Deploy**: Vercel (static site)
