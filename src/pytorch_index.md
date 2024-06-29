# Pytorch Index

This post really helps: 

![here](https://zhuanlan.zhihu.com/p/471313188)


Let's assume we have tensor `A` of shape [B, H, C], there are two ways to select the index of the batch.

1. A[tensor]


2. A[tensor, tensor, ...]

This one will collect all the indexes across tensors at the same position, and use that as the index.

For example:

```python
t = torch.tensor([[1, 2], [3, 4]])
w = -t 
A = torch.cat((t.unsqueeze(0), w.unsqueeze(0))) # [2, 2, 2]
"""
A:
tensor([[[ 1,  2],
         [ 3,  4]],

        [[-1, -2],
         [-3, -4]]])
"""
batch = torch.LongTensor([[0,0],[1,1]]) # [2,2]
row = torch.LongTensor([[0,1],[1,1]])   # [2,2]
col = torch.LongTensor([[1,0],[1,0]])   # [2,2]
res = A[batch, row, col]
"""
tensor([[ 2,  3],
        [-4, -3]])
"""
```
