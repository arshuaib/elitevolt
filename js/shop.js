
    // PRODUCT DATABASE 
    const productsData = [
        { id: "p1", name: "M600X Solar Kit",
            category: "Solar Kits",
            price: 1400,
            stock: true, 
        mainImg: "images/M600X.jpeg",
        thumbnails: ["images/M600X-2.jpeg","images/M600X-3.jpg"], 
        description: "12W solar home system, 4 lamps, USB, 5200mAh battery.", 
        specs: ["12W Panel", "Main Lamp", "3 Secondary", "Torch", "USB Cable"],
        whatsappMsg: "M600X Solar Kit" },
       
        { id: "p2", name: "Lumn Home 840",
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

        { id: "p3", name: "Lumn Home 1230",
        category: "Solar Kits",
        price: 1600, 
        stock: true,
        mainImg: "images/Lumn Home 1230.jpg",
        thumbnails: ["images/Lumn Home 1230-2.jpg", "images/Lumn Home 1230-3.jpg"],
        description: "LUMN Home 1230lm is designed for large rooms, classrooms, or shared spaces. The system is easy to install, Bluetooth-enabled, and powered by a smart solar hub for uninterrupted lighting. 6-7 hours of runtime at full brightness. Three 410-lumen tube lights. MPPT solar charging for maximum efficiency. Durable LiFePO4 battery with 2000 cycles",
        specs: ["1 x Lumn Home Battery Hub 12Ah/40Wh", "3 x Lumn Home LED Tube 2W/410 Lumen", "2M Extend Charging Cable for Lumn Home", "5M Extend Cable for Lumn Home", "3 x Wireless Switch for Lumn Home"], 
        whatsappMsg: "Lumn Home 1230" },

        { id: "p4", name: "Solar Barber Shop 06Ah Starter Pack",
        category: "Solar Kits",
        price: 3500,
        stock: true, 
        mainImg: "images/Solar barber kit.jpeg",
        thumbnails: ["images/barberkit.jpg"],
        description: "The Solar Barber Shop 06Ah Starter Pack includes a 20W solar panel, 6Ah lithium battery Hub for energy storage, two cordless haircutters with accessories such as limit combs, a cleaning brush, and lubricating oil, two efficient LED tube lights and a multi-functional torch.",
        specs: ["Camp Battery Hub 06Ah","20Wp c-Si Standard Sized IEC Certified Solar Panel", "2 x Cordless Battery Powered Durable Professional Hair Clipper", "2 x LT4 LED Tube",  "Hand-Held Torch / Lantern / Remote Control w/ Li-Ion Battery"],
        whatsappMsg: "Solar Barber Shop 06Ah Starter Pack" },

        { id: "p5", name: "Solar speaker",
        category: "Solar Kits",
        price: 7500, 
        stock: true,    
        mainImg: "images/solar-speaker.jpeg", 
        thumbnails: ["images/solar-speaker2.jpeg"], 
        description: "Reliable sound system for events such as road-show campaigns, weddings, churches, karaoke, USB/SD card functionalities, connectivity to Bluetooth devices, digital FM radio for local radio stations", 
        specs: ["Camp Battery Hub 18Ah", "80Wp c-Si Standard Sized IEC Certified Solar Panel",
            "Wireless Portable Bluetooth Karaoke Party Speaker ", "2 Wireless Micphone"], 
        whatsappMsg: "Solar speaker" },

        { id: "p6", 
        name: "16inch Solar fan", 
        category: "Solar Kits", 
        price: 1750, stock: true, 
        mainImg: "images/16in Solar fan.jpeg", 
        thumbnails: ["images/solar-fan.jpg","images/solar-fan1.jpg"], 
        description: "The 16-Inch Built-in Battery Solar Stand Fan Pack comprises of a 25W solar panel and 16-inch stand fan with built-in battery. This portable pack allows direct fan charging and boasts a noiseless, brushless motor for an elegant touch in homes and shops. With 4-speed levels, natural wind mode, and timer function, the fan provides flexible cooling options lasting up to 40 hours and includes LED lighting.)",
        specs: ["16 Inch Solar Built-in Battery Desk Fan", "20Wp c-Si Standard Sized IEC Certified Solar Panel"], 
        whatsappMsg: "16inch Solar fan" },

        { id: "p7", 
        name: "Ritar 12V 200Ah (Deep Cycle Gel Batteries)", 
        category: "Gel Batteries", 
        price: 5000, 
        stock: false, 
        mainImg: "https://www.ritarpower.com/uploads/image/20251226/dg-series-lead-acid-batteries-bulk.webp", 
        thumbnails: ["https://images.unsplash.com/photo-1622484214887-b6bb5e7fc5b3?w=300&h=300&fit=crop"], 
        description: "DG (Deep Cycle GEL) series is designed for frequent cyclic charge anddischarge applications under extreme enviroments. By using strong grids,high purity lead and patented Gel electrolyte, DG series offers excellentrecovery after deep discharge under frequent cyclic discharge, and candeliver 400 cycles at 100% DOD. Suitable for solar, CATV, marine, RV anddeep discharge UPS etc..", 
        specs: ["12V 200Ah", "Low Maintenance"], 
        whatsappMsg: "Ritar 12V 200Ah (Deep Cycle Gel Batteries)" },

        { id: "p8", 
        name: "SRNE Hybrid Inverter 5kW HV", 
        category: "Inverters", 
        price: 8500, 
        stock: true, 
        mainImg: "images/5kw-hv-srne1.png", 
        thumbnails: ["images/5kw-hv-srne2.png", "images/5kw-hv-srne3.png"], 
        description: "Single-Phase Off-grid Solar Storage Inverter, Compatible with 48V storage batteries, Up to 6 units in parallel for 30kW, Time-slot function to save cost with peak-valley, Off-grid/without battery output mode, Aesthetically industrial design appearance, Support BMS communication", 
        specs: ["MODEL -- HYP4850S100-H", "Rated Output Power -- 5,000W", "Max. Output Power -- 10,000VA", "Rated Output Voltage -- 230Vac（L/N/PE, Single-Phase",
            "Waveform -- Pure sine wave", "Battery Type -- Li-ion / Lead-acid / User-defined", "Rated Battery Voltage -- 48V", "Battery Volatge Range -- 40～60Vdc",
            "Max. Solar Charging Current -- 100A", "Max. Grid/Generator Charging Curren -- 60A", "Max. Hybrid Charging Current -- 100A"], 
        whatsappMsg: "SRNE Hybrid Inverter 5kW HV" },

        { id: "p9", 
        name: "SRNE Hybrid Inverter 6kW HV", 
        category: "Inverters", 
        price: 8800, 
        stock: true, 
        mainImg: "images/6kw-hv-srne1.png", 
        thumbnails: ["https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=300&h=300&fit=crop"], 
        description: "Single-Phase Off-grid Solar Storage Inverter □ SRNE 15 years in PV industry, committed to independent R&D and production. □ Holds over 200 patents in energy storage, with unique industry- leading technologies. □ Chooses top-quality international components to deliver high-value products to customers. □ Upholds values of customer priority, proactivity, responsibility, and innovative breakthroughs. □ Advanced MPPT technology with up to 99.9% efficiency □ Up to 6 units in parallel for 36kW □ Time-slot function to save cost with peak-valley □ Off-grid/without battery output mode □ Aesthetically industrial design appearance □ Support BMS communication", 
        specs: ["Model -- HYP4860S100-H", "Rated Output Power -- 6,200W", "Max. Output Power -- 12,400VA", "Rated Output Voltage -- 230Vac（L/N/PE, Single-Phase",
            "Rated AC Frequency -- 50/60Hz", "Pure sine wave", "Switch Time -- 10ms（typical)"],     
        whatsappMsg: "SRNE Hybrid Inverter 6kW HV" },

    ];

    // Pagination settings
    const ITEMS_PER_PAGE = 12;
    let currentPage = 1;
    let currentSearchTerm = "";
    let currentCategory = "All";

    // Cart state
    let cart = [];
    function loadCart() { const s = localStorage.getItem("ev_cart_v4"); if(s) { try { cart = JSON.parse(s); } catch(e) { cart = []; } } else cart = []; validateCart(); updateAllUI(); }
    function saveCart() { localStorage.setItem("ev_cart_v4", JSON.stringify(cart)); }
    function validateCart() { let changed = false; cart = cart.filter(item => { const p = productsData.find(pr=> pr.id === item.id); if(!p || !p.stock) { changed=true; return false; } return true; }); if(changed) saveCart(); }

    function addToCart(productId) { 
        const p = productsData.find(pr=> pr.id === productId); 
        if(!p) return; 
        if(!p.stock) { alert(`❌ ${p.name} out of stock`); return; } 
        const exist = cart.find(i=> i.id === productId); 
        if(exist) exist.quantity += 1; 
        else cart.push({ id: p.id, name: p.name, price: p.price, quantity: 1 }); 
        saveCart(); 
        updateAllUI(); 
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
    return productsData.filter(product => {

        const matchesSearch =
            product.name.toLowerCase()
            .includes(currentSearchTerm.toLowerCase());

        const matchesCategory =
            currentCategory === "All" ||
            product.category === currentCategory;

        return matchesSearch && matchesCategory;
    });
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

    function renderProducts() {
        const container = document.getElementById('productsGrid');
        if(!container) return;
        const paginated = getPaginatedProducts();
        const totalPages = getTotalPages();
        
        if(paginated.length === 0) {
            container.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:2rem;">🔍 No products found</div>';
            document.getElementById('paginationControls').innerHTML = '';
            return;
        }
        
        container.innerHTML = paginated.map(p => `
            <div class="product-card">
                ${!p.stock ? '<div class="out-of-stock-badge">OUT OF STOCK</div>' : ''}
                <img class="product-image" src="${p.mainImg}" alt="${p.name}" onclick="openModal('${p.id}')">
                <div class="product-title">${escapeHtml(p.name)}</div>
                <div class="product-price">GH₵ ${p.price}</div>
                <button class="btn-details" onclick="openModal('${p.id}')">Details</button>
                <button class="btn-add" ${!p.stock ? 'disabled' : ''} onclick="addToCart('${p.id}')">${p.stock ? 'Add' : 'Out of stock'}</button>
            </div>
        `).join('');
        
        // Render pagination buttons
        renderPagination(totalPages);
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
        updateDesktopCartPanel();
        updateCartBadge();
    }
    
    function updateCartBadge() {
        const badge = document.getElementById('cartItemCount');
        const totalItems = cart.reduce((sum,i)=> sum + i.quantity, 0);
        if(totalItems>0) { badge.style.display = 'flex'; badge.innerText = totalItems>99 ? '99+' : totalItems; }
        else badge.style.display = 'none';
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
                            <small>GH₵ ${item.price}</small>
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

        html += `</ul><div class="drawer-total">Total: GH₵ ${total.toFixed(2)}</div>
                <div class="drawer-buttons">
                    <button class="clear-cart-btn-sm" onclick="clearCart()">🗑 Clear Cart</button>
                    <button class="btn-whatsapp" onclick="checkoutWhatsApp()">💬 WhatsApp Order</button>
                    <button class="btn-email" onclick="checkoutEmail()">✉️ Email Order</button>
                </div>
                <div class="cart-note-drawer"><i class="fas fa-info-circle"></i> Unavailable items auto-removed</div>`;
        container.innerHTML = html;
    }
    
    function updateDesktopCartPanel() {
        const cont = document.getElementById('desktopCartContent');
        if(!cont) return;
        if(cart.length===0) { cont.innerHTML = '<p style="padding:1rem; text-align:center;">Cart empty</p>'; document.getElementById('desktopTotal').innerText='0.00'; return; }
        let html = '<ul style="list-style:none; max-height:300px; overflow:auto;">';
        let total=0;
        cart.forEach(item=> {
            const prod = productsData.find(p=>p.id===item.id);
            if(!prod||!prod.stock) return;
            total += item.price*item.quantity;
           html += `<li style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #eee;">
    <span>
        <strong>${escapeHtml(item.name)}</strong>
        x${item.quantity}
    </span>

    <div style="display:flex; gap:8px; align-items:center;">
        <span>
            GH₵ ${(item.price*item.quantity).toFixed(2)}
        </span>

        <button class="remove-item-btn"
            onclick="removeFromCart('${item.id}')">
            ×
        </button>
    </div>

</li>`;

        });

        html += '</ul>';
        cont.innerHTML = html;
        document.getElementById('desktopTotal').innerText = total.toFixed(2);
    }
    
    function buildOrderMessage() {
        const avail = cart.filter(item=> productsData.find(p=>p.id===item.id && p.stock));
        if(avail.length===0) return null;
        let msg = "🛒 *NEW ORDER*\n---------------------------\n";
        let total=0;
        avail.forEach((item,i)=>{ const cost=item.price*item.quantity; total+=cost; msg+=`${i+1}. ${item.name} x${item.quantity} - GH₵ ${cost}\n`; });
        msg+=`---------------------------\n💰 Total: GH₵ ${total.toFixed(2)}\nPlease process my order.`;
        return msg;
    }
    function checkoutWhatsApp() { const m = buildOrderMsg(); if(!m) { alert("No available items in cart"); return; } window.open(`https://wa.me/233249976762?text=${encodeURIComponent(m)}`,'_blank'); }
    function checkoutEmail() { const m = buildOrderMsg(); if(!m) { alert("No available items in cart"); return; } window.location.href = `mailto:sales@elitevoltsystems.com?subject=Order&body=${encodeURIComponent(m)}`; }
    function buildOrderMsg() { return buildOrderMessage(); }
    
    let modalImages = [];
    let modalImageIndex = 0;
    let modalSlideshowTimer = null;

    function showModalImage(index) {
        if(modalImages.length === 0) return;
        modalImageIndex = (index + modalImages.length) % modalImages.length;
        const mainImage = document.getElementById('modalMainImg');
        if(!mainImage) return;

        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.src = modalImages[modalImageIndex];
            mainImage.style.opacity = '1';
        }, 120);

        document.querySelectorAll('.modal-thumbnail').forEach((thumbnail, thumbnailIndex) => {
            thumbnail.classList.toggle('active', thumbnailIndex === modalImageIndex);
        });
    }

    function startModalSlideshow() {
        clearInterval(modalSlideshowTimer);
        if(modalImages.length < 2) return;
        modalSlideshowTimer = setInterval(() => {
            showModalImage(modalImageIndex + 1);
        }, 3000);
    }

    function selectModalImage(index) {
        showModalImage(index);
        startModalSlideshow();
    }

    function openModal(pid) {
        const p = productsData.find(pr=>pr.id===pid);
        if(!p) return;
        const inner = document.getElementById('modalInner');
        modalImages = [...new Set([p.mainImg, ...p.thumbnails])];
        modalImageIndex = 0;
        const thumbs = modalImages.map((img, index) =>
            `<img class="modal-thumbnail ${index === 0 ? 'active' : ''}" src="${img}" alt="${escapeHtml(p.name)} image ${index + 1}" onclick="selectModalImage(${index})">`
        ).join('');
        inner.innerHTML = `
            <div class="modal-layout">
                <div class="product-gallery">
                    <img id="modalMainImg" src="${p.mainImg}" alt="${escapeHtml(p.name)}">
                    <div class="thumbnails">${thumbs}</div>
                </div>
                <div class="modal-details">
                    <h3>${escapeHtml(p.name)}</h3>
                    <p>${escapeHtml(p.description)}</p>
                    <ul>${p.specs.map(s=>`<li>${escapeHtml(s)}</li>`).join('')}</ul>
                    ${!p.stock ? '<p style="color:red;">Out of stock</p>' : ''}
                    <a href="https://wa.me/233249976762?text=${encodeURIComponent(p.whatsappMsg)}" target="_blank" rel="noopener">
                        <button class="btn-whatsapp" style="width:100%; margin-top:10px;" ${!p.stock ? 'disabled' : ''}>Enquire on WhatsApp</button>
                    </a>
                </div>
            </div>`;
        document.getElementById('productModal').style.display = "flex";
        document.body.style.overflow = 'hidden';
        startModalSlideshow();
    }
    function changeModalImage(src) {
        const index = modalImages.indexOf(src);
        if(index !== -1) selectModalImage(index);
    }
    function closeModal() {
        clearInterval(modalSlideshowTimer);
        modalSlideshowTimer = null;
        document.getElementById('productModal').style.display = "none";
        document.body.style.overflow = '';
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
    
    // Drawer controls
    function openDrawer() { document.getElementById('cartDrawer').classList.add('open'); document.getElementById('drawerOverlay').classList.add('active'); }
    function closeDrawer() { document.getElementById('cartDrawer').classList.remove('open'); document.getElementById('drawerOverlay').classList.remove('active'); }
    
    // Event listeners
    document.getElementById('floatingCartBtn')?.addEventListener('click', openDrawer);
    document.getElementById('closeDrawerBtn')?.addEventListener('click', closeDrawer);
    document.getElementById('drawerOverlay')?.addEventListener('click', closeDrawer);
    document.getElementById('closeModalBtn')?.addEventListener('click', closeModal);
    window.onclick = (e) => { if(e.target === document.getElementById('productModal')) closeModal(); };
    
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    searchInput?.addEventListener('input', (e) => { currentSearchTerm = e.target.value; currentPage = 1; renderProducts(); });
    clearBtn?.addEventListener('click', () => { searchInput.value = ''; currentSearchTerm = ''; currentPage = 1; renderProducts(); });
    document.getElementById('clearCartDesktopBtn')?.addEventListener('click', clearCart);
    document.getElementById('desktopWhatsapp')?.addEventListener('click', checkoutWhatsApp);
    document.getElementById('desktopEmail')?.addEventListener('click', checkoutEmail);

    const categoryFilter = document.getElementById("categoryFilter");

categoryFilter?.addEventListener("change", function() {
    currentCategory = this.value;
    currentPage = 1;
    renderProducts();
});
    
    window.addToCart = addToCart; window.changeQuantity = changeQuantity; window.clearCart = clearCart;
    window.removeFromCart = removeFromCart;
    window.openModal = openModal; window.changeModalImage = changeModalImage;
    window.selectModalImage = selectModalImage;
    window.checkoutWhatsApp = checkoutWhatsApp; window.checkoutEmail = checkoutEmail;
    window.goToPage = goToPage;
    
    loadCart();
