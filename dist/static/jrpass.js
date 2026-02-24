// JR Pass Order Data
const jrPassPrices = {
  ordinary: {
    adult: { 7: 321, 14: 514, 21: 643 },
    child: { 7: 161, 14: 257, 21: 321 }
  },
  green: {
    adult: { 7: 450, 14: 720, 21: 900 },
    child: { 7: 225, 14: 360, 21: 450 }
  }
};

let currentOrder = {
  passType: 'ordinary',
  items: [],
  subtotal: 0,
  handlingFee: 30,
  total: 0,
  step: 1,
  userInfo: {},
  deliveryInfo: {},
  billingInfo: {},
  contactInfo: {}
};

// Initialize JR Pass page
function initJRPassPage() {
  console.log('JR Pass page initialized');
  updateOrderSummary();
}

// Switch between Ordinary and Green tabs
function switchPassType(type) {
  currentOrder.passType = type;
  
  // Update tab styling
  document.querySelectorAll('.pass-type-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelector(`[data-pass-type="${type}"]`).classList.add('active');
  
  // Update pass options display
  document.getElementById('ordinaryOptions').classList.toggle('hidden', type !== 'ordinary');
  document.getElementById('greenOptions').classList.toggle('hidden', type !== 'green');
  
  // Reset selections
  currentOrder.items = [];
  document.querySelectorAll('.pass-quantity-select').forEach(select => {
    select.value = '0';
  });
  
  updateOrderSummary();
}

// Update quantity for a pass
function updatePassQuantity(ageType, duration, quantity) {
  const qty = parseInt(quantity);
  const price = jrPassPrices[currentOrder.passType][ageType][duration];
  
  // Remove existing item for this combination
  currentOrder.items = currentOrder.items.filter(
    item => !(item.ageType === ageType && item.duration === duration)
  );
  
  // Add new item if quantity > 0
  if (qty > 0) {
    currentOrder.items.push({
      passType: currentOrder.passType,
      ageType,
      duration,
      quantity: qty,
      price,
      total: price * qty
    });
  }
  
  updateOrderSummary();
}

// Update order summary
function updateOrderSummary() {
  const subtotal = currentOrder.items.reduce((sum, item) => sum + item.total, 0);
  currentOrder.subtotal = subtotal;
  currentOrder.total = subtotal + currentOrder.handlingFee;
  
  const totalQuantity = currentOrder.items.reduce((sum, item) => sum + item.quantity, 0);
  
  // Update display
  document.getElementById('orderQuantity').textContent = totalQuantity;
  document.getElementById('orderSubtotal').textContent = subtotal.toFixed(2);
  document.getElementById('orderHandlingFee').textContent = currentOrder.handlingFee.toFixed(2);
  document.getElementById('orderTotal').textContent = currentOrder.total.toFixed(2);
  
  // Enable/disable proceed button
  const proceedBtn = document.getElementById('proceedToOrderInfo');
  if (proceedBtn) {
    proceedBtn.disabled = totalQuantity === 0;
    proceedBtn.classList.toggle('opacity-50', totalQuantity === 0);
    proceedBtn.classList.toggle('cursor-not-allowed', totalQuantity === 0);
  }
}

// Proceed to order info step
function proceedToOrderInfo() {
  if (currentOrder.items.length === 0) {
    alert('Please select at least one pass');
    return;
  }
  
  currentOrder.step = 2;
  showStep(2);
  renderOrderInfoForm();
}

// Show specific step
function showStep(step) {
  document.querySelectorAll('.jrpass-step').forEach(el => {
    el.classList.add('hidden');
  });
  document.getElementById(`step${step}`).classList.remove('hidden');
  
  // Update progress bar
  updateProgressBar(step);
}

// Update progress bar
function updateProgressBar(step) {
  document.querySelectorAll('.progress-step').forEach((el, index) => {
    if (index + 1 < step) {
      el.classList.add('completed');
      el.classList.remove('active');
    } else if (index + 1 === step) {
      el.classList.add('active');
      el.classList.remove('completed');
    } else {
      el.classList.remove('active', 'completed');
    }
  });
}

// Render order info form
function renderOrderInfoForm() {
  const container = document.getElementById('orderInfoContainer');
  
  let html = '<div class="space-y-8">';
  
  // Render form for each user
  currentOrder.items.forEach((item, index) => {
    const userNum = index + 1;
    const passLabel = `${item.passType.charAt(0).toUpperCase() + item.passType.slice(1)} - ${item.ageType.charAt(0).toUpperCase() + item.ageType.slice(1)} : ${item.duration} Days`;
    
    html += `
      <div class="bg-white rounded-lg p-6 shadow-md">
        <h3 class="text-xl font-bold text-green-800 mb-4 pb-3 border-b-2 border-green-200">
          User ${userNum} (${passLabel})
        </h3>
        
        <!-- User Information -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Surname *</label>
            <input type="text" id="surname_${index}" required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Given Names *</label>
            <input type="text" id="givenNames_${index}" required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Birthday *</label>
            <input type="date" id="birthday_${index}" required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">US Departure Date *</label>
            <input type="date" id="departureDate_${index}" required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
            <div class="flex space-x-4">
              <label class="flex items-center">
                <input type="radio" name="gender_${index}" value="male" class="mr-2" />
                <span>Male</span>
              </label>
              <label class="flex items-center">
                <input type="radio" name="gender_${index}" value="female" class="mr-2" />
                <span>Female</span>
              </label>
            </div>
          </div>
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Do you use a Japanese passport when you enter Japan? *
            </label>
            <div class="flex space-x-4">
              <label class="flex items-center">
                <input type="radio" name="japanesePassport_${index}" value="yes" class="mr-2" />
                <span>Yes</span>
              </label>
              <label class="flex items-center">
                <input type="radio" name="japanesePassport_${index}" value="no" class="mr-2" checked />
                <span>No</span>
              </label>
            </div>
            <p class="text-xs text-red-600 mt-1">
              * In order to receive a JAPAN RAIL PASS, the name appearing on the claim ticket must match the name appearing in your passport.
            </p>
          </div>
        </div>
      </div>
    `;
  });
  
  // Delivery Method
  html += `
    <div class="bg-white rounded-lg p-6 shadow-md">
      <h3 class="text-xl font-bold text-green-800 mb-4">Delivery Method *</h3>
      <div class="space-y-3">
        <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-green-500">
          <input type="radio" name="deliveryMethod" value="fedex" checked class="mr-3" />
          <span>[FedEx] Next day~4 Business days (USD 38.00)</span>
        </label>
        <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-green-500">
          <input type="radio" name="deliveryMethod" value="usps" class="mr-3" />
          <span>[USPS] 5~10 Business days (USD 10.00)</span>
        </label>
      </div>
    </div>
  `;
  
  // Billing Information (US Address Only)
  html += `
    <div class="bg-white rounded-lg p-6 shadow-md">
      <h3 class="text-xl font-bold text-green-800 mb-4">Billing Information * (US Address Only)</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="md:col-span-2">
          <label class="block text-sm font-medium text-gray-700 mb-2">Address *</label>
          <input type="text" id="billingAddress" required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">City *</label>
          <input type="text" id="billingCity" required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">State *</label>
          <select id="billingState" required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
            <option value="">Select State</option>
            <option value="NY">New York</option>
            <option value="CA">California</option>
            <option value="TX">Texas</option>
            <!-- Add more states -->
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Zip Code *</label>
          <input type="text" id="billingZip" required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Country *</label>
          <input type="text" value="USA" readonly
            class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  `;
  
  // Contact Information
  html += `
    <div class="bg-white rounded-lg p-6 shadow-md">
      <h3 class="text-xl font-bold text-green-800 mb-4">Contact Information</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">First *</label>
          <input type="text" id="contactFirst" required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Middle</label>
          <input type="text" id="contactMiddle"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Last *</label>
          <input type="text" id="contactLast" required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
          <input type="tel" id="contactPhone" required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div class="md:col-span-2">
          <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
          <input type="email" id="contactEmail" required
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
    </div>
  `;
  
  // Terms and conditions
  html += `
    <div class="bg-white rounded-lg p-6 shadow-md">
      <h3 class="text-xl font-bold text-green-800 mb-4">Terms of Purchase *</h3>
      <div class="space-y-3 text-sm text-gray-700">
        <label class="flex items-start">
          <input type="checkbox" id="agreeTerms" required class="mt-1 mr-3" />
          <span>I agree to the <a href="#" class="text-green-600 underline">Terms</a>.</span>
        </label>
        <p class="text-red-600 text-xs">
          * Japanese citizens must present a Japanese passport and either a Permanent Resident Card, 
          a copy of Residency Notification (Zairyu Todoke) or Residency Certificate (Zairyu Shomeisho) 
          with an address expressed in consecutive years.
        </p>
        <p class="text-xs">
          * In order to receive a JAPAN RAIL PASS, the name appearing on the claim ticket must match 
          the name appearing in your passport.
        </p>
      </div>
    </div>
  `;
  
  // Action buttons
  html += `
    <div class="flex justify-between">
      <button onclick="showStep(1)"
        class="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold">
        Back
      </button>
      <button onclick="proceedToPayment()"
        class="px-8 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 font-semibold">
        Proceed to Payment
      </button>
    </div>
  `;
  
  html += '</div>';
  container.innerHTML = html;
}

// Proceed to payment (Stripe Checkout)
function proceedToPayment() {
  // Validate form
  const form = document.getElementById('orderInfoContainer');
  const inputs = form.querySelectorAll('input[required], select[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value || (input.type === 'radio' && !document.querySelector(`input[name="${input.name}"]:checked`))) {
      isValid = false;
      input.classList.add('border-red-500');
    } else {
      input.classList.remove('border-red-500');
    }
  });
  
  if (!document.getElementById('agreeTerms').checked) {
    alert('Please agree to the terms of purchase');
    return;
  }
  
  if (!isValid) {
    alert('Please fill in all required fields');
    return;
  }
  
  // In real implementation, this would redirect to Stripe Checkout
  alert('Redirecting to Stripe Checkout...\n\nThis is a demo. In production, you would be redirected to Stripe.');
  
  // For demo, go to complete step
  currentOrder.step = 4;
  showStep(4);
  renderOrderComplete();
}

// Render order complete
function renderOrderComplete() {
  const container = document.getElementById('orderCompleteContainer');
  
  // Generate order ID
  const orderId = `JRP${Date.now()}`;
  const orderDate = new Date().toISOString().split('T')[0];
  
  // Save order to global mockJRPassOrders (defined in app.js)
  const orderData = {
    orderId: orderId,
    orderDate: orderDate,
    status: 'confirmed',
    statusText: 'Order Confirmed',
    passType: currentOrder.passType,
    items: currentOrder.items.map(item => ({
      passType: item.passType.charAt(0).toUpperCase() + item.passType.slice(1),
      ageGroup: item.ageType.charAt(0).toUpperCase() + item.ageType.slice(1),
      duration: item.duration,
      quantity: item.quantity,
      price: item.total / item.quantity
    })),
    travelers: currentOrder.userInfo || [],
    subtotal: currentOrder.subtotal,
    handlingFee: currentOrder.handlingFee,
    total: currentOrder.total
  };
  
  // Add to global orders array (defined in app.js)
  if (typeof mockJRPassOrders !== 'undefined') {
    mockJRPassOrders.unshift(orderData);
    console.log('JR Pass order saved:', orderData);
  }
  
  let html = `
    <div class="max-w-3xl mx-auto">
      <div class="bg-white rounded-lg p-8 shadow-lg text-center mb-6">
        <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i class="fas fa-check text-green-600 text-4xl"></i>
        </div>
        <h2 class="text-3xl font-bold text-gray-800 mb-2">Order Complete!</h2>
        <p class="text-gray-600 mb-4">Thank you for your purchase.</p>
        <p class="text-lg font-semibold text-green-700">Order Number: #${orderId}</p>
      </div>
      
      <div class="bg-white rounded-lg p-6 shadow-lg mb-6">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
        <div class="space-y-2 mb-4">
  `;
  
  currentOrder.items.forEach(item => {
    html += `
      <div class="flex justify-between py-2 border-b">
        <span>${item.passType.toUpperCase()} - ${item.ageType.charAt(0).toUpperCase() + item.ageType.slice(1)} (${item.duration} Days) × ${item.quantity}</span>
        <span class="font-semibold">USD $${item.total.toFixed(2)}</span>
      </div>
    `;
  });
  
  html += `
        </div>
        <div class="flex justify-between text-sm text-gray-600 mb-2">
          <span>Subtotal:</span>
          <span>USD $${currentOrder.subtotal.toFixed(2)}</span>
        </div>
        <div class="flex justify-between text-sm text-gray-600 mb-2">
          <span>Handling Fee:</span>
          <span>USD $${currentOrder.handlingFee.toFixed(2)}</span>
        </div>
        <div class="flex justify-between text-xl font-bold text-green-700 pt-2 border-t-2">
          <span>Total:</span>
          <span>USD $${currentOrder.total.toFixed(2)}</span>
        </div>
      </div>
      
      <div class="bg-blue-50 rounded-lg p-6 mb-6">
        <h3 class="text-lg font-bold text-gray-800 mb-3">What's Next?</h3>
        <ul class="space-y-2 text-sm text-gray-700">
          <li class="flex items-start">
            <i class="fas fa-check-circle text-green-600 mr-2 mt-0.5"></i>
            <span>You will receive an Exchange Order via email within 1-2 business days</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check-circle text-green-600 mr-2 mt-0.5"></i>
            <span>Present the Exchange Order at a JR station in Japan to receive your actual JR Pass</span>
          </li>
          <li class="flex items-start">
            <i class="fas fa-check-circle text-green-600 mr-2 mt-0.5"></i>
            <span>Your physical pass must be exchanged within 3 months of issue date</span>
          </li>
        </ul>
      </div>
      
      <div class="flex justify-center space-x-4">
        <button onclick="goToMyPage()"
          class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold">
          <i class="fas fa-user mr-2"></i>
          Go to My Page
        </button>
        <button onclick="window.location.href='/jrpass'"
          class="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold">
          <i class="fas fa-shopping-cart mr-2"></i>
          Make Another Order
        </button>
      </div>
    </div>
  `;
  
  container.innerHTML = html;
}

// Navigate to My Page
function goToMyPage() {
  // Redirect to main site's my page
  window.location.href = '/#mypage';
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initJRPassPage);
} else {
  initJRPassPage();
}
