
    // PRODUCT DATABASE 
    // Optional verified offer fields: compareAtPrice (regular price) and promotionLabel. Keep price as the customer pays.
    const productsData = [
        { id: "p1", pageUrl: "products/m600x-solar-kit.html", name: "M600X Solar Kit",
            category: "Solar Kits",
            price: 1400,
            compareAtPrice: 1500,
            promotionLabel: "Limited Offer",
            stock: true, 
        mainImg: "images/M600X.jpeg",
        thumbnails: ["images/M600X-2.jpeg","images/M600X-3.jpg"], 
        description: "12W solar home system, 4 lamps, USB, 5200mAh battery.", 
        specs: ["12W Panel", "Main Lamp", "3 Secondary", "Torch", "USB Cable"],
        whatsappMsg: "M600X Solar Kit" },
       
        { id: "p2", pageUrl: "products/lumn-home-840.html", name: "Lumn Home 840",
            category: "Solar Kits",
            price: 1500,
            stock: true, 
        mainImg: "images/Lumn Home 840.jpg", 
        thumbnails: ["images/Lumn Home 840-2.jpg","images/Lumn Home 840-3.png"],
        description: "LUMN Home 840lm delivers four high-intensity LED bulbs, ensuring every corner stays bright. Built with MPPT solar charging, wireless switches, and pay-go compatibility, it offers modern energy solutions for off-grid communities.Up to 10 hours of lighting at full brightness Four 210-lumen LED lamps with 3 brightness settings 12W solar panel & 40Wh battery for efficient energy storage", 
        specs: ["Lumn Home Battery Hub 12Ah/40Wh", "LED Lamp 1W 210 Lm Output",
            "2M Extend Charging Cable for Lumn Home","5M Extend Cable for Lumn Home",
            "Wireless Switch for Lumn Home"], 
        whatsappMsg: "Lumn Home 840" },

        { id: "p3", pageUrl: "products/lumn-home-1230.html", name: "Lumn Home 1230",
        category: "Solar Kits",
        price: 1600, 
        stock: true,
        mainImg: "images/Lumn Home 1230.jpg",
        thumbnails: ["images/Lumn Home 1230-2.jpg", "images/Lumn Home 1230-3.jpg"],
        description: "LUMN Home 1230lm is designed for large rooms, classrooms, or shared spaces. The system is easy to install, Bluetooth-enabled, and powered by a smart solar hub for uninterrupted lighting. 6-7 hours of runtime at full brightness. Three 410-lumen tube lights. MPPT solar charging for maximum efficiency. Durable LiFePO4 battery with 2000 cycles",
        specs: ["1 x Lumn Home Battery Hub 12Ah/40Wh", "3 x Lumn Home LED Tube 2W/410 Lumen", "2M Extend Charging Cable for Lumn Home", "5M Extend Cable for Lumn Home", "3 x Wireless Switch for Lumn Home"], 
        whatsappMsg: "Lumn Home 1230" },

        { id: "p4", pageUrl: "products/solar-barber-shop-06ah-starter-pack.html", name: "Solar Barber Shop 06Ah Starter Pack",
        category: "Solar Kits",
        price: 3500,
        stock: true, 
        mainImg: "images/Solar barber kit.jpeg",
        thumbnails: ["images/barberkit.jpg"],
        description: "The Solar Barber Shop 06Ah Starter Pack includes a 20W solar panel, 6Ah lithium battery Hub for energy storage, two cordless haircutters with accessories such as limit combs, a cleaning brush, and lubricating oil, two efficient LED tube lights and a multi-functional torch.",
        specs: ["Camp Battery Hub 06Ah","20Wp c-Si Standard Sized IEC Certified Solar Panel", "2 x Cordless Battery Powered Durable Professional Hair Clipper", "2 x LT4 LED Tube",  "Hand-Held Torch / Lantern / Remote Control w/ Li-Ion Battery"],
        whatsappMsg: "Solar Barber Shop 06Ah Starter Pack" },

        { id: "p5", pageUrl: "products/solar-speaker.html", name: "Solar speaker",
        category: "Solar Kits",
        price: 7500, 
        stock: true,    
        mainImg: "images/solar-speaker.jpeg", 
        thumbnails: ["images/solar-speaker2.jpeg"], 
        description: "Reliable sound system for events such as road-show campaigns, weddings, churches, karaoke, USB/SD card functionalities, connectivity to Bluetooth devices, digital FM radio for local radio stations", 
        specs: ["Camp Battery Hub 18Ah", "80Wp c-Si Standard Sized IEC Certified Solar Panel",
            "Wireless Portable Bluetooth Karaoke Party Speaker ", "2 Wireless Micphone"], 
        whatsappMsg: "Solar speaker" },

        { id: "p6", pageUrl: "products/16inch-solar-fan.html", 
        name: "16inch Solar fan", 
        category: "Solar Kits", 
        price: 1750, stock: true, 
        mainImg: "images/16in Solar fan.jpeg", 
        thumbnails: ["images/solar-fan.jpg","images/solar-fan1.jpg"], 
        description: "The 16-Inch Built-in Battery Solar Stand Fan Pack comprises a 25W solar panel and 16-inch stand fan with built-in battery. This portable pack allows direct fan charging and boasts a noiseless, brushless motor for an elegant touch in homes and shops. With 4-speed levels, natural wind mode, and timer function, the fan provides flexible cooling options lasting up to 40 hours and includes LED lighting.",
        specs: ["16 Inch Solar Built-in Battery Desk Fan", "25Wp c-Si Standard Sized IEC Certified Solar Panel"], 
        whatsappMsg: "16inch Solar fan" },

        { id: "p7", pageUrl: "products/ritar-12v-200ah-deep-cycle-gel-battery.html", 
        name: "Ritar 12V 200Ah (Deep Cycle Gel Battery)", 
        category: "Batteries", "subcategory": "Gel batteries",
        price: 5000, 
        stock: false, 
        mainImg: "https://www.ritarpower.com/uploads/image/20251226/dg-series-lead-acid-batteries-bulk.webp",  
        description: "DG (Deep Cycle GEL) series is designed for frequent cyclic charge and discharge applications under extreme environments. By using strong grids, high-purity lead and patented Gel electrolyte, DG series offers excellent recovery after deep discharge under frequent cyclic discharge, and can deliver 400 cycles at 100% DOD. Suitable for solar, CATV, marine, RV and deep discharge UPS applications.", 
        specs: ["12V 200Ah", "Low Maintenance"], 
        whatsappMsg: "Ritar 12V 200Ah (Deep Cycle Gel Battery)" },

        { id: "p8", pageUrl: "products/srne-hybrid-inverter-5kw-hv.html", 
        name: "SRNE Hybrid Inverter 5kW HV", 
        category: "Inverters", 
        price: 6500,
        compareAtPrice: 8500, 
        stock: true, 
        mainImg: "images/5kw-hv-srne1.png", 
        thumbnails: ["images/5kw-hv-srne2.png", "images/5kw-hv-srne3.png"], 
        description: "Single-Phase Off-grid Solar Storage Inverter, Compatible with 48V storage batteries, Up to 6 units in parallel for 30kW, Time-slot function to save cost with peak-valley, Off-grid/without battery output mode, Aesthetically industrial design appearance, Support BMS communication", 
        specs: ["MODEL -- HYP4850S100-H", "Rated Output Power -- 5,000W", "Max. Output Power -- 10,000VA", "Rated Output Voltage -- 230Vac (L/N/PE, Single-Phase)",
            "Waveform -- Pure sine wave", "Battery Type -- Li-ion / Lead-acid / User-defined", "Rated Battery Voltage -- 48V", "Battery Voltage Range -- 40-60Vdc",
            "Max. Solar Charging Current -- 100A", "Max. Grid/Generator Charging Current -- 60A", "Max. Hybrid Charging Current -- 100A"], 
        whatsappMsg: "SRNE Hybrid Inverter 5kW HV" },

        { id: "p9", pageUrl: "products/srne-hybrid-inverter-6kw-hv.html", 
        name: "SRNE Hybrid Inverter 6kW HV", 
        category: "Inverters", 
        price: 8800, 
        stock: false, 
        mainImg: "images/6kw-hv-srne1.png", 
        thumbnails: [], 
        description: "Single-Phase Off-grid Solar Storage Inverter □ SRNE 15 years in PV industry, committed to independent R&D and production. □ Holds over 200 patents in energy storage, with unique industry- leading technologies. □ Chooses top-quality international components to deliver high-value products to customers. □ Upholds values of customer priority, proactivity, responsibility, and innovative breakthroughs. □ Advanced MPPT technology with up to 99.9% efficiency □ Up to 6 units in parallel for 36kW □ Time-slot function to save cost with peak-valley □ Off-grid/without battery output mode □ Aesthetically industrial design appearance □ Support BMS communication", 
        specs: ["Model -- HYP4860S100-H", "Rated Output Power -- 6,200W", "Max. Output Power -- 12,400VA", "Rated Output Voltage -- 230Vac (L/N/PE, Single-Phase)",
            "Rated AC Frequency -- 50/60Hz", "Pure sine wave", "Switch Time -- 10ms (typical)"],     
        whatsappMsg: "SRNE Hybrid Inverter 6kW HV" },

        {id: "p10", pageUrl: "products/2p-din-smart-voltage-and-current-protection-meter.html",
            name: "2p din Smart Voltage and Current protection Meter",
            category: "Protective Devices",
            price: 300,
            stock: true,
            mainImg: "images/smart-meter1.png",
            thumbnails: ["images/smart-meter2.png"],
            description: "Tuya WiFi 8in1 Power Meter 2P AC Energy Meter APP Control 170-270V/63A Voltage and Current Meter Electricity Meter Smart Life",
            specs: ["Support over-voltage, under-voltage, over-current, over-power, over-temperature, timer power failure protections setting, and screen hibernation setting"],
            whatsappMsg: "2p 63A smart voltage protector"
        },

        {id: "p11", pageUrl: "products/blue-carbon-100w-all-in-one-integrated-solar-street-light.html",
            name: "Blue Carbon 100w All In One Integrated Solar Street Light",
            category: "Solar Streetlights", "subcategory": "All In One Solar Streetlights",
            price: 2500,
            compareAtPrice: 3000,
            stock: true,
            mainImg: "images/bct-st-100w-1.png",
            thumbnails: ["images/bct-st-100w-2.png", "images/bct-st-100w-3.png", "images/bct-st-100w-4.png"],
            description: "Blue Carbon 100w All In One Integrated Solar Street Light Suitable For Commercial, Industrial and Residential Applications",
            specs: ["Model: BCT-OLF100W",
                "Solar Panel: 5V/100W mono",
                "Battery: 3.2V/200Ah LiFePO4 Battery",
                "LED: 8000lm Common 7W LED",
                "Bracket: Aluminum magnesium alloy",
                "Control Mode: Light sensor, intelligent control",
                "Lighting Time: All night lighting, can use remote controller to adjust the brightness and working mode",
                "Installation Height: 8-10m",
                "Application: Courtyards, communities, villas, scenic spots, parks, squares and areas without electricity"
            ],
            whatsappMsg: "Blue Carbon 100w All In One Integrated Solar Street Light"
        },

        {id: "p12", pageUrl: "products/srne-12kw-1ph-on.html",
            name: "SRNE 12kW Single phase On/Off grid Hybrid Inverter",
            category: "Inverters", "subcategory": "Hybrid inverters",
            price: 23000,
            compareAtPrice: 29000,
            stock: true,
            mainImg: "images/12kw-srne-1.png",
            thumbnails: ["images/12kw-srne-2.png", "images/12kw-srne-3.jpg"],
            description: "12kW SRNE Single Phase Low Voltage On/Off-grid Solar Hybrid Inverter",
            specs: ["Rated Output Power: 240V 12000W",
                "Max. Peak Power: 240V  24000W",
                "Rated Output Voltage: 240Vac",
                "Rated Output Current:  50A",
                "Load Motor Capacity:  6HP",
                "Rated Frequency: 50/60Hz",
                "Waveform:  Pure Sine Wave",
            ],
            whatsappMsg: "SRNE 12kW Single phase On/Off grid Hybrid Inverter"
        },

        {id: "p13", pageUrl: "products/srne-16kwh-lit.html",
            name: "SRNE 16kWh Lithium Battery (51.2V 314Ah)",
            category: "Batteries", "subcategory": "Lithium Batteries",
            price: 26000,
            compareAtPrice: 30000,
            stock: true,
            mainImg: "images/srne-16kwh-lit-1.jpg",
            thumbnails: ["images/srne-16kwh-lit-2.png", "images/srne-16kwh-lit-3.png"],
            description: "16kWh Lithium Ion Battery (51.2V 314Ah)",
            specs: ["Rated Voltage: 51.2V",
                "Rated Capacity: 314Ah",
                "Battery Energy: 16.07kWh",
                "Battery Type: LFP",
                "Cycle Lifespan: 6000 Cycles",
                "Max. Parallel Capacity: 1-16 units",
                "Dimension (mm): 837*380*253",
                "Communication: CAN/RS485/USB"
            ],
            whatsappMsg: "SRNE 16kWh Lithium Battery (SR-SE16B-Pro)"
        },

        {id: "p14", pageUrl: "products/tw-620w.html",
            name: "TW Solar 620W Bifacial panel",
            category: "Solar Panels", "subcategory": ["Bifacial Solar Panels", "Monocrystalline Solar Panels"],
            price: 1400,
            stock: true,
            mainImg: "images/tw-620w-2.png",
            thumbnails: ["images/tw-620w-3.png", "images/tw-620w-1.png"],
            description: "The TW Solar 620W Bifacial Solar Panel (commonly model TWMNH-66HD620W) is a high-efficiency photovoltaic module built with N-type TOPCon monocrystalline cells and a dual-glass design.",
            specs: ["Power Output: 620W",
                "Open Circuit Voltage (Voc): 48.30V",
                "Voltage at Pmax: 41.55V",
                "Efficiency: Up to 23.0%",
                "Cell Type: N-type TOPCon", 
                "Monocrystalline Half-Cell (132 cells)",
                "Dimensions: 2382 x 1134 x 30 mm",
                "Weight: 32.5 kg",
            ],
            whatsappMsg: "TW Solar 620W Bifacial panel"
        },

        {id: "p15", pageUrl: "products/RTG12-200-or.html",
            name: "Restar 12V 200Ah Gel Battery",
            category: "Batteries", "subcategory": "Gel batteries",
            price: 4000,
            stock: true,
            mainImg: "images/res12-200-g1.png",
            description: "12V 200Ah Restar Gel Battery, orange top",
            specs: [
                "Cells Per unit: 6",
                "Voltage (V): 12",
                "Capacity (Ah): 200Ah@10hr.rate to 1.80V pet @25C",
                "Weight: Approx. 62kg",
                "Max. Charging Current: 50A",
                "Max. Discharging Current: 1200A (5s)",
            ],
            whatsappMsg: "Restar 12V 200Ah Gel Battery orange"
        },

        {id: "p16", pageUrl: "products/RTG12-200-b.html",
            name: "Restar 12V 200Ah Gel Battery",
            category: "Batteries", "subcategory": "Gel batteries",
            price: 3600,
            stock: true,
            mainImg: "images/res12-200-bg1.png",
            description: "12V 200Ah Restar Gel Battery, orange top",
            specs: [
                "Cells Per unit: 6",
                "Voltage (V): 12",
                "Capacity (Ah): 200Ah@10hr.rate to 1.80V pet @25C",
                "Weight: Approx. 62kg",
                "Max. Charging Current: 50A",
                "Max. Discharging Current: 1200A (5s)",
            ],
            whatsappMsg: "Restar 12V 200Ah Gel Battery orange"
        },

        {id: "p17", pageUrl: "products/restar-1kw-off.html",
            name: "Restar 1kW Off-grid Inverter",
            category: "Inverters", "subcategory": "Off-grid inverters",
            price: 2600,
            stock: true,
            mainImg: "images/restar-1kw-off.png",
            description: "1kW pure sine wave off-grid inverter with built-in MPPT solar charge controller",
            specs: [
                "Rated Power: 1000VA/1000W",
                "Rated Input Voltage: 12VDC",
                "Input Voltage Range: 10.5~16VDC",
                "Battery Voltage: 12VDC",
                "Battery Voltage Range:10.5~16VDC",
                "AC Output: 230VAC, 50/60Hz, 1Φ",
                "AC Input: 230VAC, 50/60Hz, 1Φ",
                "DC Output: 13.5VDC",
                "AC Output: 230VAC, 50/60Hz, 1Φ",
                "Maximum AC Charging Current: 40A",
                "Rated Power: 600W",
                "Max. Solar Voltage (VOC): 150VDC",
                "MPPT Voltage range: 20 ~ 150VDC",
                "Maximum Solar Charging Current: 40A"
            ],
            whatsappMsg: "Restar 1kW Off-grid Inverter"
        },

        {id: "p18", pageUrl: "products/RT-ES1.5KW-24.html",
            name: "Restar 1.5kW Off-grid Inverter",
            category: "Inverters", "subcategory": "Off-grid inverters",
            price: 3000,
            stock: true,
            mainImg: "images/restar-1kw-off.png",
            description: "1.5kW pure sine wave off-grid inverter with built-in MPPT solar charge controller",
            specs: [
                "Rated Power: 1500VA/1500W",
                "Rated Input Voltage: 24VDC",
                "Input Voltage Range: 21~32VDC",
                "Battery Voltage: 24VDC",
                "Battery Voltage Range:21~32VDC",
                "AC Output: 230VAC, 50/60Hz, 6.5A, 1Φ",
                "AC Charger Mode:",
                "AC Input: 230VAC, 50/60Hz,8.82A, 1Φ",
                "DC Output: 27VDC",
                "AC Output: 230VAC, 50/60Hz, 6.5A, 1Φ",
                "Maximum AC Charging Current: 40A",
                "Solar Charger Mode:",
                "Rated Power: 1200W",
                "Max Solar Voltage (VOC): 150VDC",
                "MPPT Voltage range: 30 – 150VDC",
                "Maximum Solar Charging Current: 40A"
            ],
            whatsappMsg: "Restar 1.5kW Off-grid Inverter"
        },

        {id: "p19", pageUrl: "products/RTES2.0KW-12.html",
            name: "Restar 2.0kVA Off-grid Inverter",
            category: "Inverters", "subcategory": "Off-grid inverters",
            price: 4000,
            stock: true,
            mainImg: "images/restar-1kw-off.png",
            description: "2.0kVA pure sine wave off-grid inverter with built-in MPPT solar charge controller",
            specs: [
                "Inverter Mode:",
                "Rated Power:2000VA/1600W",
                "DC Input:12VDC ,133.3A",
                "AC Output:230VAC,50/60Hz,8.7A,1Φ",
                "AC Charger Mode:",
                "AC Input:230VAC,50/60Hz,11.8A,1Φ",
                "DC Output: 13.5VDC,",
                "AC Output: 230VAC,50/60Hz,8.7A,1Φ",
                "Maximum AC Charging Current:60A",
                "Solar Charger Mode:",
                "Rated Power:2000W",
                "Nominal operating voltage:240VDC",
                "Max. Solar Voltage(VOC):400VDC",
                "MPPT Voltage range:30~400VDC",
                "Maximum Solar Charging Current:80A"
            ],
            whatsappMsg: "Restar 2.0kva Off-grid Inverter"
        },

        {id: "p20", pageUrl: "products/RTES3.2KW-24.html",
            name: "Restar 3.2kW Off-grid Inverter",
            category: "Inverters", "subcategory": "Off-grid inverters",
            price: 4500,
            stock: true,
            mainImg: "images/restar-1kw-off.png",
            description: "3.2kW pure sine wave off-grid inverter with built-in MPPT solar charge controller",
            specs: [
                "Inverter Mode:",
                "Rated Power: 3200VA/3000W",
                "DC Input: 24VDC, 125A",
                "AC Output: 230VAC, 50/60Hz, 13.9A, 1Φ",
                "AC Charger Mode:",
                "AC Input: 230VAC, 50/60Hz, 20.2A, 1Φ",
                "DC Output: 27VDC,",
                "AC Output: 230VAC, 50/60Hz, 13.9A, 1Φ",
                "Maximum AC Charging Current:60A",
                "Solar Charger Mode:",
                "Rated Power: 3000W",
                "Nominal operating voltage: 240VDC",
                "Max. Solar Voltage (VOC): 400VDC",
                "MPPT Voltage range: 30 ~ 400VDC",
                "Maximum Solar Charging Current:80A"
            ],
            whatsappMsg: "Huawei SUN2000-3K-LB0 single-phase hybrid solar inverter"
        },

        {id: "p21", pageUrl: "products/RTHY4.2KW-24P1-II.html",
            name: "Restar 4.2kW Hybrid Inverter",
            category: "Inverters", "subcategory": "Hybrid inverters",
            price: 5500,
            stock: true,
            mainImg: "images/restar4k.png",
            description: "4.2kW pure sine wave hybrid inverter with built-in MPPT solar charge controller",
            specs: [
                "PV INPUT:",
                "Nominal operating voltage:240Vdc",
                "Vmax PV:500Vdc",
                "PV input voltage range:60-450Vdc",
                "Imax PV:18A",
                "Full load MPPT range:240~450Vdc",
                "Maximum PV Input power:6200W",
                "Maximum Solar Charging Current:120A",
                "GRID/AC OUTPUT:",
                "Nominal Output Voltage:220/230/240Vac",
                "Feed-in Grid Voltage Range:195~253Vac",
                "Feed-in Grid Frequency Range:50±1Hz",
                "Nominal Output Current:18.2A",
                "Power Factor Range:>0.99",
                "Maximum Conversion Efficiency(DC/AC):97%",
                "Nominal Operating Frequency:50/60Hz",
                "TWO LOAD OUTPUT POWER:",
                "Full Load:4200W",
                "Maximum Main Load:4200W",
                "Maximum Second Load:1400W",
                "Main Load Cut Off Voltage:26Vdc",
                "Main Load Return Voltage:27Vdc",
                "AC INPUT:",
                "Nominal operating voltage:230Vac",
                "Maximum input current:30A",
                "Nominal operating frequency:50/60Hz",
                "Surge power:8400VA",
                "Maximum AC Charging Current:100A",
                "BATTERY:",
                "Battery voltage :24Vdc"
            ],
            whatsappMsg: "Restar 4.2kW Hybrid Inverter"
        },

        {id: "p22", pageUrl: "products/SUN2000-3K-LB0.html",
            name: "Huawei SUN2000-3K-LB0 single-phase hybrid solar inverter",
            category: "Inverters", "subcategory": "Hybrid inverters",
            price: 9600,
            stock: true,
            mainImg: "images/huawei.png",
            description: "Huawei SUN2000-3K-LB0 single-phase hybrid solar inverter and smart energy controller designed for residential photovoltaic (PV) and battery storage systems",
            specs: [
                "Max. efficiency: 97.8%",
                "Recommended max. PV power: 4,500 Wp",
                "Max. input voltage: 600 V",
                "Start-up voltage: 50V",
                "MPPT operating voltage range: 40–560 V",
                "Rated input voltage: 360V",
                "Max. input current per MPPT: 16A",
                "Max. short-circuit current: 20A",
                "Number of MPP trackers: 2",
                "Max. inputs per MPP tracker: 1",
                "Compatible battery: LUNA2000-5/10/15-S0, LUNA2000-7/14/21-S1",
            ],
            whatsappMsg: "Huawei SUN2000-3K-LB0 single-phase hybrid solar inverter"
        },

        {id: "p23", pageUrl: "products/GL48100.html",
            name: "Megatank 51.2V 100Ah Lithium Battery (GL48100)",
            category: "Batteries", "subcategory": "Lithium Batteries",
            price: 11500,
            stock: true,
            mainImg: "images/megatank-5kwh.png",
            thumbnails: ["images/mega-5kwh-1.png", "images/mega-5kwh.png"],
            description: "Megatank GL48100 is a 51.2V, 100Ah LiFePO4 (lithium iron phosphate) energy storage battery with a rated capacity of 5.12 kWh",
            specs: ["Rated voltage: 51.2V", 
                "Rated capacity [Ah]: 100Ah", 
                "Rated energy [kWh]: 5.12kWh", 
                "Max. charge current [A]: 100A", 
                "Max. discharge current [A]: 100A", 
                "Cycle life: >6000 cycles at 80% DOD", 
                "Operating temperature range: -20°C to 60°C", 
                "Communication interface: RS485, CAN bus"
            ],
            whatsappMsg: "Megatank GL48100 5kWh"
        },

        {id: "p24", pageUrl: "products/2kw-mega.html",
            name: "Megatank GM2000 Power Station",
            category: "Power Stations", "subcategory": "Portable Power Stations",
            price: 11000,
            stock: true,
            mainImg: "images/2kw-mega.png",
            thumbnails: ["images/2kw-mega-1.png","images/2kw-mega-2.png"],
            description: "The GM2000 Movable Energy Storage (ESS) Power Station is a portable power system that provides mobile backup and off-grid electricity.",
            specs: ["Battery chemistry: LiFePO4 cylindrical cell",
                "Rated capacity [Wh]: 2048Wh",
                "Battery cell life: 2000 cycles SOH > 80%",
                "Wide input voltage range :180-264Vac",
                "External DC charger：Support",
                "Wide frequency input range ：46-64Hz (AC Charging)",
                "PV charging ：Supports external PV charger",
                "AC outlet：South African, European, British, Universal, Chinese",
                "AC output waveform ：Pure sine-wave (Inverter Mode)",
                "USB-A output ：5V/2.1A × 2",
                "UPS feature：Yes",
                "Bidirectional inverter：Yes",
                "Emergency power backup：Yes",
                "Expansion battery pack: Supports expansion battery pack with 2048Wh capacity (total 4096Wh)",
                "Swappable battery module:Yes",
                "Weight:≈ 18kg",
                "Dimensions:400mm (L) × 250mm (W) × 290mm (H)"
            ],
            whatsappMsg: "Megatank GM2000 2kWh"
        },

        {id: "p25", pageUrl: "products/GIO-05T.html",
            name: "Megatank GIO-05T Solar Hybrid Inverter",
            category: "Inverters", "subcategory": "Hybrid inverters",
            price: 13500,
            stock: true,
            mainImg: "images/GIO-05T.png",
            description: "A 5kVA, 230VAC single-phase transformer solar hybrid inverter with two MPPT trackers, WiFi and Bluetooth monitoring, smart generator input and rapid battery transfer.",
            specs: [],
            whatsappMsg: "Megatank GIO-05T 5kW Solar Hybrid Inverter"
        },

        {id: "p26", pageUrl: "products/jinko-620w.html",
            name: "620W Jinko Bifacial Solar Panel",
            category: "Solar Panels", "subcategory": ["Bifacial Solar Panels", "Monocrystalline Solar Panels"],
            price: 1800,
            stock: true,
            mainImg: "images/jinko-1.png",
            thumbnails: ["images/jinko-2.png","images/jinko-3.png"],
            description: "The Jinko Tiger Neo 620W bifacial solar panel features a dual-glass design that generates electricity from both sides of the panel.",
            specs: ["Cell Type: N- type Mono-crystalline",
                "Maximum Power - Pmax  [Wp]: 620W",
                "Maximum Power Voltage - Vmp  [V]: 40.74V",
                "Maximum Power Current - Imp  [A]: 15.22A",
                "Open Circuit Voltage - Voc  [V]: 49.08V",
                "Short Circuit Current - Isc  [A]: 16.08A",
                "Module Efficiency [%]: 22.95%", 
            ],
            whatsappMsg: "620W Jinko Bifacial Solar Panel"
        },

        {id: "p27", pageUrl: "products/jinko-625w.html",
            name: "625W Jinko Bifacial Solar Panel",
            category: "Solar Panels", "subcategory": ["Bifacial Solar Panels", "Monocrystalline Solar Panels"],
            price: 1800,
            stock: true,
            mainImg: "images/jinko-1.png",
            thumbnails: ["images/jinko-2.png","images/jinko-3.png"],
            description: "The Jinko Tiger Neo 625W bifacial solar panel features a dual-glass design that generates electricity from both sides of the panel.",
            specs: ["Cell Type: N- type Mono-crystalline",
                "Maximum Power - Pmax  [Wp]: 625W",
                "Maximum Power Voltage - Vmp  [V]: 46.10V",
                "Maximum Power Current - Imp  [A]: 13.56A",
                "Open Circuit Voltage - Voc  [V]: 55.72V",
                "Short Circuit Current - Isc  [A]: 14.27A",
                "Module Efficiency [%]: 23.0%", 
            ],
            whatsappMsg: "625W Jinko Bifacial Solar Panel"
        },
        
        {id: "p28", pageUrl: "products/jinko-630w.html",
            name: "630W Jinko Bifacial Solar Panel",
            category: "Solar Panels", "subcategory": ["Bifacial Solar Panels", "Monocrystalline Solar Panels"],
            price: 1800,
            stock: true,
            mainImg: "images/jinko-1.png",
            thumbnails: ["images/jinko-2.png","images/jinko-3.png"],
            description: "The Jinko Tiger Neo 630W bifacial solar panel features a dual-glass design that generates electricity from both sides of the panel.",
            specs: ["Cell Type: N- type Mono-crystalline",
                "Maximum Power - Pmax  [Wp]: 630W",
                "Maximum Power Voltage - Vmp  [V]: 41.02V",
                "Maximum Power Current - Imp  [A]: 15.36A",
                "Open Circuit Voltage - Voc  [V]: 49.48V",
                "Short Circuit Current - Isc  [A]: 16.20A",
                "Module Efficiency [%]: 23.0%"
            ],
            whatsappMsg: "630W Jinko Bifacial Solar Panel"
        },

        {id: "p29", pageUrl: "products/jinko-715w.html",
            name: "715W Jinko Bifacial Solar Panel",
            category: "Solar Panels", "subcategory": ["Bifacial Solar Panels", "Monocrystalline Solar Panels"],
            price: 2200,
            stock: true,
            mainImg: "images/jinko-1.png",
            thumbnails: ["images/jinko-2.png","images/jinko-3.png"],
            description: "The Jinko Tiger Neo 715W bifacial solar panel features a dual-glass design that generates electricity from both sides of the panel.",
            specs: ["Cell Type: N- type Mono-crystalline",
                "Maximum Power - Pmax  [Wp]: 715W",
                "Maximum Power Voltage - Vmp  [V]: 40.77V",
                "Maximum Power Current - Imp  [A]: 17.54A",
                "Open Circuit Voltage - Voc  [V]: 48.88V",
                "Short Circuit Current - Isc  [A]: 18.60A",
                "Module Efficiency [%]: 23.02%",
                "Dimensions:2384×1303×33 mm"
            ],
            whatsappMsg: "715W Jinko Bifacial Solar Panel"
        },

        {id: "p30", pageUrl: "products/jinko-720w.html",
            name: "720W Jinko Bifacial Solar Panel",
            category: "Solar Panels", "subcategory": ["Bifacial Solar Panels", "Monocrystalline Solar Panels"],
            price: 2300,
            stock: true,
            mainImg: "images/jinko-1.png",
            thumbnails: ["images/jinko-2.png","images/jinko-3.png"],
            description: "The Jinko Tiger Neo 720W bifacial solar panel features a dual-glass design that generates electricity from both sides of the panel.",
            specs: ["Cell Type: N- type Mono-crystalline",
                "Maximum Power - Pmax  [Wp]: 720W",
                "Maximum Power Voltage - Vmp  [V]: 40.89V",
                "Maximum Power Current - Imp  [A]: 17.61A",
                "Open Circuit Voltage - Voc  [V]: 49.04V",
                "Short Circuit Current - Isc  [A]: 18.67A",
                "Module Efficiency [%]: 23.18%",
                "Dimensions:2384×1303×33 mm"
            ],
            whatsappMsg: "720W Jinko Bifacial Solar Panel"
        },

        {id: "p31", pageUrl: "products/geya-32a-ats.html",
            name: "Geya 32A Automatic Transfer Switch",
            category: ["Switches","Changeover"], "subcategory": "Automatic Changeover (ATS)",
            price: 1200,
            stock: true,
            mainImg: "images/geya-ats-1.png",
            thumbnails: ["images/geya-ats-2.png","images/geya-ats-3.png","images/geya-ats-4.png"],
            description: "The W2R automatic transfer switch is a PC-class dual-power transfer device for circuits that require automatic changeover between a normal supply and an alternate supply. It is suitable for use in power supply systems with a rated voltage of 50Hz, AC 220V, and a rated current of 32A. The device can be used in various applications such as residential, commercial, and industrial settings where uninterrupted power supply is critical.",
            whatsappMsg: "Geya 32A Automatic Transfer Switch"
        },

        {id: "p32", pageUrl: "products/geya-63a-ats.html",
            name: "Geya 63A Automatic Transfer Switch",
            category: ["Switches","Changeover"], "subcategory": "Automatic Changeover (ATS)",
            price: 1600,
            stock: true,
            mainImg: "images/geya-ats-1.png",
            thumbnails: ["images/geya-ats-2.png","images/geya-ats-3.png","images/geya-ats-4.png"],
            description: "The W2R automatic transfer switch is a PC-class dual-power transfer device for circuits that require automatic changeover between a normal supply and an alternate supply. It is suitable for use in power supply systems with a rated voltage of 50Hz, AC 220V, and a rated current of 32A. The device can be used in various applications such as residential, commercial, and industrial settings where uninterrupted power supply is critical.",
            whatsappMsg: "Geya 63A Automatic Transfer Switch"
        },

        {id: "p33", pageUrl: "products/geya-100a-ats.html",
            name: "Geya 100A Automatic Transfer Switch",
            category: ["Switches","Changeover"], "subcategory": "Automatic Changeover (ATS)",
            price: 1800,
            stock: true,
            mainImg: "images/geya-ats-1.png",
            thumbnails: ["images/geya-ats-2.png","images/geya-ats-3.png","images/geya-ats-4.png"],
            description: "The W2R automatic transfer switch is a PC-class dual-power transfer device for circuits that require automatic changeover between a normal supply and an alternate supply. It is suitable for use in power supply systems with a rated voltage of 50Hz, AC 220V, and a rated current of 32A. The device can be used in various applications such as residential, commercial, and industrial settings where uninterrupted power supply is critical.",
            whatsappMsg: "Geya 100A Automatic Transfer Switch"
        },

        {id: "p34", pageUrl: "products/SUN-6K-OG01LP1-EU-AM2.html",
            name: "Deye SUN-6K-OG01LP1-EU-AM2 6kW Off-grid Inverter",
            category: "Inverters", "subcategory": ["Hybrid inverters", "Off-grid inverters"],
            price: 11200,
            stock: true,
            mainImg: "images/deye-6k-off.png",
            thumbnails: "images/deye-6k-off-2.png",
            description: "Deye SUN-6K-OG01LP1-EU-AM2 6kW Off-grid Inverter",
            specs: [
                "• Rated AC Output Power: 6,000 W (pure sine wave)",
                "• Max PV Access Power: 10,000 W",
                "• Max PV Input Voltage: 500 V",
                "• MPPT Range: 150 V – 425 V (Dual MPPT trackers)",
                "• Battery Compatibility: 40 V – 60 V (Lead-acid or Lithium-ion, with self-adaptation to BMS)",
                "• Max Charging / Discharging Current: 135 A",
                "• Max Efficiency: 97.6%",
                "• Parallel Support: Up to 16 units in off-grid/hybrid mode",
                "• Protection Rating: IP65 (dust and water resistant)",
                "• Operating Temperature: -40°C to +60°C",
                "• Communication: RS232, RS485, CAN, and built-in Wi-Fi",
            ],
            whatsappMsg: "Deye SUN-6K-OG01LP1-EU-AM2 6kW Off-grid Inverter"
        },

        {id: "p35", pageUrl: "products/SUN-5K-SG03LP1-EU.html",
            name: "Deye SUN-5K-SG03LP1-EU 5kW Solar Hybrid Inverter",
            category: "Inverters", "subcategory": ["Hybrid inverters", "On/Off-grid inverters"],
            price: 22000,
            stock: true,
            mainImg: "images/Deye-5k-hy.png",
            thumbnails: ["images/Deye-5k-hy-1.png", "images/Deye-5k-hy-2.png"],
            description: "The Deye SUN-5K-SG03LP1-EU is a 5 kW single-phase low-voltage hybrid solar inverter designed for residential and light commercial use",
            specs: [
                "• Rated AC Output: 5000W (single-phase, 220/230V)",
                "• Max AC Output: 5500W",
                "• Max PV Input Power: 6500W",
                "• Max DC Input Power: 6500W (up to 500V max input voltage)",
                "• MPPT Trackers: 2 independent MPPT trackers (150V–425V range)",
                "• Battery Compatibility: 40V–60V low-voltage lead-acid or lithium-ion batteries",
                "• Max Charge/Discharge Current: 120A",
                "• Max Efficiency: 97.6% (European efficiency 96.5%)",
                "• Protection Degree: IP65 (weather-resistant for outdoor installation)",
                "• Display & Control: Color LCD touch screen",
                "• Dimensions & Weight: 330 × 580 × 232 mm; approx. 20.5 kg net weight",
            ],
            whatsappMsg: "Deye SUN-5K-SG03LP1-EU 5kW Solar Hybrid Inverter"
        },

        {id: "p36", pageUrl: "products/SUN-6K-SG04LP1-EU-SM2.html",
            name: "Deye SUN-6K-SG04LP1-EU 6kW Solar Hybrid Inverter",
            category: "Inverters", "subcategory": ["Hybrid inverters", "On/Off-grid inverters"],
            price: 22500,
            stock: true,
            mainImg: "images/deye-6k-hy.png",
            thumbnails: ["images/deye-6k-hy-1.png", "images/deye-6k-hy-2.png", "images/deye-6k-hy-3.png"],
            description: "The Deye SUN-6K-SG04LP1-EU is a 6 kW single-phase low-voltage hybrid solar inverter designed for residential and light commercial use",
            specs: [
                "• Inverter Type: Single-phase hybrid solar inverter",
                "• Rated AC Output Power: 6,000 W (6 kW)",
                "• Max PV Input Power: Up to 12,000 W (depending on configuration) / 9,600 W",
                "• MPPT Trackers: 2 independent MPPT trackers (1 string per MPPT)",
                "• MPPT Voltage Range: 150 V – 425 V (Max PV voltage: 500 V)",
                "• Battery Support: Low-voltage lead-acid or lithium-ion batteries (40–60 V range)",
                "• Max Charge / Discharge Current: 135 A – 140 A",
                "• Max Efficiency: 97.6% (Euro efficiency: 96.5%)",
                "• Protection Rating: IP65 (suitable for outdoor installation)",
                "• Dimensions & Weight: 376 × 470 × 241.5 mm; approx. 17.6 – 19 kg"
            ],
            whatsappMsg: "Deye SUN-6K-SG04LP1-EU 6kW Solar Hybrid Inverter"
        },

        {id: "p37", pageUrl: "products/SUN-8K-SG01LP1-EU.html",
            name: "Deye SUN-8K-SG01LP1-EU 8kW Solar Hybrid Inverter",
            category: "Inverters", "subcategory": ["Hybrid inverters", "On/Off-grid inverters"],
            price: 29000,
            stock: true,
            mainImg: "images/Deye-8k-hy.png",
            thumbnails: "images/Deye-8k-hy-1.png",
            description: "The Deye SUN-8K-SG01LP1-EU is a 8 kW single-phase low-voltage hybrid solar inverter designed for residential and light commercial use",
            specs: [
                "• Rated AC Output: 8,000W (Max AC output: 8,800W)",
                "• Max PV Input Power: 10,400W",
                "• Max DC Input Voltage: 500V",
                "• MPPT Voltage Range: 150V – 425V (2 independent MPPT trackers)",
                "• Max DC Input Power: 10,400W",
                "• Battery Compatibility: Low-voltage 40–60V (Lead-acid or Lithium-ion)",
                "• Charge/Discharge Current: Max 190A / 190A",
                "• MPPT Trackers: 2 MPPT trackers with 2+2 string configuration (Max efficiency: 97.6%)",
                "• Protection Rating: IP65 dust and water resistance",
                "• Parallel Operation: Supports up to 16 units in parallel (on/grid and off-grid)",
                "• Control & Interface: Color touch LCD, RS485/CAN communication, and 6 programmable time periods for battery charging/discharging.",
                "• Dimensions & Weight:"
            ],
            whatsappMsg: "Deye SUN-8K-SG01LP1-EU 8kW Solar Hybrid Inverter"
        },

        {id: "p38", pageUrl: "products/SUN-10K-SG02LP1-EU-AM3.html",
            name: "Deye SUN-10K-SG02LP1-EU-AM3 10kW Solar Hybrid Inverter",
            category: "Inverters", "subcategory": ["Hybrid inverters", "On/Off-grid inverters"],
            price: 42000,
            stock: true,
            mainImg: "images/Deye-10k-hy.png",
            thumbnails: ["images/Deye-10k-hy-1.png", "images/Deye-10k-hy-2.png"],
            description: "The Deye SUN-10K-SG02LP1-EU-AM3 is a 10 kW single-phase low-voltage hybrid solar inverter designed for residential and light commercial use",
            specs: [
                "• Rated AC Output Power: 10,000 W (10 kW)",
                "• Battery Compatibility: Low-voltage (LV) 48V lead-acid or lithium-ion batteries (operating range 40V–60V)",
                "• Max Charge/Discharge Current: 220 A",
                "• MPPT Trackers: 3 independent MPPT trackers (with multiple string inputs)",
                "• Maximum Efficiency: Up to 97.6%",
                "• Enclosure Rating: IP65 dust and water resistance for outdoor installation",
                "• Physical Dimensions: 420 x 670 x 233 mm",
                "• Weight: 35.6 kg"
            ],
            whatsappMsg: "Deye SUN-10K-SG02LP1-EU-AM3 10kW Solar Hybrid Inverter"
        },

        {id: "p39", pageUrl: "products/SUN-12K-SG02LP1-EU-AM3.html",
            name: "Deye SUN-12K-SG02LP1-EU-AM3 12kW Solar Hybrid Inverter",
            category: "Inverters", "subcategory": ["Hybrid inverters", "On/Off-grid inverters"],
            price: 44000,
            stock: true,
            mainImg: "images/Deye-10k-hy.png",
            thumbnails: ["images/Deye-10k-hy-1.png", "images/Deye-10k-hy-2.png"],
            description: "The Deye SUN-12K-SG02LP1-EU-AM3 is a 12 kW single-phase low-voltage hybrid solar inverter designed for residential and light commercial use",
            specs: [
                "• Type: Single-phase hybrid inverter (on-grid, off-grid, and UPS modes)",
                "• Rated AC Output: 12,000 W (12 kW)",
                "• Battery Compatibility: Low-voltage 48V (40V–60V) lead-acid or lithium-ion batteries",
                "• Max Charge/Discharge Current: 250 A",
                "• MPPT Trackers: 3 independent MPPT trackers",
                "• Max Efficiency: Up to 97.6% (Euro efficiency 96.5%)",
                "• Protection Rating: IP65 (outdoor-rated)",
                "• Parallel Operation: Support for up to 16 units in parallel",
                "• Additional Features: Colorful touch LCD, AC coupling support, generator energy storage support, and Wi-Fi monitoring.",
                "• Dimensions & Weight: 420 x 670 x 233 mm, weighing 35.6 kg"
            ],
            whatsappMsg: "Deye SUN-12K-SG02LP1-EU-AM3 12kW Solar Hybrid Inverter"
        },

        {id: "p40", pageUrl: "products/SUN-12K-SG04LP3-EU.html",
            name: "Deye SUN-12K-SG04LP3-EU 12kW Solar Hybrid Inverter",
            category: "Inverters", "subcategory": ["Hybrid inverters", "On/Off-grid inverters"],
            price: 47000,
            stock: true,
            mainImg: "images/Deye-10k-hy.png",
            thumbnails: ["images/Deye-10k-hy-1.png", "images/Deye-10k-hy-2.png"],
            description: "The Deye SUN-12K-SG04LP3-EU is a 12 kW three-phase low-voltage hybrid solar inverter designed for residential and light commercial use",
            specs: [
                "• Rated AC Output Power: 12,000 W (Max AC output: 13,200 W)",
                "• Battery Compatibility: 48V low-voltage Lead-acid or Lithium-ion (Voltage range: 40–60V)",
                "• Max Charge / Discharge Current: 240 A",
                "• Max DC Input Power: 15,600 W (Dual MPPT trackers, 200–650V MPPT range)",
                "• Max Efficiency: 97.6% (European efficiency: 97.0%)",
                "• AC Output Voltage/Frequency: 230/400V, 50/60 Hz (3L/N/PE)",
                "• Enclosure / Protection Rating: IP65",
                "• Dimensions & Weight: 422 × 699.3 × 279 mm; 33.6 kg",
                "• Parallel Operation: Supports up to 10 units in parallel"
            ],
            whatsappMsg: "Deye SUN-12K-SG04LP3-EU 12kW Solar Hybrid Inverter"
        },

        {id: "p41", pageUrl: "products/SUN-16K-SG01LP1-EU.html",
            name: "Deye SUN-16K-SG01LP1-EU 16kW Solar Hybrid Inverter",
            category: "Inverters", "subcategory": ["Hybrid inverters", "On/Off-grid inverters"],
            price: 55300,
            stock: true,
            mainImg: "images/deye-16k.png",
            thumbnails: ["images/deye-16k-1.png", "images/deye-16k-2.png"],
            description: "The Deye SUN-16K-SG01LP1-EU is a 16 kW single-phase low-voltage hybrid solar inverter designed for residential and light commercial use",
            specs: [
                "• Rated AC Output: 16,000 W (16 kW)",
                "• Max DC Input Power: 25600 W",
                "• Battery Compatibility: Low-voltage lead-acid or lithium-ion batteries (40–60V)",
                "• Max Charge/Discharge Current: 290 A",
                "• MPPT Range: 150 V to 425 V",
                "• MPPT Trackers: 3 independent MPPT trackers",
                "• Max Efficiency: 97.60%",
                "• Protection Rating: IP65 (dustproof and water-resistant for outdoor installation)",
                "• Dimensions & Weight: 464 x 763 x 282 mm, weighing 52 kg"
            ],
            whatsappMsg: "Deye SUN-16K-SG01LP1-EU 16kW Solar Hybrid Inverter"
        },

        {id: "p42", pageUrl: "products/SUN-16K-SG05LP3-EU-SM2.html",
            name: "Deye SUN-16K-SG05LP3-EU-SM2 16kW Solar Hybrid Inverter",
            category: "Inverters", "subcategory": ["Hybrid inverters", "On/Off-grid inverters"],
            price: 63000,
            stock: true,
            mainImg: "images/deye-16k-3p.png",
            thumbnails: "images/deye-16k-3p.png", 
            description: "The Deye SUN-16K-SG05LP3-EU-SM2 is a 16 kW three-phase low-voltage hybrid solar inverter designed for residential and light commercial use",
            specs: [
                "• ated AC Output: 16 kW (3-phase, 100% unbalanced output supported)",
                "• MPPT Inputs: 2 independent MPPT trackers (PV voltage range 160–650V, max PV input power up to around 20,800W–32,000W depending on configuration)",
                "• Battery Compatibility: 48V low-voltage lead-acid or lithium-ion batteries (40–60V range) with self-adapt BMS",
                "• Max Charge/Discharge Current: Up to 350A",
                "• Maximum efficiency: 97.6%",
                "• Parallel Operation: Supports up to 10 units in parallel for on-grid and off-grid setups",
                "• Additional Features: AC coupling to retrofit existing solar systems, diesel generator energy support, 6 programmable time periods for battery charging/discharging, and IP65 environmental protection"
            ],
            whatsappMsg: "Deye SUN-16K-SG05LP3-EU-SM2 16kW Solar Hybrid Inverter"
        },

        {id: "p43", pageUrl: "products/SUN-18K-SG05LP3-EU-SM2.html",
            name: "Deye SUN-18K-SG05LP3-EU-SM2 18kW 3phase Solar Hybrid Inverter",
            category: "Inverters", "subcategory": ["Hybrid inverters", "On/Off-grid inverters"],
            price: 67000,
            stock: true,
            mainImg: "images/deye-16k-3p.png",
            thumbnails: "images/deye-16k-3p.png", 
            description: "The Deye SUN-18K-SG05LP3-EU-SM2 is a 18 kW three-phase low-voltage hybrid solar inverter designed for residential and light commercial use",
            specs: [
                "• ated AC Output: 18 kW (3-phase, 100% unbalanced output supported)",
                "• MPPT Inputs: 2 independent MPPT trackers (PV voltage range 160–650V, max PV input power up to around 20,800W–32,000W depending on configuration)",
                "• Battery Compatibility: 48V low-voltage lead-acid or lithium-ion batteries (40–60V range) with self-adapt BMS",
                "• Max Charge/Discharge Current: Up to 350A",
                "• Maximum efficiency: 97.6%",
                "• Parallel Operation: Supports up to 10 units in parallel for on-grid and off-grid setups",
                "• Additional Features: AC coupling to retrofit existing solar systems, diesel generator energy support, 6 programmable time periods for battery charging/discharging, and IP65 environmental protection"
            ],
            whatsappMsg: "Deye SUN-18K-SG05LP3-EU-SM2 18kW Solar Hybrid Inverter"
        },

        {id: "p44", pageUrl: "products/SUN-20K-SG05LP3-EU-SM2.html",
            name: "Deye SUN-20K-SG05LP3-EU-SM2 20kW 3phase Solar Hybrid Inverter",
            category: "Inverters", "subcategory": ["Hybrid inverters", "On/Off-grid inverters"],
            price: 75000,
            stock: true,
            mainImg: "images/deye-16k-3p.png",
            thumbnails: "images/deye-16k-3p.png", 
            description: "The Deye SUN-20K-SG05LP3-EU-SM2 is a 20 kW three-phase low-voltage hybrid solar inverter designed for residential and light commercial use",
            specs: [
                "• ated AC Output: 20 kW (3-phase, 100% unbalanced output supported)",
                "• MPPT Inputs: 2 independent MPPT trackers (PV voltage range 160–650V, max PV input power up to around 20,800W–32,000W depending on configuration)",
                "• Battery Compatibility: 48V low-voltage lead-acid or lithium-ion batteries (40–60V range) with self-adapt BMS",
                "• Max Charge/Discharge Current: Up to 350A",
                "• Maximum efficiency: 97.6%",
                "• Parallel Operation: Supports up to 10 units in parallel for on-grid and off-grid setups",
                "• Additional Features: AC coupling to retrofit existing solar systems, diesel generator energy support, 6 programmable time periods for battery charging/discharging, and IP65 environmental protection"
            ],
            whatsappMsg: "Deye SUN-20K-SG05LP3-EU-SM2 20kW Solar Hybrid Inverter"
        },

        {id: "p45", pageUrl: "products/SUN-25K-SG01-HP3-EU-AM2.html",
            name: "Deye SUN-25K-SG01-HP3-EU-AM2 25kW 3phase Solar Hybrid Inverter",
            category: "Inverters", "subcategory": ["Hybrid inverters", "On/Off-grid inverters"],
            price: 93000,
            stock: true,
            mainImg: "images/deye-25k.png",
            thumbnails: ["images/deye-25k-1.png", "images/deye-25k-2.png"],
            description: "The Deye SUN-25K-SG01-HP3-EU-AM2 is a 25 kW three-phase high-voltage hybrid solar inverter designed for residential and light commercial use",
            specs: [
                "• Rated AC Output Power: 25 kW (three-phase 230/400V or 220/380V, 50/60 Hz)",
                "• MPPT Trackers: 2 independent MPPT trackers",
                "• Max PV Input Voltage: 1000V (MPPT range typically 150V–850V / 300V–850V)",
                "• Battery Compatibility: High-voltage lithium-ion (or compatible lead-acid) batteries, operating range generally 160V–700V (up to 180V–800V depending on configuration)",
                "• Max Charging / Discharging Current: 50A",
                "• Max Efficiency: Up to 97.6% (Euro efficiency ~97.0%)",
                "• Protection Rating: IP65 (suitable for outdoor installation)",
                "• Operating Temperature: -40°C to +60°C"
            ],
            whatsappMsg: "Deye SUN-25K-SG01-HP3-EU-AM2 25kW Solar Hybrid Inverter"
        },

        {id: "p46", pageUrl: "products/GL48200S.html",
            name: "Megatank GT Powertank GL48200S 48V 200Ah Lithium-ion Battery",
            category: "Batteries", "subcategory": "Lithium Batteries",
            price: 24000,
            stock: true,
            mainImg: "images/mega-10kwh.png",
            thumbnails: ["images/mega-10kwh-1.png", "images/mega-10kwh-2.png"],
            description: "The Megatank GT Powertank GL48200S is a 48V 200Ah lithium-ion battery designed for solar energy storage applications, providing reliable and efficient energy storage for residential and commercial solar systems.",
            specs: [
                "Rated voltage(V)：51.2V",
                "Rated capacity(Wh)：10547Wh@100A/25℃",
                "Discharging voltage range(V)：44.8V - 56V",
                "Charging voltage range(V)：55.2V - 56V",
                "Charging mode：CC-CV",
                "Recommended charging/discharging current(V)：50A",
                "Max. continuous charging/discharging current(V)：100A",
                "Peak discharging current(V)：130≤I<200A@10sec; 200≤I<300A@3sec",
                "Max continuous output power(W)：5000W",
                "Operating temperature range(°C)：0℃-55℃ (charging)；-20℃-55℃ (discharging)",
                "Ambient temperature range(°C)：Recommended-10℃-40℃",
                "Cycle life：6000 cycles",
                "Built-in fire extinguisher：Optional"
            ],
            whatsappMsg: "Megatank GT Powertank GL48200S 48V 200Ah Lithium-ion Battery"
        },

        {id: "p47", pageUrl: "products/SPS-220V-6kW-15kWh.html",
            name: "Smart Power Station 220V/6kW 15kWh",
            category: ["Power Stations", "Inverters", "Batteries"], "subcategory": ["Smart Power Stations", "Lithium Batteries", "Non Portable"],
            price: 22000,
            stock: true,
            mainImg: "images/sps6k.png",
            thumbnails: ["images/sps6k-1.png", "images/sps6k-2.png"],
            description: "The Blue Carbon Smart Power Station is an all-in-one solar and lithium-ion energy storage system built by Blue Carbon for residential, rural, and light commercial use.",
            specs: [
                "Battery Parameter",
                "Nominal capacity: 300Ah",
                "Nominal voltage: 51.2V",
                "Electricity(kWh): 15kWh",
                "Inverter AC Output",
                "Rated power: 5kW",
                "Peak power: 10kW",
                "Max power(kW): 6kW",
                "Voltage(VAC): 208/220/230/240",
                "Frequency: 50/60Hz±0.1%",
                "Switch time (ms): 10(normal mode)/ 10(UPS mode)",
                "Max.parallel quantity: 9 groups(54kWh)",
                "Photovoltaic/AC Input",
                "Rated input voltage (VAC): 208/220/230/240;L+N+PE",
                "Solar charger type: MPPT",
                "Max PV input current / input power: 18A/6000W",
                "MPPT range@operating voltage (VDC): "
            ],
            whatsappMsg: "Smart Power Station 220V/6kW 15kWh"
        },

        {id: "p48", pageUrl: "products/SPS-220V-12kW-30kWh.html",
            name: "Smart Power Station 220V/12kW 30kWh",
            category: ["Power Stations", "Inverters", "Batteries"], "subcategory": ["Smart Power Stations", "Lithium Batteries", "Non Portable"],
            price: 45000,
            stock: true,
            mainImg: "images/sps12k.png",
            thumbnails: ["images/sps12k-1.png", "images/sps12k-2.png"],
            description: "The Blue Carbon Smart Power Station is an all-in-one solar and lithium-ion energy storage system built by Blue Carbon for residential, rural, and light commercial use.",
            specs: [
                "Battery Parameter",
                "Nominal capacity: 600Ah",
                "Nominal voltage: 51.2V",
                "Electricity(kWh): 30kWh",
                "Inverter AC Output",
                "Max power(kW): 12kW",
                "Voltage(VAC): 208/220/230/240",
                "Frequency: 50/60Hz±0.1%",
                "Switch time (ms): 10(normal mode)/ 10(UPS mode)",
                "Max.parallel quantity: 4 groups(48kWh)",
                "Photovoltaic/AC Input",
                "Rated input voltage (VAC): 208/220/230/240;L+N+PE",
                "Solar charger type: MPPT",
                "Max PV input current / input power: 18A/6000W ×2",
                "MPPT range@operating voltage per unit(VDC): 120~450"
            ],
            whatsappMsg: "Smart Power Station 220V/12kW 30kWh"
        },

        {id: "p49", pageUrl: "products/SPS-220V-18kW-45kWh.html",
            name: "Smart Power Station 220V/18kW 45kWh",
            category: ["Power Stations", "Inverters", "Batteries"], "subcategory": ["Smart Power Stations", "Lithium Batteries", "Non Portable"],
            price: 75000,
            stock: true,
            mainImg: "images/sps18k.png",
            thumbnails: ["images/sps18k-1.png"],
            description: "The Blue Carbon Smart Power Station is an all-in-one solar and lithium-ion energy storage system built by Blue Carbon for residential, rural, and light commercial use.",
            specs: [
                "Battery Parameter",
                "Nominal capacity: 900Ah",
                "Nominal voltage: 51.2V",
                "Electricity(kWh): 45kWh",
                "Inverter AC Output",
                "Max power(kW): 18kW",
                "Voltage(VAC): 208/220/230/240",
                "Frequency: 50/60Hz±0.1%",
                "Switch time (ms): 10(normal mode)/ 10(UPS mode)",
                "Max.parallel quantity: 3 groups(54kWh)",
                "Photovoltaic/AC Input",
                "Rated input voltage (VAC): 208/220/230/240;L+N+PE",
                "Solar charger type: MPPT",
                "Max PV input current / input power: 18A/6000W ×3",
                "MPPT range@operating voltage per unit(VDC): 120~450"
            ],
            whatsappMsg: "Smart Power Station 220V/18kW 45kWh"
        },

        {id: "p50", pageUrl: "products/srne-hv-60kwh.html",
            name: "SRNE 61.4kWh High Voltage Lithium Battery",
            category: "Batteries", "subcategory": ["Lithium Batteries", "High Voltage Batteries"],
            price: 170000,
            stock: true,
            mainImg: "images/srne-hv.png",
            thumbnails: ["images/srne-hv-1.png", "images/srne-hv-2.png"],
            description: "The SRNE SR-Ket60A is a 61.4 kWh high-voltage lithium iron phosphate (LiFePO4/LFP) battery energy storage system (ESS) designed for commercial, industrial, and high-capacity residential solar setups",
            specs: [
                "Battery Module Qty in series: 12",
                "System Nominal Voltage (V): 614.4",
                "System Operating Min.Voltage (V): 537.6",
                "System Operating Max.Voltage (V): 700.8",
                "System Energy (kWh): 61.4",
                "System Usable Energy (kWh): 58.4",
                "Weight Approximate (kg): 595.8"
            ],
            whatsappMsg: "SRNE 61.4kWh High Voltage Lithium Battery"
        },

        {id: "p51", pageUrl: "products/srne-60kw.html",
            name: "SRNE 60kW Three-phase High Voltage Hybrid Solar Storage Inverter",
            category: "Inverters", "subcategory": ["Hybrid Inverters", "High Voltage Inverters"],
            price: 75000,
            stock: true,
            mainImg: "images/srne-60kw.png",
            thumbnails: ["images/srne-60kw-1.png", "images/srne-60kw-2.png", "images/srne-60kw-3.png"],
            description: "SRNE 60kW Three-phase high-voltage hybrid solar storage inverter engineered for commercial and industrial (C&I) applications, providing efficient energy management and grid support capabilities.",
            specs: [
                "Rated Output Power: 60000W",
                "Max. Apparent Power: 66000VA",
                "Rated Output Current: 86.6Aac",
                "Max. Output Current: 95.3Aac",
                "Load Motor Capacity: 25HP",
                "Max. PV Input Power: 96000W",
                "Switch Time: 10ms (typical value)"
            ],
            whatsappMsg: "SRNE 60kW Three-phase High Voltage Hybrid Solar Storage Inverter"
        },

        {id: "p52", pageUrl: "products/SR-EOS02B-12.html",
            name: "SRNE 12.8V 200Ah SR-EOS02B-12 Lithium Iron Phosphate Battery",
            category: "Batteries", "subcategory": "Lithium Batteries",
            price: 7000,
            stock: true,
            mainImg: "images/srne-12-200.jpg",
            thumbnails: ["images/srne-12-200-1.jpg", "images/srne-12-200-2.jpg"],
            description: "The SRNE SR-EOS02B-12 is a compact, high-performance 12.8V 200Ah Lithium Iron Phosphate (LiFePO₄) battery module designed by SRNE Solar. It functions as a robust energy storage solution for residential solar setups, off-grid systems, RVs, and backup power applications.",
            specs: [
                "• Nominal Voltage: 12.8V",
                "• Rated Capacity: 200Ah",
                "• Rated Energy: 2.56 kWh",
                "• Battery Chemistry: LiFePO₄ (A-grade cells)",
                "• Cycle Life: 6,000 cycles (at 80% DOD, 0.2C, 25°C)",
                "• Weight: 23 kg",
                "• Protection Rating: IP30",
                "• Scalability: Supports up to 4 units connected in parallel",
                "• Communication & Monitoring: CAN, RS485, USB interface for PC setup, standard Bluetooth, and optional Wi-Fi via mobile app.",
                "• Installation: Floor or wall mounting (requires a solid wall >80mm)"
            ],
            whatsappMsg: "SRNE SR-EOS02B-12 12.8V 200Ah Lithium Iron Phosphate Battery"
        },

        {id: "p53", pageUrl: "products/SR-SE05B.html",
            name: "SRNE 51.2V 100Ah 5.12kWh SR-SE05B Lithium Iron Phosphate Battery",
            category: "Batteries", "subcategory": "Lithium Batteries",
            price: 9500,
            stock: true,
            mainImg: "images/SR-SE05B.jpg",
            thumbnails: ["images/SR-SE05B-1.jpg", "images/SR-SE05B-2.jpg"],
            description: "The SRNE SR-SE05B is a high-performance 5.12 kWh low-voltage Lithium Iron Phosphate (LiFePO4) battery module engineered for residential and light commercial solar energy storage. It functions as a wall-mounted or floor-standing component within a 48V-class system, offering extensive longevity and scalable energy capacity.",
            specs: [
                "• Battery Type: LiFePO4 (LFP)",
                "• Rated Voltage: 51.2V (48V class)",
                "• Rated Capacity: 100Ah",
                "• Total Energy: 5.12 kWh",
                "• Cycle Life: 6,000 cycles",
                "• Max Charging Voltage: 57.6V (Over-discharge protection at 44.8V)",
                "• Weight: 44 kg",
                "• Protection Rating: IP30",
                "• Mounting: Wall or floor mounting",
                "• Scalability: Connect up to 16 units in parallel without DIP switches",
                "• Communication: CAN, RS485, USB, Wi-Fi, and Bluetooth app monitoring"
            ],
            whatsappMsg: "SRNE SR-SE05B 51.2V 100Ah 5.12kWh Lithium Iron Phosphate Battery"
        },

        {id: "p54", pageUrl: "products/mc4.html",
            name: "MC4 Solar Connector, single (10 pairs)",
            category: "Accessories", "subcategory": "Solar Connectors",
            price: 250,
            stock: true,
            mainImg: "images/mc4.png",
            thumbnails: ["images/mc4-1.png", "images/mc4-2.png"],
            description: "The MC4 Solar Connector is a high-performance, weather-resistant connector designed for use with solar panels. It provides a secure and reliable connection for transmitting electrical power from the solar panels to the inverter or charge controller.",
            specs: [
                "• Components: 1 Male connector and 1 Female connector (with tin/silver-plated copper contacts and UV-resistant PPO/PC housing)",
                "• Rated Voltage: 1000V DC to 1500V DC",
                "• Rated Current: Up to 30A",
                "• Compatible Wire Size: 2.5mm² to 6mm² (14 AWG to 10 AWG)",
                "• Waterproof Rating: IP67",
                "• Operating Temperature: -40°C to +90°C"
            ],
            whatsappMsg: "MC4 Solar Connector, single"
        },

    ];

    // Pagination settings
    const ITEMS_PER_PAGE = 20;
    const pageFromUrl = Number.parseInt(new URLSearchParams(window.location.search).get('page') || '1', 10);
    let currentPage = Number.isFinite(pageFromUrl) && pageFromUrl > 0 ? pageFromUrl : 1;
    let currentSearchTerm = "";
    let currentCategory = "All";
    let currentSubcategory = "All";
    let currentSort = "default";
    let currentStock = "all";
    let currentMaxPrice = "";
    let currentWishlistOnly = false;

    const wishlistKey = "ev_wishlist_v1";
    function readStoredValue(key) {
        try { return window.localStorage.getItem(key); }
        catch (error) { return null; }
    }
    function writeStoredValue(key, value) {
        try {
            window.localStorage.setItem(key, value);
            return true;
        } catch (error) {
            return false;
        }
    }
    function getWishlist() {
        try {
            const saved = JSON.parse(readStoredValue(wishlistKey) || "[]");
            return Array.isArray(saved) ? saved : [];
        } catch (error) {
            return [];
        }
    }
    function setWishlist(items) { writeStoredValue(wishlistKey, JSON.stringify(items)); }

    function formatPrice(n) {
        return Number(n || 0).toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    function getPricePresentation(product) {
        const currentPrice = Number(product.price) || 0;
        const compareAtPrice = Number(product.compareAtPrice) || 0;
        const isDiscounted = currentPrice > 0 && compareAtPrice > currentPrice;
        const savingsPercent = isDiscounted ? Math.round((compareAtPrice - currentPrice) / compareAtPrice * 100) : 0;
        const promotionLabel = String(product.promotionLabel || (isDiscounted ? 'Sale' : '')).trim();
        return { currentPrice, compareAtPrice, isDiscounted, savingsPercent, promotionLabel };
    }

    function getTaxonomyValues(product, singularKey, pluralKey) {
        const values = [product?.[singularKey], product?.[pluralKey]]
            .flatMap(value => Array.isArray(value) ? value : [value])
            .map(value => String(value || '').trim())
            .filter(Boolean);
        return [...new Set(values)];
    }

    function getProductCategories(product) {
        return getTaxonomyValues(product, 'category', 'categories');
    }

    function getProductSubcategories(product) {
        return getTaxonomyValues(product, 'subcategory', 'subcategories');
    }

    function getProductCategoryPaths(product) {
        const categories = getProductCategories(product);
        const subcategories = getProductSubcategories(product);
        if (!subcategories.length) return categories;
        return categories.flatMap(category => [`${category} > ${subcategories.join(', ')}`]);
    }

    function renderPriceMarkup(product) {
        const price = getPricePresentation(product);
        return `${price.isDiscounted ? `<span class="price-before">Was GH₵ ${formatPrice(price.compareAtPrice)}</span>` : ''}` +
            `<span class="price-current">GH₵ ${formatPrice(price.currentPrice)}</span>` +
            `${price.isDiscounted && price.savingsPercent > 0 ? `<span class="discount-badge">Save ${price.savingsPercent}%</span>` : ''}` +
            `${price.promotionLabel ? `<span class="promotion-label">${escapeHtml(price.promotionLabel)}</span>` : ''}`;
    }

    function renderProductPagePrice() {
        const productInfo = window.EV_PRODUCT;
        if (!productInfo) return;
        const product = productsData.find(item => item.id === productInfo.id);
        if (!product) return;

        const productPage = document.querySelector('.product');
        const title = productPage?.querySelector('h1');
        const description = title?.nextElementSibling?.matches('p') ? title.nextElementSibling : null;
        const gallery = productPage?.querySelector('.gallery');
        const priceElement = productPage?.querySelector('[data-product-price]');
        const statusElement = productPage?.querySelector('.status');
        const addButton = productPage?.querySelector('[data-product-add]');
        const wishlistButton = productPage?.querySelector('[data-wish]');

        if (title) title.textContent = product.name;
        if (description) description.textContent = product.description || '';
        productPage?.querySelectorAll('[data-product-taxonomy], .product-taxonomy').forEach(element => element.remove());
        const breadcrumbs = productPage?.querySelector('.crumbs');
        if (breadcrumbs?.lastChild?.nodeType === Node.TEXT_NODE) breadcrumbs.lastChild.nodeValue = ` / ${product.name}`;
        if (gallery) {
            const images = [product.mainImg, ...(product.thumbnails || [])].filter(Boolean);
            gallery.innerHTML = images.map(src => `<img src="${escapeHtml(productImageUrl(src))}" alt="${escapeHtml(product.name)}" loading="lazy" decoding="async">`).join('');
        }
        if (statusElement) {
            statusElement.textContent = product.stock ? 'In stock' : 'Out of stock';
            statusElement.classList.toggle('out-of-stock', !product.stock);
        }
        if (addButton) {
            addButton.dataset.productAdd = product.id;
            addButton.disabled = !product.stock;
            addButton.textContent = product.stock ? 'Add to cart' : 'Out of stock';
        }
        if (wishlistButton) wishlistButton.dataset.wish = product.id;

        const specificationsHeading = Array.from(productPage?.querySelectorAll('h2') || [])
            .find(heading => heading.textContent.trim().toLowerCase() === 'specifications');
        const specificationsList = specificationsHeading?.nextElementSibling;
        if (specificationsList?.matches('ul, ol')) {
            const specifications = Array.isArray(product.specs) ? product.specs : [];
            specificationsHeading.hidden = specifications.length === 0;
            specificationsList.hidden = specifications.length === 0;
            specificationsList.innerHTML = specifications.map(spec => `<li>${escapeHtml(spec)}</li>`).join('');
        }

        const whatsappLink = productPage?.querySelector('a[href^="https://wa.me/"]');
        if (whatsappLink) whatsappLink.href = `https://wa.me/233249976762?text=${encodeURIComponent(`Hello, I am interested in ${product.whatsappMsg || product.name}`)}`;
        const emailLink = productPage?.querySelector('a.email-enquiry[href^="mailto:"]');
        if (emailLink) {
            emailLink.href = `mailto:info@elitevoltsystems.com?subject=${encodeURIComponent(`Product enquiry - ${product.name}`)}&body=${encodeURIComponent(`Hello EliteVolt Systems,\n\nI am interested in ${product.name}. Please share availability and details.`)}`;
        }

        document.title = `${product.name} | EliteVolt Systems Ghana`;
        const descriptionMeta = document.querySelector('meta[name="description"]');
        if (descriptionMeta) descriptionMeta.content = product.description || product.name;
        setMetaContent('meta[property="og:title"]', document.title);
        setMetaContent('meta[property="og:description"]', product.description || product.name);
        setMetaContent('meta[property="og:image"]', absoluteProductImageUrl(product.mainImg));
        document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
            try {
                const schema = JSON.parse(script.textContent);
                if (schema['@type'] === 'Product') {
                    schema.name = product.name;
                    schema.description = product.description || product.name;
                    schema.sku = product.id;
                    schema.category = getProductCategoryPaths(product).join(' | ');
                    schema.image = [product.mainImg, ...(product.thumbnails || [])].filter(Boolean).map(absoluteProductImageUrl);
                    if (schema.offers) {
                        schema.offers.price = String(product.price);
                        schema.offers.availability = product.stock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock';
                    }
                    script.textContent = JSON.stringify(schema);
                } else if (schema['@type'] === 'BreadcrumbList') {
                    const lastCrumb = schema.itemListElement?.[schema.itemListElement.length - 1];
                    if (lastCrumb) lastCrumb.name = product.name;
                    script.textContent = JSON.stringify(schema);
                }
            } catch (error) {
                // Ignore unrelated or malformed structured data blocks.
            }
        });
        updateRelatedProducts();
        Object.assign(productInfo, { name: product.name, price: product.price, description: product.description, image: absoluteProductImageUrl(product.mainImg) });

        if (!priceElement) return;
        const price = getPricePresentation(product);
        priceElement.classList.toggle('is-discounted', price.isDiscounted);
        priceElement.innerHTML = renderPriceMarkup(product);
    }

    // Generic Meta Pixel event helper. Works immediately once the Meta Pixel
    // ID is set (see META-COMMERCE-SETUP.txt); otherwise events are queued
    // locally so nothing errors and they can still be inspected for testing.
    function trackMetaEvent(eventName, payload) {
        if (typeof window.fbq === "function") {
            window.fbq("track", eventName, payload);
        } else {
            window._eliteVoltMetaEvents = window._eliteVoltMetaEvents || [];
            window._eliteVoltMetaEvents.push({ event: eventName, payload, timestamp: Date.now() });
        }
        window.dispatchEvent(new CustomEvent("elitevolt:" + eventName.toLowerCase(), { detail: payload }));
    }

    function trackMetaAddToCart(product, quantity = 1) {
        trackMetaEvent("AddToCart", {
            content_ids: [product.id],
            content_name: product.name,
            content_type: "product",
            value: Number(product.price) * quantity,
            currency: "GHS",
            contents: [{ id: product.id, quantity }]
        });
    }

    function trackMetaCheckout(items, total) {
        trackMetaEvent("InitiateCheckout", {
            content_ids: items.map(i => i.id),
            content_type: "product",
            value: total,
            currency: "GHS",
            num_items: items.reduce((sum, i) => sum + i.quantity, 0),
            contents: items.map(i => ({ id: i.id, quantity: i.quantity }))
        });
    }

    // Cart state
    let cart = [];
    function loadCart() {
        try {
            const saved = JSON.parse(readStoredValue("ev_cart_v4") || "[]");
            cart = Array.isArray(saved) ? saved : [];
        } catch (error) {
            cart = [];
        }
        validateCart();
        updateAllUI();
    }
    function saveCart() { writeStoredValue("ev_cart_v4", JSON.stringify(cart)); }
    function validateCart() {
        let changed = false;
        cart = cart.filter(item => {
            const product = productsData.find(entry => entry.id === item.id);
            if (!product || !product.stock) { changed = true; return false; }
            if (Number(item.price) !== Number(product.price) || item.name !== product.name) {
                item.price = product.price;
                item.name = product.name;
                changed = true;
            }
            return true;
        });
        if (changed) saveCart();
    }

    function addToCart(productId) { 
        const p = productsData.find(pr=> pr.id === productId); 
        if(!p) return; 
        if(!p.stock) { alert(`❌ ${p.name} out of stock`); return; } 
        const exist = cart.find(i=> i.id === productId); 
        if(exist) exist.quantity += 1; 
        else cart.push({ id: p.id, name: p.name, price: p.price, quantity: 1 }); 
        saveCart(); 
        updateAllUI(); 
        trackMetaAddToCart(p, 1);
        showToast(`✓ ${p.name} added`);
    }
    function changeQuantity(id, delta) { 
        const idx = cart.findIndex(i=> i.id === id); 
        if(idx !== -1) { 
            const prodValid = productsData.find(p=> p.id === id && p.stock === true); 
            if(delta > 0 && !prodValid) { cart.splice(idx,1); saveCart(); updateAllUI(); showToast("Removed unavailable"); return; } 
            const newQ = cart[idx].quantity + delta; 
            if(newQ <= 0) cart.splice(idx,1); 
            else cart[idx].quantity = newQ; 
            saveCart(); 
            updateAllUI(); 
        } 
    }

    function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateAllUI();
    showToast("Item removed");
}
    function clearCart() { if(cart.length===0) return; if(confirm("Clear all items?")) { cart = []; saveCart(); updateAllUI(); showToast("Cart cleared"); } }

    // Get filtered products based on search
  function getFilteredProducts() {
    const normalizeSearchText = value => String(value || '').normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const terms = normalizeSearchText(currentSearchTerm).match(/[a-z0-9]+/g) || [];
    let filtered = productsData.filter(product => {
        const searchable = normalizeSearchText([
            product.name, product.id, ...getProductCategories(product), ...getProductSubcategories(product)
        ].join(' '));
        const searchableCompact = searchable.replace(/[^a-z0-9]/g, '');
        const matchesSearch = terms.length === 0 || terms.every(term => {
            const variants = [term];
            if (/[^aeiou]y$/.test(term)) variants.push(term.slice(0, -1) + 'ies');
            else if (term.endsWith('ies')) variants.push(term.slice(0, -3) + 'y');
            else if (term.endsWith('s')) variants.push(term.slice(0, -1));
            else variants.push(term + 's');
            return variants.some(variant => searchable.includes(variant) || searchableCompact.includes(variant));
        });
        const matchesCategory = currentCategory === "All" || getProductCategories(product).includes(currentCategory);
        const matchesSubcategory = currentSubcategory === "All" || getProductSubcategories(product).includes(currentSubcategory);
        const matchesStock = currentStock === "all" || (currentStock === "in" ? product.stock : !product.stock);
        const maxPrice = Number(currentMaxPrice);
        const matchesPrice = !currentMaxPrice || (!Number.isNaN(maxPrice) && Number(product.price) <= maxPrice);
        const matchesWishlist = !currentWishlistOnly || getWishlist().includes(product.id);
        return matchesSearch && matchesCategory && matchesSubcategory && matchesStock && matchesPrice && matchesWishlist;
    });

    const compareAlphabetically = (a, b) => a.localeCompare(b, 'en', { sensitivity: 'base', numeric: true });
    const primaryCategory = product => getProductCategories(product).slice().sort(compareAlphabetically)[0] || '';
    filtered.sort((a,b) => {
        if (currentSort === "price-asc") return Number(a.price) - Number(b.price);
        if (currentSort === "price-desc") return Number(b.price) - Number(a.price);
        if (currentSort === "name") return a.name.localeCompare(b.name);
        if (currentSort === "stock") return Number(b.stock) - Number(a.stock);
        return compareAlphabetically(primaryCategory(a), primaryCategory(b)) || compareAlphabetically(a.name, b.name);
    });
    return filtered;
  }

    function renderCategoryOptions(select) {
        if (!select) return;
        const selectedValue = select.value || currentCategory;
        const compareAlphabetically = (a, b) => a.localeCompare(b, 'en', { sensitivity: 'base', numeric: true });
        const categories = [...new Set(productsData.flatMap(getProductCategories))]
            .sort(compareAlphabetically);
        const options = categories.map(category => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join('');
        select.innerHTML = `<option value="All">All Categories</option>${options}`;
        const hasSelection = Array.from(select.options).some(option => option.value === selectedValue);
        select.value = hasSelection ? selectedValue : 'All';
        currentCategory = select.value;
    }

    function renderSubcategoryOptions(select, category) {
        if (!select) return;
        const compareAlphabetically = (a, b) => a.localeCompare(b, 'en', { sensitivity: 'base', numeric: true });
        const subcategories = category === 'All' ? [] : [...new Set(productsData
            .filter(product => getProductCategories(product).includes(category))
            .flatMap(getProductSubcategories))].sort(compareAlphabetically);

        select.innerHTML = `<option value="All">All Subcategories</option>${subcategories.map(subcategory =>
            `<option value="${escapeHtml(subcategory)}">${escapeHtml(subcategory)}</option>`
        ).join('')}`;

        const hasSubcategories = subcategories.length > 0;
        select.hidden = !hasSubcategories;
        select.style.display = hasSubcategories ? '' : 'none';
        select.disabled = !hasSubcategories;
        if (!hasSubcategories || !subcategories.includes(currentSubcategory)) currentSubcategory = 'All';
        select.value = currentSubcategory;
    }

    // Pagination logic
    function getPaginatedProducts() {
        const filtered = getFilteredProducts();
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filtered.slice(start, start + ITEMS_PER_PAGE);
    }

    function getTotalPages() {
        const filtered = getFilteredProducts();
        return Math.ceil(filtered.length / ITEMS_PER_PAGE);
    }

    function syncShopPageUrl() {
        if (!document.getElementById('productsGrid')) return;
        const url = new URL(window.location.href);
        if (currentPage > 1) url.searchParams.set('page', String(currentPage));
        else url.searchParams.delete('page');
        window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`);
    }

    function slugify(text) {
        return String(text).toLowerCase().trim()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
    }

    function productPagePath(product) {
        return product.pageUrl || `products/${slugify(product.name)}.html`;
    }

    function productPageHref(product) {
        let path = productPagePath(product);
        const onProductPage = /\/products\/[^/]+$/i.test(window.location.pathname);
        if (onProductPage) path = path.replace(/^products\//i, '');

        const returnTo = document.getElementById('productsGrid')
            ? `${window.location.pathname}${window.location.search}${window.location.hash}`
            : new URLSearchParams(window.location.search).get('return');
        return returnTo ? `${path}${path.includes('?') ? '&' : '?'}return=${encodeURIComponent(returnTo)}` : path;
    }

    function restoreShopReturnLinks() {
        const returnTo = new URLSearchParams(window.location.search).get('return');
        if (!returnTo) return;

        let destination;
        try { destination = new URL(returnTo, window.location.href); }
        catch (error) { return; }
        if (destination.origin !== window.location.origin || !/\/shop\.html$/i.test(destination.pathname)) return;
        const targetHref = `${destination.pathname}${destination.search}${destination.hash}`;

        document.querySelectorAll('a[href]').forEach(link => {
            if (link.classList.contains('mini-cart-link')) return;
            let linkUrl;
            try { linkUrl = new URL(link.getAttribute('href'), window.location.href); }
            catch (error) { return; }
            if (linkUrl.origin === destination.origin && /\/shop\.html$/i.test(linkUrl.pathname)) {
                link.href = targetHref;
            }
        });
    }

    function productImageUrl(src) {
        const value = String(src || '').trim();
        if (!value || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(value)) return value;
        const path = value.replace(/^\/+/, '').replace(/^\.\//, '');
        return /\/products\/[^/]+$/i.test(window.location.pathname) ? `../${path}` : path;
    }

    function absoluteProductImageUrl(src) {
        const value = productImageUrl(src);
        try { return new URL(value, window.location.href).href; }
        catch (error) { return value; }
    }

    function setMetaContent(selector, content) {
        const meta = document.querySelector(selector);
        if (meta) meta.setAttribute('content', content);
    }

    function normalizeRecommendationValue(value) {
        return String(value || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, ' ')
            .trim();
    }

    function recommendationSubcategories(product) {
        const explicit = getProductSubcategories(product);
        if (explicit.length) return explicit;

        const categories = getProductCategories(product).map(normalizeRecommendationValue);
        const text = normalizeRecommendationValue([
            product.name, product.description, ...(product.specs || [])
        ].join(' '));
        let label = '';

        if (categories.includes('solar kits')) {
            if (/\b(fan|fans|cooling)\b/.test(text)) label = 'Solar Fans';
            else if (/\b(speaker|speakers|audio|karaoke)\b/.test(text)) label = 'Solar Audio';
            else if (/\b(barber|clipper|hair)\b/.test(text)) label = 'Solar Business Kits';
            else label = 'Solar Home Systems';
        } else if (categories.includes('inverters')) {
            label = /\b(hybrid|on off grid)\b/.test(text) ? 'Hybrid Inverters' : 'Off-grid Inverters';
        } else if (categories.includes('batteries')) {
            if (/\b(gel)\b/.test(text)) label = 'Gel Batteries';
            else if (/\b(lithium|lifepo|lfp)\b/.test(text)) label = 'Lithium Batteries';
        } else if (categories.includes('protective devices') && /\b(voltage|current|meter|protection)\b/.test(text)) {
            label = 'Voltage and Current Protection';
        } else if (categories.includes('solar streetlights') && /\b(all in one|integrated)\b/.test(text)) {
            label = 'All-in-One Solar Streetlights';
        }

        return label ? [label] : [];
    }

    function recommendationSubcategory(product) {
        const values = recommendationSubcategories(product);
        return { keys: values.map(normalizeRecommendationValue), label: values.join(', ') };
    }

    const recommendationStopWords = new Set([
        'the', 'and', 'for', 'with', 'from', 'this', 'that', 'your', 'into', 'its', 'are', 'was', 'has', 'have',
        'solar', 'product', 'products', 'system', 'systems', 'series', 'suitable', 'designed', 'includes', 'including',
        'available', 'elitevolt', 'ghana', 'high', 'quality', 'watt', 'watts', 'unit', 'units'
    ]);

    function recommendationTokens(value) {
        return new Set(normalizeRecommendationValue(value).split(/\s+/).filter(token =>
            token.length > 2 && !recommendationStopWords.has(token) && !/^\d+$/.test(token)
        ));
    }

    function recommendationCategoryBonus(categoryA, categoryB) {
        const complementaryPairs = new Map([
            ['batteries|inverters', 24],
            ['inverters|protective devices', 18],
            ['protective devices|solar kits', 10],
            ['batteries|solar kits', 14],
            ['inverters|solar kits', 14],
            ['solar kits|solar streetlights', 8]
        ]);
        const valuesA = (Array.isArray(categoryA) ? categoryA : [categoryA]).map(normalizeRecommendationValue);
        const valuesB = (Array.isArray(categoryB) ? categoryB : [categoryB]).map(normalizeRecommendationValue);
        let bonus = 0;
        valuesA.forEach(category1 => valuesB.forEach(category2 => {
            bonus = Math.max(bonus, complementaryPairs.get([category1, category2].sort().join('|')) || 0);
        }));
        return bonus;
    }

    function scoreRelatedProduct(current, candidate) {
        let score = 0;
        const currentCategories = getProductCategories(current).map(normalizeRecommendationValue);
        const candidateCategories = getProductCategories(candidate).map(normalizeRecommendationValue);
        const currentSubcategory = recommendationSubcategory(current);
        const candidateSubcategory = recommendationSubcategory(candidate);

        if (currentCategories.some(category => candidateCategories.includes(category))) score += 38;
        score += currentSubcategory.keys.filter(key => candidateSubcategory.keys.includes(key)).length * 72;
        score += recommendationCategoryBonus(currentCategories, candidateCategories);

        const currentNameTokens = recommendationTokens(current.name);
        const currentTokens = recommendationTokens([
            current.name, current.description, ...(current.specs || []), ...getProductCategories(current), ...getProductSubcategories(current)
        ].join(' '));
        const candidateNameTokens = recommendationTokens(candidate.name);
        const candidateTokens = recommendationTokens([
            candidate.name, candidate.description, ...(candidate.specs || []), ...getProductCategories(candidate), ...getProductSubcategories(candidate)
        ].join(' '));

        currentTokens.forEach(token => {
            if (!candidateTokens.has(token)) return;
            score += currentNameTokens.has(token) && candidateNameTokens.has(token) ? 9 :
                currentNameTokens.has(token) ? 5 : 2;
        });
        if (candidate.stock) score += 1;
        return score;
    }

    function updateRelatedProducts() {
        const productInfo = window.EV_PRODUCT;
        const grid = document.querySelector('.related-product-grid');
        if (!productInfo || !grid) return;

        const current = productsData.find(product => product.id === productInfo.id);
        const section = grid.closest('.related-products');
        if (!current) {
            if (section) section.hidden = true;
            return;
        }

        const recommendations = productsData
            .filter(product => product.id !== current.id)
            .map(product => ({ product, score: scoreRelatedProduct(current, product) }))
            .filter(result => result.score > 0)
            .sort((a, b) => b.score - a.score || Number(Boolean(b.product.stock)) - Number(Boolean(a.product.stock)) || a.product.name.localeCompare(b.product.name))
            .slice(0, 3)
            .map(result => result.product);

        if (recommendations.length === 0) {
            if (section) section.hidden = true;
            return;
        }
        if (section) section.hidden = false;

        const title = section?.querySelector('h2');
        if (title) title.textContent = 'Related products';
        section?.querySelector('p')?.remove();

        grid.innerHTML = recommendations.map(product => {
            const group = recommendationSubcategory(product);
            const note = group.label || getProductCategories(product).join(', ') || 'Related match';
            return `<a class="related-product-card" href="${escapeHtml(productPageHref(product))}" aria-label="View ${escapeHtml(product.name)}">
                <img src="${escapeHtml(productImageUrl(product.mainImg))}" alt="${escapeHtml(product.name)}" loading="lazy" decoding="async">
                <span class="related-product-copy">
                    <strong>${escapeHtml(product.name)}</strong>
                    <small>${escapeHtml(note)}</small>
                    <b>${renderPriceMarkup(product)}</b>
                </span>
            </a>`;
        }).join('');
    }

    function paintWishlist() {
        const wishes = getWishlist();
        document.querySelectorAll("[data-wish]").forEach(btn => {
            const active = wishes.includes(btn.dataset.wish);
            btn.classList.toggle("active", active);
            btn.setAttribute("aria-pressed", active ? "true" : "false");
            if (btn.classList.contains("product-wishlist")) {
                btn.textContent = active ? "♥ Saved to wishlist" : "♡ Save to wishlist";
            } else {
                btn.textContent = active ? "♥" : "♡";
            }
            btn.setAttribute("aria-label", active ? "Remove from wishlist" : "Add to wishlist");
        });
    }

    function toggleWishlist(id) {
        const items = getWishlist();
        const index = items.indexOf(id);
        if (index >= 0) items.splice(index, 1); else items.push(id);
        setWishlist(items);
        paintWishlist();
    }

    function renderProducts() {
        const container = document.getElementById('productsGrid');
        if(!container) return;
        const totalPages = getTotalPages();
        currentPage = Math.max(1, Math.min(currentPage, Math.max(1, totalPages)));
        syncShopPageUrl();
        const paginated = getPaginatedProducts();
        
        if(paginated.length === 0) {
            const emptyMsg = currentWishlistOnly
                ? '<div style="grid-column:1/-1; text-align:center; padding:2rem;">♡ Your wishlist is empty. Tap the heart on any product to save it here.</div>'
                : '<div style="grid-column:1/-1; text-align:center; padding:2rem;">🔍 No products found</div>';
            container.innerHTML = emptyMsg;
            const pagination = document.getElementById('paginationControls');
            if (pagination) pagination.innerHTML = '';
            return;
        }
        
        container.innerHTML = paginated.map(p => `
            <div class="product-card">
                ${!p.stock ? '<div class="out-of-stock-badge">OUT OF STOCK</div>' : ''}
                <a href="${escapeHtml(productPageHref(p))}" class="product-image-link"><img class="product-image" src="${escapeHtml(p.mainImg)}" alt="${escapeHtml(p.name)}" loading="lazy" decoding="async"></a>
                <div class="product-title-row">
                    <div class="product-title">${escapeHtml(p.name)}</div>
                    <button class="wishlist-btn" type="button" data-wish="${p.id}" aria-label="Add ${escapeHtml(p.name)} to wishlist" aria-pressed="false">♡</button>
                </div>
                <div class="product-price ${getPricePresentation(p).isDiscounted ? 'is-discounted' : ''}">${renderPriceMarkup(p)}</div>
                <div class="product-card-actions">
                    <a class="btn-details product-page-link" href="${escapeHtml(productPageHref(p))}" aria-label="View details for ${escapeHtml(p.name)}"><i class="fas fa-eye"></i> Details</a>
                    <button class="btn-add" ${!p.stock ? 'disabled' : ''} onclick="addToCart('${p.id}')">${p.stock ? 'Add to cart' : 'Out of stock'}</button>
                </div>
            </div>
        `).join('');
        
        // Render pagination buttons
        renderPagination(totalPages);
        paintWishlist();
    }
    
    function renderPagination(totalPages) {
        const container = document.getElementById('paginationControls');
        if(!container) return;
        if(totalPages <= 1) {
            container.innerHTML = '';
            return;
        }
        let html = `<button class="page-btn" onclick="goToPage(${currentPage-1})" ${currentPage===1 ? 'disabled' : ''}>‹ Prev</button>`;
        for(let i=1; i<=totalPages; i++) {
            if(i===1 || i===totalPages || (i>=currentPage-1 && i<=currentPage+1)) {
                html += `<button class="page-btn ${i===currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
            } else if(i===currentPage-2 || i===currentPage+2) {
                html += `<span style="padding:0 4px;">...</span>`;
            }
        }
        html += `<button class="page-btn" onclick="goToPage(${currentPage+1})" ${currentPage===totalPages ? 'disabled' : ''}>Next ›</button>`;
        container.innerHTML = html;
    }
    
    function goToPage(page) {
        const total = getTotalPages();
        if(page < 1 || page > total) return;
        currentPage = page;
        renderProducts();
        // scroll to top of products
        document.querySelector('.products-wrapper')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    function updateAllUI() {
        renderProducts();
        updateCartDrawer();
        updateCartBadge();
    }
    
    function updateCartBadge() {
        const totalItems = cart.reduce((sum,i)=> sum + i.quantity, 0);
        document.querySelectorAll('#cartItemCount, [data-cart-count]').forEach(badge => {
            badge.style.display = totalItems > 0 ? 'inline-flex' : 'none';
            badge.textContent = totalItems > 99 ? '99+' : totalItems;
        });
        const floatingCart = document.getElementById('floatingCartBtn');
        if (floatingCart) {
            const hasItems = totalItems > 0;
            floatingCart.hidden = !hasItems;
            if (hasItems) floatingCart.style.removeProperty('display');
            else floatingCart.style.setProperty('display', 'none', 'important');
        }
    }
    
    function updateCartDrawer() {
        const container = document.getElementById('drawerCartContent');
        if(!container) return;
        if(cart.length===0) { container.innerHTML = '<div class="empty-cart-message">🛒 Your cart is empty</div>'; return; }
        let html = '<ul class="cart-items-list">';
        let total=0;
        cart.forEach(item=> {
            const prod = productsData.find(p=>p.id===item.id);
            const avail = prod && prod.stock;
            if(!avail) return;
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            html += `<li class="cart-item-drawer">
                        <div class="cart-item-info">
                            <strong>${escapeHtml(item.name)}</strong><br>
                            <small>GH₵ ${formatPrice(item.price)}</small>
                        </div>
                        <div class="cart-item-controls">
    <button onclick="changeQuantity('${item.id}',-1)">-</button>
    <span>${item.quantity}</span>
    <button onclick="changeQuantity('${item.id}',1)">+</button>

    <button class="remove-item-btn"
        onclick="removeFromCart('${item.id}')">
        ×
    </button>
</div>
                    </li>`;
        });

        html += `</ul><div class="drawer-total">Total: GH₵ ${formatPrice(total)}</div>
                <div class="drawer-buttons">
                    <button class="clear-cart-btn-sm" onclick="clearCart()">🗑 Clear Cart</button>
                    <button class="btn-whatsapp" onclick="checkoutWhatsApp()">💬 WhatsApp Order</button>
                    <button class="btn-email" onclick="checkoutEmail()">✉️ Email Order</button>
                </div>
                <div class="cart-note-drawer"><i class="fas fa-info-circle"></i> Unavailable items auto-removed</div>`;
        container.innerHTML = html;
    }
    
    function buildOrderMsg() {
        const avail = cart.filter(item=> productsData.find(p=>p.id===item.id && p.stock));
        if(avail.length===0) return null;
        let msg = "🛒 *NEW ORDER*\n---------------------------\n";
        let total=0;
        avail.forEach((item,i)=>{ const cost=item.price*item.quantity; total+=cost; msg+=`${i+1}. ${item.name} x${item.quantity} - GH₵ ${formatPrice(cost)}\n`; });
        msg+=`---------------------------\n💰 Total: GH₵ ${formatPrice(total)}\nPlease process my order.`;
        return { text: msg, items: avail, total };
    }
    function checkoutWhatsApp() {
        const order = buildOrderMsg();
        if(!order) { alert("No available items in cart"); return; }
        trackMetaCheckout(order.items, order.total);
        window.open(`https://wa.me/233249976762?text=${encodeURIComponent(order.text)}`,'_blank');
    }
    function checkoutEmail() {
        const order = buildOrderMsg();
        if(!order) { alert("No available items in cart"); return; }
        trackMetaCheckout(order.items, order.total);
        window.location.href = `mailto:info@elitevoltsystems.com?subject=Order&body=${encodeURIComponent(order.text)}`;
    }
    
    function showToast(msg) {
        const t = document.createElement('div');
        t.innerText = msg;
        t.style.position='fixed'; t.style.bottom='90px'; t.style.left='50%'; t.style.transform='translateX(-50%)';
        t.style.background='#0b2b26'; t.style.color='white'; t.style.padding='6px 16px'; t.style.borderRadius='40px';
        t.style.fontSize='0.75rem'; t.style.zIndex='1400';
        document.body.appendChild(t);
        setTimeout(()=>t.remove(),1800);
    }
    function escapeHtml(str) {
        return String(str).replace(/[&<>"']/g, char => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[char]);
    }
    
    // Install one shared cart drawer on every page. Product and content pages
    // use the same cart state as the shop without navigating away from the page.
    function ensureCartUI() {
        if (!document.getElementById('evCartRuntimeStyles')) {
            const style = document.createElement('style');
            style.id = 'evCartRuntimeStyles';
            style.textContent = `
                .mini-cart-link { position:relative; display:inline-flex; align-items:center; gap:.4rem; }
                .mini-cart-link .cart-badge { position:absolute; top:-7px; right:-12px; min-width:18px; height:18px; padding:0 4px; border-radius:999px; align-items:center; justify-content:center; background:#dc2626; color:#fff; font:800 .65rem/1 Arial,sans-serif; }
                .ev-cart-overlay { display:block; position:fixed; inset:0; z-index:2400; background:rgba(15,23,42,.52); opacity:0; visibility:hidden; transition:opacity .2s ease,visibility .2s ease; }
                .ev-cart-overlay.active { opacity:1; visibility:visible; }
                .ev-cart-panel { position:fixed; z-index:2401; top:0; right:0; bottom:0; width:min(92vw,430px); max-width:100vw; display:flex !important; flex-direction:column; background:#fff; color:#17211d; box-shadow:-16px 0 48px rgba(15,23,42,.2); transform:translateX(105%); visibility:hidden; transition:transform .24s ease,visibility .24s ease; }
                .ev-cart-panel.open { transform:translateX(0); visibility:visible; }
                .ev-cart-panel .drawer-header { display:flex; align-items:center; justify-content:space-between; gap:1rem; padding:1rem 1.1rem; border-bottom:1px solid #e2e8f0; }
                .ev-cart-panel .drawer-header h3 { margin:0; color:#0b3d34; }
                .ev-cart-panel .close-drawer { min-width:44px; min-height:44px; border:0; border-radius:50%; background:#edf2ef; color:#17211d; font-size:1.6rem; cursor:pointer; }
                .ev-cart-panel .drawer-content { flex:1; overflow:auto; padding:1rem; -webkit-overflow-scrolling:touch; }
                .ev-cart-panel .cart-items-list { list-style:none; padding:0; margin:0; }
                .ev-cart-panel .cart-item-drawer { display:flex; align-items:center; justify-content:space-between; gap:.75rem; padding:.9rem 0; border-bottom:1px solid #e2e8f0; }
                .ev-cart-panel .cart-item-info { min-width:0; overflow-wrap:anywhere; }
                .ev-cart-panel .cart-item-controls { display:flex; align-items:center; gap:.4rem; flex:none; }
                .ev-cart-panel .cart-item-controls button { min-width:36px; min-height:36px; border:1px solid #dbe4dd; border-radius:9px; background:#f8faf9; color:#17211d; font:700 1rem/1 Arial,sans-serif; cursor:pointer; }
                .ev-cart-panel .cart-item-controls .remove-item-btn { background:#dc2626; color:#fff; border:0; }
                .ev-cart-panel .drawer-total { padding:1rem 0; font-weight:800; font-size:1.1rem; }
                .ev-cart-panel .drawer-buttons { display:grid; gap:.6rem; }
                .ev-cart-panel .drawer-buttons button { min-height:46px; border:0; border-radius:10px; padding:.7rem .9rem; color:#fff; font:inherit; font-size:.95rem; font-weight:700; cursor:pointer; }
                .ev-cart-panel .clear-cart-btn-sm { background:#dc2626; }
                .ev-cart-panel .btn-whatsapp { background:#16833d; }
                .ev-cart-panel .btn-email { background:#0b3d34; }
                .ev-cart-panel .cart-note-drawer { margin-top:.8rem; color:#64748b; font-size:.8rem; }
                .ev-cart-fab { position:fixed; z-index:1800; right:16px; bottom:calc(16px + env(safe-area-inset-bottom)); width:auto; min-width:112px; height:56px; display:none; align-items:center; justify-content:center; gap:.55rem; padding:0 18px; border:0; border-radius:999px; background:#0b3d34; color:#fff; box-shadow:0 8px 24px rgba(15,23,42,.22); font-size:1rem; font-weight:800; cursor:pointer; }
                .ev-cart-fab .cart-badge { position:absolute; top:-4px; right:-3px; min-width:20px; height:20px; padding:0 4px; border-radius:999px; align-items:center; justify-content:center; background:#dc2626; color:#fff; font:800 .68rem/1 Arial,sans-serif; }
                .ev-cart-fab.near-footer { opacity:0; pointer-events:none; transform:translateY(12px); }
                .related-product-copy .price-before { display:block; color:#64748b; font-size:.78em; text-decoration:line-through; }
                .related-product-copy .discount-badge,.related-product-copy .promotion-label { display:inline-block; margin-left:.35rem; }
                @media(max-width:899px) { .ev-cart-fab { display:inline-flex; } }
                @media(prefers-reduced-motion:reduce) { .ev-cart-overlay,.ev-cart-panel { transition:none; } }
            `;
            document.head.appendChild(style);
        }

        if (!document.getElementById('drawerOverlay')) {
            document.body.insertAdjacentHTML('beforeend', '<div class="drawer-overlay ev-cart-overlay" id="drawerOverlay" aria-hidden="true"></div>');
        } else {
            document.getElementById('drawerOverlay').classList.add('ev-cart-overlay');
        }
        if (!document.getElementById('cartDrawer')) {
            document.body.insertAdjacentHTML('beforeend', '<aside class="cart-drawer ev-cart-panel" id="cartDrawer" role="dialog" aria-modal="true" aria-labelledby="cartDrawerTitle" aria-hidden="true" tabindex="-1"><div class="drawer-header"><h3 id="cartDrawerTitle">Your Cart</h3><button class="close-drawer" id="closeDrawerBtn" type="button" aria-label="Close cart">×</button></div><div class="drawer-content" id="drawerCartContent"><div class="empty-cart-message">Your cart is empty</div></div></aside>');
        } else {
            const drawer = document.getElementById('cartDrawer');
            drawer.classList.add('ev-cart-panel');
            drawer.style.removeProperty('display');
        }
        if (!document.getElementById('floatingCartBtn')) {
            document.body.insertAdjacentHTML('beforeend', '<button class="floating-cart ev-cart-fab" id="floatingCartBtn" type="button" aria-label="Open cart" aria-haspopup="dialog" aria-expanded="false" hidden style="display:none!important"><i class="fas fa-shopping-cart" aria-hidden="true"></i><span class="floating-cart-label">Cart</span><span class="cart-badge" data-cart-count style="display:none">0</span></button>');
        } else {
            document.getElementById('floatingCartBtn').classList.add('ev-cart-fab');
        }

        document.querySelectorAll('.main-nav, .nav-links').forEach(nav => {
            const existingCartLink = nav.querySelector('.mini-cart-link');
            if (existingCartLink) {
                existingCartLink.setAttribute('aria-label', 'Open cart');
                if (!existingCartLink.querySelector('.mini-cart-label')) {
                    const label = document.createElement('span');
                    label.className = 'mini-cart-label';
                    label.textContent = 'Cart';
                    existingCartLink.insertBefore(label, existingCartLink.querySelector('.cart-badge'));
                }
                return;
            }
            const link = document.createElement('a');
            link.href = /\/(?:blog|products)\//i.test(window.location.pathname) ? '../shop.html' : 'shop.html';
            link.className = 'mini-cart-link';
            link.setAttribute('aria-label', 'Open cart');
            link.innerHTML = '<i class="fas fa-shopping-cart" aria-hidden="true"></i><span class="mini-cart-label">Cart</span><span class="cart-badge" data-cart-count style="display:none">0</span>';
            nav.appendChild(link);
        });
        document.querySelectorAll('.mini-cart-link').forEach(link => {
            link.setAttribute('aria-haspopup', 'dialog');
            if (!link.hasAttribute('aria-expanded')) link.setAttribute('aria-expanded', 'false');
        });
    }

    // Drawer controls
    let lastCartTrigger = null;
    let previousBodyOverflow = '';
    function openDrawer(trigger) {
        const drawer = document.getElementById('cartDrawer');
        const overlay = document.getElementById('drawerOverlay');
        if (!drawer || !overlay) return;
        lastCartTrigger = trigger || document.activeElement;
        previousBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        drawer.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
        overlay.classList.add('active');
        document.querySelectorAll('.mini-cart-link, #floatingCartBtn').forEach(button => button.setAttribute('aria-expanded', 'true'));
        document.getElementById('closeDrawerBtn')?.focus();
    }
    function closeDrawer() {
        const drawer = document.getElementById('cartDrawer');
        const overlay = document.getElementById('drawerOverlay');
        if (!drawer || !overlay) return;
        drawer.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
        overlay.classList.remove('active');
        document.body.style.overflow = previousBodyOverflow;
        document.querySelectorAll('.mini-cart-link, #floatingCartBtn').forEach(button => button.setAttribute('aria-expanded', 'false'));
        if (lastCartTrigger && document.contains(lastCartTrigger)) lastCartTrigger.focus();
        lastCartTrigger = null;
    }
    
    // Event listeners
    ensureCartUI();
    document.getElementById('floatingCartBtn')?.addEventListener('click', event => openDrawer(event.currentTarget));
    document.getElementById('closeDrawerBtn')?.addEventListener('click', closeDrawer);
    document.getElementById('drawerOverlay')?.addEventListener('click', closeDrawer);
    document.querySelectorAll('.mini-cart-link').forEach(link => link.addEventListener('click', event => {
        event.preventDefault();
        openDrawer(link);
    }));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && document.getElementById('cartDrawer')?.classList.contains('open')) closeDrawer(); });
    const floatingCart = document.getElementById('floatingCartBtn');
    const siteFooter = document.querySelector('.site-footer');
    if (floatingCart && siteFooter && 'IntersectionObserver' in window) {
        new IntersectionObserver(entries => {
            const footerVisible = entries.some(entry => entry.isIntersecting);
            floatingCart.classList.toggle('near-footer', footerVisible);
            floatingCart.setAttribute('aria-hidden', String(footerVisible));
        }, { rootMargin: '0px 0px -24px 0px' }).observe(siteFooter);
    }
    
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const clearBtn = document.getElementById('clearSearchBtn');
    const runSearch = () => {
        currentSearchTerm = (searchInput?.value || '').trim();
        currentPage = 1;
        renderProducts();
    };
    searchInput?.addEventListener('input', (e) => { currentSearchTerm = e.target.value; currentPage = 1; renderProducts(); });
    searchInput?.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); runSearch(); } });
    searchBtn?.addEventListener('click', runSearch);
    clearBtn?.addEventListener('click', () => {
        if (!searchInput) return;
        searchInput.value = '';
        currentSearchTerm = '';
        currentPage = 1;
        renderProducts();
        searchInput.focus();
    });

    const categoryFilter = document.getElementById("categoryFilter");
    const subcategoryFilter = document.getElementById("subcategoryFilter");
    const sortFilter = document.getElementById("sortProducts");
    const stockFilter = document.getElementById("stockFilter");
    const maxPriceFilter = document.getElementById("maxPriceFilter");

    const wishlistToggleBtn = document.getElementById("wishlistToggleBtn");

    renderCategoryOptions(categoryFilter);
    renderSubcategoryOptions(subcategoryFilter, currentCategory);
    categoryFilter?.addEventListener("change", function() {
        currentCategory = this.value;
        currentSubcategory = 'All';
        renderSubcategoryOptions(subcategoryFilter, currentCategory);
        currentPage = 1;
        renderProducts();
    });
    subcategoryFilter?.addEventListener("change", function() { currentSubcategory = this.value; currentPage = 1; renderProducts(); });
    sortFilter?.addEventListener("change", function() { currentSort = this.value; currentPage = 1; renderProducts(); });
    stockFilter?.addEventListener("change", function() { currentStock = this.value; currentPage = 1; renderProducts(); });
    maxPriceFilter?.addEventListener("input", function() { currentMaxPrice = this.value; currentPage = 1; renderProducts(); });
    wishlistToggleBtn?.addEventListener("click", function() {
        currentWishlistOnly = !currentWishlistOnly;
        this.classList.toggle("active", currentWishlistOnly);
        this.setAttribute("aria-pressed", currentWishlistOnly ? "true" : "false");
        this.innerHTML = currentWishlistOnly ? '<i class="fas fa-heart"></i> Showing wishlist' : '<i class="far fa-heart"></i> Wishlist';
        currentPage = 1;
        renderProducts();
    });
    document.addEventListener("click", function(e) {
        const wishlistButton = e.target.closest("[data-wish]");
        if (wishlistButton) {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(wishlistButton.dataset.wish);
            return;
        }
        const addButton = e.target.closest("[data-product-add]");
        if (addButton) {
            e.preventDefault();
            addToCart(addButton.dataset.productAdd);
        }
    });
    
    window.addToCart = addToCart; window.changeQuantity = changeQuantity; window.clearCart = clearCart;
    window.removeFromCart = removeFromCart;
    window.checkoutWhatsApp = checkoutWhatsApp; window.checkoutEmail = checkoutEmail;
    window.goToPage = goToPage;
    window.toggleWishlist = toggleWishlist;
    
    renderProductPagePrice();
    restoreShopReturnLinks();
    loadCart();
    paintWishlist();
