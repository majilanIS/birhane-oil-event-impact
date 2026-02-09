import pandas as pd
import os


BASE_DIR = os.path.dirname(os.path.abspath(__file__))

PRICE_PATH = os.path.join(BASE_DIR, "../../data/raw/BrentOilPrices.csv")
EVENT_PATH = os.path.join(BASE_DIR, "../../data/events/events.csv")

# -------------------------------
# Load Prices
# -------------------------------
def load_prices():
    df = pd.read_csv(PRICE_PATH, parse_dates=["Date"])
    df = df.sort_values("Date").reset_index(drop=True)

    df["Return"] = df["Price"].pct_change()
    df["Volatility"] = df["Return"].rolling(20).std()

    df = df.dropna()
    return df

# -------------------------------
# Load Events
# -------------------------------
def load_events():
    events = pd.read_csv(EVENT_PATH, parse_dates=["Date"])
    events = events.sort_values("Date").reset_index(drop=True)
    return events

# -------------------------------
# Event Impact
# -------------------------------
def get_event_impact(window=5):
    prices = load_prices()
    events = load_events()

    results = []

    for _, event in events.iterrows():
        d = event["Date"]

        before_mask = (
            (prices["Date"] >= d - pd.Timedelta(days=window)) &
            (prices["Date"] < d)
        )

        after_mask = (
            (prices["Date"] > d) &
            (prices["Date"] <= d + pd.Timedelta(days=window))
        )

        before_mean = prices.loc[before_mask, "Price"].mean()
        after_mean = prices.loc[after_mask, "Price"].mean()

        impact_pct = None
        if pd.notna(before_mean) and pd.notna(after_mean):
            impact_pct = ((after_mean - before_mean) / before_mean) * 100

        results.append({
            "date": d.strftime("%Y-%m-%d"),
            "event": event["Event"],
            "before_mean": float(before_mean) if pd.notna(before_mean) else None,
            "after_mean": float(after_mean) if pd.notna(after_mean) else None,
            "impact_pct": float(impact_pct) if impact_pct is not None else None
        })

    return results
