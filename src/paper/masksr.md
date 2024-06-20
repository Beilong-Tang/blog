# MaskSR

Publication Date: 4 June 2024, [_link_](https://arxiv.org/abs/2406.02092)


## Distorted Speech Encoder:

using STFT with window_size:

```python
import torch

audio = torch.randn(1, 3 * 44100) # 3 seconds with sample rate 44.1kHz

y = torch.stft(audio, 2048, 512, return_complex = True)

print(y.shape) # [F, T] 

w = torch.abs(y) # [F, T]

w = w.pow(0.3) # X_0.3 compressed power spectrogram with shape [F,T]

print(w.shape)

```




