# # Pytorch

This is the notes and tricks for pytorch.


## to() 

When calling `to()` on tensors, it is not directly moving the original tensor to the specified device. Instead, it will move the copy of the tensor to the device and return the new tensor.

If you want the original tensor to be moved to the device, you should do 
```python
x = x.to(device)
```

However, if you want to move a model to a device, you can just do
```python
model.to(device)
```

## DDP

For the gradients to correctly flow during training, we should only call the model's forward method instead of some other defined methods.

## torch.cuda.set_device()


When you're working with PyTorch and CUDA, setting the environment variable `CUDA_VISIBLE_DEVICES` will define which GPUs are available for PyTorch to use. However, it's important to note that this variable accepts a comma-separated list of device indices which PyTorch should remap to logically.

So if you have, for example, four GPUs in your system (indices 0, 1, 2, 3) and you set `CUDA_VISIBLE_DEVICES=2`, PyTorch will then only see one GPU, and it will be remapped to index 0 when accessed from PyTorch (not index 2).

Here's how you would set it and use `torch.cuda.set_device` in Python:

```python
import os import torch  # Make only GPU with original index 2 available to PyTorch 
os.environ["CUDA_VISIBLE_DEVICES"] = "2"  # Since CUDA_VISIBLE_DEVICES is set to '2', PyTorch will see this as device '0' 
torch.cuda.set_device(0) ## Not 2
```

Remember, `torch.cuda.set_device` expects the logical device index, which means that, after setting `CUDA_VISIBLE_DEVICES`, the visible devices will start from zero regardless of their actual hardware indices.

So in your case, if setting `os.environ['CUDA_VISIBLE_DEVICES'] = '2'` and then calling `torch.cuda.set_device(2)` results in a device error, that's likely because you've changed what device "2" actually refers to. In reality, after setting `CUDA_VISIBLE_DEVICES`, the device you're trying to access is probably at index "0".

You should do the following:

```python

import os
import torch

os.environ['CUDA_VISIBLE_DEVICES'] = '2'  # Now there's only one GPU visible to the process.
torch.cuda.set_device(0)  # This refers to the single visible GPU, which is the original device 2.
```



Run these snippets before executing other PyTorch code that works with CUDA, as changing `CUDA_VISIBLE_DEVICES` after CUDA context has been initialized may not have an effect.