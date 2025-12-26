
import { Technology } from './types';

export const BRAND_COLORS = {
  darkBlue: '#0F172A',
  accentBlue: '#1E40AF',
  lightGray: '#F8FAFC',
  mediumGray: '#94A3B8',
};

export const TECHNOLOGIES: Technology[] = [
  {
    id: 'a-pro-daf',
    name: 'A-PRO DAF System',
    shortName: 'DAF',
    description: 'Advanced Dissolved Air Flotation system for high-efficiency solids removal.',
    fullContent: 'The A-PRO DAF (Dissolved Air Flotation) is a state-of-the-art clarification system designed to remove suspended solids, fats, oils, and greases from wastewater. By dissolving air under pressure and then releasing it into the wastewater, millions of micro-bubbles attach to particles, floating them to the surface for mechanical removal. Our A-PRO series features a proprietary saturator design that reduces energy consumption by 30% while increasing bubble surface area.',
    features: [
      'Micro-bubble Tech (20-50μm)',
      'Circular & Rectangular Configurations',
      'Hydraulic loading up to 15 m/h',
      'Automated Sludge Removal System'
    ],
    applications: [
      'Food & Beverage Effluent',
      'Oil & Gas Refineries',
      'Pulp & Paper Processing',
      'Pre-treatment for RO Systems'
    ],
    image: '/images/A-pro-DAF/DAF.png'
  },
  {
    id: 'm-flocs',
    name: 'M-Flocs (AMBBR)',
    shortName: 'AMBBR',
    description: 'Advanced Moving Bed Biofilm Reactor for high-rate biological treatment.',
    fullContent: 'M-Flocs utilizes specialized suspended carriers that provide high surface area for biomass growth. This technology enhances the biological capacity of wastewater treatment plants without increasing tank volume, making it ideal for retrofits and space-constrained sites. The system is self-regulating and highly tolerant to shock loads, ensuring stable effluent quality even with varying influent characteristics.',
    features: [
      'Self-regulating biomass',
      'High tolerance to shock loads',
      'No sludge recycling required',
      'Minimal maintenance requirements'
    ],
    applications: [
      'Industrial Effluent Treatment',
      'Nitrogen & Phosphorus Removal',
      'BOD/COD reduction',
      'System Capacity Upgrades'
    ],
    image: '/images/M-flocs-AMBBR/AMBBR.png'
  },
  {
    id: 'x-flocs',
    name: 'X-Flocs (MBR)',
    shortName: 'MBR',
    description: 'Membrane Bioreactor combining biological treatment and membrane filtration.',
    fullContent: 'X-Flocs MBR technology replaces conventional secondary clarifiers with ultra-filtration membranes. This produces a high-quality effluent suitable for reuse in various industrial and municipal applications. By maintaining high MLSS concentrations, the footprint is reduced by up to 50% compared to traditional activated sludge processes.',
    features: [
      'Superior effluent quality (SDI < 3)',
      'High MLSS operation (up to 12,000 mg/L)',
      'Small footprint (50% less than conventional)',
      'Automated cleaning (CIP) cycles'
    ],
    applications: [
      'Water Reuse & Reclamation',
      'Commercial Building STPs',
      'Industrial Wastewater Recycling',
      'Remote Mining/Construction Camps'
    ],
    image: '/images/X-flocs-MBR/MBR.png'
  },
  {
    id: 'c-flocs',
    name: 'Cera Flocs (Ceramic MBR)',
    shortName: 'Ceramic MBR',
    description: 'Next-generation ceramic membrane filtration for extreme conditions.',
    fullContent: 'Cera Flocs features high-strength ceramic membranes that offer unparalleled chemical and thermal stability compared to traditional polymeric membranes. They are ideal for harsh industrial effluents containing oils, solvents, or extreme pH levels. With a lifespan of up to 15 years, they provide the lowest total cost of ownership in the industry.',
    features: [
      'Lifespan up to 10-15 years',
      'Backwashable at high pressure',
      'Oil & solvent resistance',
      'High flux rates in aggressive media'
    ],
    applications: [
      'Heavy Metal Removal',
      'Oily Wastewater Treatment',
      'High Temperature Effluents',
      'Acid/Alkali Wastewater recovery'
    ],
    image: '/images/C-flocs-Ceramic/ceramic.png'
  },
  {
    id: 'u-flocs',
    name: 'U-Flocs (UF System)',
    shortName: 'UF',
    description: 'Advanced Ultrafiltration systems for superior water clarification.',
    fullContent: 'U-Flocs provides a physical barrier to pathogens, suspended solids, and macromolecules. It serves as an excellent pretreatment for Reverse Osmosis (RO) or as a standalone filtration stage for surface water treatment. Our hollow-fiber technology ensures consistent turbidity below 0.1 NTU.',
    features: [
      'Hollow fiber membrane technology',
      'Consistent turbidity < 0.1 NTU',
      'Dead-end or Cross-flow operation',
      'PLC-controlled automation'
    ],
    applications: [
      'Surface Water Treatment',
      'RO Pre-treatment',
      'Secondary Effluent Polishing',
      'Boiler Feedwater Pre-treatment'
    ],
    image: '/images/U-flocs-UF/UF.png'
  },
  {
    id: 'afm',
    name: 'Activated Filtration Media (AFM)',
    shortName: 'AFM',
    description: 'Bio-resistant filtration media for superior clarity and performance.',
    fullContent: 'AFM is a direct replacement for sand, doubling the performance of sand filters without the need for additional investments in infrastructure. It is a bio-resistant, highly engineered product made from recycled green glass that provides filtration down to 1 micron. Unlike sand, it does not support biofilm growth, preventing channeling and bacterial breakthrough.',
    features: [
      'Bio-resistant - no biofilm growth',
      'Filtration down to 1 micron',
      'Reduces backwash water by 50%',
      'Double the lifespan of standard sand'
    ],
    applications: [
      'Tertiary Polishing of Sewage',
      'Industrial Process Water',
      'Cooling Tower Filtration',
      'Pre-treatment for Ion Exchange'
    ],
    image: '/images/AFM/Activated Filtration Media AFM.png'
  },
  {
    id: 'mvr',
    name: 'Mechanical Vapor Recompressor (MVR)',
    shortName: 'MVR',
    description: 'Zero Liquid Discharge (ZLD) solution for high TDS wastewater.',
    fullContent: 'MVR evaporation is the most energy-efficient technology for wastewater volume reduction and salt recovery. By recycling the latent heat of vapor using a mechanical compressor, the system requires minimal external steam. It is a core component of Albion’s Zero Liquid Discharge (ZLD) strategy for chemical and pharmaceutical industries.',
    features: [
      '80% energy savings over traditional evaporators',
      'Continuous automated operation',
      'Compact vertical design',
      'High salt recovery purity'
    ],
    applications: [
      'Chemical & Dyeing Industry',
      'ZLD Compliant Factories',
      'High TDS Effluent Treatment',
      'Concentration of Process Liquids'
    ],
    image: '/images/MVR/MVR-Mechanical Vapor Recompressor.jpg'
  },
  {
    id: 'mbbr',
    name: 'Moving Bed Bioreactor (MBBR)',
    shortName: 'MBBR',
    description: 'Robust biological treatment using high-surface-area carrier media.',
    fullContent: 'Albion’s MBBR system is a flexible and efficient biological process that uses plastic carriers kept in motion by aeration. This design allows for a large concentration of specialized bacteria to be maintained in a small volume, making it highly resistant to hydraulic and organic fluctuations compared to conventional systems.',
    features: [
      'No sludge return needed',
      'Low head-loss aeration',
      'Easily expandable capacity',
      'Resistant to toxic shocks'
    ],
    applications: [
      'Municipal STPs',
      'Pulp & Paper Effluent',
      'Textile Biological Stage',
      'Upgrade of existing ETPs'
    ],
    image: '/images/MBBR/MBBR-Moving Bed Bioreactor System.png'
  },
  {
    id: 'sbr',
    name: 'Sequencing Batch Reactor (SBR)',
    shortName: 'SBR',
    description: 'Automated batch biological treatment for flexible loading conditions.',
    fullContent: 'The SBR process is a fill-and-draw activated sludge system for sewage treatment. In this system, all steps of the biological process—equalization, aeration, and clarification—occur in a single basin in a timed sequence. Our SBRs are equipped with high-precision decanters and advanced PLC logic to handle urban flow variations.',
    features: [
      'Single-basin operation (No clarifiers)',
      'Highest nutrient removal efficiency',
      'Fully automated decanting',
      'Minimal odor and noise'
    ],
    applications: [
      'Urban Residential Projects',
      'Smart City STPs',
      'Hotel & Resort Sewage',
      'Decentralized Water Reuse'
    ],
    image: '/images/SBR/Sequencing Batch Reactor (SBR).png'
  }
];

export const WATER_RECYCLING_TREATMENTS = {
  effluent: {
    title: 'Effluent Wastewater Treatment',
    items: [
      { id: 'a-pro-daf', name: 'Dissolved Air Flotation System (DAF)', description: 'Solids, oil and grease removal via micro-bubble flotation.' },
      { id: 'afm', name: 'Activated Filtration Media (AFM)', description: 'Bio-resistant filtration media for superior clarity and performance.' },
      { id: 'c-flocs', name: 'Cera Flocs', description: 'Advanced ceramic-based flocculation for high-strength industrial waste.' },
      { id: 'mvr', name: 'Mechanical Vapor Recompressor', description: 'Zero Liquid Discharge (ZLD) solution for high TDS wastewater.' }
    ]
  },
  sewage: {
    title: 'Sewage Wastewater Treatment',
    items: [
      { id: 'x-flocs', name: 'Membrane Bio Reactor System (MBR)', description: 'Highest quality sewage treatment for urban water reuse.' },
      { id: 'm-flocs', name: 'Advanced Moving Bed Bio Reactor (AMBBR)', description: 'Enhanced biological footprint for retrofit and upgrade projects.' },
      { id: 'mbbr', name: 'Moving Bed Bioreactor System (MBBR)', description: 'Robust, efficient biological treatment using carrier media.' },
      { id: 'sbr', name: 'Sequencing Batch Reactor System (SBR)', description: 'Batch-process biological treatment for flexible loading.' }
    ]
  }
};

export const MEMBRANE_TYPES = [
  { name: "MBR Hollow Fiber Membranes", link: "https://blufoxmembranes.com/bf-series-hollow-fiber-mbr-membrane/" },
  { name: "Ultra Filtration Membrane (UF)", link: "https://blufoxmembranes.com/uf-membrane/" },
  { name: "Sumitomo Poreflon Membrane", link: "https://blufoxmembranes.com/submerge-type-poreflon-module/" },
  { name: "Flatsheet Ceramic Membrane", link: "https://blufoxmembranes.com/ceramic-flat-sheet-membranes" },
  { name: "Reverse Osmosis Membrane", link: "https://blufoxmembranes.com/reverse-osmosis-ro-membrane-blufox/" }
];

export const INDUSTRIES = [
  'Pharmaceutical',
  'Textile & Dyeing',
  'Food & Beverages',
  'Automobile',
  'Chemical Processing',
  'Municipal & Residential'
];


export const PRODUCTS = [
  {
    title: "Air Diffuser",
    image: "/images/products/air-diffuser.jpg",
    points: [
      "Tubular Diffuser: 65×620mm, 65×1000mm, 65×2200mm, 90×1000mm",
      "Disc Diffuser: 9\" Dia, 12\" Dia",
      "Retrievable Assembly for Diffusers"
    ]
  },
  {
    title: "Sludge Decanter Unit",
    image: "/images/products/sludge-decanter.jpg",
    points: [
      "Used to separate solids from liquid continuously",
      "Available in range of 1–25 m³/h"
    ]
  },
  {
    title: "Bacteria",
    image: "/images/products/bacteria.jpg",
    points: [
      "STP Bacteria",
      "ETP Bacteria",
      "Nutrient Removal Bacteria",
      "Textile Bacteria",
      "Oil & Grease Removal Bacteria"
    ]
  },
  {
    title: "Chemicals",
    image: "/images/products/chemicals.jpg",
    points: [
      "Alum",
      "Poly Aluminium Chloride",
      "Poly Electrolyte",
      "Caustic Soda",
      "Ferrous Sulphate"
    ]
  },
  {
    title: "Filter Press",
    image: "/images/products/filter-press.jpg",
    points: [
      "Sludge dewatering system",
      "Sizes: 24×24, 36×36, 48×48"
    ]
  },
  {
    title: "Drum & Parabolic Screen",
    image: "/images/products/screen.jpg",
    points: [
      "Separates floatable solids at preliminary stage",
      "Custom sizes available"
    ]
  },
  {
    title: "MBR Membrane",
    image: "/images/products/mbr.jpg",
    points: [
      "Hollow fiber: 10, 20, 30 m²",
      "Flat sheet membrane"
    ]
  },
  {
    title: "UF Membrane",
    image: "/images/products/uf.jpg",
    points: [
      "High pressure resistance",
      "Excellent cleaning & recovery",
      "Chemical & temperature tolerant"
    ]
  },
  {
    title: "MBBR Media",
    image: "/images/products/mbbr.jpg",
    points: [
      "High surface area",
      "Highest removal efficiency",
      "Virgin PE material"
    ]
  },
  {
    title: "Ultraviolet Systems",
    image: "/images/products/uv.jpg",
    points: [
      "99.99% kill rate",
      "Capacity: 1–100 m³/h",
      "Advanced FEP tubing"
    ]
  },
  {
    title: "Air Blower",
    image: "/images/products/blower.jpg",
    points: [
      "Side channel & roots blowers",
      "Capacity: 10–3000 CMH",
      "Brands: SPM, USHA"
    ]
  },
  {
    title: "Pumps",
    image: "/images/products/pumps.jpg",
    points: [
      "Monoblock, multistage, centrifugal, submersible",
      "Capacity: 250–10000 LPH",
      "Head: 5–35 meters"
    ]
  }
];
