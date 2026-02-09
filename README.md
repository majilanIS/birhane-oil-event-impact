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

**_Task 3: Interactive Dashboard & Event Impact Visualization_**

Objective:
Create a full-stack interactive dashboard to visualize Brent oil prices, returns, volatility, and quantify the impact of major geopolitical and economic events. Users can filter by date and analyze event impacts dynamically.

**_1️⃣ Backend (Flask API) – Task 3_**

Goal: Serve data for dashboard charts and allow filtering.

Steps:

**Extend API endpoints:**

/prices?start=YYYY-MM-DD&end=YYYY-MM-DD → filtered price data.

/returns → log returns & rolling volatility.

/events?start=YYYY-MM-DD&end=YYYY-MM-DD → filtered events.

/event-impact?window=5 → quantify impact of events on prices.

**Testing:**

Test endpoints using Postman or browser.

Validate responses for filtered queries.

**2️⃣ Frontend (React Dashboard) – Task 3**

Goal: Display interactive charts with filters, events, and impact metrics.

Steps:

**App Structure:**

App.jsx → main layout with Filters + PriceChart + EventImpactChart.

Filters.jsx → select start/end date, passes values to charts.

PriceChart.jsx → line chart of prices, rolling volatility, MA lines, event markers.

EventImpactChart.jsx → bar chart showing event impact (%) for a sliding window.

**Features:**

Dynamic Filtering: User selects date range → PriceChart updates.

Event Markers: Highlight major events as vertical lines with labels.

Responsive Design: Works on desktop and mobile using your CSS.

Loading / Empty States: Display messages when data is fetching or empty.

**Data Handling:**

Fetch data from backend using axios.

Map API data (e.g., format dates to local readable strings).

Use React state (useState) and useEffect for dynamic updates.

**_3️⃣ Deliverables for Task 3_**

**Backend:**

Fully functional Flask API serving price, event, returns, and impact data.

Filtered queries based on date ranges.

Optional endpoints for MA30, MA100, cumulative returns.

**Frontend:**

**Interactive React dashboard:**
Price line chart with events.
Event impact bar chart.
Filters to select date ranges.
Loading and empty states handled gracefully.
Responsive and visually consistent with CSS.
