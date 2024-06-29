# Pytorch

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