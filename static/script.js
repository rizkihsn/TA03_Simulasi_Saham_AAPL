// ============================================================
// DATA & PARAMETER EMPIRIS SIMULASI MONTE CARLO SAHAM AAPL
// ============================================================
const CONFIG = {
  hargaAwal: 209.65,
  jumlahSimulasi: 5000,
  jumlahHari: 30,
  meanReturn: 0.001068,
  stdReturn: 0.018171,
  periode: "2015-01-02 s/d 2024-06-20",
  jumlahDataReturn: 2381,
};

const HASIL = {
  hargaRataRata: 216.68,
  hargaMedian: 215.72,
  hargaMin: 147.94,
  hargaMax: 316.20,
  persentil5: 183.08,
  persentil95: 253.68,
  probabilitasNaik: 61.32,
  batasRisiko: 209.65 * 0.9, // $188.685
  jumlahRugiEkstrem: 449,
  probabilitasRugi: 8.98,
};

// Data histogram distribusi harga akhir simulasi
const HIST_HARGA = {
  labels: [149.34,152.15,154.95,157.76,160.56,163.37,166.17,168.97,171.78,174.58,177.39,180.19,183.0,185.8,188.6,191.41,194.21,197.02,199.82,202.63,205.43,208.24,211.04,213.84,216.65,219.45,222.26,225.06,227.87,230.67,233.47,236.28,239.08,241.89,244.69,247.5,250.3,253.1,255.91,258.71,261.52,264.32,267.13,269.93,272.74,275.54,278.34,281.15,283.95,286.76,289.56,292.37,295.17,297.97,300.78,303.58,306.39,309.19,312.0,314.8],
  counts: [1,0,1,1,4,6,14,17,26,29,45,61,81,87,130,155,178,195,197,189,254,263,252,255,283,285,219,225,223,190,162,158,128,131,100,96,72,59,50,27,27,24,25,22,16,9,9,4,4,2,2,3,2,0,1,0,0,0,0,1],
};

// Data histogram distribusi return harian
const HIST_RETURN = {
  labels: [-0.126163,-0.121193,-0.116224,-0.111255,-0.106286,-0.101317,-0.096348,-0.091379,-0.08641,-0.081441,-0.076472,-0.071502,-0.066533,-0.061564,-0.056595,-0.051626,-0.046657,-0.041688,-0.036719,-0.03175,-0.02678,-0.021811,-0.016842,-0.011873,-0.006904,-0.001935,0.003034,0.008003,0.012972,0.017942,0.022911,0.02788,0.032849,0.037818,0.042787,0.047756,0.052725,0.057694,0.062664,0.067633,0.072602,0.077571,0.08254,0.087509,0.092478,0.097447,0.102416,0.107386,0.112355,0.117324],
  counts: [1,0,0,0,0,1,1,0,0,2,0,0,4,3,5,5,12,13,22,36,59,73,108,148,297,381,334,301,197,138,85,53,33,25,13,7,5,4,3,2,3,1,0,2,1,0,2,0,0,1],
};

// Data harga historis 60 hari terakhir
const HARGA_HISTORIS = [
  {date:"2024-03-26",price:169.71},{date:"2024-03-27",price:173.31},{date:"2024-03-28",price:171.48},
  {date:"2024-04-01",price:170.03},{date:"2024-04-02",price:168.84},{date:"2024-04-03",price:169.65},
  {date:"2024-04-04",price:168.82},{date:"2024-04-05",price:169.58},{date:"2024-04-08",price:168.45},
  {date:"2024-04-09",price:169.67},{date:"2024-04-10",price:167.78},{date:"2024-04-11",price:175.04},
  {date:"2024-04-12",price:176.55},{date:"2024-04-15",price:172.69},{date:"2024-04-16",price:169.38},
  {date:"2024-04-17",price:168.0},{date:"2024-04-18",price:167.04},{date:"2024-04-19",price:165.0},
  {date:"2024-04-22",price:165.84},{date:"2024-04-23",price:166.9},{date:"2024-04-24",price:169.02},
  {date:"2024-04-25",price:169.89},{date:"2024-04-26",price:169.3},{date:"2024-04-29",price:173.5},
  {date:"2024-04-30",price:170.33},{date:"2024-05-01",price:169.3},{date:"2024-05-02",price:173.03},
  {date:"2024-05-03",price:183.38},{date:"2024-05-06",price:181.71},{date:"2024-05-07",price:182.4},
  {date:"2024-05-08",price:182.74},{date:"2024-05-09",price:184.57},{date:"2024-05-10",price:183.05},
  {date:"2024-05-13",price:186.28},{date:"2024-05-14",price:187.43},{date:"2024-05-15",price:189.72},
  {date:"2024-05-16",price:189.84},{date:"2024-05-17",price:189.87},{date:"2024-05-20",price:191.04},
  {date:"2024-05-21",price:192.35},{date:"2024-05-22",price:190.9},{date:"2024-05-23",price:186.88},
  {date:"2024-05-24",price:189.98},{date:"2024-05-28",price:189.99},{date:"2024-05-29",price:190.29},
  {date:"2024-05-30",price:191.29},{date:"2024-05-31",price:192.25},{date:"2024-06-03",price:194.03},
  {date:"2024-06-04",price:194.35},{date:"2024-06-05",price:195.87},{date:"2024-06-06",price:194.48},
  {date:"2024-06-07",price:196.89},{date:"2024-06-10",price:193.12},{date:"2024-06-11",price:207.15},
  {date:"2024-06-12",price:213.07},{date:"2024-06-13",price:214.24},{date:"2024-06-14",price:212.49},
  {date:"2024-06-17",price:216.67},{date:"2024-06-18",price:214.29},{date:"2024-06-20",price:209.65},
];

// ============================================================
// GLOBAL CHART.JS CONFIG (DARK LUXURY THEME)
// ============================================================
Chart.defaults.color = '#80808e';
Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.05)';
Chart.defaults.font.family = "'Space Mono', monospace";
Chart.defaults.font.size = 11;

let mcChartInstance = null;

// ============================================================
// 1. CHART: Distribusi Harga Akhir Simulasi (Risk Analysis)
// ============================================================
function createRiskChart() {
  const ctx = document.getElementById('riskChart').getContext('2d');
  const batas = HASIL.batasRisiko;

  const bgColors = HIST_HARGA.labels.map(v =>
    v < batas ? 'rgba(255, 51, 68, 0.85)' : 'rgba(255, 255, 255, 0.28)'
  );
  const borderColors = HIST_HARGA.labels.map(v =>
    v < batas ? '#ff3344' : 'rgba(255, 255, 255, 0.65)'
  );

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: HIST_HARGA.labels.map(v => '$' + v.toFixed(0)),
      datasets: [{
        label: 'Frekuensi',
        data: HIST_HARGA.counts,
        backgroundColor: bgColors,
        borderColor: borderColors,
        borderWidth: 1,
        borderRadius: 2,
        barPercentage: 1.0,
        categoryPercentage: 1.0,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#0a0a0e',
          titleColor: '#ffffff',
          bodyColor: '#d1d5db',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          borderWidth: 1,
          padding: 12,
          cornerRadius: 6,
          callbacks: {
            title: (items) => 'Harga Akhir: ' + items[0].label,
            label: (item) => 'Frekuensi: ' + item.raw + ' skenario',
          }
        },
        annotation: {
          annotations: {
            batasLine: {
              type: 'line',
              xMin: HIST_HARGA.labels.findIndex(v => v >= batas) - 0.5,
              xMax: HIST_HARGA.labels.findIndex(v => v >= batas) - 0.5,
              borderColor: '#ff3344',
              borderWidth: 2,
              borderDash: [6, 4],
              label: {
                display: true,
                content: 'Batas -10% ($' + batas.toFixed(0) + ')',
                position: 'start',
                backgroundColor: 'rgba(255, 51, 68, 0.9)',
                color: '#fff',
                font: { size: 10, weight: '700' },
                padding: { x: 6, y: 3 },
                borderRadius: 4,
              }
            },
            hargaAwalLine: {
              type: 'line',
              xMin: HIST_HARGA.labels.findIndex(v => v >= CONFIG.hargaAwal) - 0.5,
              xMax: HIST_HARGA.labels.findIndex(v => v >= CONFIG.hargaAwal) - 0.5,
              borderColor: '#10b981',
              borderWidth: 2,
              borderDash: [4, 4],
              label: {
                display: true,
                content: 'P₀ = $' + CONFIG.hargaAwal.toFixed(0),
                position: 'end',
                backgroundColor: 'rgba(16, 185, 129, 0.9)',
                color: '#fff',
                font: { size: 10, weight: '700' },
                padding: { x: 6, y: 3 },
                borderRadius: 4,
              }
            }
          }
        }
      },
      scales: {
        x: {
          ticks: { maxTicksLimit: 10, font: { size: 10 } },
          grid: { display: false },
          title: { display: true, text: 'Harga Akhir (USD)', color: '#666', font: { size: 11 } }
        },
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(255, 255, 255, 0.04)' },
          title: { display: true, text: 'Frekuensi Skenario', color: '#666', font: { size: 11 } }
        }
      }
    }
  });
}

// ============================================================
// 2. CHART: Distribusi Return Harian
// ============================================================
function createReturnChart() {
  const ctx = document.getElementById('returnChart').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: HIST_RETURN.labels.map(v => (v * 100).toFixed(1) + '%'),
      datasets: [{
        label: 'Frekuensi',
        data: HIST_RETURN.counts,
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
        borderColor: 'rgba(255, 255, 255, 0.7)',
        borderWidth: 1,
        borderRadius: 2,
        barPercentage: 1.0,
        categoryPercentage: 1.0,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#0a0a0e',
          titleColor: '#ffffff',
          bodyColor: '#d1d5db',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          borderWidth: 1,
          padding: 12,
          cornerRadius: 6,
          callbacks: {
            title: (items) => 'Return Harian: ' + items[0].label,
            label: (item) => 'Frekuensi: ' + item.raw + ' hari bursa',
          }
        },
        annotation: {
          annotations: {
            meanLine: {
              type: 'line',
              xMin: HIST_RETURN.labels.findIndex(v => v >= CONFIG.meanReturn) - 0.5,
              xMax: HIST_RETURN.labels.findIndex(v => v >= CONFIG.meanReturn) - 0.5,
              borderColor: '#06b6d4',
              borderWidth: 2,
              borderDash: [6, 3],
              label: {
                display: true,
                content: 'Mean (μ) = +' + (CONFIG.meanReturn * 100).toFixed(3) + '%',
                position: 'start',
                backgroundColor: 'rgba(6, 182, 212, 0.9)',
                color: '#000',
                font: { size: 10, weight: '700' },
                padding: { x: 6, y: 3 },
                borderRadius: 4,
              }
            }
          }
        }
      },
      scales: {
        x: {
          ticks: { maxTicksLimit: 9, font: { size: 10 } },
          grid: { display: false },
          title: { display: true, text: 'Return Harian (%)', color: '#666', font: { size: 11 } }
        },
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(255, 255, 255, 0.04)' },
          title: { display: true, text: 'Frekuensi Hari', color: '#666', font: { size: 11 } }
        }
      }
    }
  });
}

// ============================================================
// 3. CHART: Harga Historis 60 Hari Terakhir
// ============================================================
function createPriceChart() {
  const ctx = document.getElementById('priceChart').getContext('2d');
  const prices = HARGA_HISTORIS.map(d => d.price);
  const dates = HARGA_HISTORIS.map(d => d.date);

  const gradient = ctx.createLinearGradient(0, 0, 0, 320);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 0.18)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [{
        label: 'Harga AAPL',
        data: prices,
        borderColor: '#ffffff',
        backgroundColor: gradient,
        borderWidth: 2,
        fill: true,
        tension: 0.25,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#ffffff',
        pointHoverBorderColor: '#000000',
        pointHoverBorderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'index' },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#0a0a0e',
          titleColor: '#ffffff',
          bodyColor: '#34d399',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          borderWidth: 1,
          padding: 12,
          cornerRadius: 6,
          callbacks: {
            label: (item) => 'Close Price: $' + item.raw.toFixed(2) + ' USD',
          }
        }
      },
      scales: {
        x: {
          ticks: { maxTicksLimit: 8, font: { size: 10 } },
          grid: { display: false },
        },
        y: {
          grid: { color: 'rgba(255, 255, 255, 0.04)' },
          title: { display: true, text: 'USD ($)', color: '#666', font: { size: 11 } }
        }
      }
    }
  });
}

// ============================================================
// 4. MONTE CARLO LIVE SIMULATION (50 Stochastic Trajectories)
// ============================================================
function generateMonteCarloDatasets(numPaths = 50, numDays = 30) {
  const mu = CONFIG.meanReturn;
  const sigma = CONFIG.stdReturn;
  const p0 = CONFIG.hargaAwal;
  const threshold = HASIL.batasRisiko;

  // Box-Muller normal random generator
  function randn() {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  }

  const datasets = [];

  for (let s = 0; s < numPaths; s++) {
    const path = [p0];
    for (let d = 0; d < numDays; d++) {
      const ret = mu + sigma * randn();
      const nextPrice = path[path.length - 1] * Math.max(0.000001, (1 + ret));
      path.push(nextPrice);
    }

    const finalPrice = path[path.length - 1];
    const isRisk = finalPrice < threshold;

    // Stylized path styling: red for drop >10%, white/silver/cyan for positive
    let pathColor = isRisk 
      ? 'rgba(255, 51, 68, 0.45)' 
      : 'rgba(255, 255, 255, 0.22)';
    let pathWidth = isRisk ? 1.4 : 1.0;

    datasets.push({
      data: path,
      borderColor: pathColor,
      borderWidth: pathWidth,
      pointRadius: 0,
      tension: 0.18,
      fill: false,
    });
  }

  return datasets;
}

function createMonteCarloChart() {
  const canvas = document.getElementById('monteCarloChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const numDays = 30;
  const p0 = CONFIG.hargaAwal;

  const labels = Array.from({ length: numDays + 1 }, (_, i) => 'Day ' + i);
  const datasets = generateMonteCarloDatasets(50, numDays);

  if (mcChartInstance) {
    mcChartInstance.destroy();
  }

  mcChartInstance = new Chart(ctx, {
    type: 'line',
    data: { labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false },
      animation: {
        duration: 900,
        easing: 'easeOutQuart'
      },
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
        annotation: {
          annotations: {
            startLine: {
              type: 'line',
              yMin: p0,
              yMax: p0,
              borderColor: '#10b981',
              borderWidth: 2,
              borderDash: [6, 4],
              label: {
                display: true,
                content: 'Start Price ($' + p0.toFixed(2) + ')',
                position: 'end',
                backgroundColor: 'rgba(16, 185, 129, 0.9)',
                color: '#fff',
                font: { size: 10, weight: '700' },
                padding: { x: 6, y: 3 },
                borderRadius: 4,
              }
            },
            riskLine: {
              type: 'line',
              yMin: HASIL.batasRisiko,
              yMax: HASIL.batasRisiko,
              borderColor: '#ff3344',
              borderWidth: 2,
              borderDash: [6, 4],
              label: {
                display: true,
                content: 'Risk Barrier -10% ($' + HASIL.batasRisiko.toFixed(2) + ')',
                position: 'start',
                backgroundColor: 'rgba(255, 51, 68, 0.9)',
                color: '#fff',
                font: { size: 10, weight: '700' },
                padding: { x: 6, y: 3 },
                borderRadius: 4,
              }
            }
          }
        }
      },
      scales: {
        x: {
          ticks: { maxTicksLimit: 7, font: { size: 10 } },
          grid: { display: false },
        },
        y: {
          grid: { color: 'rgba(255, 255, 255, 0.04)' },
          title: { display: true, text: 'Simulation Price (USD)', color: '#666', font: { size: 11 } },
        }
      }
    }
  });
}

// ============================================================
// ANIMATE NUMBERS ON SCROLL (DIGITAL COVER COUNTER)
// ============================================================
function animateValue(el, start, end, duration, prefix, suffix, decimals) {
  let startTime = null;
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = start + (end - start) * eased;
    el.textContent = prefix + current.toFixed(decimals) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function initAnimations() {
  const observers = document.querySelectorAll('[data-animate]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const end = parseFloat(el.dataset.value);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const decimals = parseInt(el.dataset.decimals || '2');
        animateValue(el, 0, end, 1400, prefix, suffix, decimals);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.25 });

  observers.forEach(el => io.observe(el));
}

// ============================================================
// INTERACTIVE EVENT LISTENERS
// ============================================================
function setupInteractions() {
  // Re-Simulate Button
  const reSimBtn = document.getElementById('reSimulateBtn');
  if (reSimBtn) {
    reSimBtn.addEventListener('click', () => {
      reSimBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        reSimBtn.style.transform = 'none';
        createMonteCarloChart();
      }, 150);
    });
  }

  // Hero Run Simulation Circular Button
  const runSimBtn = document.getElementById('runSimBtn');
  if (runSimBtn) {
    runSimBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('simulationSection');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          createMonteCarloChart();
        }, 600);
      }
    });
  }
}

// ============================================================
// INITIALIZE
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  createRiskChart();
  createReturnChart();
  createPriceChart();
  createMonteCarloChart();
  initAnimations();
  setupInteractions();
});
