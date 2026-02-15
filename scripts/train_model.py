# scripts/train_model.py

from typing import Any
import pandas as pd
from sklearn.linear_model import LinearRegression

def train_model(df: pd.DataFrame) -> Any:
    """
    Train a simple linear regression model.

    Args:
        df (pd.DataFrame): Input data containing features and target.

    Returns:
        Trained model object.
    """
    X = df[["feature1"]]
    y = df["target"]

    model = LinearRegression()
    model.fit(X, y)

    return model