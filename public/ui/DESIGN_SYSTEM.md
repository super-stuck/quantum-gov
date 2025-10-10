# QuantumGov Design System

## Overview
The QuantumGov Design System provides a comprehensive set of design guidelines, components, and patterns for creating consistent, accessible, and beautiful user interfaces across the quantum-enhanced democratic governance platform.

## Design Philosophy

### Core Principles
1. **Quantum-Inspired**: Visual metaphors that represent quantum computing concepts
2. **Democratic Values**: Transparency, accessibility, and inclusivity in design
3. **Modern & Clean**: Contemporary aesthetics with clear hierarchy
4. **Trust & Security**: Visual cues that convey reliability and safety

## Visual Identity

### Logo & Branding
- **Primary Logo**: Quantum particle network with democratic symbolism
- **Secondary Mark**: Simplified quantum Q icon
- **Wordmark**: QuantumGov in custom quantum typography
- **Tagline**: "The Future of Democracy is Quantum-Enhanced"

### Color System

#### Primary Colors
- **Quantum Blue**: `#667eea` - Primary actions, links, quantum elements
- **Democratic Purple**: `#764ba2` - Secondary actions, governance elements
- **Innovation Pink**: `#f093fb` - Accent color, highlights, CTAs

#### Semantic Colors  
- **Success Green**: `#4facfe` - Confirmations, positive states
- **Warning Yellow**: `#f6d365` - Alerts, pending states  
- **Error Orange**: `#fda085` - Errors, negative states
- **Info Blue**: `#74b9ff` - Information, neutral states

#### Neutral Colors
- **Text Primary**: `#2d3748` - Main content text
- **Text Secondary**: `#4a5568` - Secondary text, captions
- **Text Muted**: `#718096` - Disabled text, placeholders
- **Background**: `#f8fafc` - Page backgrounds
- **Surface**: `#ffffff` - Card backgrounds, surfaces
- **Border**: `#e2e8f0` - Dividers, borders

### Typography

#### Font Stack
```css
/* Primary Font - Inter */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Secondary Font - Space Grotesk */
font-family: 'Space Grotesk', 'Inter', sans-serif;

/* Monospace - JetBrains Mono */
font-family: 'JetBrains Mono', 'Monaco', 'Courier New', monospace;
```

#### Type Scale
- **Heading 1**: 3rem (48px) / Bold / Space Grotesk
- **Heading 2**: 2.25rem (36px) / Bold / Space Grotesk  
- **Heading 3**: 1.875rem (30px) / Semibold / Inter
- **Heading 4**: 1.5rem (24px) / Semibold / Inter
- **Heading 5**: 1.25rem (20px) / Medium / Inter
- **Body Large**: 1.125rem (18px) / Regular / Inter
- **Body**: 1rem (16px) / Regular / Inter
- **Body Small**: 0.875rem (14px) / Regular / Inter
- **Caption**: 0.75rem (12px) / Medium / Inter

### Spacing System

#### Scale (based on 4px grid)
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)  
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)
- **4xl**: 6rem (96px)

## Components

### Buttons

#### Primary Button
```css
.btn-primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  border: 2px solid #667eea;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
}
```

### Cards

#### Quantum Card
```css
.quantum-card {
  background: white;
  border-radius: 15px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.1);
  transition: all 0.3s ease;
}

.quantum-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.2);
}
```

### Forms

#### Input Fields
```css
.quantum-input {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.quantum-input:focus {
  border-color: #667eea;
  outline: none;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}
```

### Navigation

#### Quantum Nav
```css
.quantum-nav {
  background: linear-gradient(135deg, #667eea, #764ba2);
  backdrop-filter: blur(10px);
  padding: 16px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}
```

## Layout Patterns

### Grid System
- **12-column grid** with flexible gutters
- **Breakpoints**: 
  - Mobile: 320px+
  - Tablet: 768px+  
  - Desktop: 1024px+
  - Large: 1440px+

### Container Widths
- **Small**: 640px max-width
- **Medium**: 768px max-width
- **Large**: 1024px max-width
- **XL**: 1280px max-width
- **2XL**: 1536px max-width

## Iconography

### Icon System
- **Style**: Outline icons with 2px stroke
- **Sizes**: 16px, 20px, 24px, 32px, 48px
- **Library**: Heroicons, Lucide Icons
- **Custom Icons**: Quantum-specific symbols

### Quantum Icons
- ⚛️ Quantum Computing
- 🌐 Global Network  
- 🔗 Blockchain
- 🗳️ Democratic Voting
- 📊 Data Analytics
- 🛡️ Security

## Animation & Transitions

### Micro-interactions
- **Hover States**: 0.3s ease transitions
- **Button Clicks**: Scale(0.98) for 0.1s
- **Loading States**: Quantum pulse animations
- **Page Transitions**: Fade + slide combinations

### Quantum Effects
```css
@keyframes quantum-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.3); }
  50% { box-shadow: 0 0 30px rgba(102, 126, 234, 0.6); }
}

.quantum-glow {
  animation: quantum-glow 2s ease-in-out infinite;
}
```

## Accessibility Guidelines

### WCAG 2.1 AA Compliance
- **Color Contrast**: Minimum 4.5:1 ratio for normal text
- **Focus States**: Visible focus indicators on all interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Semantic HTML and ARIA labels
- **Alternative Text**: Descriptive alt text for images

### Inclusive Design
- **Color Blind Friendly**: Don't rely solely on color for information
- **Responsive Text**: Support browser zoom up to 200%
- **Motion Respect**: Respect prefers-reduced-motion settings
- **Clear Language**: Simple, jargon-free content

## Implementation

### CSS Custom Properties
```css
:root {
  /* Colors */
  --color-primary: #667eea;
  --color-secondary: #764ba2;
  --color-accent: #f093fb;
  
  /* Typography */
  --font-primary: 'Inter', sans-serif;
  --font-secondary: 'Space Grotesk', sans-serif;
  
  /* Spacing */
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* Effects */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
}
```

### Component Library Structure
```
components/
├── base/
│   ├── Button/
│   ├── Input/
│   ├── Card/
│   └── Typography/
├── layout/
│   ├── Header/
│   ├── Footer/
│   ├── Sidebar/
│   └── Container/
├── quantum/
│   ├── QuantumButton/
│   ├── QuantumCard/
│   ├── QuantumGlow/
│   └── QuantumAnimation/
└── governance/
    ├── VotingInterface/
    ├── DecisionCard/
    ├── ParticipationMeter/
    └── ConsensusIndicator/
```

## Resources

### Design Tools
- **Figma**: Design system and prototypes
- **Adobe Creative Suite**: Brand assets and illustrations  
- **Principle**: Advanced animations and transitions

### Development Tools
- **Storybook**: Component documentation and testing
- **CSS-in-JS**: Styled Components or Emotion
- **Design Tokens**: Style Dictionary for token management

### Testing & QA
- **Visual Regression**: Percy or Chromatic
- **Accessibility**: axe-core automated testing
- **Cross-browser**: BrowserStack testing matrix

---

*This design system is a living document that evolves with the QuantumGov platform. For updates and contributions, please refer to the design team guidelines.*