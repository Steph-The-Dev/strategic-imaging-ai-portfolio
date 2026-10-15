---
title: "Solar ESG Pipeline"
description: "A cloud-based machine learning pipeline for built-up area and roof footprint segmentation from multi-spectral Sentinel-2 imagery (10 m resolution) using a U-Net architecture. Developed as a proof of concept for the Basel urban area to explore automated ESG and solar-potential reporting."
importance: 2
tags: ["Sentinel-2", "PyTorch", "Geospatial", "Pydantic_V2"]
keywords: ["Satellite Imagery", "Remote Sensing", "Sustainability Monitoring", "Machine Learning Pipelines", "Sentinel-2", "Building Footprint Identification", "ESG Data Science"]
# TODO(owner): Replace qualitative labels with measured validation metrics (IoU, F1 score, reference dataset, area/tiles)
metrics:
  - label: "Resolution"
    value: "10m / Band"
  - label: "Coverage"
    value: "Basel Region"
codeSnippet:
  filename: "dataset.py (excerpt)"
  code: |
    class Sentinel2Dataset(Dataset):
        def __init__(self, tiff_path: Path, coordinates: list[tuple[float, float]]):
            self.tiff_path = tiff_path
            self.coordinates = coordinates
            self.src = rasterio.open(self.tiff_path)
            
        def __getitem__(self, idx: int) -> torch.Tensor:
            window = get_bounding_window(self.coordinates[idx], size=64)
            bands = self.src.read([2, 3, 4, 8], window=window)
            return torch.from_numpy(bands).float()
githubUrl: "https://github.com/Steph-The-Dev/solar-esg-pipeline"
liveUrl: "https://stephan-pfeiffer-solar-poc.streamlit.app/"
imageUrl: "../../assets/Solar-ESG-Pipeline.png"
reportId: "PIPELINE_SYS_S2"
techStack:
  engine: ["PyTorch", "Rasterio", "Albumentations"]
  engineering: ["Pydantic V2", "GitHub Actions", "Mamba"]
  delivery: ["Streamlit", "Cloud-Native", "GeoTIFF", "OSMnx"]
---
