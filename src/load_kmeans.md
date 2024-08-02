# Load Kmeans

```python
import os 
import sys 
import pickle
import joblib
import torch
from sklearn.cluster import MiniBatchKMeans
sys.path.append("../") 
from models.modules.kmeans import KMeansQuantizer as Kmeans
```


```python
### load kmeans model
kmeans_ckpt = "/home/bltang/work/test/kmeans_4096_batch_size_16.pkl"
def load_dict(file_path):
    with open(file_path, "rb") as file:
        return pickle.load(file)
res = load_dict(kmeans_ckpt)
```

    /home/bltang/.local/lib/python3.8/site-packages/sklearn/base.py:348: InconsistentVersionWarning: Trying to unpickle estimator MiniBatchKMeans from version 1.5.1 when using version 1.3.2. This might lead to breaking code or invalid results. Use at your own risk. For more info please refer to:
    https://scikit-learn.org/stable/model_persistence.html#security-maintainability-limitations
      warnings.warn(



```python
for key in res:
    print(key)
```

    resume
    step
    feature_list
    kmeans



```python
kmeans_model:MiniBatchKMeans = res["kmeans"]
joblib.dump(kmeans_model, "/home/bltang/work/wavlm_kmeans_backend/ckpt/kmeans_gigaspeech_4096.pt")
```




    ['/home/bltang/work/wavlm_kmeans_backend/ckpt/kmeans_gigaspeech_4096.pt']




```python
kmeans_pytorch = Kmeans("/home/bltang/work/wavlm_kmeans_backend/ckpt/kmeans_gigaspeech_4096.pt")
```

## Test


```python
x = torch.randint(0,4096, (2, 30)).long()
print(x)
kmeans_pytorch.emb(x)
```

    tensor([[1418, 1143,  728, 3682, 2837,  299, 2354, 1865,  156,  830,  409,  892,
             3274, 3682,  872,  510, 3785, 3780, 3297, 1187, 1234, 2075,  616, 2053,
             1168,  635,  320, 1091,  738, 2829],
            [ 158,  830, 4059, 3800, 1810, 2425, 3992, 1535, 3935, 1102,  297, 1540,
             2149, 2414, 1222, 3968, 3072, 3858, 1115,  701, 2100, 2951, 1291, 3721,
             1296, 2966,  960, 2327, 2188, 1239]])





    tensor([[[ 3.4845,  0.5973, -0.2941,  ...,  1.8850, -3.3292, -3.1918],
             [-0.9843, -1.8948,  0.1781,  ...,  1.0470, -2.2949, -3.0003],
             [-2.4003, -0.3012,  2.5385,  ...,  0.2260, -0.4540, -0.7819],
             ...,
             [ 1.5334, -1.6515,  0.1410,  ...,  0.8672, -1.2393, -0.5327],
             [ 1.1343, -0.0071,  0.2196,  ...,  1.9066, -3.0079, -2.2519],
             [-0.8302,  0.0227,  2.9222,  ..., -0.1998,  0.5812, -1.3175]],
    
            [[ 0.5794,  0.3916,  3.1679,  ..., -0.7281, -0.7220, -0.4178],
             [-0.6731, -1.0334,  2.3820,  ...,  2.1921, -1.0713, -0.1829],
             [-1.8742, -3.6283, -0.3614,  ...,  1.6077, -1.6078, -2.0266],
             ...,
             [-0.5319, -0.7900,  2.3659,  ..., -1.6811, -1.6981, -2.6017],
             [ 3.1977, -3.8897,  0.7760,  ..., -1.5524,  2.8854, -2.0698],
             [ 0.0547, -0.4102,  2.9803,  ...,  0.2289, -0.3999, -1.0432]]])


