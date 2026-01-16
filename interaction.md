# Team MAI Mortgage Website - Interaction Design

## Core Interactive Components

### 1. Bilingual Language Toggle
- **Location**: Top navigation bar (persistent across all pages)
- **Functionality**: Toggle between English and Vietnamese content
- **Interaction**: Click to switch languages, smooth transition with fade effect
- **Implementation**: JavaScript-based content switching with URL parameter persistence

### 2. Hero Section CTA Buttons
- **Primary CTA**: "Apply Now" - Opens application form modal
- **Secondary CTA**: "Schedule a Call" - Opens calendar booking interface
- **Location**: Homepage hero section
- **Interaction**: Smooth modal overlays with form validation

### 3. Loan Program Segment Tiles
- **Purchase/Mua nhà Tile**: Links to purchase loan programs page
- **Refinance Tile**: Links to refinance programs page  
- **Self-Employed/DSCR Tile**: Links to specialized lending programs
- **Interaction**: Hover effects with 3D tilt and shadow expansion
- **Visual**: Each tile displays relevant marketing imagery with overlay text

### 4. Success Stories Slider
- **Slide 1**: "They thought owning a home was impossible"
- **Slide 2**: "Paying $2,200 in rent felt like throwing money away"
- **Slide 3**: "Still renting? 2% down payment assistance..."
- **Interaction**: Auto-advancing carousel with manual navigation dots
- **Timing**: 4-second auto-advance with pause on hover

### 5. "Closed & Funded" Success Rail
- **Content**: Horizontal carousel showcasing deal closures
- **Images**: Marketing-Close-Deal series, Sold-Home images
- **Interaction**: Horizontal scroll with momentum, click to view deal details
- **Animation**: Ken Burns effect on images during scroll

### 6. Mortgage Calculators Hub
- **Payment Calculator**: Monthly payment estimation
- **Affordability Calculator**: Purchase price based on income
- **Refinance Savings Calculator**: Break-even analysis
- **Interaction**: Real-time calculations with animated number transitions
- **Validation**: Input validation with helpful error messages

### 7. Blog/Knowledge Center
- **Category Filter**: First-time homebuyer, PA grants, Self-employed, Refinance
- **Search Function**: Keyword search across all articles
- **Interaction**: Filter buttons with active states, search with live results
- **Layout**: Card grid with hover lift effects

### 8. Reviews & Testimonials Display
- **Star Ratings**: Animated star fill on scroll into view
- **Review Cards**: Horizontal scroll through customer reviews
- **Source Attribution**: Google, Zillow logos with review counts
- **Interaction**: Smooth horizontal scroll, review modal on click

### 9. Team Member Profiles
- **Profile Cards**: Expandable cards with bio information
- **Professional Photos**: High-quality headshots with hover effects
- **Contact Info**: Direct contact buttons for each team member
- **Interaction**: Card flip or expand animation on hover

### 10. Application Flow Interface
- **Quick Start Form**: Short form for lead capture
- **Full Application**: External link to detailed application
- **Progress Indicator**: Multi-step form with progress bar
- **Interaction**: Form validation, success animations, QR code integration

## User Journey Flows

### Primary Flow: New Visitor → Application
1. Land on hero section with strong CTA
2. Explore loan program segments
3. View success stories and social proof
4. Navigate to specific loan program details
5. Use calculators for estimation
6. Read educational content
7. Submit application or schedule call

### Secondary Flow: Returning Visitor → Quick Apply
1. Direct navigation to Apply page
2. Quick form submission or full application
3. Schedule consultation call

### Mobile Optimization
- Touch-friendly button sizes (minimum 44px)
- Swipe gestures for carousels
- Collapsible navigation menu
- Optimized form layouts for mobile input

## Accessibility Features
- Keyboard navigation support
- Screen reader compatibility
- High contrast text/background ratios
- Focus indicators on interactive elements
- Alternative text for all images

## Performance Considerations
- Lazy loading for images and heavy content
- Smooth animations with CSS transforms
- Optimized JavaScript for fast interactions
- Progressive enhancement approach