---
title: "Stain Normalization"
description: "A specialized tool for standardizing medical histology images. It removes color inconsistencies caused by different lab environments, ensuring AI diagnostic models remain accurate and reliable."
importance: 3
tags: ["Reinhard", "OpenCV", "Digital_Pathology", "PyTest"]
metrics:
  - label: "Latency"
    value: "<10ms"
  - label: "Test_Cov"
    value: "100%"
codeSnippet:
  filename: "reinhard.py"
  code: |
    def normalize(src: np.ndarray, target: np.ndarray) -> np.ndarray:
        # chroma/luma keying for tissue masking
        mask = get_tissue_mask(src)
        
        # statistical matching in Lab space
        src_lab = cv2.cvtColor(src, cv2.COLOR_BGR2LAB)
        res = (src_lab - src_mu) * (tgt_sigma / src_sigma) + tgt_mu
        
        # Luma preservation and re-composition
        return cv2.cvtColor(res.astype(np.uint8), cv2.COLOR_LAB2BGR)
githubUrl: "https://github.com/Steph-The-Dev/stain-normalization-project"
imageUrl: "../../assets/Stain-Normalization.png"
reportId: "SPEC_LAB_NORM_01"
techStack:
  engine: ["OpenCV", "NumPy", "CIELAB Physics"]
  engineering: ["PyTest", "Modular Architecture", "Reproducibility"]
  delivery: ["Streamlit", "Digital Pathology", "WSI"]
---
