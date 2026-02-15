from src.config import ModelConfig

def test_model_config_creation():
    config = ModelConfig(
        random_seed=42,
        test_size=0.2,
        n_samples=1000,
        burn_in=200
    )

    assert config.random_seed == 42
    assert config.test_size == 0.2