# LiveStats - Electron Wrapper
This directory contains a simple Electron wrapper for the LiveStats static HTML/CSS/JS consumer UI.
## Goals
- Run the mock-mode LiveStats UI inside an Electron shell for demo/test.
- Keep the UI default to mock data for safe local testing.
## Quick Start
From this directory (where `livestats.html` lives):
```powershell
npm install
npm run start
- The `start` script launches the Electron app, which opens `livestats.html` directly.
- Mock data is on by default; if you want to toggle to the Google Sheets live data path, change the `source` query param when running or update the `USE_MOCK_DATA` toggle.
## Toggle Data Source
You can toggle data source by using URL query parameters (when running in a browser) or using the Electron-preload API.
- Browser: open `livestats.html?source=mock` or `livestats.html?source=live` to force a specific source.
- Electron: currently `preload.js` provides `electronAPI.isMock()` which returns `true` (mock) by default. Edit `preload.js` and/or `js/app.js` if you want to programmatically toggle.
## Troubleshooting
- If you see cache permission errors on Windows, the application sets a writable temp path for `userData` to avoid disk cache permission issues. If you modify this behavior, ensure the path is writable.
## Packaging
If you'd like to package the app, add `electron-builder` or `electron-packager` to `devDependencies` and update `package.json` scripts with build config.
If you'd like, I can add packaging scripts or create a dev watcher/hot reload setup.
# LiveStats Engine - Consumer Website

A modern, responsive website for viewing live tractor pulling results powered by Georgia Motorsports Media.

## 📁 Project Structure

```
WEBPAGE LIVESTAT/
├── assets/
│   └── images/
│       └── logo.svg          # Georgia Motorsports Media logo
├── css/
│   └── styles.css            # Main stylesheet
├── js/
│   └── app.js               # JavaScript functionality with mock data
├── livestats.html            # Main website file (USE THIS ONE)
├── index.html               # Old file (can be deleted)
└── README.md                # This file
```

## 🚀 Getting Started

### View the Website

Simply open `livestats.html` in your web browser, or host it on a web server.

### Run Locally with Server

```bash
# Using Python (recommended)
cd "C:\Users\hvach\Documents\LiveStat\Build\WEBPAGE LIVESTAT"
python -m http.server 8000

# Then visit: http://localhost:8000/livestats.html
```

## ✨ Features

### Current Features (Fully Functional with Mock Data)

✅ **6 Mock Pulling Associations** with realistic data
✅ **60+ Mock Events** across all associations  
✅ **Live Event Tracking** with real-time indicators
✅ **Detailed Results Tables** with place badges and full pull indicators
✅ **Search Functionality** for events, drivers, and trucks
✅ **Responsive Design** - Perfect on mobile, tablet, and desktop
✅ **Class-based Results** with tab navigation
✅ **Beautiful Modern UI** with animations and hover effects

### Features Coming Soon

🔄 Google Sheets Integration (switch `USE_MOCK_DATA` to `false` in app.js)
🔄 Real-time data updates
🔄 Season standings pages
🔄 Driver/truck profiles
🔄 Advanced search filters

## 🎨 Design Highlights

- **Mobile-First Design** - Optimized for mobile viewing
- **Fast Loading** - Minimal dependencies, optimized assets
- **Smooth Animations** - Professional transitions and effects
- **Intuitive Navigation** - Easy 3-level hierarchy (Associations → Events → Results)
- **Visual Feedback** - Hover effects, loading states, status badges
- **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation

## 📊 Mock Data

The website currently uses mock data to demonstrate all features:

- **6 Associations**: Georgia, Southeast, Carolina, Florida, Alabama, Tennessee
- **Multiple Events per Association**: Live, completed, and upcoming events
- **6 Classes per Event**: Super Stock 4x4, Pro Stock Tractors, Modified 2WD, etc.
- **8-16 Entries per Class**: Realistic distances, speeds, and points
- **Full Pull Indicators**: Events showing 300ft pulls with trophy icon
- **Place Badges**: Gold (🥇), Silver (🥈), Bronze (🥉) for top 3

## 🔌 Google Sheets Integration

To connect to real data from your LiveStats Engine console:

1. Open `js/app.js`
2. Change `USE_MOCK_DATA = true` to `USE_MOCK_DATA = false`
3. Verify `SPREADSHEET_ID` and `API_KEY` are correct
4. The website will automatically load real data from your EventsIndex sheet

## 🎯 Key Pages

### Home Page
- Hero section with search bar
- Live events banner
- Association cards grid
- Hero stats (live events, total events, associations count)

### Association Events Page
- List of all events for selected association
- Filter by status (Live, Completed, Upcoming)
- Event cards with dates, locations, and status badges

### Event Results Page
- Event header with full details
- Class tabs for navigation
- Results table with:
  - Place badges (top 3 highlighted)
  - Driver and truck names
  - Distance and speed
  - Points earned
  - Full pull indicators (🏆)

## 🛠 Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
  --primary: #0066FF;        /* Main blue color */
  --secondary: #FF0033;      /* Red accent */
  --success: #10b981;        /* Green for live/full pulls */
  /* ... more colors */
}
```

### Logo
Replace `assets/images/logo.svg` with your custom logo (SVG recommended)

### Mock Data
Edit `js/app.js` - See `mockAssociations` array and helper functions

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

**Logo not showing?**
- Check that `assets/images/logo.svg` exists
- Verify file path in HTML is correct

**Mock data not loading?**
- Check browser console for errors (F12)
- Ensure `js/app.js` is loaded correctly

**Styles not applying?**
- Verify `css/styles.css` path is correct
- Clear browser cache (Ctrl+F5)

## 📞 Support

For questions or issues:
- Check browser console for error messages
- Review the JavaScript code in `js/app.js`
- Verify all files are in correct directories

## 🎉 Ready to Use!

The website is fully functional with mock data and ready for demonstration. Simply open `livestats.html` in your browser and explore!

**Recommended viewing:** Open in Chrome or Firefox for best experience.

---

**Powered by Georgia Motorsports Media** 🏁
