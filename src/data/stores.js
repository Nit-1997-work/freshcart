// Made-up stores and inventory for the UI-only demo. No network calls.
export const LOW_STOCK_THRESHOLD = 5;

export const STORES = [
  {
    id: 'green-valley',
    name: 'Green Valley Market',
    emoji: '🥬',
    address: 'Mission District - 2140 Valencia St',
    hours: 'Open daily 7am - 10pm',
    products: [
      { sku: 'GV-1001', name: 'Organic Strawberries', size: '1 lb', price: 4.99, stock: 42 },
      { sku: 'GV-1002', name: 'Hass Avocados', size: 'Bag of 4', price: 5.49, stock: 18 },
      { sku: 'GV-1003', name: 'Baby Spinach', size: '5 oz', price: 3.29, stock: 4 },
      { sku: 'GV-1004', name: 'Honeycrisp Apples', size: '3 lb', price: 6.99, stock: 27 },
      { sku: 'GV-1005', name: 'Whole Milk', size: '1 gallon', price: 3.79, stock: 0 },
      { sku: 'GV-1006', name: 'Free-Range Eggs', size: 'Dozen', price: 4.59, stock: 33 },
      { sku: 'GV-1007', name: 'Sourdough Loaf', size: '24 oz', price: 3.99, stock: 12 },
      { sku: 'GV-1008', name: 'Greek Yogurt', size: '32 oz', price: 5.29, stock: 9 },
    ],
  },
  {
    id: 'harbor-fresh',
    name: 'Harbor Fresh Foods',
    emoji: '🐟',
    address: 'Embarcadero - 88 Pier Way',
    hours: 'Mon - Sat 8am - 9pm, Sun 9am - 7pm',
    products: [
      { sku: 'HF-2001', name: 'Atlantic Salmon Fillet', size: '1 lb', price: 12.99, stock: 14 },
      { sku: 'HF-2002', name: 'Wild Shrimp', size: '12 oz', price: 9.49, stock: 3 },
      { sku: 'HF-2003', name: 'Lemons', size: 'Bag of 6', price: 3.49, stock: 40 },
      { sku: 'HF-2004', name: 'Jasmine Rice', size: '2 lb', price: 4.29, stock: 25 },
      { sku: 'HF-2005', name: 'Garlic Bulbs', size: '3 count', price: 1.99, stock: 0 },
      { sku: 'HF-2006', name: 'Sea Salt Butter', size: '8 oz', price: 4.79, stock: 16 },
      { sku: 'HF-2007', name: 'Cherry Tomatoes', size: '1 pint', price: 3.99, stock: 21 },
      { sku: 'HF-2008', name: 'Sparkling Water', size: '12 pack', price: 5.99, stock: 30 },
    ],
  },
  {
    id: 'sunrise-bakery',
    name: 'Sunrise Bakery & Grocer',
    emoji: '🥐',
    address: 'Noe Valley - 410 24th St',
    hours: 'Open daily 6am - 8pm',
    products: [
      { sku: 'SB-3001', name: 'Butter Croissants', size: '4 pack', price: 6.49, stock: 11 },
      { sku: 'SB-3002', name: 'Baguette', size: '12 oz', price: 2.99, stock: 2 },
      { sku: 'SB-3003', name: 'Blueberry Muffins', size: '6 pack', price: 5.99, stock: 8 },
      { sku: 'SB-3004', name: 'Cold Brew Coffee', size: '32 oz', price: 6.79, stock: 19 },
      { sku: 'SB-3005', name: 'Raw Honey', size: '12 oz', price: 7.49, stock: 0 },
      { sku: 'SB-3006', name: 'Oat Milk', size: '64 oz', price: 4.49, stock: 23 },
      { sku: 'SB-3007', name: 'Strawberry Jam', size: '10 oz', price: 4.19, stock: 15 },
      { sku: 'SB-3008', name: 'Cinnamon Rolls', size: '4 pack', price: 7.99, stock: 5 },
    ],
  },
  {
    id: 'corner-pantry',
    name: 'Corner Pantry',
    emoji: '🧺',
    address: 'Sunset - 1225 Irving St',
    hours: 'Open 24 hours',
    products: [
      { sku: 'CP-4001', name: 'Spaghetti', size: '1 lb', price: 1.89, stock: 48 },
      { sku: 'CP-4002', name: 'Marinara Sauce', size: '24 oz', price: 3.69, stock: 22 },
      { sku: 'CP-4003', name: 'Black Beans', size: '15 oz can', price: 1.29, stock: 60 },
      { sku: 'CP-4004', name: 'Peanut Butter', size: '16 oz', price: 3.99, stock: 1 },
      { sku: 'CP-4005', name: 'Paper Towels', size: '6 rolls', price: 8.99, stock: 0 },
      { sku: 'CP-4006', name: 'Dish Soap', size: '19 oz', price: 3.49, stock: 17 },
      { sku: 'CP-4007', name: 'Rolled Oats', size: '42 oz', price: 4.99, stock: 13 },
      { sku: 'CP-4008', name: 'Orange Juice', size: '52 oz', price: 4.29, stock: 7 },
    ],
  },
];

export function findStore(id) {
  return STORES.find((store) => store.id === id) ?? null;
}

// 'out' at zero, 'low' at or under LOW_STOCK_THRESHOLD, otherwise 'in'.
export function stockStatus(stock) {
  if (stock <= 0) return 'out';
  if (stock <= LOW_STOCK_THRESHOLD) return 'low';
  return 'in';
}
