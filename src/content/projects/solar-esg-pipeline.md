---
title: "Solar ESG Pipeline"
description: "A cloud-based machine learning pipeline that automatically identifies building footprints from satellite data. This system leverages Sentinel-2 geospatial imagery and high-precision computer vision to convert multi-spectral data into actionable insights for sustainability monitoring and ESG reporting."
importance: 2
tags: ["Sentinel-2", "PyTorch", "Geospatial", "Pydantic_V2"]
keywords: ["Satellite Imagery", "Remote Sensing", "Sustainability Monitoring", "Machine Learning Pipelines", "Sentinel-2", "Building Footprint Identification", "ESG Data Science"]
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
liveUrl: "https://stephan-pfeiffer-solar-poc.streamlit.app/"
imageUrl: "../../assets/Solar-ESG-Pipeline.png"
reportId: "PIPELINE_SYS_S2"
techStack:
  engine: ["PyTorch", "Rasterio", "Albumentations"]
  engineering: ["Pydantic V2", "GitHub Actions", "Mamba"]
  delivery: ["Streamlit", "Cloud-Native", "GeoTIFF", "OSMnx"]
---
