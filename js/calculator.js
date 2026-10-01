// ---------- Appliance Table Management ----------
  let applianceRows = [];
  
  // Default initial appliances (refrigerator, lights, TV)
  const defaultAppliances = [
    { name: "Refrigerator", qty: 0, watt: 0, hours: 0 },
    { name: "Lights ", qty: 0, watt:0, hours:  0 },
    { name: "Air-conditioner", qty: 0, watt: 0, hours: 0 },
    { name: "TV", qty: 0, watt:0, hours: 0 },
    { name: "Fan", qty: 0, watt:0, hours: 0 }
  ];

  function renderTable() {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';
    applianceRows.forEach((item, idx) => {
      const tr = document.createElement('tr');
      // Appliance name input
      const tdName = document.createElement('td');
      const nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.value = item.name;
      nameInput.placeholder = "Appliance";
      nameInput.addEventListener('input', (e) => { applianceRows[idx].name = e.target.value; updateEstimation(); });
      tdName.appendChild(nameInput);
      
      // Quantity
      const tdQty = document.createElement('td');
      const qtyInput = document.createElement('input');
      qtyInput.type = 'number';
      qtyInput.min = 0;
      qtyInput.value = item.qty;
      qtyInput.addEventListener('input', (e) => {
        const raw = e.target.value.trim();
        const val = raw === '' ? 0 : parseInt(raw, 10);
        applianceRows[idx].qty = Number.isFinite(val) ? Math.max(0, val) : 0;
        updateEstimation();
      });
      tdQty.appendChild(qtyInput);
      
      // Wattage
      const tdWatt = document.createElement('td');
      const wattInput = document.createElement('input');
      wattInput.type = 'number';
      wattInput.min = 0;
      wattInput.step = 5;
      wattInput.value = item.watt;
      wattInput.addEventListener('input', (e) => { applianceRows[idx].watt = parseFloat(e.target.value) || 0; updateEstimation(); });
      tdWatt.appendChild(wattInput);
      
      // Hours
      const tdHours = document.createElement('td');
      const hoursInput = document.createElement('input');
      hoursInput.type = 'number';
      hoursInput.min = 0;
      hoursInput.step = 0.5;
      hoursInput.value = item.hours;
      hoursInput.addEventListener('input', (e) => { applianceRows[idx].hours = parseFloat(e.target.value) || 0; updateEstimation(); });
      tdHours.appendChild(hoursInput);
      
      // Action remove button
      const tdAction = document.createElement('td');
      const removeBtn = document.createElement('button');
      removeBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
      removeBtn.classList.add('btn-icon');
      removeBtn.style.background = '#b91c1c';
      removeBtn.addEventListener('click', () => {
        applianceRows.splice(idx, 1);
        renderTable();
        updateEstimation();
      });
      tdAction.appendChild(removeBtn);
      
      tr.appendChild(tdName);
      tr.appendChild(tdQty);
      tr.appendChild(tdWatt);
      tr.appendChild(tdHours);
      tr.appendChild(tdAction);
      tbody.appendChild(tr);
    });
  }

  // ---------- Shared solar sizing ----------
  function getSizingSettings() {
    return {
      sunshineHours: Math.min(10, Math.max(1, Number(document.getElementById('sunshineHoursInput')?.value) || 5)),
      backupDays: Math.max(0.5, Number(document.getElementById('backupDaysInput')?.value) || 1),
      pvMargin: Math.max(0, Number(document.getElementById('pvMarginInput')?.value) || 0.25),
      loadMargin: Math.max(0, Number(document.getElementById('loadMarginInput')?.value) || 0.25)
    };
  }

  function roundUpInverter(kw) {
    const ratings = [1, 1.5, 2, 3, 5, 6, 8, 10, 12, 15, 20, 25, 30];
    const required = Math.max(0, Number(kw) || 0);
    return ratings.find(rating => rating >= required) || Math.ceil(required / 5) * 5;
  }

  function roundUpPv(kwp) {
    return Math.ceil((Math.max(0, kwp) - 1e-9) * 10) / 10;
  }

  function sizePvArray(dailyKwh, sunshineHours, pvMargin, inverterKw) {
    // A 0.80 planning performance factor allows for ordinary system losses.
    const energyTargetKwp = (dailyKwh / Math.max(1, sunshineHours) / 0.80) * (1 + pvMargin);
    return roundUpPv(Math.max(energyTargetKwp, inverterKw));
  }

  function updateEnergyQuickSizing() {
    const amountInput = document.getElementById('energyConsumptionInput');
    const periodInput = document.getElementById('energyConsumptionPeriod');
    const amount = Number(amountInput?.value) || 0;
    const periodDays = Number(periodInput?.value) || 1;
    const values = {
      daily: document.getElementById('energyQuickDaily'),
      load: document.getElementById('energyQuickLoad'),
      inverter: document.getElementById('energyQuickInverter'),
      pv: document.getElementById('energyQuickPv'),
      battery: document.getElementById('energyQuickBattery')
    };
    if (!Object.values(values).every(Boolean)) return;
    if (amount <= 0) {
      Object.values(values).forEach(output => { output.textContent = '—'; });
      return;
    }

    const dailyKwh = amount / periodDays;
    const settings = getSizingSettings();
    const estimatedRunningKw = dailyKwh / 5;
    const inverterKw = roundUpInverter(estimatedRunningKw * (1 + settings.loadMargin));
    const pvKwp = sizePvArray(dailyKwh, settings.sunshineHours, settings.pvMargin, inverterKw);
    const batteryKwh = Math.ceil((dailyKwh * settings.backupDays / (0.80 * 0.92)) * 10) / 10;
    values.daily.textContent = `${dailyKwh.toFixed(1)} kWh/day`;
    values.load.textContent = `${estimatedRunningKw.toFixed(2)} kW (estimated)`;
    values.inverter.textContent = `${inverterKw} kW`;
    values.pv.textContent = `${pvKwp} kWp`;
    values.battery.textContent = `${batteryKwh} kWh`;
  }

  function initEnergyQuickSizing() {
    const amountInput = document.getElementById('energyConsumptionInput');
    const periodInput = document.getElementById('energyConsumptionPeriod');
    const calculateButton = document.getElementById('calculateEnergyQuickBtn');
    if (!amountInput || !periodInput || !calculateButton) return;
    calculateButton.addEventListener('click', updateEnergyQuickSizing);
    amountInput.addEventListener('input', updateEnergyQuickSizing);
    periodInput.addEventListener('change', updateEnergyQuickSizing);
    amountInput.addEventListener('keydown', event => {
      if (event.key === 'Enter') updateEnergyQuickSizing();
    });
  }

  function computeSystem() {
    let totalWh = 0;
    let runningW = 0;
    for (const app of applianceRows) {
      runningW += Math.max(0, app.qty) * Math.max(0, app.watt);
      totalWh += Math.max(0, app.qty) * Math.max(0, app.watt) * Math.max(0, app.hours);
    }
    const settings = getSizingSettings();
    const totalDailyKwh = totalWh / 1000;
    const runningKw = runningW / 1000;
    const inverterKw = runningKw > 0 ? roundUpInverter(runningKw * (1 + settings.loadMargin)) : 0;
    const solarKwp = totalDailyKwh > 0 ? sizePvArray(totalDailyKwh, settings.sunshineHours, settings.pvMargin, inverterKw) : 0;
    const batteryKwh = totalDailyKwh > 0 ? Math.ceil((totalDailyKwh * settings.backupDays / (0.80 * 0.92)) * 10) / 10 : 0;
    return {
      totalDailyKwh: Math.round(totalDailyKwh * 10) / 10,
      runningKw: Math.round(runningKw * 100) / 100,
      inverterKw,
      solarKwp,
      batteryKwh,
      sunshineHours: settings.sunshineHours,
      backupDays: settings.backupDays,
      pvMargin: settings.pvMargin,
      loadMargin: settings.loadMargin,
      totalWhRaw: totalWh
    };
  }
  
  function updateEstimation() {
    const sizing = computeSystem();
    const estSpan = document.getElementById('estimationText');
    if (!estSpan) return;
    if (sizing.totalWhRaw === 0) {
      estSpan.textContent = 'No appliances added yet. Add appliance quantities, wattage and daily hours to see total running load and system sizing.';
    } else {
      estSpan.textContent = `Total running load: ${sizing.runningKw.toFixed(2)} kW | Daily consumption: ${sizing.totalDailyKwh} kWh | Recommended inverter: ${sizing.inverterKw} kW | PV array: ${sizing.solarKwp} kWp | Battery: ${sizing.batteryKwh} kWh (${sizing.backupDays}-day autonomy)`;
    }
  }
  
  // Add new row
  document.getElementById('addRowBtn').addEventListener('click', () => {
    applianceRows.push({ name: "New Appliance", qty: 0, watt: 0, hours: 0 });
    renderTable();
    updateEstimation();
  });

  // Build Quote Message for WhatsApp and Email
  function getQuoteMessage() {
    const { totalDailyKwh, runningKw, inverterKw, solarKwp, batteryKwh, sunshineHours, backupDays, pvMargin, loadMargin } = computeSystem();
    let appliancesText = "";
    applianceRows.forEach(app => {
      appliancesText += `${app.name} (${app.qty}x ${app.watt}W, ${app.hours}h/day), `;
    });
    appliancesText = appliancesText.replace(/,\s*$/, '');
    if (appliancesText.length > 200) appliancesText = appliancesText.slice(0, 200) + "...";
    const msg = `Hello EliteVolt Team,\n\nI need a quote for a solar power system based on my load calculation:\n• Total Running Load: ${runningKw.toFixed(2)} kW\n• Total Daily Consumption: ${totalDailyKwh} kWh\n• Peak Sunshine: ${sunshineHours} hours/day\n• Recommended Inverter: ${inverterKw} kW\n• Recommended Solar PV: ${solarKwp} kWp\n• Battery Bank: ${batteryKwh} kWh (${backupDays}-day autonomy)\n• PV safety margin: ${Math.round(pvMargin * 100)}% | Load margin: ${Math.round(loadMargin * 100)}%\n• Appliances: ${appliancesText || "Custom setup"}\n\nPlease provide pricing & installation details. Thank you!`;
    return msg;
  }
  
  // WhatsApp Quote
  document.getElementById('whatsappQuoteBtn').addEventListener('click', () => {
    const { totalDailyKwh, inverterKw, solarKwp, batteryKwh } = computeSystem();
    if (totalDailyKwh === 0) {
      alert("Please enter appliance quantities, wattage and daily hours before requesting a quote.");
      return;
    }
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', { content_name: 'Solar load calculator - WhatsApp quote', value: solarKwp, currency: 'GHS' });
    }
    let msg = getQuoteMessage();
    const phone = "233249976762";  // EliteVolt contact 
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  });
  
  // Email Quote Request
  document.getElementById('emailQuoteBtn').addEventListener('click', () => {
    const { totalDailyKwh, runningKw, inverterKw, solarKwp, batteryKwh, sunshineHours, backupDays, pvMargin, loadMargin } = computeSystem();
    if (totalDailyKwh === 0) {
      alert("Please enter appliance quantities, wattage and daily hours before requesting a quote.");
      return;
    }
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', { content_name: 'Solar load calculator - email quote', value: solarKwp, currency: 'GHS' });
    }
    let subject = "EliteVolt Solar Quote Request";

let body = `Hello EliteVolt Systems,

I would like to request a quote for a solar installation.

SYSTEM REQUIREMENTS
-------------------
Total Running Load: ${runningKw.toFixed(2)} kW
Total Daily Energy: ${totalDailyKwh} kWh/day
Peak Sunshine: ${sunshineHours} hours/day
Recommended Inverter: ${inverterKw} kW
Solar Array Size: ${solarKwp} kWp
Battery Storage: ${batteryKwh} kWh (${backupDays}-day autonomy)
PV safety margin: ${Math.round(pvMargin * 100)}%
Load / inverter margin: ${Math.round(loadMargin * 100)}%

APPLIANCE LIST
--------------
`;

applianceRows.forEach(app => {
    body += `• ${app.name}
  Quantity: ${app.qty}
  Power: ${app.watt}W each
  Usage: ${app.hours} hours/day

`;

    });
    body += `Thank you`;
    window.location.href = `mailto:info@elitevoltsystems.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  // Initialize table with default data
  function init() {
    applianceRows = JSON.parse(JSON.stringify(defaultAppliances));
    renderTable();
    updateEstimation();
    initEnergyQuickSizing();
    document.querySelectorAll('#sunshineHoursInput, #backupDaysInput, #pvMarginInput, #loadMarginInput').forEach(control => {
      control.addEventListener('change', () => {
        updateEstimation();
        updateEnergyQuickSizing();
      });
    });
  }
  
  init();
