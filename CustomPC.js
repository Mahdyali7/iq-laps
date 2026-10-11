import React, { useState, useEffect, useMemo } from 'react';
import '../styles/custompc.css';
import CustomPCPart from '../components/CustomPCPart';

const CustomPC = ({ addToCart }) => {
  const [selectedParts, setSelectedParts] = useState({
    cpu: null,
    cpuCooler: null,
    motherboard: null,
    memory: null,
    storage: null,
    videoCard: null,
    case: null,
    powerSupply: null,
    operatingSystem: null,
    monitor: null,
    caseFan: null
  });

  const [activeTab, setActiveTab] = useState('all');
  const [totalPrice, setTotalPrice] = useState(0);
  const [estimatedWattage, setEstimatedWattage] = useState(0);
  const [compatibilityIssues, setCompatibilityIssues] = useState([]);
  const [showDetails, setShowDetails] = useState({});

  // Massive database of PC components with images and detailed specs
  const components = {
    cpu: [
      { id: 1, name: 'Intel Core i9-14900K', price: 589, brand: 'Intel', specs: '24 Cores, 5.8GHz Turbo', tier: 'enthusiast', socket: 'LGA1700', wattage: 125, tdp: 253, image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=300&fit=crop' },
      { id: 2, name: 'AMD Ryzen 9 7950X3D', price: 699, brand: 'AMD', specs: '16 Cores, 5.7GHz, 3D V-Cache', tier: 'enthusiast', socket: 'AM5', wattage: 120, tdp: 120, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
      { id: 3, name: 'Intel Core i7-14700K', price: 409, brand: 'Intel', specs: '20 Cores, 5.6GHz Turbo', tier: 'high-end', socket: 'LGA1700', wattage: 125, tdp: 253, image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop' },
      { id: 4, name: 'AMD Ryzen 7 7800X3D', price: 449, brand: 'AMD', specs: '8 Cores, 5.0GHz, 3D V-Cache', tier: 'high-end', socket: 'AM5', wattage: 120, tdp: 120, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
      { id: 5, name: 'Intel Core i5-14600K', price: 319, brand: 'Intel', specs: '14 Cores, 5.3GHz Turbo', tier: 'mid-range', socket: 'LGA1700', wattage: 125, tdp: 181, image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop' },
      { id: 6, name: 'AMD Ryzen 5 7600X', price: 249, brand: 'AMD', specs: '6 Cores, 5.3GHz Turbo', tier: 'mid-range', socket: 'AM5', wattage: 105, tdp: 105, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
      { id: 7, name: 'Intel Core i3-14100', price: 149, brand: 'Intel', specs: '4 Cores, 4.7GHz Turbo', tier: 'budget', socket: 'LGA1700', wattage: 60, tdp: 110, image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop' },
      { id: 8, name: 'AMD Ryzen 5 5600X', price: 199, brand: 'AMD', specs: '6 Cores, 4.6GHz Turbo', tier: 'budget', socket: 'AM4', wattage: 65, tdp: 65, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
      { id: 9, name: 'Intel Core i9-13900KS', price: 699, brand: 'Intel', specs: '24 Cores, 6.0GHz Turbo', tier: 'enthusiast', socket: 'LGA1700', wattage: 150, tdp: 253, image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=300&fit=crop' },
      { id: 10, name: 'AMD Ryzen 9 7900X', price: 549, brand: 'AMD', specs: '12 Cores, 5.6GHz Turbo', tier: 'high-end', socket: 'AM5', wattage: 170, tdp: 170, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
      { id: 11, name: 'Intel Core i5-13600K', price: 299, brand: 'Intel', specs: '14 Cores, 5.1GHz Turbo', tier: 'mid-range', socket: 'LGA1700', wattage: 125, tdp: 181, image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop' },
      { id: 12, name: 'AMD Ryzen 7 7700X', price: 399, brand: 'AMD', specs: '8 Cores, 5.4GHz Turbo', tier: 'high-end', socket: 'AM5', wattage: 105, tdp: 105, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
      { id: 13, name: 'AMD Ryzen 7 5800X3D', price: 349, brand: 'AMD', specs: '8 Cores, 4.5GHz, 3D V-Cache', tier: 'high-end', socket: 'AM4', wattage: 105, tdp: 105, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
      { id: 14, name: 'Intel Core i7-13700K', price: 389, brand: 'Intel', specs: '16 Cores, 5.4GHz Turbo', tier: 'high-end', socket: 'LGA1700', wattage: 125, tdp: 253, image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop' },
      { id: 15, name: 'AMD Ryzen 5 7600', price: 229, brand: 'AMD', specs: '6 Cores, 5.1GHz Turbo', tier: 'mid-range', socket: 'AM5', wattage: 65, tdp: 65, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
    ],

    cpuCooler: [
      { id: 1, name: 'Noctua NH-D15', price: 109, brand: 'Noctua', specs: 'Dual Tower, 2x140mm Fans', compatibility: ['LGA1700', 'AM5', 'AM4'], wattage: 0, image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop' },
      { id: 2, name: 'Arctic Liquid Freezer II 360', price: 129, brand: 'Arctic', specs: '360mm AIO, VRM Fan', compatibility: ['LGA1700', 'AM5', 'AM4'], wattage: 0, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
      { id: 3, name: 'Corsair iCUE H150i Elite LCD XT', price: 289, brand: 'Corsair', specs: '360mm AIO, LCD Screen', compatibility: ['LGA1700', 'AM5', 'AM4'], wattage: 0, image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=300&fit=crop' },
      { id: 4, name: 'Deepcool AK620', price: 69, brand: 'Deepcool', specs: 'Dual Tower Air Cooler', compatibility: ['LGA1700', 'AM5', 'AM4'], wattage: 0, image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop' },
      { id: 5, name: 'be quiet! Dark Rock Pro 4', price: 89, brand: 'be quiet!', specs: 'Dual Tower, Silent', compatibility: ['LGA1700', 'AM5', 'AM4'], wattage: 0, image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop' },
      { id: 6, name: 'NZXT Kraken 360 RGB', price: 259, brand: 'NZXT', specs: '360mm AIO, RGB Infinity Mirror', compatibility: ['LGA1700', 'AM5', 'AM4'], wattage: 0, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
    ],

    motherboard: [
      { id: 1, name: 'ASUS ROG Maximus Z790 Hero', price: 699, brand: 'ASUS', specs: 'LGA1700, WiFi 6E, 5x M.2', socket: 'LGA1700', formFactor: 'ATX', memoryType: 'DDR5', maxMemory: 128, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop' },
      { id: 2, name: 'MSI MEG X670E Ace', price: 649, brand: 'MSI', specs: 'AM5, WiFi 7, 4x M.2', socket: 'AM5', formFactor: 'ATX', memoryType: 'DDR5', maxMemory: 128, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop' },
      { id: 3, name: 'ASUS TUF Gaming B760-Plus WiFi', price: 189, brand: 'ASUS', specs: 'LGA1700, WiFi 6, 3x M.2', socket: 'LGA1700', formFactor: 'ATX', memoryType: 'DDR5', maxMemory: 128, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop' },
      { id: 4, name: 'Gigabyte B650 AORUS Elite AX', price: 219, brand: 'Gigabyte', specs: 'AM5, WiFi 6E, 3x M.2', socket: 'AM5', formFactor: 'ATX', memoryType: 'DDR5', maxMemory: 128, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop' },
      { id: 5, name: 'ASUS ROG Strix Z790-E Gaming WiFi', price: 499, brand: 'ASUS', specs: 'LGA1700, WiFi 6E, 4x M.2', socket: 'LGA1700', formFactor: 'ATX', memoryType: 'DDR5', maxMemory: 128, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop' },
      { id: 6, name: 'MSI MAG B650 TOMAHAWK WiFi', price: 219, brand: 'MSI', specs: 'AM5, WiFi 6E, 2x M.2', socket: 'AM5', formFactor: 'ATX', memoryType: 'DDR5', maxMemory: 128, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop' },
      { id: 7, name: 'ASRock B760M Steel Legend WiFi', price: 169, brand: 'ASRock', specs: 'LGA1700, WiFi 6, 3x M.2', socket: 'LGA1700', formFactor: 'Micro-ATX', memoryType: 'DDR5', maxMemory: 96, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop' },
      { id: 8, name: 'Gigabyte X670E AORUS Master', price: 549, brand: 'Gigabyte', specs: 'AM5, WiFi 6E, 5x M.2', socket: 'AM5', formFactor: 'ATX', memoryType: 'DDR5', maxMemory: 128, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop' },
    ],

    memory: [
      { id: 1, name: 'Corsair Vengeance RGB 32GB DDR5-6000 CL30', price: 129, brand: 'Corsair', specs: '2x16GB, RGB, Intel XMP/AMD EXPO', type: 'DDR5', speed: 6000, latency: 'CL30', image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop' },
      { id: 2, name: 'G.Skill Trident Z5 RGB 32GB DDR5-6400 CL32', price: 149, brand: 'G.Skill', specs: '2x16GB, RGB, Intel XMP 3.0', type: 'DDR5', speed: 6400, latency: 'CL32', image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop' },
      { id: 3, name: 'Kingston Fury Beast 32GB DDR5-6000 CL36', price: 119, brand: 'Kingston', specs: '2x16GB, Black, Intel XMP', type: 'DDR5', speed: 6000, latency: 'CL36', image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop' },
      { id: 4, name: 'G.Skill Trident Z5 Neo 32GB DDR5-6000 CL30', price: 139, brand: 'G.Skill', specs: '2x16GB, RGB, AMD EXPO', type: 'DDR5', speed: 6000, latency: 'CL30', image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop' },
      { id: 5, name: 'Corsair Dominator Platinum RGB 64GB DDR5-5600', price: 279, brand: 'Corsair', specs: '2x32GB, RGB, Intel XMP', type: 'DDR5', speed: 5600, latency: 'CL36', image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop' },
      { id: 6, name: 'TeamGroup T-Force Delta RGB 32GB DDR5-7200', price: 199, brand: 'TeamGroup', specs: '2x16GB, RGB, Intel XMP', type: 'DDR5', speed: 7200, latency: 'CL34', image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop' },
    ],

    storage: [
      { id: 1, name: 'Samsung 980 Pro 2TB NVMe Gen4', price: 129, brand: 'Samsung', specs: '7000MB/s Read, 5000MB/s Write', type: 'NVMe', capacity: '2TB', interface: 'PCIe 4.0', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop' },
      { id: 2, name: 'WD Black SN850X 4TB NVMe Gen4', price: 299, brand: 'WD', specs: '7300MB/s Read, 6600MB/s Write', type: 'NVMe', capacity: '4TB', interface: 'PCIe 4.0', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop' },
      { id: 3, name: 'Crucial P5 Plus 1TB NVMe Gen4', price: 79, brand: 'Crucial', specs: '6600MB/s Read, 5000MB/s Write', type: 'NVMe', capacity: '1TB', interface: 'PCIe 4.0', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop' },
      { id: 4, name: 'Samsung 990 Pro 2TB NVMe Gen4', price: 169, brand: 'Samsung', specs: '7450MB/s Read, 6900MB/s Write', type: 'NVMe', capacity: '2TB', interface: 'PCIe 4.0', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop' },
      { id: 5, name: 'Seagate FireCuda 540 4TB NVMe Gen5', price: 499, brand: 'Seagate', specs: '10000MB/s Read, 10000MB/s Write', type: 'NVMe', capacity: '4TB', interface: 'PCIe 5.0', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop' },
      { id: 6, name: 'Kingston KC3000 2TB NVMe Gen4', price: 139, brand: 'Kingston', specs: '7000MB/s Read, 7000MB/s Write', type: 'NVMe', capacity: '2TB', interface: 'PCIe 4.0', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop' },
    ],

    videoCard: [
      { id: 1, name: 'NVIDIA GeForce RTX 4090 Founders Edition', price: 1599, brand: 'NVIDIA', specs: '24GB GDDR6X, DLSS 3, Ada Lovelace', tier: 'enthusiast', wattage: 450, recommendedCPU: ['enthusiast', 'high-end'], length: 304, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
      { id: 2, name: 'ASUS ROG Strix RTX 4090 OC', price: 1799, brand: 'ASUS', specs: '24GB GDDR6X, DLSS 3, 2.7GHz Boost', tier: 'enthusiast', wattage: 450, recommendedCPU: ['enthusiast', 'high-end'], length: 358, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
      { id: 3, name: 'MSI Gaming X Trio RTX 4080 Super', price: 1199, brand: 'MSI', specs: '16GB GDDR6X, DLSS 3.5, 2.6GHz', tier: 'enthusiast', wattage: 320, recommendedCPU: ['enthusiast', 'high-end'], length: 337, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
      { id: 4, name: 'ASRock Phantom Gaming RX 7900 XTX', price: 999, brand: 'ASRock', specs: '24GB GDDR6, FSR 3, RDNA 3', tier: 'enthusiast', wattage: 355, recommendedCPU: ['enthusiast', 'high-end'], length: 332, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
      { id: 5, name: 'Gigabyte AORUS RTX 4070 Ti Super', price: 849, brand: 'Gigabyte', specs: '16GB GDDR6X, DLSS 3.5, 2.7GHz', tier: 'high-end', wattage: 285, recommendedCPU: ['high-end', 'mid-range'], length: 342, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
      { id: 6, name: 'Sapphire Nitro+ RX 7900 GRE', price: 649, brand: 'Sapphire', specs: '16GB GDDR6, FSR 3, Triple Fan', tier: 'high-end', wattage: 260, recommendedCPU: ['high-end', 'mid-range'], length: 320, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
      { id: 7, name: 'ZOTAC Gaming RTX 4070 Super Trinity', price: 599, brand: 'ZOTAC', specs: '12GB GDDR6X, DLSS 3.5, 2.5GHz', tier: 'high-end', wattage: 220, recommendedCPU: ['high-end', 'mid-range'], length: 308, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
      { id: 8, name: 'PowerColor Hellhound RX 7800 XT', price: 519, brand: 'PowerColor', specs: '16GB GDDR6, FSR 3, 2.5GHz', tier: 'mid-range', wattage: 263, recommendedCPU: ['mid-range', 'high-end'], length: 304, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
      { id: 9, name: 'ASUS Dual RTX 4070', price: 549, brand: 'ASUS', specs: '12GB GDDR6X, DLSS 3, 2.6GHz', tier: 'mid-range', wattage: 200, recommendedCPU: ['mid-range', 'high-end'], length: 267, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
      { id: 10, name: 'XFX Speedster QICK 319 RX 7700 XT', price: 449, brand: 'XFX', specs: '12GB GDDR6, FSR 3, 2.7GHz', tier: 'mid-range', wattage: 245, recommendedCPU: ['mid-range', 'budget'], length: 323, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
    ],

    case: [
      { id: 1, name: 'Lian Li O11 Dynamic EVO RGB', price: 159, brand: 'Lian Li', specs: 'Mid Tower, Dual Chamber, Tempered Glass', formFactor: ['ATX', 'Micro-ATX', 'Mini-ITX'], maxGPULength: 420, maxCoolerHeight: 167, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
      { id: 2, name: 'Fractal Design North Black TG', price: 149, brand: 'Fractal Design', specs: 'Mid Tower, Mesh Front, Wood Accents', formFactor: ['ATX', 'Micro-ATX', 'Mini-ITX'], maxGPULength: 355, maxCoolerHeight: 170, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
      { id: 3, name: 'NZXT H9 Flow Dual Chamber', price: 159, brand: 'NZXT', specs: 'Dual Chamber, Tempered Glass, RGB Ready', formFactor: ['ATX', 'Micro-ATX', 'Mini-ITX'], maxGPULength: 400, maxCoolerHeight: 165, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
      { id: 4, name: 'Corsair 4000D Airflow Black', price: 104, brand: 'Corsair', specs: 'Mid Tower, Mesh Front, High Airflow', formFactor: ['ATX', 'Micro-ATX', 'Mini-ITX'], maxGPULength: 360, maxCoolerHeight: 170, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
      { id: 5, name: 'Phanteks NV5 D-RGB', price: 139, brand: 'Phanteks', specs: 'Mid Tower, Dual Chamber, RGB Lighting', formFactor: ['ATX', 'Micro-ATX', 'Mini-ITX'], maxGPULength: 435, maxCoolerHeight: 165, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
      { id: 6, name: 'be quiet! Silent Base 802', price: 169, brand: 'be quiet!', specs: 'Mid Tower, Sound Dampening, Modular', formFactor: ['ATX', 'Micro-ATX', 'Mini-ITX'], maxGPULength: 450, maxCoolerHeight: 185, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop' },
    ],

    powerSupply: [
      { id: 1, name: 'Corsair RM1000x (2021) 1000W', price: 189, brand: 'Corsair', specs: '80+ Gold, Fully Modular, 140mm Fan', wattage: 1000, efficiency: '80+ Gold', modular: 'Full', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop' },
      { id: 2, name: 'Seasonic Prime TX-1000 1000W', price: 249, brand: 'Seasonic', specs: '80+ Titanium, Fully Modular, 12 Year Warranty', wattage: 1000, efficiency: '80+ Titanium', modular: 'Full', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop' },
      { id: 3, name: 'EVGA SuperNOVA 850 G6 850W', price: 149, brand: 'EVGA', specs: '80+ Gold, Fully Modular, 10 Year Warranty', wattage: 850, efficiency: '80+ Gold', modular: 'Full', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop' },
      { id: 4, name: 'be quiet! Straight Power 11 750W', price: 129, brand: 'be quiet!', specs: '80+ Platinum, Modular, Silent Wings Fan', wattage: 750, efficiency: '80+ Platinum', modular: 'Semi', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop' },
      { id: 5, name: 'ASUS ROG Thor 1200P Platinum II', price: 329, brand: 'ASUS', specs: '80+ Platinum, OLED Display, 1200W', wattage: 1200, efficiency: '80+ Platinum', modular: 'Full', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop' },
      { id: 6, name: 'Cooler Master V850 Gold V2', price: 139, brand: 'Cooler Master', specs: '80+ Gold, Fully Modular, 10 Year Warranty', wattage: 850, efficiency: '80+ Gold', modular: 'Full', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop' },
    ],

    operatingSystem: [
      { id: 1, name: 'Windows 11 Pro 64-bit', price: 199, brand: 'Microsoft', specs: 'Professional Edition, Digital License', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop' },
      { id: 2, name: 'Windows 11 Home 64-bit', price: 139, brand: 'Microsoft', specs: 'Home Edition, Digital License', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop' },
      { id: 3, name: 'Ubuntu 22.04 LTS', price: 0, brand: 'Canonical', specs: 'Free Open Source Linux Distribution', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop' },
    ],

    monitor: [
      { id: 1, name: 'Alienware AW3423DWF 34" QD-OLED', price: 999, brand: 'Alienware', specs: '3440x1440, 165Hz, QD-OLED, HDR400', size: '34"', resolution: '3440x1440', refreshRate: 165, panel: 'QD-OLED', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop' },
      { id: 2, name: 'ASUS ROG Swift PG27AQDM 27" OLED', price: 899, brand: 'ASUS', specs: '2560x1440, 240Hz, OLED, HDR10', size: '27"', resolution: '2560x1440', refreshRate: 240, panel: 'OLED', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop' },
      { id: 3, name: 'Samsung Odyssey G7 32" 4K', price: 699, brand: 'Samsung', specs: '3840x2160, 144Hz, VA, HDR600', size: '32"', resolution: '3840x2160', refreshRate: 144, panel: 'VA', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop' },
      { id: 4, name: 'LG UltraGear 27GP850-B 27" Nano IPS', price: 399, brand: 'LG', specs: '2560x1440, 180Hz, Nano IPS, HDR10', size: '27"', resolution: '2560x1440', refreshRate: 180, panel: 'IPS', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop' },
    ],

    caseFan: [
      { id: 1, name: 'Lian Li UNI Fan SL-INF 120 RGB 3-Pack', price: 89, brand: 'Lian Li', specs: '120mm, RGB, Daisy Chain', size: '120mm', rgb: true, pack: 3, image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop' },
      { id: 2, name: 'Noctua NF-A12x25 PWM', price: 29, brand: 'Noctua', specs: '120mm, Premium Quiet Fan, Brown', size: '120mm', rgb: false, pack: 1, image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop' },
      { id: 3, name: 'Corsair iCUE QL120 RGB 3-Pack', price: 119, brand: 'Corsair', specs: '120mm, RGB, 34 LEDs per fan', size: '120mm', rgb: true, pack: 3, image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop' },
      { id: 4, name: 'Arctic P12 PWM PST 5-Pack', price: 39, brand: 'Arctic', specs: '120mm, Value Pack, PWM Sharing', size: '120mm', rgb: false, pack: 5, image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop' },
    ]
  };

  // Filtered components based on active tab and compatibility
  const filteredComponents = useMemo(() => {
    let filtered = {};
    
    Object.keys(components).forEach(category => {
      let items = components[category];
      
      // Filter by active tab
      if (activeTab === 'intel' && category === 'cpu') {
        items = items.filter(item => item.brand === 'Intel');
      } else if (activeTab === 'amd' && category === 'cpu') {
        items = items.filter(item => item.brand === 'AMD');
      } else if (activeTab === 'nvidia' && category === 'videoCard') {
        items = items.filter(item => item.brand === 'NVIDIA' || item.brand === 'ASUS' || item.brand === 'MSI' || item.brand === 'Gigabyte' || item.brand === 'ZOTAC' || item.brand === 'EVGA');
      } else if (activeTab === 'amd-gpu' && category === 'videoCard') {
        items = items.filter(item => item.brand === 'AMD' || item.brand === 'ASRock' || item.brand === 'Sapphire' || item.brand === 'PowerColor' || item.brand === 'XFX');
      }
      
      // Filter for compatibility
      if (selectedParts.cpu && category === 'motherboard') {
        items = items.filter(item => item.socket === selectedParts.cpu.socket);
      }
      
      if (selectedParts.cpu && category === 'cpuCooler') {
        items = items.filter(item => item.compatibility.includes(selectedParts.cpu.socket));
      }
      
      if (selectedParts.motherboard && category === 'memory') {
        const mb = selectedParts.motherboard;
        items = items.filter(item => item.type === mb.memoryType);
      }
      
      if (selectedParts.case && category === 'videoCard') {
        const pcCase = selectedParts.case;
        items = items.filter(item => item.length <= pcCase.maxGPULength);
      }
      
      filtered[category] = items;
    });
    
    return filtered;
  }, [activeTab, selectedParts]);

  // Calculate total price and wattage
  useEffect(() => {
    let total = 0;
    let wattage = 0;
    
    Object.values(selectedParts).forEach(part => {
      if (part) {
        total += part.price;
        if (part.wattage) wattage += part.wattage;
        if (part.tdp) wattage += part.tdp;
      }
    });
    
    // Add 20% overhead for safety
    wattage = Math.ceil(wattage * 1.2);
    
    setTotalPrice(total);
    setEstimatedWattage(wattage);
  }, [selectedParts]);

  // Check compatibility issues
  useEffect(() => {
    const issues = [];
    
    // CPU-Motherboard compatibility
    if (selectedParts.cpu && selectedParts.motherboard) {
      if (selectedParts.cpu.socket !== selectedParts.motherboard.socket) {
        issues.push(`CPU (${selectedParts.cpu.socket}) is not compatible with Motherboard (${selectedParts.motherboard.socket})`);
      }
    }
    
    // CPU-Cooler compatibility
    if (selectedParts.cpu && selectedParts.cpuCooler) {
      if (!selectedParts.cpuCooler.compatibility.includes(selectedParts.cpu.socket)) {
        issues.push(`CPU Cooler is not compatible with ${selectedParts.cpu.socket} socket`);
      }
    }
    
    // Motherboard-Memory compatibility
    if (selectedParts.motherboard && selectedParts.memory) {
      if (selectedParts.motherboard.memoryType !== selectedParts.memory.type) {
        issues.push(`Motherboard supports ${selectedParts.motherboard.memoryType} but selected ${selectedParts.memory.type} RAM`);
      }
    }
    
    // Case-GPU fit
    if (selectedParts.case && selectedParts.videoCard) {
      if (selectedParts.videoCard.length > selectedParts.case.maxGPULength) {
        issues.push(`GPU (${selectedParts.videoCard.length}mm) is too long for case (max ${selectedParts.case.maxGPULength}mm)`);
      }
    }
    
    // PSU wattage check
    if (selectedParts.powerSupply && selectedParts.powerSupply.wattage < estimatedWattage) {
      issues.push(`PSU (${selectedParts.powerSupply.wattage}W) may be insufficient for estimated ${estimatedWattage}W load`);
    }
    
    // CPU-GPU bottleneck check
    if (selectedParts.cpu && selectedParts.videoCard) {
      const cpuTier = selectedParts.cpu.tier;
      const gpuTier = selectedParts.videoCard.tier;
      const isOptimal = selectedParts.videoCard.recommendedCPU.includes(cpuTier);
      
      if (!isOptimal) {
        if (cpuTier === 'budget' && gpuTier === 'enthusiast') {
          issues.push(`⚠ Severe bottleneck: ${selectedParts.cpu.name} will significantly hold back ${selectedParts.videoCard.name}`);
        } else if (cpuTier === 'mid-range' && gpuTier === 'enthusiast') {
          issues.push(`⚠ Moderate bottleneck: Consider upgrading CPU for better GPU performance`);
        }
      }
    }
    
    setCompatibilityIssues(issues);
  }, [selectedParts, estimatedWattage]);

  const selectPart = (category, part) => {
    setSelectedParts(prev => ({ ...prev, [category]: part }));
  };

  const toggleDetails = (category) => {
    setShowDetails(prev => ({ ...prev, [category]: !prev[category] }));
  };

  const buildPC = () => {
    if (!selectedParts.cpu || !selectedParts.motherboard || !selectedParts.memory) {
      alert('Please select at least CPU, Motherboard, and Memory to build your PC');
      return;
    }
    
    if (compatibilityIssues.length > 0) {
      const confirmBuild = window.confirm(
        `There are ${compatibilityIssues.length} compatibility issue(s).\n\n` +
        `${compatibilityIssues.join('\n')}\n\n` +
        'Do you want to proceed anyway?'
      );
      
      if (!confirmBuild) return;
    }

    const pcName = `Custom PC - ${selectedParts.cpu?.name} + ${selectedParts.videoCard?.name || 'Integrated Graphics'}`;
    const customPC = {
      id: Date.now(),
      name: pcName,
      price: totalPrice + 99, // Include assembly and OS
      image: selectedParts.case?.image || 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=300&fit=crop',
      isCustom: true,
      specs: Object.entries(selectedParts)
        .filter(([_, part]) => part)
        .map(([category, part]) => `${category}: ${part.name}`),
      compatibilityStatus: compatibilityIssues.length === 0 ? 'Compatible' : `Has ${compatibilityIssues.length} issue(s)`
    };

    addToCart(customPC);
    alert(`Your custom PC has been added to cart!\nTotal: $${totalPrice + 99}\n${compatibilityIssues.length === 0 ? '✓ All components are compatible' : '⚠ Check compatibility notes'}`);
  };

  const clearSelection = () => {
    setSelectedParts({
      cpu: null,
      cpuCooler: null,
      motherboard: null,
      memory: null,
      storage: null,
      videoCard: null,
      case: null,
      powerSupply: null,
      operatingSystem: null,
      monitor: null,
      caseFan: null
    });
    setActiveTab('all');
  };

  const getBottleneckStatus = () => {
    if (!selectedParts.cpu || !selectedParts.videoCard) return null;
    
    const cpuTier = selectedParts.cpu.tier;
    const gpuRecommended = selectedParts.videoCard.recommendedCPU;
    
    if (gpuRecommended.includes(cpuTier)) {
      return { status: 'optimal', message: '✓ No bottleneck - Perfect match!' };
    } else if (cpuTier === 'enthusiast' && gpuRecommended.includes('high-end')) {
      return { status: 'good', message: '✓ Good match - Slight CPU overkill' };
    } else if (cpuTier === 'budget' && gpuRecommended.includes('mid-range')) {
      return { status: 'warning', message: '⚠ Potential bottleneck - GPU may be held back by CPU' };
    } else {
      return { status: 'poor', message: '❌ Significant bottleneck expected' };
    }
  };

  const bottleneckStatus = getBottleneckStatus();

  // Category display order (like PCPartPicker)
  const categoryOrder = [
    'cpu',
    'cpuCooler',
    'motherboard',
    'memory',
    'storage',
    'videoCard',
    'case',
    'powerSupply',
    'operatingSystem',
    'monitor',
    'caseFan'
  ];

  const categoryLabels = {
    cpu: 'CPU',
    cpuCooler: 'CPU Cooler',
    motherboard: 'Motherboard',
    memory: 'Memory',
    storage: 'Storage',
    videoCard: 'Video Card',
    case: 'Case',
    powerSupply: 'Power Supply',
    operatingSystem: 'Operating System',
    monitor: 'Monitor',
    caseFan: 'Case Fan'
  };

  return (
    <div className="custom-pc-page pcpartpicker-style">
      <div className="container">
        <div className="page-header">
          <h1>System Builder</h1>
          <p className="page-subtitle">Build your dream PC with intelligent compatibility checking</p>
        </div>

        {/* PCPartPicker-style tabs */}
        <div className="pcpp-tabs">
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Components
          </button>
          <button 
            className={`tab-btn ${activeTab === 'intel' ? 'active' : ''}`}
            onClick={() => setActiveTab('intel')}
          >
            Intel CPUs
          </button>
          <button 
            className={`tab-btn ${activeTab === 'amd' ? 'active' : ''}`}
            onClick={() => setActiveTab('amd')}
          >
            AMD CPUs
          </button>
          <button 
            className={`tab-btn ${activeTab === 'nvidia' ? 'active' : ''}`}
            onClick={() => setActiveTab('nvidia')}
          >
            NVIDIA GPUs
          </button>
          <button 
            className={`tab-btn ${activeTab === 'amd-gpu' ? 'active' : ''}`}
            onClick={() => setActiveTab('amd-gpu')}
          >
            AMD GPUs
          </button>
          <button 
            className={`tab-btn ${activeTab === 'cooling' ? 'active' : ''}`}
            onClick={() => setActiveTab('cooling')}
          >
            Cooling
          </button>
        </div>

        <div className="pc-builder-grid">
          {/* Left Column: Component Selection */}
          <div className="component-selection">
            <div className="compatibility-status card">
              <h3>Compatibility Check</h3>
              {compatibilityIssues.length === 0 ? (
                <div className="compatible">
                  <span className="status-icon">✓</span>
                  <span>No issues or incompatibilities found.</span>
                </div>
              ) : (
                <div className="incompatible">
                  <span className="status-icon">⚠</span>
                  <span>{compatibilityIssues.length} compatibility issue(s) found.</span>
                  <div className="issues-list">
                    {compatibilityIssues.map((issue, idx) => (
                      <div key={idx} className="issue">{issue}</div>
                    ))}
                  </div>
                </div>
              )}
              {bottleneckStatus && (
                <div className={`bottleneck-status ${bottleneckStatus.status}`}>
                  <strong>Performance:</strong> {bottleneckStatus.message}
                </div>
              )}
              <div className="estimated-wattage">
                <strong>Estimated Wattage:</strong> {estimatedWattage}W
                {selectedParts.powerSupply && (
                  <span className={`wattage-status ${selectedParts.powerSupply.wattage >= estimatedWattage ? 'good' : 'warning'}`}>
                    {selectedParts.powerSupply.wattage >= estimatedWattage ? '✓' : '⚠'} PSU: {selectedParts.powerSupply.wattage}W
                  </span>
                )}
              </div>
            </div>

            {/* Component Categories */}
            {categoryOrder.map(category => (
              <div key={category} className="component-category card">
                <div className="category-header" onClick={() => toggleDetails(category)}>
                  <h3>{categoryLabels[category]}</h3>
                  <span className="toggle-icon">{showDetails[category] ? '−' : '+'}</span>
                </div>
                
                {selectedParts[category] ? (
                  <div className="selected-component">
                    <div className="selected-part-info">
                      <img src={selectedParts[category].image} alt={selectedParts[category].name} />
                      <div>
                        <strong>{selectedParts[category].name}</strong>
                        <div className="part-specs">{selectedParts[category].specs}</div>
                        <div className="part-price">${selectedParts[category].price}</div>
                      </div>
                    </div>
                    <button 
                      className="btn-remove"
                      onClick={() => selectPart(category, null)}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="no-selection">
                    <span>+ Choose {categoryLabels[category]}</span>
                  </div>
                )}

                {showDetails[category] && (
                  <div className="component-list-details">
                    <div className="component-grid">
                      {filteredComponents[category]?.map((part) => (
                        <div 
                          key={part.id} 
                          className={`component-card ${selectedParts[category]?.id === part.id ? 'selected' : ''}`}
                          onClick={() => selectPart(category, part)}
                        >
                          <img src={part.image} alt={part.name} />
                          <div className="component-info">
                            <div className="component-name">{part.name}</div>
                            <div className="component-specs">{part.specs}</div>
                            <div className="component-price">${part.price}</div>
                            {category === 'videoCard' && selectedParts.cpu && part.recommendedCPU?.includes(selectedParts.cpu.tier) && (
                              <div className="recommended-badge">✓ Recommended</div>
                            )}
                            {category === 'motherboard' && selectedParts.cpu && part.socket === selectedParts.cpu.socket && (
                              <div className="compatible-badge">✓ Compatible</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Build Summary */}
          <div className="build-summary-column">
            <div className="build-summary card">
              <h2>Your Build</h2>
              
              <div className="selected-parts-list">
                {categoryOrder.map(category => (
                  selectedParts[category] && (
                    <div key={category} className="selected-part-item">
                      <div className="part-category">{categoryLabels[category]}:</div>
                      <div className="part-details">
                        <div className="part-name">{selectedParts[category].name}</div>
                        <div className="part-specs-small">{selectedParts[category].specs}</div>
                      </div>
                      <div className="part-price">${selectedParts[category].price}</div>
                    </div>
                  )
                ))}
              </div>

              {Object.values(selectedParts).filter(Boolean).length === 0 && (
                <div className="empty-build">
                  <p>Select components to start building your PC</p>
                  <p className="hint">💡 Start with CPU, then motherboard, then memory</p>
                </div>
              )}

              <div className="price-summary">
                <div className="price-row">
                  <span>Base Total:</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="price-row">
                  <span>Assembly & OS:</span>
                  <span>$99</span>
                </div>
                <div className="price-row total">
                  <span>Total:</span>
                  <span>${totalPrice + 99}</span>
                </div>
                <div className="price-row iqd">
                  <span>Total in IQD:</span>
                  <span>{((totalPrice + 99) * 1450).toLocaleString()} IQD</span>
                </div>
              </div>

              <div className="build-actions">
                <button 
                  className="btn btn-primary build-btn"
                  onClick={buildPC}
                  disabled={!selectedParts.cpu || !selectedParts.motherboard}
                >
                  🛒 Add Custom Build to Cart
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={clearSelection}
                >
                  Clear All
                </button>
              </div>

              <div className="build-features">
                <h3>✅ Build Features</h3>
                <ul>
                  <li>Real-time compatibility checking</li>
                  <li>Automatic motherboard filtering by CPU socket</li>
                  <li>GPU length and case fit verification</li>
                  <li>PSU wattage recommendations</li>
                  <li>Performance bottleneck analysis</li>
                  <li>Professional assembly & cable management</li>
                  <li>3-year warranty on complete build</li>
                  <li>Free delivery across Iraq</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPC;