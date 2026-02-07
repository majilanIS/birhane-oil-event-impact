**_ birhane-oil-event-impact _**

## **_ task: 1 Foundation_for_analysis.ipynb _**

---

    ***_Objective_***
    Analyze Brent oil prices to understand trends, volatility, and the impact of major geopolitical and economic events.

    **_Workflow:_**

    Load and clean data (interpolate missing values, sort by date)

    **_Exploratory Data Analysis:_**

    Plot price trends

    Compute returns

    Rolling volatility

    Moving averages (MA30, MA100)

    ***_Event Analysis:_***

    Compile major events

    Add event windows

    Statistical Tests: ADF & KPSS for stationarity

    **_Visualization:_**

    Price with event lines

    Returns & volatility plots

    Event vs normal comparison

    Cumulative returns

    **_Output:_**

    Trend and volatility charts

    Event impact comparison

    Insights for further modeling

---

---

## Task 2: Change Point Modeling and Insight Generation

**Objective:**  
Identify structural breaks in Brent oil prices using Bayesian Change Point Analysis and quantify impacts of major events.

**Contents:**

- `notebooks/point_modelling_and_insight_generation.ipynb` – Jupyter notebook with full analysis.
- `data/raw/BrentOilPrices.csv` – Brent oil prices dataset.
- `data/events/events.csv` – Key geopolitical and economic events.

**Analysis Steps:**

1. Load and clean Brent oil price data.
2. Calculate log returns and visualize volatility.
3. Build a Bayesian Change Point Model using PyMC.
4. Detect change points and associate them with key events.
5. Quantify before/after impacts on prices.
6. Visualize posterior distributions, change points, and event impacts.

**Deliverables:**

- Interactive notebook with results.
- Visualizations of change points and event impacts.
- Quantitative interpretation of structural breaks.

**Dependencies:**  
`pandas`, `numpy`, `matplotlib`, `pymc`, `arviz`, `statsmodels`

---
