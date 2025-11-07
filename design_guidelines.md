# Design Guidelines: Phantom Wallet Portfolio Screenshot Generator

## Design Approach
**Reference-Based Design**: Pixel-perfect replication of the Phantom wallet mobile interface. This is a utility-focused application where authenticity and accuracy are paramount.

## Core Design Principles

### Visual Fidelity
- Exact replication of Phantom wallet's dark interface
- Match all UI elements, spacing, and visual treatments from the reference image
- Maintain authentic Phantom branding and color scheme

### Layout Structure

**Main Portfolio View:**
- Top bar: Wallet name/address with copy functionality
- Total balance display: Large, prominent USD value
- Action buttons row: Receive | Send | Swap | Buy (equal width, rounded)
- Token list: Scrollable area showing individual holdings
- Bottom navigation: Standard Phantom nav bar with icons

**Token Card Structure (per holding):**
- Left: Token icon (circular)
- Center: Token name, amount, and symbol
- Right: USD value and percentage change (green/red)
- Divider lines between tokens

## Typography
- **Total Balance**: Large, bold sans-serif (48-56px equivalent)
- **Token Names**: Medium weight (16-18px)
- **Token Amounts**: Regular weight (14-16px)
- **USD Values**: Medium weight (16-18px)
- **Percentage Changes**: Small, colored text (12-14px)

## Layout System
Tailwind spacing: Consistent use of p-4, p-6, gap-4, space-y-4 for authentic mobile spacing

## Token Holdings Configuration

**Required Holdings:**
1. **Solana (SOL)**: ~$400,000 USD worth
2. **USDT**: Realistic amount (e.g., $50,000-100,000)
3. **Clippy PFF**: $150,000 worth at $0.002711/USD (calculate exact token amount)
4. **Additional Popular Solana Tokens**: ANALOS, JUP, BONK, WIF, PYTH (varied amounts)

## Component Specifications

### Action Buttons
- Four equal-width buttons in horizontal row
- Rounded corners, subtle background
- Icons above text labels
- No hover states needed (mobile interface)

### Token List Items
- Consistent height per item (~72-80px)
- Circular token logos (40-48px diameter)
- Subtle dividers between items
- Aligned columns for clean data presentation

## Images
**Token Logos:**
- Clippy PFF: Use second provided image
- SOL, USDT, other tokens: Use standard crypto token logos
- All logos: Circular format, consistent sizing

## Screenshot Functionality
- "Download Screenshot" button positioned prominently
- Capture entire portfolio view accurately
- Generate high-quality PNG output

## Color References (from Phantom)
Dark purple/black background, white text, purple accent buttons, green for positive changes, red for negative changes

## Critical Quality Standards
- Exact spacing matching Phantom's mobile interface
- Accurate USD calculations displayed
- Real-time percentage changes shown with appropriate colors
- Professional, indistinguishable from actual Phantom wallet
- Mobile-first viewport (375-414px width optimal)