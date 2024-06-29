# Pytorch Index

This post really helps: 

[here](https://zhuanlan.zhihu.com/p/471313188)


Let's assume we have tensor `A` of shape [B, H, C], the basic way to select the index of the batch is:

## A[tensor, tensor, ...]

This one will collect all the indexes across tensors at the same position, and use that as the index.

For example:

```python
## creating A
t = torch.tensor([[1, 2], [3, 4]])
w = -t 
###
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

In the above code, the index is `(0,0,1) (0,1,0) (1,1,1) (1 1 0)`

The result is `[[A[0,0,1],A[0,1,0]],[A[1,1,1],A[1,1,0]]]`

## A[tensor]
Assume we only have one tensor as indexing tensor.

As the example above, we only use the `batch` tensor to index `A`, therefore
we will have a result tensor of shape `2,2,2,2`
```python
A[batch]
"""
torch.Size([2, 2, 2, 2])
"""
```
The principle is simple, for each element in the index, we take the corresponding element in A.
Each element in A has shape `[2,2]`
