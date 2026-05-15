---
title: "Surface Defect Detection"
description: "An automated quality control tool for industrial metal surfaces using advanced computer vision. The system employs adaptive thresholding and morphological filtering to detect surface flaws in real-time, optimized for complex reflections and difficult industrial lighting conditions."
importance: 1
tags: ["Strategy_Pattern", "Morphology", "Adaptive_Thresh", "Mypy"]
keywords: ["Industrial Quality Control", "Computer Vision Inspection", "Automated Defect Detection", "Surface Inspection AI", "Real-time Anomaly Detection"]
metrics:
  - label: "Processing"
    value: "Real-time"
  - label: "Type_Safety"
    value: "Strict"
codeSnippet:
  filename: "vision.py"
  code: |
    class InspectionPipeline:
        def __init__(self, strategy: ThresholdStrategy):
            self.strategy = strategy

        def process(self, image: np.ndarray) -> List[Anomaly]:
            # Pipeline: Grayscale -> Strategy -> Morphological cleaning
            binary = self.strategy.apply(image)
            cleaned = cv2.morphologyEx(binary, cv2.MORPH_OPEN, kernel)
            return find_contours(cleaned)
githubUrl: "https://github.com/Steph-The-Dev/surface-defect-detection"
imageUrl: "../../assets/Surface-Defect-Detection.png"
reportId: "SURFACE_QC_LOG"
techStack:
  engine: ["OpenCV", "NumPy", "Morphology"]
  engineering: ["Mypy (Strict)", "Strategy Pattern", "Ruff"]
  delivery: ["Streamlit PoC", "Real-time Inspection", "Makefile Automation"]
---
