from flask import Blueprint, jsonify, request
from services import load_prices, load_events, get_event_impact
import pandas as pd

api = Blueprint("api", __name__)

# -------------------------------
# Home / Health
# -------------------------------
@api.route("/")
def home():
    return jsonify({
        "message": "Birhane Oil Dashboard API Running",
        "status": "ok"
    })


# -------------------------------
# Prices Endpoint
# -------------------------------
@api.route("/prices")
def prices():
    df = load_prices()

    start = request.args.get("start")
    end = request.args.get("end")

    if start:
        start = pd.to_datetime(start)
        df = df[df["Date"] >= start]

    if end:
        end = pd.to_datetime(end)
        df = df[df["Date"] <= end]

    return jsonify(df.to_dict(orient="records"))


# -------------------------------
# Returns & Volatility
# -------------------------------
@api.route("/returns")
def returns():
    df = load_prices()

    if "Return" not in df.columns:
        df["Return"] = df["Price"].pct_change()
        df["Volatility"] = df["Return"].rolling(20).std()

    return jsonify(
        df[["Date", "Return", "Volatility"]]
        .dropna()
        .to_dict(orient="records")
    )


# -------------------------------
# Events
# -------------------------------
@api.route("/events")
def events():
    df = load_events()
    return jsonify(df.to_dict(orient="records"))


# -------------------------------
# Event Impact
# -------------------------------
@api.route("/event-impact")
def event_impact():
    window = int(request.args.get("window", 5))
    data = get_event_impact(window)
    return jsonify(data)
