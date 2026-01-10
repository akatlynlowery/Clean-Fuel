const snacks = [
    {
        name: "Organic Trail Mix",
        description: "A perfect blend of nuts, dried fruits, and dark chocolate.",
        imageUrl: "https://images.unsplash.com/photo-1599599810769-bcde5a45dd80"
    },
    {
        name: "Protein Power Bar",
        description: "20g of plant-based protein to keep you going.",
        imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97"
    },
    {
        name: "Sparkling Citrus Water",
        description: "Refreshing zero-sugar carbonated water with a hint of lemon.",
        imageUrl: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3"
    },
    {
        name: "Veggie Chips",
        description: "Crispy, baked vegetable chips with sea salt.",
        imageUrl: "https://images.unsplash.com/photo-1604543788775-68074df098d6"
    }
];

const machines = [
    {
        name: "Eco-Vendor 3000",
        description: "Energy-efficient vending machine with smart temperature control.",
        features: ["Contactless Payment", "Energy Star", "Remote Monitoring"],
        imageUrl: "https://images.unsplash.com/photo-1618214227926-78e73449c253"
    },
    {
        name: "Compact Healthy Station",
        description: "Perfect for smaller offices or gyms, packed with healthy choices.",
        features: ["Small Footprint", "Digital Display", "Custom Rack"],
        imageUrl: "https://images.unsplash.com/photo-1579893962659-3cb911df1312"
    }
];

function renderSnacks() {
    const grid = document.getElementById('snacks-grid');
    grid.innerHTML = snacks.map(snack => `
        <div class="card">
            <img src="${snack.imageUrl}" alt="${snack.name}">
            <div class="card-content">
                <h3>${snack.name}</h3>
                <p>${snack.description}</p>
            </div>
        </div>
    `).join('');
}

function renderMachines() {
    const grid = document.getElementById('machines-grid');
    grid.innerHTML = machines.map(machine => `
        <div class="card">
            <img src="${machine.imageUrl}" alt="${machine.name}">
            <div class="card-content">
                <h3>${machine.name}</h3>
                <p>${machine.description}</p>
                <div class="features">
                    ${machine.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderSnacks();
    renderMachines();
});
