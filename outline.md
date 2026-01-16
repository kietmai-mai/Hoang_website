# Team MAI Mortgage Website - Project Outline

## File Structure
```
/mnt/okcomputer/output/
├── index.html                 # Homepage with hero, segments, success stories
├── loan-programs.html         # Loan programs overview page
├── program-detail.html        # Individual program detail template
├── calculators.html           # Mortgage calculator hub
├── knowledge.html            # Blog and educational content
├── reviews.html              # Client reviews and testimonials
├── about.html                # Team profiles and company info
├── apply.html                # Application and pre-approval page
├── main.js                   # Core JavaScript functionality
├── resources/                # Local assets directory
│   ├── mai-hero-portrait.png # Generated hero portrait
│   ├── hero-bg.jpg           # Hero background image
│   ├── luxury-home-1.jpg     # Property showcase images
│   ├── luxury-home-2.jpg     # Success story visuals
│   ├── team-photo.jpg        # Group team photo
│   ├── calculator-bg.jpg     # Calculator section background
│   └── success-keys.jpg      # Mortgage approval celebration
├── interaction.md            # Interaction design documentation
├── design.md                 # Visual style guide
└── outline.md               # This project outline
```

## Page Breakdown

### 1. index.html - Homepage
**Purpose**: Primary landing page for lead generation and brand introduction
**Sections**:
- Navigation bar with bilingual toggle
- Hero section with MAI portrait and CTAs
- Social proof strip (53 Units Funded, AML Awards)
- Loan program segment tiles (Purchase, Refinance, Self-Employed/DSCR)
- Success stories slider with client journeys
- "Closed & Funded" success rail carousel
- Mini "Meet Team MAI" preview
- Footer with contact information

### 2. loan-programs.html - Program Overview
**Purpose**: Comprehensive overview of all loan program categories
**Sections**:
- Elegant intro banner with program overview
- Three main program groups with detailed tiles:
  - Purchase/Mua nhà (Conventional, FHA, VA, First-time buyer)
  - Refinance (Rate & Term, Cash-out)
  - Self-Employed (Bank Statement, P&L, DSCR, Investor)
- Quick comparison table
- CTA to schedule consultation

### 3. program-detail.html - Individual Program Pages
**Purpose**: SEO-optimized detail pages for each loan program
**Sections** (template for each program):
- Program hero with title and value promise
- "Who it's for" section with eligibility criteria
- Key benefits with visual icons
- Timeline and process overview
- Example scenario with deal case study
- Related programs sidebar
- Application CTA

### 4. calculators.html - Calculator Hub
**Purpose**: Interactive mortgage calculation tools
**Sections**:
- Calculator navigation tabs
- Mortgage Payment Calculator
- Affordability Calculator  
- Refinance Savings Calculator
- Results visualization with charts
- Side banner promoting consultation
- Educational content about calculations

### 5. knowledge.html - Blog & Education
**Purpose**: Educational content and SEO-driven blog posts
**Sections**:
- Featured articles carousel
- Category filters (First-time buyer, PA grants, Self-employed, Refinance)
- Article grid with search functionality
- Popular posts sidebar
- Newsletter signup
- Related resources

### 6. reviews.html - Reviews & Past Deals
**Purpose**: Social proof and success story showcase
**Sections**:
- Reviews header with star ratings
- Google and Zillow review integration
- Client testimonial cards
- Past deals gallery with:
  - Marketing-Close-Deal series
  - Mixed-use property deals
  - Triplex investment case studies
- Success metrics dashboard

### 7. about.html - Team & Company
**Purpose**: Team credibility and company information
**Sections**:
- Team MAI mission and values
- Group team photo with company overview
- Individual team profiles:
  - Mai Hoang (President's Club, production stats)
  - Michael Mai (Temple, IT background)
  - Chau Truong, Khai Nguyen, Vu Do, Ashley Duong, Tina Truong
- Company backing by Absolute Mortgage
- Awards and recognition
- Community involvement

### 8. apply.html - Application Portal
**Purpose**: Lead capture and application processing
**Sections**:
- Application hero with pre-approval focus
- Two application paths:
  - Quick Start form (lead capture)
  - Full Application (external link)
- Required documents checklist
- Application process timeline
- Contact information with QR code
- FAQ section about applications

## JavaScript Functionality (main.js)

### Core Features
1. **Bilingual Language Toggle**: English/Vietnamese content switching
2. **Smooth Scrolling**: Navigation and internal links
3. **Form Validation**: Real-time validation for all forms
4. **Calculator Logic**: Mortgage calculation algorithms
5. **Carousel Controls**: Success stories and image galleries
6. **Modal Management**: Application forms and CTAs
7. **Animation Triggers**: Scroll-based reveal animations
8. **Mobile Navigation**: Responsive menu toggle

### Interactive Components
- Hero CTA buttons with modal overlays
- Loan program tile hover effects
- Success story slider auto-advance
- Calculator real-time updates
- Review card horizontal scroll
- Team profile expandable cards
- Application form multi-step progression

## Content Strategy

### Bilingual Support
- Primary: English content with Vietnamese translations
- Toggle persistence across pages
- Cultural sensitivity in imagery and messaging
- Vietnamese community focus in PA region

### SEO Optimization
- Individual program pages for long-tail keywords
- Local SEO focus on Pennsylvania market
- Educational content for first-time buyers
- Self-employed and investor lending specialization

### Lead Generation
- Multiple CTA touchpoints throughout site
- Progressive information gathering
- Consultation scheduling integration
- Contact form with CRM integration

## Technical Implementation

### Performance Optimization
- Lazy loading for images
- Minified CSS and JavaScript
- Optimized image formats and sizes
- Progressive enhancement approach

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast color ratios

### Mobile Responsiveness
- Mobile-first design approach
- Touch-friendly interactions
- Optimized layouts for all screen sizes
- Performance considerations for mobile networks