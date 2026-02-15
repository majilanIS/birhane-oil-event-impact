import sys
import os

# Project root
ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

# Add project root to Python path
sys.path.insert(0, ROOT_DIR)

# Add src and scripts folders
sys.path.insert(0, os.path.join(ROOT_DIR, "src"))
sys.path.insert(0, os.path.join(ROOT_DIR, "scripts"))
