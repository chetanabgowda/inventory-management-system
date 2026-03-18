let glitterInitialized = false;

document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the login page
    if (document.getElementById('loginForm')) {
        initializeLogin();
    }

    // Initialize glitter if a container exists (for dashboard, summary, etc.)
    if (document.getElementById('glitterContainer')) {
        initializeGlitterEffects();
    }

    // Check if we're on the dashboard page
    if (document.querySelector('.dashboard-container')) {
        initializeDashboard();
    }
});

// Glitter Effects Initialization
function initializeGlitterEffects() {
    if (glitterInitialized) return;
    glitterInitialized = true;

    // Show loading animation first
    showLoadingAnimation();

    const glitterContainer = document.getElementById('glitterContainer');
    if (!glitterContainer) return;
    // Create enhanced glitter particles with delay for loading effect
    setTimeout(() => {
        for (let i = 0; i < 80; i++) {
            setTimeout(() => {
                createGlitterParticle(glitterContainer, i);
            }, i * 20);
        }
    }, 500);

    // Add sparkle effects to interactive elements
    setTimeout(() => {
        addSparkleEffects();
    }, 1000);

    // Add rainbow text effects to headings
    setTimeout(() => {
        addRainbowTextEffects();
    }, 1500);

    // Add floating animations to decorative elements
    setTimeout(() => {
        addFloatingAnimations();
    }, 2000);

    // Add chart glitter effects
    setTimeout(() => {
        addChartGlitterEffects();
    }, 2500);

    // Add form field animations
    setTimeout(() => {
        addFormFieldAnimations();
    }, 3000);

    // Add success animations
    setTimeout(() => {
        addSuccessAnimations();
        addProductManagementAnimations();
        hideLoadingAnimation();
    }, 3500);
}

function createGlitterParticle(container, index) {
    const particle = document.createElement('div');
    particle.className = 'glitter-particle';

    // Random positioning
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = 4 + Math.random() * 4;

    particle.style.left = `${left}%`;
    particle.style.top = `${top}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;

    // Random size variation (larger range)
    const size = 1 + Math.random() * 6;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Random opacity for depth
    const opacity = 0.3 + Math.random() * 0.7;
    particle.style.opacity = opacity;

    // Random z-index for layering
    const zIndex = Math.floor(Math.random() * 10) + 1;
    particle.style.zIndex = zIndex;

    container.appendChild(particle);
}

function addSparkleEffects() {
    // Add sparkle effect to buttons on hover
    const buttons = document.querySelectorAll('button, .action-btn, .btn-add, .btn-record-sale');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            createSparkleEffect(this);
        });
    });
}

function createSparkleEffect(element) {
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle-effect';
        sparkle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: radial-gradient(circle, #fff 0%, #667eea 50%, transparent 100%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: sparkle 0.8s ease-out forwards;
        `;

        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const angle = (i / 8) * Math.PI * 2;
        const distance = 20 + Math.random() * 30;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;

        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        sparkle.style.animationDelay = `${i * 0.1}s`;

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 800);
    }
}

function addRainbowTextEffects() {
    // Add rainbow effect to main headings
    const headings = document.querySelectorAll('h1, h2, h3');

    headings.forEach(heading => {
        if (!heading.closest('.stat-card') && !heading.closest('.summary-card')) {
            heading.classList.add('rainbow-text');
        }
    });
}

function addFloatingAnimations() {
    // Add floating animation to icons
    const icons = document.querySelectorAll('.section-icon, .chart-icon, .summary-icon, .status-icon, .metric-icon');

    icons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.5}s`;
        icon.classList.add('floating-element');
    });
}

function addChartGlitterEffects() {
    // Add dynamic glitter to chart containers
    const chartContainers = document.querySelectorAll('.chart-container');

    chartContainers.forEach((container, index) => {
        setInterval(() => {
            createChartSparkle(container);
        }, 2000 + index * 500);
    });
}

function createChartSparkle(container) {
    const sparkle = document.createElement('div');
    sparkle.style.cssText = `
        position: absolute;
        width: 3px;
        height: 3px;
        background: radial-gradient(circle, #fff 0%, #667eea 70%, transparent 100%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10;
        animation: sparkle 1.2s ease-out forwards;
    `;

    const rect = container.getBoundingClientRect();
    const x = Math.random() * rect.width;
    const y = Math.random() * rect.height;

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    container.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1200);
}

function addFormFieldAnimations() {
    // Add focus animations to form fields
    const formFields = document.querySelectorAll('input, select, textarea');

    formFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.parentElement.classList.add('field-focused');
            createFieldSparkle(this);
        });

        field.addEventListener('blur', function() {
            this.parentElement.classList.remove('field-focused');
        });
    });
}

function createFieldSparkle(field) {
    for (let i = 0; i < 6; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: radial-gradient(circle, #fff 0%, #667eea 80%, transparent 100%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 100;
            animation: sparkle 0.8s ease-out forwards;
        `;

        const rect = field.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const angle = (i / 6) * Math.PI * 2;
        const distance = 15 + Math.random() * 20;
        const x = centerX + Math.cos(angle) * distance - window.scrollX;
        const y = centerY + Math.sin(angle) * distance - window.scrollY;

        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        sparkle.style.animationDelay = `${i * 0.1}s`;

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 800);
    }
}

function addSuccessAnimations() {
    // Add success animation listeners to forms
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Only trigger if form is valid
            if (this.checkValidity()) {
                e.preventDefault();
                showSuccessAnimation(this);
                // Submit after animation
                setTimeout(() => {
                    this.submit();
                }, 1500);
            }
        });
    });
}

function showSuccessAnimation(element) {
    // Create success particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: radial-gradient(circle, #fff 0%, #4CAF50 70%, transparent 100%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: bounce-in 0.6s ease-out forwards, float-gentle 2s ease-in-out infinite;
        `;

        const rect = element.getBoundingClientRect();
        const x = rect.left + Math.random() * rect.width;
        const y = rect.top + Math.random() * rect.height;

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.animationDelay = `${Math.random() * 0.5}s`;

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 2000);
    }

    // Add success glow to element
    element.style.animation = 'pulse-glow 1s ease-in-out';
    setTimeout(() => {
        element.style.animation = '';
    }, 1000);
}

function showLoadingAnimation() {
    const loadingOverlay = document.createElement('div');
    loadingOverlay.id = 'loadingOverlay';
    loadingOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fadeIn 0.5s ease;
    `;

    const loadingSpinner = document.createElement('div');
    loadingSpinner.style.cssText = `
        width: 60px;
        height: 60px;
        border: 4px solid rgba(102, 126, 234, 0.2);
        border-top: 4px solid #667eea;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        position: relative;
    `;

    const loadingText = document.createElement('div');
    loadingText.textContent = 'Initializing Magic...';
    loadingText.style.cssText = `
        position: absolute;
        top: 80px;
        color: #667eea;
        font-weight: 600;
        font-size: 16px;
        animation: text-glow 1s ease-in-out infinite alternate;
    `;

    loadingSpinner.appendChild(loadingText);
    loadingOverlay.appendChild(loadingSpinner);
    document.body.appendChild(loadingOverlay);
}

function hideLoadingAnimation() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => {
            loadingOverlay.remove();
        }, 500);
    }
}

function initializeLogin() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Basic validation
        if (!username || !password) {
            showMessage('Please fill in both username and password', 'error');
            return;
        }

        // Here you would typically send the credentials to your server
        // For now, we'll just simulate a login process
        showMessage('Logging in...', 'info');

        // Simulate API call delay
        setTimeout(() => {
            // For demo purposes, accept any non-empty credentials
            if (username && password) {
                showMessage('Login successful! Redirecting...', 'success');
                // Redirect to dashboard or main page
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1000);
            } else {
                showMessage('Invalid credentials', 'error');
            }
        }, 1000);
    });

    function showMessage(message, type) {
        // Remove existing message
        const existingMessage = document.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = `message ${type}`;
        messageEl.textContent = message;

        // Style the message
        messageEl.style.cssText = `
            padding: 10px 15px;
            margin-top: 15px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            text-align: center;
            animation: fadeIn 0.3s ease;
        `;

        if (type === 'error') {
            messageEl.style.backgroundColor = '#fee';
            messageEl.style.color = '#c33';
            messageEl.style.border = '1px solid #fcc';
        } else if (type === 'success') {
            messageEl.style.backgroundColor = '#efe';
            messageEl.style.color = '#363';
            messageEl.style.border = '1px solid #cfc';
        } else {
            messageEl.style.backgroundColor = '#eef';
            messageEl.style.color = '#336';
            messageEl.style.border = '1px solid #ccf';
        }

        // Add fade-in animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);

        // Insert message after the form
        loginForm.appendChild(messageEl);

        // Auto-remove success messages after redirect
        if (type === 'success') return;

        // Remove error/info messages after 3 seconds
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.remove();
            }
        }, 3000);
    }

    // Add focus effects
    [usernameInput, passwordInput].forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });

        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
}

function initializeDashboard() {
    // Initialize inventory management
    let products = JSON.parse(localStorage.getItem('inventoryProducts')) || [];
    let currentPage = 1;
    const itemsPerPage = 10;

    // DOM elements
    const addProductForm = document.getElementById('addProductForm');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const statusFilter = document.getElementById('statusFilter');
    const productsTableBody = document.getElementById('productsTableBody');
    const lowStockAlert = document.getElementById('lowStockAlert');
    const lowStockList = document.getElementById('lowStockList');
    const logoutBtn = document.getElementById('logoutBtn');
    const chartPeriodSelect = document.getElementById('chartPeriod');

    // Statistics elements
    const totalItemsEl = document.getElementById('totalItems');
    const lowStockItemsEl = document.getElementById('lowStockItems');
    const totalValueEl = document.getElementById('totalValue');
    const categoriesCountEl = document.getElementById('categoriesCount');

    // Stock tracking elements
    const stockTotalItemsEl = document.getElementById('stockTotalItems');
    const stockLowItemsEl = document.getElementById('stockLowItems');
    const stockOutItemsEl = document.getElementById('stockOutItems');
    const inStockCountEl = document.getElementById('inStockCount');
    const lowStockCountEl = document.getElementById('lowStockCount');
    const outOfStockCountEl = document.getElementById('outOfStockCount');
    const inStockBarEl = document.getElementById('inStockBar');
    const lowStockBarEl = document.getElementById('lowStockBar');
    const outOfStockBarEl = document.getElementById('outOfStockBar');
    const alertsCountEl = document.getElementById('alertsCount');
    const alertsListEl = document.getElementById('alertsList');
    const stockProgressContainerEl = document.getElementById('stockProgressContainer');

    // Initialize the dashboard
    renderProducts();
    updateStatistics();
    updateStockTracking();
    updateLowStockAlert();
    initializeCharts();

    // Event listeners
    addProductForm.addEventListener('submit', addProduct);
    searchInput.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
    statusFilter.addEventListener('change', filterProducts);
    logoutBtn.addEventListener('click', logout);
    chartPeriodSelect.addEventListener('change', updateCharts);

    function addProduct(e) {
        e.preventDefault();

        const name = document.getElementById('productName').value.trim();
        const quantity = parseInt(document.getElementById('productQuantity').value);
        const price = parseFloat(document.getElementById('productPrice').value);
        const category = document.getElementById('productCategory').value;

        if (!name || quantity < 0 || price < 0 || !category) {
            showNotification('Please fill in all fields with valid values', 'error');
            return;
        }

        const product = {
            id: Date.now(),
            name: name,
            quantity: quantity,
            price: price,
            category: category,
            dateAdded: new Date().toISOString()
        };

        products.push(product);
        saveProducts();

        // Reset form
        addProductForm.reset();

        // Update UI
        renderProducts();
        updateStatistics();
        updateStockTracking();
        updateLowStockAlert();
        updateCharts();

        showNotification('Product added successfully!', 'success');
    }

    function renderProducts(filteredProducts = products) {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

        productsTableBody.innerHTML = '';

        if (paginatedProducts.length === 0) {
            const emptyRow = document.createElement('tr');
            emptyRow.innerHTML = `
                <td colspan="7" style="text-align: center; padding: 40px; color: #666;">
                    No products found. Add your first product above.
                </td>
            `;
            productsTableBody.appendChild(emptyRow);
            return;
        }

        paginatedProducts.forEach(product => {
            const row = document.createElement('tr');

            const totalValue = (product.quantity * product.price).toFixed(2);
            const isLowStock = product.quantity < 5;
            const statusClass = isLowStock ? 'quantity-low' : 'quantity-normal';
            const statusText = product.quantity === 0 ? 'Out of Stock' : (isLowStock ? 'Low Stock' : 'In Stock');

            row.innerHTML = `
                <td><span class="product-name">${product.name}</span></td>
                <td><span class="category">${product.category}</span></td>
                <td><span class="${statusClass}">${product.quantity}</span></td>
                <td><span class="price">$${product.price.toFixed(2)}</span></td>
                <td><span class="price">$${totalValue}</span></td>
                <td><span class="${statusClass}">${statusText}</span></td>
                <td>
                    <button class="btn-edit" onclick="editProduct(${product.id})">Edit</button>
                    <button class="btn-delete" onclick="deleteProduct(${product.id})">Delete</button>
                </td>
            `;

            productsTableBody.appendChild(row);
        });
    }

    function deleteProduct(id) {
        if (confirm('Are you sure you want to delete this product?')) {
            products = products.filter(product => product.id !== id);
            saveProducts();
            renderProducts();
            updateStatistics();
            updateStockTracking();
            updateLowStockAlert();
            updateCharts();
            showNotification('Product deleted successfully!', 'success');
        }
    }

    function editProduct(id) {
        const product = products.find(p => p.id === id);
        if (!product) return;

        // Populate form with product data
        document.getElementById('productName').value = product.name;
        document.getElementById('productQuantity').value = product.quantity;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productCategory').value = product.category;

        // Change button text
        const submitBtn = addProductForm.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Update Product';

        // Update form submission
        addProductForm.removeEventListener('submit', addProduct);
        addProductForm.addEventListener('submit', function updateHandler(e) {
            e.preventDefault();

            const name = document.getElementById('productName').value.trim();
            const quantity = parseInt(document.getElementById('productQuantity').value);
            const price = parseFloat(document.getElementById('productPrice').value);
            const category = document.getElementById('productCategory').value;

            if (!name || quantity < 0 || price < 0 || !category) {
                showNotification('Please fill in all fields with valid values', 'error');
                return;
            }

            // Update product
            product.name = name;
            product.quantity = quantity;
            product.price = price;
            product.category = category;

            saveProducts();
            addProductForm.reset();
            submitBtn.textContent = 'Add Product';

            // Reset form handler
            addProductForm.removeEventListener('submit', updateHandler);
            addProductForm.addEventListener('submit', addProduct);

            // Update UI
            renderProducts();
            updateStatistics();
            updateStockTracking();
            updateLowStockAlert();
            updateCharts();

            showNotification('Product updated successfully!', 'success');
        });
    }

    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const categoryValue = categoryFilter.value;
        const statusValue = statusFilter.value;

        let filteredProducts = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm);
            const matchesCategory = !categoryValue || product.category === categoryValue;

            let matchesStatus = true;
            if (statusValue === 'in-stock') {
                matchesStatus = product.quantity > 5;
            } else if (statusValue === 'low-stock') {
                matchesStatus = product.quantity > 0 && product.quantity <= 5;
            } else if (statusValue === 'out-of-stock') {
                matchesStatus = product.quantity === 0;
            }

            return matchesSearch && matchesCategory && matchesStatus;
        });

        currentPage = 1; // Reset to first page when filtering
        renderProducts(filteredProducts);
    }

    function updateStatistics() {
        const totalItems = products.length;
        const lowStockItems = products.filter(product => product.quantity < 5 && product.quantity > 0).length;
        const totalValue = products.reduce((sum, product) => sum + (product.quantity * product.price), 0);
        const categories = new Set(products.map(product => product.category)).size;

        totalItemsEl.textContent = totalItems;
        lowStockItemsEl.textContent = lowStockItems;
        totalValueEl.textContent = `$${totalValue.toFixed(2)}`;
        categoriesCountEl.textContent = categories;
    }

    function updateStockTracking() {
        const totalItems = products.length;
        const lowStockItems = products.filter(product => product.quantity > 0 && product.quantity <= 5).length;
        const outOfStockItems = products.filter(product => product.quantity === 0).length;
        const inStockItems = totalItems - lowStockItems - outOfStockItems;

        // Update overview stats
        stockTotalItemsEl.textContent = totalItems;
        stockLowItemsEl.textContent = lowStockItems;
        stockOutItemsEl.textContent = outOfStockItems;

        // Update status counts
        inStockCountEl.textContent = inStockItems;
        lowStockCountEl.textContent = lowStockItems;
        outOfStockCountEl.textContent = outOfStockItems;

        // Calculate percentages for progress bars
        const inStockPercent = totalItems > 0 ? (inStockItems / totalItems) * 100 : 0;
        const lowStockPercent = totalItems > 0 ? (lowStockItems / totalItems) * 100 : 0;
        const outOfStockPercent = totalItems > 0 ? (outOfStockItems / totalItems) * 100 : 0;

        // Update progress bars with animation
        setTimeout(() => {
            inStockBarEl.style.width = `${inStockPercent}%`;
            lowStockBarEl.style.width = `${lowStockPercent}%`;
            outOfStockBarEl.style.width = `${outOfStockPercent}%`;
        }, 100);

        // Update alerts
        updateStockAlerts();

        // Update progress section
        updateStockProgress();
    }

    function updateStockAlerts() {
        const lowStockProducts = products.filter(product => product.quantity > 0 && product.quantity <= 5);

        alertsCountEl.textContent = lowStockProducts.length;
        alertsListEl.innerHTML = '';

        if (lowStockProducts.length === 0) {
            alertsListEl.innerHTML = `
                <div class="no-alerts">
                    <div class="no-alerts-icon">✅</div>
                    <p>All items are well stocked!</p>
                </div>
            `;
            return;
        }

        lowStockProducts.forEach((product, index) => {
            const alertItem = document.createElement('div');
            alertItem.className = 'alert-item';
            alertItem.style.animationDelay = `${index * 0.1}s`;

            const stockLevel = product.quantity <= 2 ? 'critical' : 'warning';
            const urgencyText = product.quantity <= 2 ? 'Urgent' : 'Low';

            alertItem.innerHTML = `
                <div class="alert-product-info">
                    <div class="alert-product-icon">📦</div>
                    <div class="alert-product-details">
                        <h5>${product.name}</h5>
                        <p>${product.category} • ${urgencyText}</p>
                    </div>
                </div>
                <div class="alert-quantity">${product.quantity} left</div>
            `;

            alertsListEl.appendChild(alertItem);
        });
    }

    function updateStockProgress() {
        stockProgressContainerEl.innerHTML = '';

        if (products.length === 0) {
            stockProgressContainerEl.innerHTML = `
                <div class="no-products">
                    <p>No products to display. Add some products to see stock levels.</p>
                </div>
            `;
            return;
        }

        // Sort products by quantity (lowest first) and take top 5
        const sortedProducts = [...products].sort((a, b) => a.quantity - b.quantity).slice(0, 5);

        sortedProducts.forEach((product, index) => {
            const progressItem = document.createElement('div');
            progressItem.className = 'progress-item';
            progressItem.style.animationDelay = `${index * 0.1}s`;

            // Determine stock level
            let stockLevel = 'normal';
            let maxStock = 20; // Assume max stock level for percentage calculation

            if (product.quantity === 0) {
                stockLevel = 'critical';
            } else if (product.quantity <= 5) {
                stockLevel = 'low';
            }

            const percentage = Math.min((product.quantity / maxStock) * 100, 100);

            progressItem.innerHTML = `
                <div class="progress-icon">📦</div>
                <div class="progress-info">
                    <div class="progress-name">${product.name}</div>
                    <div class="progress-details">${product.category} • ${product.quantity} units</div>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar">
                        <div class="progress-fill ${stockLevel}" style="width: 0%"></div>
                    </div>
                    <div class="progress-percentage">${Math.round(percentage)}%</div>
                </div>
            `;

            stockProgressContainerEl.appendChild(progressItem);

            // Animate progress bar after element is added
            setTimeout(() => {
                const progressFill = progressItem.querySelector('.progress-fill');
                progressFill.style.width = `${percentage}%`;
            }, 500 + (index * 100));
        });
    }

    function initializeCharts() {
        const salesCtx = document.getElementById('salesChart').getContext('2d');

        // Sample sales data - in a real app, this would come from your backend
        const salesData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Sales ($)',
                data: [1200, 1900, 3000, 5000, 2000, 3000],
                borderColor: '#4CAF50',
                backgroundColor: createGradient(salesCtx, '#4CAF50', '#66BB6A'),
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#4CAF50',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 3,
                pointRadius: 6,
                pointHoverRadius: 8,
                pointHoverBackgroundColor: '#4CAF50',
                pointHoverBorderColor: '#ffffff',
                pointHoverBorderWidth: 3
            }]
        };

        // Destroy existing chart if it exists
        if (window.salesChartInstance) {
            window.salesChartInstance.destroy();
        }

        window.salesChartInstance = new Chart(salesCtx, {
            type: 'line',
            data: salesData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                    mode: 'index'
                },
                plugins: {
                    legend: {
                        display: false // Hide legend for cleaner look
                    },
                    title: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        borderColor: 'rgba(76, 175, 80, 0.5)',
                        borderWidth: 1,
                        cornerRadius: 8,
                        displayColors: false,
                        callbacks: {
                            title: function(context) {
                                return `Month: ${context[0].label}`;
                            },
                            label: function(context) {
                                return `Sales: $${context.parsed.y.toLocaleString()}`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#666',
                            font: {
                                weight: '500'
                            }
                        }
                    },
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            color: '#666',
                            font: {
                                weight: '500'
                            },
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeInOutQuart',
                    onComplete: function() {
                        // Add a subtle glow effect after animation
                        const chart = this;
                        const ctx = chart.ctx;
                        ctx.save();
                        ctx.shadowColor = 'rgba(76, 175, 80, 0.3)';
                        ctx.shadowBlur = 10;
                        ctx.strokeStyle = '#4CAF50';
                        ctx.lineWidth = 2;
                        ctx.beginPath();
                        chart.data.datasets[0].data.forEach((value, index) => {
                            const x = chart.scales.x.getPixelForValue(chart.data.labels[index]);
                            const y = chart.scales.y.getPixelForValue(value);
                            if (index === 0) {
                                ctx.moveTo(x, y);
                            } else {
                                ctx.lineTo(x, y);
                            }
                        });
                        ctx.stroke();
                        ctx.restore();
                    }
                },
                hover: {
                    animationDuration: 300
                },
                elements: {
                    point: {
                        hoverBorderWidth: 4
                    }
                }
            }
        });

        updateSalesMetrics();
        updateProductChart();
    }

    function createGradient(ctx, color1, color2) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, color1 + '20'); // 20 = 12.5% opacity
        gradient.addColorStop(1, color2 + '05'); // 05 = 3.125% opacity
        return gradient;
    }

    function updateSalesMetrics() {
        const salesData = [1200, 1900, 3000, 5000, 2000, 3000];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

        // Calculate total sales
        const totalSales = salesData.reduce((sum, value) => sum + value, 0);
        document.getElementById('totalSales').textContent = `$${totalSales.toLocaleString()}`;

        // Calculate average sales
        const avgSales = Math.round(totalSales / salesData.length);
        document.getElementById('avgSales').textContent = `$${avgSales.toLocaleString()}`;

        // Find peak month
        const maxSales = Math.max(...salesData);
        const peakIndex = salesData.indexOf(maxSales);
        const peakMonth = months[peakIndex];
        document.getElementById('peakMonth').textContent = `${peakMonth} ($${maxSales.toLocaleString()})`;

        // Calculate growth rate (comparing first and last months)
        const growthRate = ((salesData[salesData.length - 1] - salesData[0]) / salesData[0] * 100).toFixed(1);
        const growthSymbol = growthRate >= 0 ? '+' : '';
        document.getElementById('growthRate').textContent = `${growthSymbol}${growthRate}%`;

        // Calculate target achievement (assuming target is 15,000)
        const target = 15000;
        const achievement = ((totalSales / target) * 100).toFixed(0);
        document.getElementById('salesTarget').textContent = `${achievement}% Achieved`;
    }

    function updateProductChart() {
        const productCtx = document.getElementById('productChart').getContext('2d');
        const legendContainer = document.getElementById('productLegend');
        const totalCategoriesEl = document.getElementById('totalCategories');
        const mostStockedEl = document.getElementById('mostStockedCategory');
        const leastStockedEl = document.getElementById('leastStockedCategory');

        // Count products by category
        const categoryCount = {};
        const categoryQuantities = {};

        products.forEach(product => {
            categoryCount[product.category] = (categoryCount[product.category] || 0) + 1;
            categoryQuantities[product.category] = (categoryQuantities[product.category] || 0) + product.quantity;
        });

        const categories = Object.keys(categoryCount);
        const counts = Object.values(categoryCount);
        const quantities = categories.map(cat => categoryQuantities[cat]);

        // Update total categories
        totalCategoriesEl.textContent = categories.length;

        // Find most and least stocked categories
        if (categories.length > 0) {
            const maxQuantity = Math.max(...quantities);
            const minQuantity = Math.min(...quantities);

            const mostStocked = categories[quantities.indexOf(maxQuantity)];
            const leastStocked = categories[quantities.indexOf(minQuantity)];

            mostStockedEl.textContent = `${mostStocked} (${maxQuantity})`;
            leastStockedEl.textContent = `${leastStocked} (${minQuantity})`;
        } else {
            mostStockedEl.textContent = '-';
            leastStockedEl.textContent = '-';
        }

        // Create custom legend
        legendContainer.innerHTML = '';
        const colors = [
            '#1439dc', '#6d04d5', '#c112d5', '#12ed19',
            '#FF9800', '#5a0a04', '#5d056d', '#1735e1',
            '#0febd5', '#f64009', '#e48f70', '#1592d1'
        ];

        categories.forEach((category, index) => {
            const legendItem = document.createElement('div');
            legendItem.className = 'legend-item';

            const color = colors[index % colors.length];
            const count = counts[index];
            const quantity = quantities[index];

            legendItem.innerHTML = `
                <div class="legend-color" style="background-color: ${color}"></div>
                <div class="legend-text">${category}</div>
                <div class="legend-count">${count} items (${quantity} qty)</div>
            `;

            legendContainer.appendChild(legendItem);
        });

        const productData = {
            labels: categories,
            datasets: [{
                label: 'Products by Category',
                data: counts,
                backgroundColor: colors.slice(0, categories.length),
                borderWidth: 2,
                borderColor: '#ffffff',
                hoverBorderWidth: 3,
                hoverBorderColor: '#ffffff',
                hoverOffset: 10
            }]
        };

        // Destroy existing chart if it exists
        if (window.productChartInstance) {
            window.productChartInstance.destroy();
        }

        window.productChartInstance = new Chart(productCtx, {
            type: 'doughnut',
            data: productData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false // Hide default legend since we have custom one
                    },
                    title: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const category = context.label;
                                const count = context.parsed;
                                const quantity = categoryQuantities[category];
                                return [
                                    `${category}: ${count} products`,
                                    `Total Quantity: ${quantity} units`
                                ];
                            }
                        },
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        borderWidth: 1,
                        cornerRadius: 8,
                        displayColors: true
                    }
                },
                animation: {
                    animateScale: true,
                    animateRotate: true,
                    duration: 1000,
                    easing: 'easeInOutQuart'
                },
                cutout: '60%'
            }
        });
    }

    function updateCharts() {
        // In a real app, you would fetch new data based on the selected period
        // For now, we'll just refresh the charts and metrics
        updateSalesMetrics();
        updateProductChart();
    }

    function saveProducts() {
        localStorage.setItem('inventoryProducts', JSON.stringify(products));
    }

    function logout() {
        window.location.href = 'index.html';
    }

    // Quick actions functions
    function showAddProductModal() {
        document.getElementById('productName').focus();
        showNotification('Add your product details above', 'info');
    }

    function exportData() {
        const dataStr = JSON.stringify(products, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

        const exportFileDefaultName = 'inventory_data.json';

        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();

        showNotification('Data exported successfully!', 'success');
    }

    function generateReport() {
        const totalValue = products.reduce((sum, product) => sum + (product.quantity * product.price), 0);
        const lowStockCount = products.filter(product => product.quantity < 5 && product.quantity > 0).length;
        const outOfStockCount = products.filter(product => product.quantity === 0).length;

        const report = `
Inventory Report - ${new Date().toLocaleDateString()}

Total Products: ${products.length}
Total Value: $${totalValue.toFixed(2)}
Low Stock Items: ${lowStockCount}
Out of Stock Items: ${outOfStockCount}

Category Breakdown:
${Object.entries(products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
}, {})).map(([category, count]) => `${category}: ${count} products`).join('\n')}

Product List:
${products.map(product => `${product.name} (${product.category}): ${product.quantity} units - $${product.price.toFixed(2)} each`).join('\n')}
        `;

        const blob = new Blob([report], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'inventory_report.txt';
        a.click();
        URL.revokeObjectURL(url);

        showNotification('Report generated successfully!', 'success');
    }

    function showNotification(message, type) {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;

        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 12px;
            font-size: 14px;
            font-weight: 600;
            z-index: 1000;
            animation: slideIn 0.3s ease;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(10px);
        `;

        if (type === 'error') {
            notification.style.backgroundColor = 'rgba(244, 67, 54, 0.9)';
            notification.style.color = 'white';
        } else if (type === 'success') {
            notification.style.backgroundColor = 'rgba(76, 175, 80, 0.9)';
            notification.style.color = 'white';
        } else {
            notification.style.backgroundColor = 'rgba(33, 150, 243, 0.9)';
            notification.style.color = 'white';
        }

        // Add slide-in animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);

        // Add to page
        document.body.appendChild(notification);

        // Auto-remove after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 3000);
    }

    // Sales data
    let sales = JSON.parse(localStorage.getItem('salesData')) || [];

    // Sales form elements
    const recordSaleForm = document.getElementById('recordSaleForm');
    const saleProduct = document.getElementById('saleProduct');
    const saleQuantity = document.getElementById('saleQuantity');
    const salePrice = document.getElementById('salePrice');
    const customerName = document.getElementById('customerName');
    const saleDate = document.getElementById('saleDate');
    const paymentMethod = document.getElementById('paymentMethod');
    const saleTotal = document.getElementById('saleTotal');
    const recentSalesTableBody = document.getElementById('recentSalesTableBody');

    // Sales stats elements
    const todaySalesEl = document.getElementById('todaySales');
    const totalTransactionsEl = document.getElementById('totalTransactions');
    const totalRevenueEl = document.getElementById('totalRevenue');
    const totalItemsSoldEl = document.getElementById('totalItemsSold');
    const totalCustomersEl = document.getElementById('totalCustomers');
    const avgOrderValueEl = document.getElementById('avgOrderValue');

    // Initialize sales system
    initializeSalesSystem();

    function initializeSalesSystem() {
        // Set default date to today
        const today = new Date().toISOString().split('T')[0];
        saleDate.value = today;

        // Populate product dropdown
        populateProductDropdown();

        // Add event listeners
        recordSaleForm.addEventListener('submit', recordSale);
        saleQuantity.addEventListener('input', calculateTotal);
        salePrice.addEventListener('input', calculateTotal);

        // Update sales display
        updateSalesDisplay();
        updateSalesStats();
    }

    function populateProductDropdown() {
        saleProduct.innerHTML = '<option value="">Select Product</option>';

        products.forEach(product => {
            if (product.quantity > 0) {
                const option = document.createElement('option');
                option.value = product.id;
                option.textContent = `${product.name} (${product.quantity} available)`;
                saleProduct.appendChild(option);
            }
        });
    }

    function calculateTotal() {
        const quantity = parseInt(saleQuantity.value) || 0;
        const price = parseFloat(salePrice.value) || 0;
        const total = quantity * price;

        saleTotal.textContent = `$${total.toFixed(2)}`;
    }

    function recordSale(e) {
        e.preventDefault();

        const productId = saleProduct.value;
        const quantity = parseInt(saleQuantity.value);
        const price = parseFloat(salePrice.value);
        const customer = customerName.value.trim();
        const date = saleDate.value;
        const payment = paymentMethod.value;

        if (!productId || quantity <= 0 || price <= 0) {
            showNotification('Please fill in all required fields with valid values', 'error');
            return;
        }

        // Find the product
        const product = products.find(p => p.id == productId);
        if (!product) {
            showNotification('Product not found', 'error');
            return;
        }

        // Check if enough stock
        if (product.quantity < quantity) {
            showNotification(`Insufficient stock. Only ${product.quantity} units available.`, 'error');
            return;
        }

        // Create sale record
        const sale = {
            id: Date.now(),
            productId: productId,
            productName: product.name,
            quantity: quantity,
            unitPrice: price,
            totalAmount: quantity * price,
            customerName: customer || 'Walk-in Customer',
            date: date,
            paymentMethod: payment,
            timestamp: new Date().toISOString()
        };

        // Add sale to sales array
        sales.push(sale);
        saveSales();

        // Update product quantity
        product.quantity -= quantity;
        saveProducts();

        // Reset form
        recordSaleForm.reset();
        saleDate.value = new Date().toISOString().split('T')[0];
        saleTotal.textContent = '$0.00';

        // Update UI
        populateProductDropdown();
        updateSalesDisplay();
        updateSalesStats();
        updateStatistics();
        updateStockTracking();

        showNotification('Sale recorded successfully!', 'success');
    }

    function updateSalesDisplay() {
        // Show only recent 5 sales
        const recentSales = sales.slice(-5).reverse();

        recentSalesTableBody.innerHTML = '';

        if (recentSales.length === 0) {
            const emptyRow = document.createElement('tr');
            emptyRow.innerHTML = `
                <td colspan="7" style="text-align: center; padding: 40px; color: #666;">
                    No sales recorded yet. Record your first sale above.
                </td>
            `;
            recentSalesTableBody.appendChild(emptyRow);
            return;
        }

        recentSales.forEach(sale => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${formatDate(sale.date)}</td>
                <td>${sale.productName}</td>
                <td>${sale.customerName}</td>
                <td>${sale.quantity}</td>
                <td class="sale-amount">$${sale.totalAmount.toFixed(2)}</td>
                <td>${sale.paymentMethod}</td>
                <td>
                    <button class="btn-delete-sale" onclick="deleteSale(${sale.id})">Delete</button>
                </td>
            `;

            recentSalesTableBody.appendChild(row);
        });
    }

    function updateSalesStats() {
        const today = new Date().toISOString().split('T')[0];
        const todaySales = sales
            .filter(sale => sale.date === today)
            .reduce((sum, sale) => sum + sale.totalAmount, 0);

        const totalTransactions = sales.length;
        const totalRevenue = sales.reduce((sum, sale) => sum + sale.totalAmount, 0);
        const totalItemsSold = sales.reduce((sum, sale) => sum + sale.quantity, 0);

        // Get unique customers
        const uniqueCustomers = new Set(sales.map(sale => sale.customerName.toLowerCase())).size;
        const avgOrderValue = totalTransactions > 0 ? totalRevenue / totalTransactions : 0;

        // Update display
        todaySalesEl.textContent = `$${todaySales.toFixed(2)}`;
        totalTransactionsEl.textContent = totalTransactions;
        totalRevenueEl.textContent = `$${totalRevenue.toFixed(2)}`;
        totalItemsSoldEl.textContent = totalItemsSold;
        totalCustomersEl.textContent = uniqueCustomers;
        avgOrderValueEl.textContent = `$${avgOrderValue.toFixed(2)}`;

        // Calculate changes (comparing to previous period - simplified)
        updateSalesChanges();
    }

    function updateSalesChanges() {
        // Simplified change calculations - in a real app, you'd compare to previous periods
        const revenueChangeEl = document.getElementById('revenueChange');
        const itemsChangeEl = document.getElementById('itemsChange');
        const customersChangeEl = document.getElementById('customersChange');
        const avgOrderChangeEl = document.getElementById('avgOrderChange');

        // Mock changes for demonstration
        revenueChangeEl.textContent = sales.length > 0 ? '+12.5%' : '+0%';
        itemsChangeEl.textContent = sales.length > 0 ? '+8.3%' : '+0%';
        customersChangeEl.textContent = sales.length > 0 ? '+15.2%' : '+0%';
        avgOrderChangeEl.textContent = sales.length > 0 ? '+3.8%' : '0%';
    }

    function deleteSale(saleId) {
        if (confirm('Are you sure you want to delete this sale record?')) {
            const saleIndex = sales.findIndex(sale => sale.id === saleId);
            if (saleIndex === -1) return;

            const sale = sales[saleIndex];

            // Restore product quantity
            const product = products.find(p => p.id == sale.productId);
            if (product) {
                product.quantity += sale.quantity;
                saveProducts();
            }

            // Remove sale
            sales.splice(saleIndex, 1);
            saveSales();

            // Update UI
            populateProductDropdown();
            updateSalesDisplay();
            updateSalesStats();
            updateStatistics();
            updateStockTracking();

            showNotification('Sale record deleted successfully!', 'success');
        }
    }

    function saveSales() {
        localStorage.setItem('salesData', JSON.stringify(sales));
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    }

    // Make functions global
    window.deleteSale = deleteSale;
    window.viewAllSales = function() {
        showNotification('View All Sales feature coming soon!', 'info');
    };
}

function addProductManagementAnimations() {
    // Add product-specific glitter effects
    addProductGlitterEffects();

    // Add table row animations for new products
    addTableRowAnimations();

    // Add search result animations
    addSearchAnimations();

    // Add product status animations
    addStatusAnimations();

    // Add product form success animations
    addProductFormAnimations();

    // Add product counter animations
    addProductCounterAnimations();
}

function addProductGlitterEffects() {
    // Add glitter effects to product-related elements
    const productElements = document.querySelectorAll('.product-table, .add-product-form, .filters-section');

    productElements.forEach((element, index) => {
        setInterval(() => {
            createProductSparkle(element);
        }, 3000 + index * 1000);
    });
}

function createProductSparkle(container) {
    const sparkle = document.createElement('div');
    sparkle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: radial-gradient(circle, #fff 0%, #4CAF50 70%, transparent 100%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10;
        animation: sparkle 1.5s ease-out forwards;
    `;

    const rect = container.getBoundingClientRect();
    const x = Math.random() * rect.width;
    const y = Math.random() * rect.height;

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    container.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1500);
}

function addTableRowAnimations() {
    // Add animation when new products are added
    const tableBody = document.getElementById('productsTableBody');

    if (tableBody) {
        // Create a mutation observer to watch for new rows
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1 && node.tagName === 'TR') {
                        // Add entrance animation to new row
                        node.style.animation = 'slide-in-left 0.6s ease-out forwards';
                        node.style.opacity = '0';

                        // Add sparkle effect to the new row
                        setTimeout(() => {
                            createRowSparkle(node);
                        }, 300);
                    }
                });
            });
        });

        observer.observe(tableBody, { childList: true });
    }
}

function createRowSparkle(row) {
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: absolute;
            width: 3px;
            height: 3px;
            background: radial-gradient(circle, #fff 0%, #4CAF50 80%, transparent 100%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 100;
            animation: bounce-in 0.8s ease-out forwards;
        `;

        const rect = row.getBoundingClientRect();
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;

        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        sparkle.style.animationDelay = `${i * 0.1}s`;

        row.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 800);
    }
}

function addSearchAnimations() {
    const searchInput = document.getElementById('searchInput');

    if (searchInput) {
        let searchTimeout;

        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);

            // Add typing animation
            this.style.animation = 'pulse-glow 0.3s ease-in-out';

            searchTimeout = setTimeout(() => {
                this.style.animation = '';

                // Add search result animation
                const tableRows = document.querySelectorAll('#productsTableBody tr');
                tableRows.forEach((row, index) => {
                    if (row.style.display !== 'none') {
                        row.style.animation = 'fade-in-up 0.4s ease-out forwards';
                        row.style.animationDelay = `${index * 0.05}s`;
                    }
                });
            }, 300);
        });
    }
}

function addStatusAnimations() {
    // Add animations for status changes
    const statusElements = document.querySelectorAll('.quantity-low, .quantity-normal');

    statusElements.forEach(element => {
        element.addEventListener('DOMNodeInserted', function() {
            this.style.animation = 'bounce-in 0.6s ease-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 600);
        });
    });
}

function addProductFormAnimations() {
    const addProductForm = document.getElementById('addProductForm');

    if (addProductForm) {
        addProductForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Add form submission animation
            this.style.animation = 'pulse-glow 0.5s ease-in-out';

            // Create success particles around the form
            createFormSuccessEffect(this);

            setTimeout(() => {
                this.style.animation = '';
                // Reset form with animation
                resetFormWithAnimation(this);
            }, 1000);
        });
    }
}

function createFormSuccessEffect(form) {
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: radial-gradient(circle, #fff 0%, #4CAF50 70%, transparent 100%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: bounce-in 0.8s ease-out forwards, float-gentle 2s ease-in-out infinite;
        `;

        const rect = form.getBoundingClientRect();
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.animationDelay = `${Math.random() * 0.5}s`;

        form.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 2000);
    }
}

function resetFormWithAnimation(form) {
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach((input, index) => {
        setTimeout(() => {
            input.style.animation = 'bounce-in 0.4s ease-out';
            input.value = '';
            setTimeout(() => {
                input.style.animation = '';
            }, 400);
        }, index * 100);
    });
}

function addProductCounterAnimations() {
    // Animate product counters when they change
    const counters = document.querySelectorAll('#totalItems, #lowStockItems, #totalValue, #categoriesCount');

    counters.forEach(counter => {
        const observer = new MutationObserver(() => {
            counter.style.animation = 'bounce-in 0.6s ease-out, text-glow 1s ease-in-out';
            setTimeout(() => {
                counter.style.animation = '';
            }, 1000);
        });

        observer.observe(counter, { childList: true, characterData: true, subtree: true });
    });
}

function showProductNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `product-notification ${type}`;
    notification.textContent = message;

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #4CAF50, #45a049)' : 'linear-gradient(135deg, #ff6b6b, #ee5a52)'};
        color: white;
        padding: 15px 25px;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slide-in-right 0.5s ease-out, bounce-in 0.5s ease-out;
        font-weight: 600;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    `;

    document.body.appendChild(notification);

    // Add sparkle effect to notification
    setTimeout(() => {
        createNotificationSparkle(notification);
    }, 200);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.5s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

function createNotificationSparkle(notification) {
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: absolute;
            width: 3px;
            height: 3px;
            background: radial-gradient(circle, #fff 0%, #FFD700 80%, transparent 100%);
            border-radius: 50%;
            pointer-events: none;
            animation: sparkle 1s ease-out forwards;
        `;

        const rect = notification.getBoundingClientRect();
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;

        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        sparkle.style.animationDelay = `${i * 0.1}s`;

        notification.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
}