
# TripMentor Playwright Automation (Search Flow)

This repository automates a **basic flight search scenario** on the [TripMentor demo site](https://web.demotm.journeymentor.net) using **Playwright** with the **Page Object Model (POM)**.

---

## ✅ What It Does

- Launches the TripMentor site
- Selects "One Way" or "Round Trip"
- Fills in:
  - Origin and Destination
  - Date of travel (dynamically picks today + 1 day)
- Clicks **Search**
- Verifies that **results or fallback message** appear

---

## 📁 Project Structure

```
project-root/
│
├── playwright.config.ts           # Playwright config with base URL
├── tests/
│   ├── pages/
│   │   └── SearchPage.ts          # Page Object for search page
│   └── search.spec.ts             # Test case using the SearchPage
```

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/abubakarafzal/tripmentor-playwright-demo.git
cd tripmentor-playwright
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Tests

```bash
npx playwright test
```

### 4. Open the Report (optional)

```bash
npx playwright show-report
```

---



---

## 📦 Features Used

- [x] Playwright with `@playwright/test`
- [x] Page Object Model (POM)
- [x] Dynamic date logic using `dayjs`
- [x] Role and CSS-based selectors
- [x] Flexible for CI integration

---

## 📌 Future Enhancements

- Add multi-leg trip scenario
- Screenshot on failure
- GitHub Actions CI/CD
- Visual regression (optional)

---

