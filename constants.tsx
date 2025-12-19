
import React from 'react';
import { Technology } from './types';

export const BRAND_COLORS = {
  darkBlue: '#0F172A', // Slate-900
  accentBlue: '#1E40AF', // Blue-800
  lightGray: '#F8FAFC', // Slate-50
  mediumGray: '#94A3B8', // Slate-400
};

export const TECHNOLOGIES: Technology[] = [
  {
    id: 'a-pro-daf',
    name: 'A-PRO DAF System',
    shortName: 'DAF',
    description: 'Advanced Dissolved Air Flotation system for high-efficiency solids removal.',
    fullContent: 'The A-PRO DAF (Dissolved Air Flotation) is a state-of-the-art clarification system designed to remove suspended solids, fats, oils, and greases from wastewater. By dissolving air under pressure and then releasing it into the wastewater, millions of micro-bubbles attach to particles, floating them to the surface for mechanical removal.',
    features: [
      'Circular or Rectangular configurations',
      'Proprietary air-dissolving tube technology',
      'Low energy consumption',
      'Compact footprint with high hydraulic loading'
    ],
    applications: [
      'Food & Beverage Industry',
      'Pulp & Paper Mills',
      'Oil & Gas Refineries',
      'Municipal Sludge Thickening'
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'm-flocs',
    name: 'M-Flocs (AMBBR)',
    shortName: 'AMBBR',
    description: 'Advanced Moving Bed Biofilm Reactor for high-rate biological treatment.',
    fullContent: 'M-Flocs utilizes specialized suspended carriers that provide high surface area for biomass growth. This technology enhances the biological capacity of wastewater treatment plants without increasing tank volume, making it ideal for retrofits and space-constrained sites.',
    features: [
      'Self-regulating biomass',
      'High tolerance to shock loads',
      'No sludge recycling required',
      'Minimal maintenance requirements'
    ],
    applications: [
      'Industrial Effluent Treatment',
      'Nitrogen Removal',
      'BOD/COD reduction',
      'System Capacity Upgrades'
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'x-flocs',
    name: 'X-Flocs (MBR)',
    shortName: 'MBR',
    description: 'Membrane Bioreactor combining biological treatment and membrane filtration.',
    fullContent: 'X-Flocs MBR technology replaces conventional secondary clarifiers with ultra-filtration membranes. This produces a high-quality effluent suitable for reuse in various industrial and municipal applications.',
    features: [
      'Superior effluent quality (SDI < 3)',
      'High MLSS operation',
      'Small footprint (50% less than conventional)',
      'Automated cleaning (CIP)'
    ],
    applications: [
      'Water Reuse Projects',
      'Commercial Buildings',
      'Industrial Wastewater Recycling',
      'Remote Mining/Construction Camps'
    ],
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c-flocs',
    name: 'C-Flocs (Ceramic MBR)',
    shortName: 'Ceramic MBR',
    description: 'Next-generation ceramic membrane filtration for extreme conditions.',
    fullContent: 'C-Flocs features high-strength ceramic membranes that offer unparalleled chemical and thermal stability compared to traditional polymeric membranes. They are ideal for harsh industrial effluents.',
    features: [
      'Lifespan up to 10-15 years',
      'Backwashable at high pressure',
      'Oil & solvent resistance',
      'High flux rates'
    ],
    applications: [
      'Heavy Metal Removal',
      'Oily Wastewater Treatment',
      'High Temperature Effluents',
      'Acid/Alkali Wastewater'
    ],
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'u-flocs',
    name: 'U-Flocs (UF System)',
    shortName: 'UF',
    description: 'Advanced Ultrafiltration systems for superior water clarification.',
    fullContent: 'U-Flocs provides a physical barrier to pathogens, suspended solids, and macromolecules. It serves as an excellent pretreatment for Reverse Osmosis (RO) or as a standalone filtration stage.',
    features: [
      'Hollow fiber membrane technology',
      'Consistent turbidity < 0.1 NTU',
      'Dead-end or Cross-flow operation',
      'PLC-controlled automation'
    ],
    applications: [
      'Surface Water Treatment',
      'RO Pretreatment',
      'Secondary Effluent Polishing',
      'Boiler Feedwater Pre-treatment'
    ],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800'
  }
];

export const INDUSTRIES = [
  'Pharmaceutical',
  'Textile & Dyeing',
  'Food & Beverages',
  'Automobile',
  'Chemical Processing',
  'Municipal & Residential'
];
