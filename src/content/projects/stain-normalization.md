---
title: "Stain Normalization"
description: "A specialized digital pathology tool for standardizing medical histology images. By applying color normalization methods such as Reinhard, Macenko and CUT, it reduces color variation across labs and scanners, a key factor for the robustness of AI models in pathology."
importance: 3
tags: ["Reinhard", "OpenCV", "Digital_Pathology", "PyTest"]
keywords: ["Digital Pathology", "Histology Image Standardization", "Medical AI", "Color Normalization", "Computer Vision Pathology"]
metrics:
  - label: "Methods"
    value: "3"
  - label: "Eval"
    value: "SSIM · PSNR · ΔLab"
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
liveUrl: "https://stain-normalization-pro.streamlit.app/"
imageUrl: "../../assets/Stain-Normalization.png"
reportId: "SPEC_LAB_NORM_01"
techStack:
  engine: ["OpenCV", "NumPy", "CIELAB Physics"]
  engineering: ["PyTest", "Modular Architecture", "Reproducibility"]
  delivery: ["Streamlit", "Digital Pathology", "WSI"]
---
