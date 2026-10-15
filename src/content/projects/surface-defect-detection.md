---
title: "Surface Defect Detection"
description: "An automated quality-control tool for industrial metal surfaces. Employs classical computer vision (adaptive thresholding and morphological filtering) in a modular strategy pattern—a deliberate, explainable, and low-latency architecture designed for robust inspection under non-uniform illumination."
importance: 1
tags: ["Strategy_Pattern", "Morphology", "Adaptive_Thresh", "Mypy"]
keywords: ["Industrial Quality Control", "Computer Vision Inspection", "Automated Defect Detection", "Surface Inspection AI", "Anomaly Detection"]
# TODO(owner): Replace qualitative labels with measured benchmark results (FPS on CPU/edge device, dataset accuracy/recall)
metrics:
  - label: "Architecture"
    value: "Strategy Pattern"
  - label: "Target"
    value: "Low-Latency CPU"
codeSnippet:
  filename: "pipeline.py (excerpt)"
  code: |
    class InspectionPipeline:
        def __init__(self, strategy: ThresholdStrategy, kernel_size: int = 5):
            self.strategy = strategy
            self.kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (kernel_size, kernel_size))

        def process(self, image: np.ndarray) -> list[DefectContour]:
            binary = self.strategy.apply(image)
            cleaned = cv2.morphologyEx(binary, cv2.MORPH_OPEN, self.kernel)
            contours, _ = cv2.findContours(cleaned, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
            return [DefectContour(c) for c in contours if cv2.contourArea(c) > 20]
githubUrl: "https://github.com/Steph-The-Dev/surface-defect-detection"
imageUrl: "../../assets/Surface-Defect-Detection.png"
reportId: "SURFACE_QC_LOG"
techStack:
  engine: ["OpenCV", "NumPy", "Morphology"]
  engineering: ["Mypy (Strict)", "Strategy Pattern", "Ruff"]
  # TODO(owner): Provide liveUrl if a Streamlit/web demo is deployed
  delivery: ["Edge Inspection", "Modular CLI", "Makefile Automation"]
---
