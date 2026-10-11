import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const origin = 'https://elitevoltsystems.com/';
const guides = [
  {
    slug: 'solar-air-conditioning-ghana',
    title: 'Solar Air Conditioning in Ghana: System Design and Running Costs',
    cardTitle: 'Solar Air Conditioning in Ghana',
    description: 'A practical guide to running air conditioning on solar in Ghana: estimate cooling demand, plan solar and battery capacity, check inverter compatibility and avoid common design mistakes.',
    lead: 'Solar can support air conditioning, but it takes more than matching the AC nameplate to an inverter. A reliable design considers the room’s cooling demand, the AC’s changing power draw, daylight generation, battery hours and the electrical limits of every component.',
    sections: [
      { heading: 'Start with the room and the cooling load', paragraphs: [
        'Record the room dimensions, ceiling height, window area, roof exposure, insulation, occupancy and heat-producing equipment. A sun-exposed room under a poorly insulated roof can need a different cooling solution from a shaded, well-sealed room of the same floor area. A qualified air-conditioning technician can estimate the cooling capacity in BTU/h or kW; avoid selecting a unit from floor area alone.',
        'Check the AC nameplate and manufacturer data for rated input power, maximum input, starting behaviour and recommended circuit protection. An inverter-driven compressor generally varies its speed after startup, so actual consumption changes with outdoor conditions and the set temperature. Measure or log the unit’s energy use where possible.'
      ]},
      { heading: 'Estimate energy before sizing the solar array', paragraphs: [
        'Energy is power multiplied by time. As a simple upper-bound illustration, a unit drawing 1 kW continuously for six hours would use 6 kWh before system losses. Real use may be lower as the compressor cycles or modulates, but hot conditions, poor maintenance, open doors and a very low thermostat setting can raise consumption. Use the expected daily kWh—not just the AC’s advertised cooling capacity—to estimate the PV array.',
        'The array must be sized for the local solar resource, shade, orientation, temperature and conversion losses. A qualified designer should use realistic site-specific sunshine assumptions and account for other daytime loads. The inverter’s permitted PV voltage and current, MPPT range, maximum PV power and string limits must all be respected.'
      ]},
      { heading: 'Decide whether cooling must continue after sunset', paragraphs: [
        'Daytime cooling can often be supplied directly by PV while the system is producing energy. If the AC must run in the evening or through an outage, the battery must deliver the required energy as well as the instantaneous power. Battery sizing should account for usable depth of discharge, conversion losses, temperature, ageing and the manufacturer’s current limits.',
        'For example, a six-hour night schedule is an energy requirement, not a promise that a battery of a particular nominal kWh rating will provide six hours. Compressor cycling, indoor temperature, battery reserve settings and other loads change the result. Ask for the estimated AC runtime under stated conditions.'
      ]},
      { heading: 'Match the inverter and electrical installation', paragraphs: [
        'Confirm continuous output, surge capability, phase and voltage, transfer behaviour, backup output rating and compatibility with the AC. The inverter must also support the battery voltage and battery-management communications, if used. A system can have ample PV energy yet still trip if inverter output, surge capacity, wiring or protection is inadequate.',
        'Use correctly sized conductors, isolators, breakers, residual-current protection where required, earthing and surge protection. Have the installer verify the AC circuit and follow the inverter and air-conditioner manufacturers’ instructions. Do not bypass protective devices or connect an AC to an output that is not designed for it.'
      ]},
      { heading: 'Improve efficiency before adding equipment', paragraphs: [
        'Choose an efficient unit that is correctly sized for the room, seal air leaks, shade sun-facing windows, keep filters and coils clean, and use a moderate set point. These steps reduce the energy the solar system must deliver. Keep the outdoor condenser clear of obstructions and arrange routine maintenance.',
        'A useful proposal should state the estimated daily AC energy, expected solar production, battery usable capacity, assumed operating hours, backup duration and the loads excluded from backup. Compare like-for-like designs and ask what happens during cloudy weather or unusually hot periods.'
      ]},
      { heading: 'A practical site-assessment checklist', list: [
        'Photograph the AC nameplate and note the exact model and supply requirements.',
        'Record desired operating hours and whether cooling is needed overnight.',
        'List other loads that will share the inverter and identify motor-starting loads.',
        'Check roof or ground space, shade, cable route, ventilation and equipment location.',
        'Request a written design showing PV string limits, battery settings, protection and commissioning.'
      ]}
    ],
    links: [
      ['Solar inverter and battery solutions', '../solar-inverter-and-battery-solutions-ghana.html'],
      ['Design your solar system', '../calculator.html'],
      ['Browse solar products', '../shop.html']
    ]
  },
  {
    slug: 'solar-water-pumps-ghana',
    title: 'Solar Water Pumps in Ghana: How to Size a Reliable System',
    cardTitle: 'Solar Water Pumps: Sizing and Selection',
    description: 'Learn how to specify a solar water pump using daily water demand, total dynamic head, water source, pump curves, PV input and storage needs.',
    lead: 'A solar pump should be selected from the water job it must perform. Daily water volume, total dynamic head and the available pumping window are more useful starting points than choosing a pump by horsepower alone.',
    sections: [
      { heading: 'Define the water task first', paragraphs: [
        'Write down the required volume per day, when the water is needed, and the destination: a household tank, livestock trough, storage reservoir or irrigation network. Separate daily demand from the peak delivery rate. A system that fills a tank through the day can meet a short morning demand without running the pump at that same peak flow.',
        'Identify the source and its seasonal behaviour. A borehole, dug well, river, pond and storage tank each present different lift, water-quality and protection requirements. Confirm sustainable yield and water level with the relevant professionals; pumping faster than the source can replenish it can cause dry running or damage.'
      ]},
      { heading: 'Calculate total dynamic head', paragraphs: [
        'Total dynamic head (TDH) combines the vertical lift from the pumping water level to the discharge point, drawdown while pumping, elevation of the tank or field, and friction losses in pipes, valves and fittings. Use the water level while pumping, not only the static level measured before the pump starts.',
        'Pump flow falls as head rises. Read the manufacturer’s pump curve to find the flow available at the calculated TDH, then verify that it meets the required daily volume during the expected solar pumping hours. Pipe diameter, length, bends and filters can materially affect friction losses, so include them in the design.'
      ]},
      { heading: 'Choose the pump, controller and PV array together', paragraphs: [
        'The pump type must suit the source and lift. Submersible pumps are commonly used for boreholes; surface pumps need a suitable suction arrangement and have practical limits on suction lift. Confirm water chemistry, sand or sediment tolerance, motor type, cable length and protection requirements with the pump manufacturer.',
        'A solar pump controller manages the motor using the available PV power. Check its supported motor type, DC input voltage range, maximum current, MPPT range and dry-run protections. The PV string voltage must remain within the controller’s limits across site temperatures, while the array must provide adequate power for the expected operating window. Do not size the panels from the pump’s nominal motor rating alone.'
      ]},
      { heading: 'Use water storage to smooth out solar supply', paragraphs: [
        'When practical, pump into a raised or ground-level tank and draw water from storage when needed. Water storage can be simpler and less costly than adding a large battery bank solely to keep the pump running after sunset. The tank volume should cover the intended demand and the site’s cloudy-day plan; a tank does not solve a source-yield problem.',
        'If an electrical battery is required, include battery energy, discharge current, inverter or controller compatibility and protection in the design. A pump motor can have a substantial starting demand, so confirm starting capability and not just steady running power.'
      ]},
      { heading: 'Protect water supply and equipment', paragraphs: [
        'Include dry-run or low-water protection, tank float switches or level sensors, appropriate non-return valves, intake screening, secure pump suspension and correctly rated electrical isolation. A borehole installation should prevent the pump from resting on sediment and should use a cable and splice system rated for the environment.',
        'Inspect the array for dust and shading, check pipe joints and filters, test float switches, and watch for changes in flow, noise or water quality. Keep a record of the measured water level, operating hours and daily volume. FAO’s sourcebook covers design, operation, inspection and troubleshooting for solar PV pumping systems; use it alongside the exact equipment manuals.'
      ]},
      { heading: 'Information to provide when requesting a quote', list: [
        'Source type, static and pumping water level, seasonal changes and estimated sustainable yield.',
        'Required daily water volume, discharge point elevation, pipe route and intended pumping hours.',
        'Water quality, sediment conditions, intended uses and irrigation method if applicable.',
        'Pump curve at the proposed TDH, controller limits, array design and protection details.',
        'Storage capacity, low-water controls, installation scope and maintenance plan.'
      ]},
      { heading: 'Further technical reading', paragraphs: [
        'The Food and Agriculture Organization’s <a href="https://www.fao.org/family-farming/detail/en/c/1600772/" target="_blank" rel="noopener">solar irrigation sourcebook</a> provides a detailed reference for the design and operation of PV pumping systems.'
      ]}
    ],
    links: [['Solar installation in Ghana', '../solar-installation-ghana.html'], ['Browse solar products', '../shop.html'], ['Request a solar assessment', '../index.html#services']]
  },
  {
    slug: 'solar-irrigation-system-design-ghana',
    title: 'Solar Irrigation Systems in Ghana: Plan Water, Pumping and Distribution',
    cardTitle: 'Solar Irrigation System Planning',
    description: 'A farm-focused guide to solar irrigation planning: crop water demand, water source, pump head, storage, distribution, controls and seasonal operation.',
    lead: 'Solar irrigation is a complete water-delivery system, not just a pump connected to panels. Good results depend on matching the farm’s crop-water plan to the source, pumping head, solar hours, storage and field distribution.',
    sections: [
      { heading: 'Begin with the crop and field water budget', paragraphs: [
        'List the crops, planted area, growth stages, soil type, planting schedule and irrigation method. Water needs vary by crop, weather, season and stage of growth; a single daily estimate for every month can lead to over-pumping or water stress. Work with an agronomist or irrigation specialist to estimate the farm’s peak daily demand and the acceptable irrigation interval.',
        'For a first-pass calculation, convert the planned irrigation depth into a volume for the cropped area, then account for application efficiency and distribution losses. Keep the method and assumptions documented. Soil-moisture observations and measured field output can refine the plan after commissioning.'
      ]},
      { heading: 'Confirm the water source and sustainable yield', paragraphs: [
        'Measure water level and recovery at the intended pumping rate. For a borehole, include pumping drawdown and any seasonal variation. For surface water, check intake location, sediment, debris, changing levels and the permissions or community arrangements that apply to the site.',
        'The pump must not extract more than the source can sustainably provide. If demand exceeds source yield, plan crop area, irrigation timing, storage or water conservation measures before selecting a larger pump. Solar power cannot compensate for insufficient water.'
      ]},
      { heading: 'Size for the hydraulic job, not a marketing label', paragraphs: [
        'Calculate total dynamic head from pumping water level, elevation to the tank or field, drawdown and pipe friction. Match the pump curve to the required flow at this head. Include filters, valves, long pipe runs and elevation changes. A pump advertised with a maximum flow or maximum head will not normally deliver both maximum values at the same time.',
        'Compare the daily volume the pump can deliver during realistic solar hours with peak crop demand. Specify the PV controller, motor, array voltage and current limits as a matched set. Use manufacturer curves and manuals for the exact models proposed.'
      ]},
      { heading: 'Choose an irrigation method that fits the crop', paragraphs: [
        'Drip irrigation can apply water near the root zone and is often useful for row crops, orchards and controlled plots, but it requires filtration, pressure management and routine emitter maintenance. Sprinklers suit other crops and layouts but generally need adequate pressure and may be affected by wind and evaporation. Open channels and low-pressure systems have their own land, labour and water-loss trade-offs.',
        'Design the pump around the distribution system’s required pressure and flow. Divide the farm into zones when this permits a smaller pump or more controlled delivery. Filters, pressure regulators, gauges and flush points should be accessible and sized for the planned flow.'
      ]},
      { heading: 'Use storage and controls to manage variable sunlight', paragraphs: [
        'A water tank or reservoir can store pumping output for a scheduled irrigation window. Size it to the farm’s delivery schedule and the expected gap between pumping and use. The storage plan should include an allowance for low-sun days and a clear operating rule when the tank is not full.',
        'Use tank-level controls, low-source-level or dry-run protection, flow monitoring and simple shutoff logic. Add automation only when the farm can maintain it and staff know how to override it safely. Battery storage is an option where needed, but water storage may be a simpler way to shift supply for many pumping applications.'
      ]},
      { heading: 'Commission, measure and maintain', paragraphs: [
        'At commissioning, record PV voltage and current, pump flow, discharge pressure, water level, operating hours and tank level. Confirm that protection devices, float switches and controller alarms work. A baseline makes it easier to spot a clogged filter, damaged pipe, declining source yield or electrical fault later.',
        'Inspect panels for shade and dirt, clean filters, flush drip lines as required, check for leaks, and monitor pump output over the season. FAO’s <a href="https://www.fao.org/family-farming/detail/en/c/1600772/" target="_blank" rel="noopener">sourcebook on solar energy in irrigated agriculture</a> discusses design, operation and maintenance considerations.'
      ]},
      { heading: 'A farm design brief', list: [
        'Crop plan, field area, soil and estimated peak daily irrigation volume.',
        'Water source, seasonal levels, sustainable yield and water-quality information.',
        'Pump head, required flow, pipe layout, filters, pressure and irrigation zones.',
        'PV module configuration, controller and motor model, protections and controls.',
        'Storage volume, backup plan, commissioning measurements and named maintenance contact.'
      ]}
    ],
    links: [['Solar water pump guide', 'solar-water-pumps-ghana.html'], ['Solar installation services', '../solar-installation-ghana.html'], ['Contact EliteVolt', '../index.html#contact']]
  },
  {
    slug: 'hybrid-solar-inverters-ghana',
    title: 'Hybrid Solar Inverters in Ghana: Features, Sizing and Compatibility',
    cardTitle: 'Hybrid Solar Inverter Buying Guide',
    description: 'Understand how hybrid inverters work and how to compare output, surge, PV input, battery compatibility, backup circuits and installation requirements.',
    lead: 'A hybrid inverter coordinates solar panels, a battery, the utility supply and selected loads. Choosing the right one means matching its electrical limits and operating modes to the loads and backup plan—not simply buying the largest kW label available.',
    sections: [
      { heading: 'What a hybrid inverter does', paragraphs: [
        'A hybrid inverter can convert PV energy for loads, charge a compatible battery and interact with an AC source such as the grid or a generator, depending on the model and its configuration. Some models provide a dedicated backup output that operates when the grid is unavailable; others have different transfer arrangements. Read the exact model manual before assuming how backup works.',
        'Hybrid does not mean every connected load is backed up automatically. The installer may need to separate critical circuits from non-essential loads and configure battery reserve, charging priorities, export behaviour and time schedules.'
      ]},
      { heading: 'Size continuous output and surge capacity', paragraphs: [
        'Add the running power of loads expected to operate at the same time, then identify motors, pumps, refrigerators and air conditioners that can draw a short starting surge. Compare both the inverter’s continuous rating and surge duration with the actual load profile. Also check phase, output voltage, frequency and whether the unit supports the required neutral and earthing arrangement.',
        'A high inverter rating does not create more solar energy or battery runtime. PV array capacity, inverter output and battery energy are separate design quantities. A balanced proposal should show how the load is served in daytime, at night and during a grid outage.'
      ]},
      { heading: 'Check PV string limits before selecting panels', paragraphs: [
        'Review the maximum PV open-circuit voltage, MPPT operating range, maximum input current per tracker, short-circuit current limit and permitted PV array power. Calculate string voltage using the module’s temperature characteristics and site conditions. Do not connect a string merely because its nominal wattage appears to fit.',
        'If the inverter has multiple MPPT trackers, plan strings around roof orientation, shade and module electrical characteristics. Mismatched modules or mixed orientations on one tracker can reduce performance. The final design should list module model, number per string, tracker assignment and calculated voltage and current.'
      ]},
      { heading: 'Verify battery voltage and communications', paragraphs: [
        'Confirm whether the inverter supports low-voltage or high-voltage batteries and which battery models are approved for the exact inverter firmware and region. Check charge/discharge current, communication protocol, cable pinout, battery quantity, parallel rules and required firmware. A connector that fits physically does not prove BMS communication compatibility.',
        'Battery usable energy determines how long loads can run, while discharge current determines the power available at a moment. Both must suit the inverter. Follow the battery maker’s commissioning sequence and use its specified voltage, current and temperature limits.'
      ]},
      { heading: 'Review backup circuits, protection and approvals', paragraphs: [
        'Ask the installer to document the backup load panel, transfer arrangement, grid-isolation method, breakers, fuses, DC isolators, surge protection, earthing and cable sizing. Grid-connected operation must follow applicable utility, electrical and regulatory requirements. Installation and commissioning should be handled by qualified personnel.',
        'Compare monitoring functions, warranty terms, local service arrangements and whether firmware updates or an internet connection are needed. A written commissioning record should include settings, test results, battery communication status and emergency shutdown instructions.'
      ]},
      { heading: 'Questions to ask before buying', list: [
        'What exact inverter model, phase and voltage will be installed?',
        'Which loads are on backup, and what is their measured running and starting demand?',
        'What are the calculated PV string voltage/current and the tracker assignments?',
        'Which battery model is approved, and what usable kWh and discharge power are designed?',
        'What protection, warranty, monitoring, commissioning and after-sales support are included?'
      ]}
    ],
    links: [['Solar inverter options', '../solar-inverters-ghana.html'], ['Solar batteries in Ghana', '../solar-batteries-ghana.html'], ['Shop inverters and batteries', '../shop.html']]
  },
  {
    slug: 'deye-hybrid-inverters-ghana',
    title: 'Deye Hybrid Inverters in Ghana: How to Choose the Right Model',
    cardTitle: 'Deye Hybrid Inverters: Model Selection',
    description: 'A model-focused guide to choosing a Deye hybrid inverter: phase, battery voltage, PV trackers, backup, generator support, compatibility and commissioning.',
    lead: 'Deye sells several inverter families, and their power range, voltage, phase and operating features vary by model and market. Start with the full model code and its current manual; a brand name or front-panel appearance is not enough to establish compatibility.',
    sections: [
      { heading: 'Identify the exact model and region', paragraphs: [
        'Write down the full model code from the label and confirm the product’s regional version. Deye’s official technical library separates product manuals by inverter family, phase and battery-voltage class. Model suffixes can distinguish electrical configurations, so compare the nameplate, official datasheet and installation manual for the exact unit.',
        'A single-phase low-voltage hybrid, three-phase low-voltage hybrid and high-voltage battery model are not interchangeable. Utility voltage, phase arrangement, frequency and local approvals should be confirmed before purchase.'
      ]},
      { heading: 'Match PV inputs to the planned array', paragraphs: [
        'Check the model’s maximum PV voltage, MPPT voltage window, tracker count, input current per tracker and short-circuit current limit. Calculate the string’s cold-weather open-circuit voltage and make sure the operating voltage stays inside the MPPT range. Include the module’s electrical tolerances and wiring arrangement.',
        'Multiple MPPTs can help when roof sections face different directions or experience different shading, but each tracker still has current and string limits. The design drawing should show how each string connects to the inverter and which modules are grouped together.'
      ]},
      { heading: 'Choose battery voltage and confirm approved combinations', paragraphs: [
        'Deye models may use different battery voltage classes and communication options. Check the compatible battery list or manual for the exact inverter model and firmware, then confirm CAN or RS485 protocol, cable pinout, permitted battery count, charge/discharge current and parallel configuration.',
        'Set usable battery capacity from the outage plan and daily energy demand. Do not rely on nominal capacity alone: usable energy, allowed depth of discharge, reserve settings, battery age and inverter conversion losses affect runtime.'
      ]},
      { heading: 'Plan backup and grid interaction', paragraphs: [
        'Confirm whether the selected model provides a backup output, its transfer behaviour and the maximum continuous and surge output on that port. Decide which circuits are essential, calculate simultaneous loads and protect the backup panel accordingly. Large motors and air conditioners may require special attention to start-up demand.',
        'If the system is to export to the grid, use the correct metering/CT arrangement and set export limits as required by the project and applicable utility rules. Generator input and parallel operation are model-specific; follow the manufacturer’s wiring and commissioning requirements.'
      ]},
      { heading: 'Commissioning and monitoring', paragraphs: [
        'A professional commissioning process verifies polarity, insulation, earthing, protection, grid settings, battery communication, charge limits, time schedules and backup transfer. Record firmware, model codes and final settings. Check monitoring data after handover and make sure the owner can identify alarms and safely shut down the system.',
        'Deye publishes manuals and technical resources in its <a href="https://www.deyeinverter.com/download/product-manual/" target="_blank" rel="noopener">official product-manual library</a>. Always use the document that matches the specific model and region; features shown for one series should not be assumed for another.'
      ]},
      { heading: 'A Deye quote should specify', list: [
        'Full model code, phase, AC voltage and battery voltage class.',
        'PV module make/model, strings per MPPT, calculated voltage and current.',
        'Approved battery model, usable capacity, communication and reserve settings.',
        'Backup circuits, continuous/surge load assessment and transfer behaviour.',
        'Grid/export configuration, protection, warranty, monitoring and commissioning scope.'
      ]}
    ],
    links: [['Solar inverters in Ghana', '../solar-inverters-ghana.html'], ['Solar inverter and battery solutions', '../solar-inverter-and-battery-solutions-ghana.html'], ['Browse products', '../shop.html']]
  },
  {
    slug: 'jinko-solar-panels-ghana',
    title: 'Jinko Solar Panels in Ghana: Read the Datasheet Before You Buy',
    cardTitle: 'Jinko Solar Panels: Datasheet and Design',
    description: 'A practical guide to comparing Jinko solar panels, reading module datasheets, planning bifacial arrays and checking strings, warranties and installation details.',
    lead: 'A panel’s wattage is only one part of the selection. The exact Jinko model, cell technology, electrical values, dimensions, mounting limits and warranty terms determine how it fits into a real PV system.',
    sections: [
      { heading: 'Use the full model number', paragraphs: [
        'Jinko offers product families and module variants for different applications. Record the complete model code, including suffixes, then find the matching official datasheet. Modules with similar marketing names can have different cell counts, dimensions, voltage, current, glass construction and power ratings.',
        'Compare the electrical nameplate values: maximum power (Pmax), open-circuit voltage (Voc), voltage at maximum power (Vmp), short-circuit current (Isc), current at maximum power (Imp), temperature coefficients and maximum system voltage. These values determine string design and inverter compatibility.'
      ]},
      { heading: 'Understand N-type and TOPCon claims', paragraphs: [
        'Some Jinko Tiger Neo product lines use N-type TOPCon cells. The family name does not identify every specification of a particular module. Read the datasheet for the exact SKU and review the manufacturer’s stated power tolerance, efficiency, temperature behaviour, degradation and warranty conditions.',
        'Module efficiency describes the conversion of sunlight over the panel area under test conditions. It does not by itself predict how many kilowatt-hours a roof system will produce. Shade, orientation, temperature, soiling, cable losses, inverter clipping and operating conditions all affect actual energy.'
      ]},
      { heading: 'What bifacial panels need to perform', paragraphs: [
        'A bifacial module can receive light on its rear side, but rear-side contribution depends on installation height, ground reflectance, row spacing, mounting structure, shading and the surroundings. A panel installed close to an opaque roof may gain little from the rear. Treat a bifacial gain estimate as a design assumption, not guaranteed energy.',
        'The official Jinko datasheet identifies whether a module is bifacial and describes its test conditions. Jinko’s Tiger Neo materials and the particular SKU documentation should be consulted for model-specific claims.'
      ]},
      { heading: 'Fit modules to the inverter and roof', paragraphs: [
        'Calculate series string voltage at the lowest expected module temperature and verify that Voc stays below the inverter’s absolute maximum. Confirm the string operating voltage sits within the MPPT window, and check current limits when connecting parallel strings. Consider module dimensions, weight, roof structure, wind loading, cable routing and safe access for maintenance.',
        'Avoid mixing modules with different current or electrical characteristics on the same tracker unless the system designer verifies the arrangement. Lay out strings to account for shading and roof orientation, and use matching connectors and approved mounting hardware.'
      ]},
      { heading: 'Check logistics, warranties and installation quality', paragraphs: [
        'Before purchase, verify the supplier’s invoice, exact model code, delivery condition, serial numbers and warranty documents. Warranty terms can depend on product registration, installation, environmental conditions and the responsible local channel; read the document that applies to the unit being supplied.',
        'At installation, protect modules from edge impact and twisting, follow the clamp zones and torque values in the manual, and avoid walking on the glass. Record serial numbers and photograph the completed array for service records.'
      ]},
      { heading: 'Questions for a panel supplier or installer', list: [
        'What is the full module code and where is its matching official datasheet?',
        'What are the string count, Voc calculation, MPPT voltage and tracker current?',
        'If bifacial, what mounting height, rear clearance and ground assumptions support the yield estimate?',
        'What roof load, wind, corrosion and mounting checks are included?',
        'How are serial numbers, warranty documents and replacement support handled?'
      ]},
      { heading: 'Manufacturer resources', paragraphs: [
        'Use Jinko Solar’s <a href="https://www.jinkosolar.com/" target="_blank" rel="noopener">official product and download resources</a> to verify the current datasheet for the exact model. EliteVolt’s <a href="../shop.html">solar panel catalogue</a> lists available panel products and their product pages.'
      ]}
    ],
    links: [['Solar panel guide', 'how-many-solar-panels-do-i-need-in-ghana.html'], ['TW Solar 620W panel', '../products/tw-620w.html'], ['Browse solar panels', '../shop.html']]
  },
  {
    slug: 'srne-hybrid-inverters-ghana',
    title: 'SRNE Hybrid Inverters in Ghana: Model, Battery and PV Checks',
    cardTitle: 'SRNE Hybrid Inverters: Practical Selection',
    description: 'How to compare SRNE hybrid inverter models by output, phase, PV limits, battery communications, backup circuits, installation and official documentation.',
    lead: 'SRNE product families cover different inverter capacities, phase configurations and battery systems. Before choosing an SRNE unit, match the exact model to the project’s AC supply, simultaneous loads, PV strings and approved battery combination.',
    sections: [
      { heading: 'Start with the exact SRNE series and model', paragraphs: [
        'The SRNE download library lists product documents by inverter and battery families. Use the full model code on the nameplate and select the datasheet and user manual for that exact series and region. Do not assume that a feature or limit from one HYP, HESP, ASP or other family applies to another.',
        'Confirm whether the unit is single-phase or three-phase, its AC voltage and frequency, whether it is hybrid or off-grid for the intended connection, and what local approvals or utility settings are required.'
      ]},
      { heading: 'Match the inverter to real loads', paragraphs: [
        'Measure or estimate the running power of loads that may operate together. Add motor starting current and short-duration surge for pumps, refrigerators, compressors and air conditioning. Compare these demands with both the continuous output and surge rating, including the allowed duration and operating conditions.',
        'Also check backup output ratings, transfer time and load-port restrictions. A large inverter may support a larger instantaneous load but does not necessarily provide more battery runtime. Explain to the installer which circuits must remain active during outages.'
      ]},
      { heading: 'Validate PV input and array design', paragraphs: [
        'For each MPPT, review the maximum PV voltage, MPPT range, input current, short-circuit current and permitted array power. Calculate series voltage from the selected module’s Voc and temperature coefficient, and verify parallel-string current against the manufacturer’s limit.',
        'Keep module specifications, string arrangement and roof orientations documented. Shading, different orientations and mixed module types can affect production and should be addressed in the tracker layout.'
      ]},
      { heading: 'Pair with a compatible battery', paragraphs: [
        'Check supported battery chemistry and voltage, approved brands or protocols, CAN/RS485 communication, firmware requirements, cable pinout, charge/discharge current and permitted parallel arrangements. Confirm that the battery’s continuous output current can support the inverter’s intended power, and that the selected capacity meets the expected backup energy.',
        'A nominal battery kWh figure is not the same as usable energy. Set reserve and charge limits according to the battery manual and the system’s operating plan. Commission the BMS link and verify that the inverter reports valid battery data before handing over.'
      ]},
      { heading: 'Installation and commissioning essentials', paragraphs: [
        'A complete installation includes correctly rated AC and DC isolation, overcurrent protection, surge protection, earthing, cable sizing, battery isolation and labelled shutdown points. Use qualified installers and follow the model-specific wiring diagrams.',
        'Commissioning should record model and serial numbers, firmware, PV string values, battery model and communications, grid settings, backup operation and alarms. Keep a signed handover with warranty information and a clear support contact.'
      ]},
      { heading: 'Where to verify SRNE information', paragraphs: [
        'SRNE publishes manuals and datasheets in its <a href="https://www.srnesolar.com/download/" target="_blank" rel="noopener">official download centre</a>. Locate documentation by product family and compare the version with the model installed. EliteVolt’s current <a href="../shop.html">inverter catalogue</a> can be used to view available SRNE products.'
      ]},
      { heading: 'Before approving an inverter proposal', list: [
        'Verify the full model, phase, AC voltage and intended grid or off-grid operation.',
        'Review actual running and surge loads against continuous and peak output limits.',
        'Check the exact PV string voltage, tracker current and array power calculations.',
        'Confirm battery approval, communications, current, usable capacity and warranty.',
        'Require protection details, commissioning measurements and service arrangements.'
      ]}
    ],
    links: [['SRNE 12kW inverter', '../products/srne-12kw-1ph-on.html'], ['Solar battery selection guide', 'how-to-choose-a-solar-battery-in-ghana.html'], ['Solar inverter catalogue', '../shop.html']]
  },
  {
    slug: 'srne-lithium-batteries-ghana',
    title: 'SRNE Lithium Batteries in Ghana: Capacity, Compatibility and Care',
    cardTitle: 'SRNE Lithium Battery Selection and Care',
    description: 'Understand SRNE lithium battery capacity, usable energy, BMS communications, inverter compatibility, charging, installation and maintenance.',
    lead: 'A lithium battery must be matched to both the energy requirement and the inverter’s operating limits. For SRNE batteries, check the exact battery series and manual alongside the inverter documentation before connecting or expanding a system.',
    sections: [
      { heading: 'Translate backup needs into usable energy', paragraphs: [
        'List the appliances that should run during an outage, their measured or nameplate power, expected operating hours and which loads may run at the same time. Estimate the daily energy requirement in kWh, then allow for inverter losses, battery reserve and the required autonomy. A larger battery capacity does not increase inverter output power.',
        'Compare nominal capacity with the manufacturer’s usable-energy guidance and permitted depth of discharge. Actual runtime changes with load, temperature, state of health, reserve settings and discharge rate. Ask the supplier to show the assumptions behind any runtime estimate.'
      ]},
      { heading: 'Check battery voltage, current and inverter communication', paragraphs: [
        'Confirm the battery’s nominal voltage, operating voltage range, continuous and peak charge/discharge current, and communication interfaces. Match these values to the inverter’s supported voltage and current. If a BMS link is required, verify the supported protocol, approved battery list, firmware and cable pinout for the exact inverter model.',
        'A battery may appear to power an inverter when configured in a voltage-based mode, but that does not establish a supported or safe system. Follow the battery and inverter manufacturers’ compatibility guidance; do not guess a communications cable pinout.'
      ]},
      { heading: 'Understand parallel expansion limits', paragraphs: [
        'When a manufacturer permits parallel battery operation, follow its maximum unit count, busbar arrangement, cable lengths, fuse or breaker requirements, communication master/slave procedure and commissioning sequence. Batteries should be configured consistently and balanced as directed. Do not mix different models, ages or capacities unless the manufacturer explicitly allows it.',
        'The complete battery bank must provide enough discharge current for the inverter. For a high-power load, battery current can be substantial even when the energy capacity looks adequate. The designer should check both kWh and kW.'
      ]},
      { heading: 'Install in a suitable location', paragraphs: [
        'Use the specified wall or floor mounting method and observe clearance, temperature, humidity and ventilation requirements. Protect the battery from direct sun, water ingress, impact and unauthorised access. Provide suitable DC isolation, overcurrent protection, earthing and cable sizing as described in the manuals.',
        'Installers should check battery indicators, communication status and alarm history during commissioning. Keep the battery’s serial number, firmware, warranty record and shutdown procedure accessible to the owner.'
      ]},
      { heading: 'Operate and maintain the system', paragraphs: [
        'Use the approved charging voltage, current and temperature settings. Avoid bypassing BMS protections or repeatedly forcing the system to a low-voltage shutdown. Monitor state of charge, charge/discharge current and alarms, and investigate unexpected changes rather than clearing alerts without a diagnosis.',
        'Lithium batteries generally need less routine maintenance than flooded lead-acid batteries, but they still need inspection, clean terminals, functional protection and a suitable environment. Follow the exact SRNE manual for storage, periodic checks and service.'
      ]},
      { heading: 'Verify SRNE documents before purchase', paragraphs: [
        'SRNE publishes energy-storage battery datasheets and manuals in its <a href="https://www.srnesolar.com/download/" target="_blank" rel="noopener">official download centre</a>. Confirm that the document matches the battery model being quoted and that the proposed inverter is compatible. See EliteVolt’s <a href="../products/srne-16kwh-lit.html">SRNE 16kWh battery product page</a> for the current catalogue listing.'
      ]},
      { heading: 'Battery quote checklist', list: [
        'Exact battery model, nominal voltage, rated capacity and usable-energy basis.',
        'Continuous and peak current, charge limits, BMS protocol and inverter approval.',
        'Parallel quantity, DC protection, busbars, cable sizes and installation location.',
        'Expected autonomy with listed loads, reserve settings and stated assumptions.',
        'Warranty terms, commissioning record, monitoring access and local service contact.'
      ]}
    ],
    links: [['SRNE 16kWh lithium battery', '../products/srne-16kwh-lit.html'], ['How to choose a solar battery', 'how-to-choose-a-solar-battery-in-ghana.html'], ['Solar battery options', '../solar-batteries-ghana.html']]
  },
];

const existingGuides = [
  ['How Many Solar Panels Do I Need?', 'Estimate panel needs from daily energy use, sunlight and system losses.', 'how-many-solar-panels-do-i-need-in-ghana.html'],
  ['How to Size a Solar Inverter', 'Match inverter output and surge capacity to the appliances you need to run.', 'how-to-size-a-solar-inverter.html'],
  ['Lithium vs Gel Battery', 'Compare usable capacity, charge settings and cycling for solar backup.', 'lithium-vs-gel-battery.html'],
  ['Solar Panel Price in Ghana', 'Understand the equipment, design and installation factors behind solar costs.', 'solar-panel-price-in-ghana.html'],
  ['How to Choose a Solar Battery in Ghana', 'Compare capacity, battery chemistry, inverter compatibility and support.', 'how-to-choose-a-solar-battery-in-ghana.html'],
  ['Solar Fan Buying Guide for Ghana', 'Check panel size, runtime, charging and replacement support before choosing.', 'solar-fan-buying-guide-ghana.html'],
  ['Solar Power for Small Businesses', 'Plan backup power around the loads and working hours that matter most.', 'solar-for-small-businesses-in-ghana.html'],
];
const esc = value => String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const allCards = [
  ...existingGuides.map(([title, description, slug]) => ({ title, description, href: slug })),
  ...guides.map(guide => ({ title: guide.cardTitle, description: guide.description, href: `${guide.slug}.html` })),
];

const articleTemplate = guide => {
  const canonical = `${origin}blog/${guide.slug}.html`;
  const blocks = guide.sections.map(section => {
    const paragraphs = (section.paragraphs || []).map(paragraph => `<p>${paragraph}</p>`).join('');
    const list = section.list ? `<ul>${section.list.map(item => `<li>${item}</li>`).join('')}</ul>` : '';
    return `<section><h2>${esc(section.heading)}</h2>${paragraphs}${list}</section>`;
  }).join('\n');
  const related = guide.links.map(([label, href]) => `<a class="blog-button" href="${esc(href)}">${esc(label)} <span aria-hidden="true">→</span></a>`).join('');
  const structured = {
    '@context': 'https://schema.org', '@type': 'Article', headline: guide.title, description: guide.description,
    mainEntityOfPage: canonical, url: canonical, datePublished: '2026-10-11', dateModified: '2026-10-11',
    author: { '@type': 'Organization', name: 'EliteVolt Systems' },
    publisher: { '@type': 'Organization', name: 'EliteVolt Systems', url: origin, logo: { '@type': 'ImageObject', url: `${origin}images/logo.png` } },
  };
  const structuredText = JSON.stringify(structured).replaceAll('<', '\\u003c');
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(guide.title)} | EliteVolt Systems</title><meta name="description" content="${esc(guide.description)}"><meta name="robots" content="index, follow, max-image-preview:large"><link rel="canonical" href="${canonical}">
<meta property="og:type" content="article"><meta property="og:title" content="${esc(guide.title)}"><meta property="og:site_name" content="EliteVolt Systems"><meta property="og:description" content="${esc(guide.description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${origin}images/logo.png">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(guide.title)}"><meta name="twitter:description" content="${esc(guide.description)}"><meta name="twitter:image" content="${origin}images/logo.png"><script type="application/ld+json">${structuredText}</script>
<link rel="stylesheet" href="../css/seo-pages.css"><link rel="stylesheet" href="../css/site-global.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"><meta name="meta-pixel-id" content=""><script defer src="../js/site-nav.js"></script></head><body>
<header class="site-nav"><div class="nav-inner"><a class="brand" href="../index.html"><img src="../images/logo.png" alt="EliteVolt Systems logo"><span class="brand-copy">Solar • Electrical • Electronics</span></a><nav class="main-nav" aria-label="Main navigation"><a href="../index.html"><i class="fas fa-house" aria-hidden="true"></i> Home</a><a href="../shop.html"><i class="fas fa-store" aria-hidden="true"></i> Shop</a><a href="../calculator.html"><i class="fas fa-calculator" aria-hidden="true"></i> Calc</a><a href="../index.html#services"><i class="fas fa-tools" aria-hidden="true"></i> Services</a><a href="index.html" aria-current="page"><i class="fas fa-blog" aria-hidden="true"></i> Blog</a></nav></div></header>
<main class="article-wrap"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="../index.html">Home</a> / <a href="index.html">Solar guides</a> / <span>${esc(guide.cardTitle)}</span></nav><article><h1>${esc(guide.title)}</h1><p class="article-lead">${esc(guide.lead)}</p>${blocks}<aside class="note"><strong>Planning a solar project?</strong><br>Use a site-specific assessment and the manuals for the exact equipment models before finalising a design or installation.</aside><nav class="related-links" aria-label="Related pages">${related}</nav></article></main>
<footer class="site-footer"><div class="site-footer-inner"><div class="footer-brand"><h3>EliteVolt Systems</h3><p>Solar • Electrical • Electronics</p><p>Solar installation and backup power solutions in Ghana.</p></div><div><h4>Explore</h4><div class="footer-links"><a href="../index.html">Home</a><a href="../shop.html">Shop</a><a href="index.html">Solar guides</a><a href="../calculator.html">Load calculator</a></div></div><div><h4>Popular guides</h4><div class="footer-links"><a href="hybrid-solar-inverters-ghana.html">Hybrid inverter guide</a><a href="solar-water-pumps-ghana.html">Solar water pumps</a><a href="jinko-solar-panels-ghana.html">Jinko solar panels</a></div></div><div><h4>Contact</h4><p><a href="tel:+233249976762">+233 24 997 6762</a></p><p><a href="mailto:info@elitevoltsystems.com">Email EliteVolt</a></p></div></div><div class="footer-bottom"><span>© 2026 EliteVolt Systems</span><span>Ghana</span></div></footer><script src="../js/shop.js"></script><script src="../js/meta-pixel.js"></script></body></html>
`;
};

await mkdir(resolve(root, 'blog'), { recursive: true });
await Promise.all(guides.map(guide => writeFile(resolve(root, 'blog', `${guide.slug}.html`), articleTemplate(guide), 'utf8')));
const indexCanonical = `${origin}blog/`;
const collection = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Solar Blog & Guides for Ghana', url: indexCanonical, hasPart: allCards.map(card => ({ '@type': 'Article', headline: card.title, url: new URL(card.href, indexCanonical).href })) };
const cards = allCards.map(card => `<article class="blog-guide-card"><h2>${esc(card.title)}</h2><p>${esc(card.description)}</p><a class="blog-button" href="${esc(card.href)}">Read this guide <span aria-hidden="true">→</span></a></article>`).join('\n');
const index = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Solar Blog &amp; Guides for Ghana | EliteVolt Systems</title><meta name="description" content="Professional, practical solar, inverter, battery, irrigation and electrical guides for homes and businesses in Ghana."><meta name="robots" content="index, follow, max-image-preview:large"><link rel="canonical" href="${indexCanonical}"><meta property="og:type" content="website"><meta property="og:title" content="Solar Blog &amp; Guides for Ghana | EliteVolt Systems"><meta property="og:site_name" content="EliteVolt Systems"><meta property="og:description" content="Professional, practical solar, inverter, battery, irrigation and electrical guides for homes and businesses in Ghana."><meta property="og:url" content="${indexCanonical}"><meta property="og:image" content="${origin}images/logo.png"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Solar Blog &amp; Guides for Ghana | EliteVolt Systems"><meta name="twitter:description" content="Professional, practical solar, inverter, battery, irrigation and electrical guides for homes and businesses in Ghana."><meta name="twitter:image" content="${origin}images/logo.png"><script type="application/ld+json">${JSON.stringify(collection).replaceAll('<', '\\u003c')}</script><link rel="stylesheet" href="../css/seo-pages.css"><link rel="stylesheet" href="../css/site-global.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"><meta name="meta-pixel-id" content=""><script defer src="../js/site-nav.js"></script></head><body>
<header class="site-nav"><div class="nav-inner"><a class="brand" href="../index.html"><img src="../images/logo.png" alt="EliteVolt Systems logo"><span class="brand-copy">Solar • Electrical • Electronics</span></a><nav class="main-nav" aria-label="Main navigation"><a href="../index.html"><i class="fas fa-house" aria-hidden="true"></i> Home</a><a href="../shop.html"><i class="fas fa-store" aria-hidden="true"></i> Shop</a><a href="../calculator.html"><i class="fas fa-calculator" aria-hidden="true"></i> Calc</a><a href="../index.html#services"><i class="fas fa-tools" aria-hidden="true"></i> Services</a><a href="index.html" aria-current="page"><i class="fas fa-blog" aria-hidden="true"></i> Blog</a></nav></div></header>
<main class="blog-page"><p class="breadcrumbs"><a href="../index.html">Home</a> / Solar guides</p><h1>Solar Blog &amp; Guides</h1><p class="blog-intro">Professional, straightforward guidance on solar panels, cooling, pumps, irrigation, inverters and batteries for homes, businesses and farms in Ghana.</p><div class="blog-guide-grid">${cards}</div><section class="related"><h2>Planning a solar project?</h2><p>Browse solar kits, panels, batteries and inverters, or request a project assessment based on your location and energy needs.</p><div class="cta-row"><a class="blog-button" href="../shop.html">Browse solar products <span aria-hidden="true">→</span></a><a class="blog-button" href="../solar-installation-ghana.html">Solar installation services <span aria-hidden="true">→</span></a></div></section></main>
<footer class="site-footer"><div class="site-footer-inner"><div class="footer-brand"><h3>EliteVolt Systems</h3><p>Solar • Electrical • Electronics</p><p>Solar installation, electrical services, solar products and backup power solutions.</p></div><div><h4>Quick Links</h4><div class="footer-links"><a href="../index.html">Home</a><a href="../shop.html">Shop</a><a href="../calculator.html">Load Calculator</a><a href="../index.html#services">Services</a><a href="index.html">Blog</a></div></div><div><h4>Guides &amp; Blog</h4><div class="footer-links"><a href="solar-air-conditioning-ghana.html">Solar air conditioning</a><a href="solar-water-pumps-ghana.html">Solar water pumps</a><a href="solar-irrigation-system-design-ghana.html">Solar irrigation</a><a href="deye-hybrid-inverters-ghana.html">Deye inverters</a><a href="jinko-solar-panels-ghana.html">Jinko panels</a><a href="srne-hybrid-inverters-ghana.html">SRNE inverters</a><a href="srne-lithium-batteries-ghana.html">SRNE batteries</a></div></div><div><h4>Contact</h4><p>📞 <a href="tel:+233249976762">+233 24 997 6762</a></p><p>✉ <a href="mailto:info@elitevoltsystems.com">info@elitevoltsystems.com</a></p><p>Ghana</p></div></div><div class="footer-bottom"><span>© 2026 EliteVolt Systems. All rights reserved.</span><span>Solar • Electrical • Electronics</span></div></footer><script src="../js/shop.js"></script><script src="../js/meta-pixel.js"></script></body></html>
`;
await writeFile(resolve(root, 'blog', 'index.html'), index, 'utf8');
console.log(`Generated ${guides.length} detailed guides and refreshed the blog index with ${allCards.length} articles.`);
