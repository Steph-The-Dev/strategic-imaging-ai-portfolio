---
title: "Surface Defect Detection"
description: "Automated quality inspection tool for metallic surfaces. Utilizes an object-oriented vision pipeline with swappable thresholding strategies to handle complex reflections and uneven lighting."
importance: 1
tags: ["Strategy_Pattern", "Morphology", "Adaptive_Thresh", "Mypy"]
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
---
