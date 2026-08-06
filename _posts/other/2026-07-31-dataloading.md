---
title: Dataloader for dict returned from Dataset
tag: Pytorch
---

## PyTorch `DataLoader` Automatically Collates Dictionaries

Suppose each sample returned by a dataset is:

```python
(image0, {"y": 0})
(image1, {"y": 1})
(image2, {"y": 2})
```

After batching with the default `DataLoader` (`batch_size=3`), the output becomes:

```python
images, cond = next(iter(loader))

images.shape
# torch.Size([3, C, H, W])

cond
# {"y": tensor([0, 1, 2])}
```

If each sample instead returns an empty dictionary:

```python
(image0, {})
(image1, {})
(image2, {})
```

then the batched output is:

```python
images, cond = next(iter(loader))

images.shape
# torch.Size([3, C, H, W])

cond
# {}
```

This works because PyTorch's default `DataLoader` uses `default_collate`, which **recursively collates dictionaries by key**. For every key in the dictionary, it gathers the corresponding values from all samples in the batch and collates them (typically by stacking them into a tensor). If the dictionaries are empty, there are no keys to collate, so the result is simply an empty dictionary.

This behavior makes dictionaries a convenient way to pass conditional information (e.g., class labels, text embeddings, masks, or other metadata) alongside the input data without writing a custom `collate_fn`.