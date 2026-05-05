---
title: "Solar ESG Pipeline"
description: "End-to-end cloud-native ML pipeline for automated building footprint extraction from multi-spectral Sentinel-2 satellite imagery. Bridging the gap between raw optical physics and actionable ESG strategy."
importance: 3
tags: ["Sentinel-2", "PyTorch", "Geospatial", "Pydantic_V2"]
metrics:
  - label: "Data_Handling"
    value: "Lazy-Load"
  - label: "Validation"
    value: "Strict"
codeSnippet:
  filename: "dataset.py"
  code: |
    class Sentinel2Dataset(Dataset):
        def __init__(self, df: pd.DataFrame):
            # Lazy-loading window logic for large GeoTIFFs
            self.src = rasterio.open(path)
            
        def __getitem__(self, idx):
            # On-the-fly window reading to prevent memory overflow
            window = get_window(self.coords[idx])
            img = self.src.read(window=window)
            return torch.from_numpy(img).float()
githubUrl: "https://github.com/Steph-The-Dev/solar-esg-pipeline"
imageUrl: "/hero_geometry.png"
reportId: "PIPELINE_SYS_S2"
---
