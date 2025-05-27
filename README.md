# 🛒 Playwright Automation: nopCommerce Demo (Local)

This project contains automated end-to-end tests for the nopCommerce demo site running **locally**. It uses [Playwright](https://playwright.dev/) with the **Page Object Model (POM)** pattern and includes configurations for cross-browser testing, reusable utilities, and GitHub Actions/Azure DevOps pipelines.

## 📦 Project Structure

```
.
├── e2e/                        # All test specifications
├── pages/                     # Page Object Models
├── utils/                     # Environment configs and helpers
├── test-results/              # Artifacts from test runs
├── .github/workflows/         # GitHub Actions config
├── azure-pipelines.yml        # Azure DevOps pipeline config
├── playwright.config.js       # Global Playwright config
├── package.json               # NPM dependencies & scripts
└── README.md
```

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [Git](https://git-scm.com/)
- Local instance of nopCommerce running (e.g. `http://localhost:5000` or as defined in `utils/environsUtils.js`)
- Optional: Chrome, Firefox, WebKit installed for full cross-browser testing

## 🚀 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/akan-baba/playwright-nopcommerce.git
   cd playwright-nopcommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

## 🧪 Running Tests

### 🔹 Chromium only
```bash
npx playwright test --project=chromium
```

### 🔹 Cross-browser
```bash
npx playwright test
```

### 🔹 Headed mode (UI visible)
```bash
npx playwright test --headed
```

## 🖥️ Local Environment

Your tests are configured to run against a **locally hosted** nopCommerce site. The base URL is defined in:

```
utils/environsUtils.js
```

To change the environment (e.g., for staging or prod), update or extend this file and modify the `ENV` variable as needed:

```bash
cross-env ENV=local npx playwright test
```

## 📊 View Test Report

After a run:

```bash
npx playwright show-report
```

## 🛠️ CI/CD Support

- GitHub Actions workflow defined in `.github/workflows/playwright.yml`
- Azure DevOps pipeline defined in `azure-pipelines.yml`

You can adapt these files for automated test execution on every push or pull request.

## 🧼 Clean Up Artifacts

```bash
npx playwright test --reporter=line
rm -rf test-results playwright-report
```

## 📌 TODO

- [ ] Add test data files for data-driven tests
- [ ] Improve reporting with trace/video capture on failure
- [ ] Integrate email or Slack notifications into CI
- [ ] Include Docker setup for nopCommerce (optional)

## 👤 Author

Akano Baba  
🔗 [GitHub](https://github.com/akan-baba)

## 📄 License

MIT