# Noise RIR

To create a audio with reverberation:
- get the RIR, resample it to the audio frame rate
- convolve the audio with the rir

Sample code:

```python
import numpy as np 
import scipy.signal as s
import torchaudio
import torch
import torchaudio.transforms as T
def reverb_rir(frames,rir):
        """
        frames is the clean audio numpy with shape [1, T]
        rir is the rir numpy with shape [1, T']
        returns: reverberated audio with shape [T'] (numpy)
        """
        orig_frames_shape = frames.shape
        frames,filter = np.squeeze(frames),np.squeeze(rir)
        frames = s.convolve(frames,filter)
        actlev = np.max(np.abs(frames))
        if(actlev > 0.99):
            frames = (frames / actlev) * 0.98
        frames = frames[:orig_frames_shape[1]]
        # print(frames.shape, orig_frames_shape)
        return frames

rir_impulse = "/home/bltang/work/data/impulse/datasets_fullband/impulse_responses/SLR26/simulated_rirs_48k/largeroom/Room002/Room002-00001.wav"
## 48khz

frame_path = "/home/bltang/work/voicefixer_main/test/clean/SSB00050001.wav"
## 44.1khz 
frame, frame_rate = torchaudio.load(frame_path)

rir, rir_rate = torchaudio.load(rir_impulse)

print(f"loaded audio frame: {frame.shape}, sample rate: {frame_rate}")
print(f"loaded rir: {rir.shape}, sample rate: {rir_rate}")

## downsample the rir to be 44.1khz
resampler = T.Resample(rir_rate, frame_rate, dtype=frame.dtype)
rir = resampler(rir)

frame = frame.numpy()
rir = rir.numpy()

## doing the convolution
output = reverb_rir(frame,rir)

output = torch.from_numpy(output).unsqueeze(0)
torchaudio.save("output.wav",output, frame_rate)
```

## perform clipping:

```python
### perform clipping
clip_factor = 0.1
z = torch.clamp(output,min = output.min() * clip_factor, max = output.max() * clip_factor)
print(z.min())
torchaudio.save("clamp.wav",z, frame_rate)
```