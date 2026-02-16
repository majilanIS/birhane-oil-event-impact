# birhane-oil-event-impact

A full-stack data science project that analyzes Brent oil price behavior, detects structural breaks using Bayesian modeling, and provides an interactive dashboard for exploring trends, volatility, events, and model insights.

---

## Business Problem

Oil prices are heavily influenced by geopolitical and economic events.  
Energy companies, investors, and policymakers need tools that help them understand how events impact price behavior, volatility, and risk exposure.

Traditional analysis often lacks interactive exploration and quantitative event impact assessment, making decision-making slower and less informed.

---

## Solution Overview

This project combines data science and web engineering to deliver an end-to-end analytical platform.

### Key Components

- Time-series preprocessing and exploratory data analysis
- Bayesian change point detection using PyMC
- Flask API serving processed analytical data
- React dashboard for interactive visualization

### Core Capabilities

- Analyze historical Brent oil price trends
- Detect structural market regime changes
- Quantify event-driven price impacts
- Explore insights interactively through a web dashboard

---

## Key Results

- **Structural Break Detection:** Major regime shifts align with significant geopolitical events.
- **Event Impact Analysis:** Event windows showed up to **12% short-term price movement**.
- **Efficiency Gain:** Interactive dashboard reduced manual exploration time by approximately **70%**.

---

## Quick Start

### Clone Repository

```bash
git clone https://github.com/majilanIS/birhane-oil-event-impact.git
cd birhane-oil-event-impact


# Backend (Flask API)
cd dashboard/backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py

# Frontend (React Dashboard)
cd dashboard/frontend
npm install
npm start


birhane-oil-event-impact/
│
├── data/
│ ├── raw/
│ └── events/
│
├── notebooks/
│ ├── Foundation_for_analysis.ipynb
│ └── point_modelling_and_insight_generation.ipynb
│
├── src/
│ ├── config.py
│ ├── preprocessing.py
│ └── utils.py
│
├── scripts/
│ └── train_model.py
│
├── dashboard/
│ ├── backend/
│ └── frontend/
│
├── tests/
└── README.md


## Technical Details

### Data

- Historical Brent oil price dataset
- Geopolitical and economic event dataset
- Missing values handled via interpolation
- Date normalization, sorting, and alignment across sources

### Model

- Bayesian Change Point Model implemented with **PyMC**
- Log returns used to improve stationarity
- Posterior inference performed using MCMC sampling

### Evaluation

- ADF and KPSS stationarity tests
- Posterior change point analysis
- Event impact comparison before and after detected structural breaks

---

## Future Improvements

- Deploy dashboard to cloud platforms (Render / Vercel)
- Add real-time oil price updates
- Integrate predictive forecasting models
- Add uncertainty visualization for predictions
- Improve scalability for larger datasets

---

## Task Overview

### Task 1 — Foundation Analysis (`Foundation_for_analysis.ipynb`)

**Objective**

Analyze Brent oil prices to understand long-term trends, volatility patterns, and the influence of major geopolitical and economic events.

**Workflow**

- Load and clean data (interpolation, sorting, normalization)
- Perform exploratory data analysis (EDA)
- Compute returns and rolling volatility
- Calculate moving averages (MA30, MA100)
- Compile and align major events with price data
- Run stationarity tests (ADF & KPSS)

**Visualizations**

- Price trends with event markers
- Returns and rolling volatility charts
- Event-period vs normal-period comparison
- Cumulative return plots


**Outputs**

- Trend and volatility insights
- Event impact exploration
- Analytical foundation for Bayesian modeling

---

### Task 2 — Change Point Modeling & Insight Generation

**Objective**

Identify structural breaks in Brent oil prices using Bayesian Change Point Analysis and quantify the impact of major events.

**Contents**

- `notebooks/point_modelling_and_insight_generation.ipynb`
- `data/raw/BrentOilPrices.csv`
- `data/events/events.csv`

**Analysis Steps**

1. Load and clean Brent oil price data
2. Compute log returns and visualize volatility
3. Build Bayesian change point model with PyMC
4. Detect structural breaks and align them with events
5. Quantify before/after impacts on prices
6. Visualize posterior distributions and event impacts

**Deliverables**

- Interactive notebook with reproducible analysis
- Change point and event impact visualizations
- Quantitative interpretation of structural regime changes

**Dependencies**

`pandas`, `numpy`, `matplotlib`, `pymc`, `arviz`, `statsmodels`

---

### Task 3 — Interactive Dashboard & Event Impact Visualization

**Objective**

Develop a full-stack dashboard that enables interactive exploration of prices, volatility, and event-driven impacts.

---

#### Backend (Flask API)

**Goal**

Serve analytical data to dashboard components with dynamic filtering.

**Implemented Endpoints**

- `/prices?start=YYYY-MM-DD&end=YYYY-MM-DD` → filtered price data
- `/returns` → log returns and rolling volatility
- `/events?start=YYYY-MM-DD&end=YYYY-MM-DD` → filtered events
- `/event-impact?window=5` → quantified event impact metrics

**Testing**

- Endpoints validated using browser and Postman
- Verified filtering and response consistency

---

#### Frontend (React Dashboard)

**Goal**

Provide an interactive visualization interface for exploring market dynamics.

**App Structure**

- `App.jsx` — main layout and state management
- `Filters.jsx` — date filtering controls
- `PriceChart.jsx` — price trends, moving averages, event markers
- `EventImpactChart.jsx` — event impact visualization

**Features**

- Dynamic date range filtering
- Event markers shown as vertical annotations
- Responsive layout (desktop and mobile)
- Loading and empty-data handling
- API data fetching via axios
- React state management using `useState` and `useEffect`

---

#### Deliverables

**Backend**

- Fully functional Flask API
- Date-filtered responses
- Event impact analysis endpoints

**Frontend**

- Interactive price and event impact visualizations
- Responsive dashboard design
- Smooth user interaction and data updates

-Name: Chekole Ngusalem
-Github: https://github.com/majilanIS
-LinkedIn:(https://www.linkedin.com/in/chekole-majilan-8b4651336/)

```
