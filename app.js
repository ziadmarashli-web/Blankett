// ===================================
// Application State
// ===================================
let currentOrganization = 'all';
let searchResults = [];

// ===================================
// DOM Elements
// ===================================
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsDiv = document.getElementById('results');
const noResultsDiv = document.getElementById('noResults');
const suggestionsDiv = document.getElementById('suggestions');
const resultsCount = document.getElementById('resultsCount');
const popularServicesDiv = document.getElementById('popularServices');
const orgBtns = document.querySelectorAll('.org-btn');

// ===================================
// Initialize Application
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Applikationen laddas...');
    console.log('Antal tjänster i databasen:', tjänsterDatabase.length);
    displayPopularServices();
    displayAllServices();
    setupEventListeners();
});

// ===================================
// Event Listeners
// ===================================
function setupEventListeners() {
    // Search functionality
    searchBtn.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        } else if (this.value.length >= 2) {
            showSuggestions(this.value);
        } else {
            suggestionsDiv.classList.remove('show');
        }
    });

    // Organization filtering
    orgBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterByOrganization(this.dataset.org);
        });
    });

    // Close suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (!suggestionsDiv.contains(e.target) && e.target !== searchInput) {
            suggestionsDiv.classList.remove('show');
        }
    });
}

// ===================================
// Search Functionality
// ===================================
function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (query === '') {
        displayAllServices();
        return;
    }

    // Search in namn and nyckelord
    searchResults = tjänsterDatabase.filter(service => {
        const namnMatch = service.namn.toLowerCase().includes(query);
        const nyckelordMatch = service.nyckelord.toLowerCase().includes(query);
        const orgMatch = service.organisation.toLowerCase().includes(query);
        
        return namnMatch || nyckelordMatch || orgMatch;
    });

    // Apply organization filter if active
    if (currentOrganization !== 'all') {
        searchResults = searchResults.filter(service => 
            service.organisation === currentOrganization
        );
    }

    displayResults(searchResults);
    suggestionsDiv.classList.remove('show');
}

// ===================================
// Display Functions
// ===================================
function displayResults(results) {
    resultsDiv.innerHTML = '';
    
    if (results.length === 0) {
        noResultsDiv.style.display = 'block';
        resultsCount.textContent = '';
        return;
    }

    noResultsDiv.style.display = 'none';
    resultsCount.textContent = `${results.length} ${results.length === 1 ? 'tjänst' : 'tjänster'} hittades`;

    results.forEach((service, index) => {
        const card = createResultCard(service, index);
        resultsDiv.appendChild(card);
    });
}

function createResultCard(service, index) {
    const card = document.createElement('div');
    card.className = 'result-card';
    card.style.animationDelay = `${index * 0.05}s`;
    
    card.innerHTML = `
        <div class="result-header">
            <div class="result-title">${service.namn}</div>
        </div>
        <div class="result-organization">${service.organisation}</div>
        <div class="result-keywords">Sökord: ${service.nyckelord}</div>
        <a href="${service.länk}" target="_blank" class="result-link" onclick="event.stopPropagation()">
            Gå till tjänst
        </a>
    `;

    // Make the whole card clickable
    card.addEventListener('click', function() {
        window.open(service.länk, '_blank');
    });

    return card;
}

function displayAllServices() {
    let services = tjänsterDatabase;
    
    // Filter by organization if not 'all'
    if (currentOrganization !== 'all') {
        services = services.filter(s => s.organisation === currentOrganization);
    }
    
    displayResults(services);
}

function displayPopularServices() {
    const popularServices = tjänsterDatabase.filter(service => service.populär);
    
    if (popularServices.length === 0) {
        popularServicesDiv.innerHTML = '<p style="text-align: center; color: #666;">Inga populära tjänster ännu</p>';
        return;
    }
    
    popularServicesDiv.innerHTML = '';
    
    popularServices.forEach(service => {
        const item = document.createElement('div');
        item.className = 'popular-item';
        item.textContent = service.namn;
        
        item.addEventListener('click', function() {
            searchInput.value = service.namn;
            performSearch();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        popularServicesDiv.appendChild(item);
    });
}

// ===================================
// Suggestions Functionality
// ===================================
function showSuggestions(query) {
    if (query.length < 2) {
        suggestionsDiv.classList.remove('show');
        return;
    }

    const suggestions = tjänsterDatabase.filter(service => {
        const namnMatch = service.namn.toLowerCase().includes(query.toLowerCase());
        const nyckelordMatch = service.nyckelord.toLowerCase().includes(query.toLowerCase());
        return namnMatch || nyckelordMatch;
    }).slice(0, 5);

    if (suggestions.length === 0) {
        suggestionsDiv.classList.remove('show');
        return;
    }

    suggestionsDiv.innerHTML = '';
    
    suggestions.forEach(suggestion => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        
        item.innerHTML = `
            <span>${suggestion.namn}</span>
            <span class="suggestion-org">${suggestion.organisation}</span>
        `;
        
        item.addEventListener('click', function() {
            searchInput.value = suggestion.namn;
            performSearch();
        });
        
        suggestionsDiv.appendChild(item);
    });

    suggestionsDiv.classList.add('show');
}

// ===================================
// Organization Filter
// ===================================
function filterByOrganization(org) {
    currentOrganization = org;
    
    // Update active button
    orgBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.org === org) {
            btn.classList.add('active');
        }
    });

    // Re-run search if there's a query
    if (searchInput.value.trim()) {
        performSearch();
    } else {
        displayAllServices();
    }
}

// ===================================
// Utility Functions
// ===================================
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Log startup info
console.log('✅ Applikationen är redo!');
console.log('📊 Antal tjänster:', tjänsterDatabase.length);
console.log('🏢 Myndigheter:', [...new Set(tjänsterDatabase.map(t => t.organisation))].join(', '));
