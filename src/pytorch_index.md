# Pytorch Index

This post really helps: 

![here](https://zhuanlan.zhihu.com/p/471313188)


Let's assume we have tensor `A` of shape [B, H, C], there are two ways to select the index of the batch.

1. A[tensor]


2. A[tensor, tensor, ...]

This one will collect all the indexes across tensors at the same position, and use that as the index.


