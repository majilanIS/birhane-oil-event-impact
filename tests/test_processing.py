# tests/test_model.py

import pandas as pd
from scripts.train_model import train_model

def test_train_model_returns_model():
    df = pd.DataFrame({
        "feature1": [1, 2, 3, 4],
        "target": [10, 20, 30, 40]
    })

    model = train_model(df)

    assert model is not None


def test_model_has_predict_method():
    df = pd.DataFrame({
        "feature1": [1, 2, 3, 4],
        "target": [10, 20, 30, 40]
    })

    model = train_model(df)

    assert hasattr(model, "predict")
