---
title: "Stain Normalization"
description: "A specialized digital pathology tool for standardizing medical histology images. By applying color normalization methods such as Reinhard, Macenko and CUT, it reduces color variation across labs and scanners, a key factor for the robustness of AI models in pathology."
limitations: "Research and demonstration tool; not clinically validated for diagnostic workflows. Cross-domain evaluation across diverse scanner profiles is currently ongoing."
imageAlt: "Digital pathology stain normalization comparison showing raw histology vs normalized tissue patch"
importance: 3
tags: ["Reinhard", "Macenko", "CUT", "Digital_Pathology", "PyTest"]
keywords: ["Digital Pathology", "Histology Image Standardization", "Medical AI", "Color Normalization", "Computer Vision Pathology"]
metrics:
  - label: "Methods"
    value: "3"
  - label: "Eval"
    value: "SSIM · PSNR · ΔLab"
codeSnippet:
  filename: "src/normalizers/reinhard.py"
  code: |
    class ReinhardNormalizer(BaseStainNormalizer):
        def fit(self, target_image: np.ndarray) -> "ReinhardNormalizer":
            target_lab = cv2.cvtColor(target_image, cv2.COLOR_BGR2LAB).astype(np.float32)
            mask = self._mask(target_image)
            self.target_mean, self.target_std = get_mean_std_masked(target_lab, mask=mask)
            self.is_fitted = True
            return self

        def transform(self, source_image: np.ndarray) -> np.ndarray:
            if not self.is_fitted:
                raise RuntimeError("Normalizer must be fit before transform()")
            src_lab = cv2.cvtColor(source_image, cv2.COLOR_BGR2LAB).astype(np.float32)
            mask = self._mask(source_image)
            src_mean, src_std = get_mean_std_masked(src_lab, mask=mask)
            return _apply_reinhard_stats(
                src_lab, src_mean, src_std, self.target_mean, self.target_std, mask=mask
            )
githubUrl: "https://github.com/Steph-The-Dev/stain-normalization-project"
liveUrl: "https://stain-normalization-pro.streamlit.app/"
imageUrl: "../../assets/Stain-Normalization.png"
reportId: "SPEC_LAB_NORM_01"
techStack:
  engine: ["OpenCV", "NumPy", "CIELAB", "Optical Density / SVD", "PyTorch"]
  engineering: ["PyTest", "GitHub Actions CI", "Modular Architecture", "Reproducibility"]
  delivery: ["Streamlit", "Digital Pathology", "WSI"]
---
