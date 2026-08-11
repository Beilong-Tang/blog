---
title: Reverse SDE
project: polar
---

Some ideas for the paper


## Improved-diffusion Imagenet64
schedule: cosine; T: 4000; 

Baseline FID: 22.45

Ours (DDPM sample): 


## Indepdenet Flow Matching

$$
\begin{equation}
r_t = (1-t)r_0 + tr_1\quad \text{where} \quad r_1 \sim N(0,1)
\end{equation}
$$

$$
\begin{equation}
x_t = SLERP(x_0, x_1, t) \quad \text{where} \quad x_1 \sim N(0,1)
\end{equation}
$$


### r_1, x_1 from same y_1

Training algorithm
- Sample t $\in [0,1]$ 
- Sample $y_0$ from data and get $x_0$, $r_0$. 
- Sample $y_1$ from Gaussian and get $x_1$, $r_1$
- Calculate $x_t$, $r_t$.
- Get $v^r_t$ from $dr_t/dt$ and $v^x_t$ from $dx_t/dt$
- L = $$w_x \|v_\theta^x(x_t, r_t, t) -v^x_t\|^2_2+w_r\|v_\theta^r(x_t, r_t, t) -v^r_t\|^2_2$$

Sampling algorithm
- Sample $y_1$ from Gaussian
- Get $x_1$, $r_1$ from $y_1$
- $\Delta = 1 / T$
- For $t = T, T-1, \dots, 1$
    - $x_{t-1} = Exp_{x_t}(-v_\theta^x(x_t, r_t, t)\Delta)$
    - $r_{t-1} = r_t - v_\theta^r(x_t, r_t, t)\Delta$
- $y_0 = r_0x_0$


### r_1, x_1 from different y_1. r_1 is a normal distribution, x_1 is also a normal distribution

Training algorithm
- Sample t $\in [0,1]$ 
- Sample $y_0$ from data and get $x_0$, $r_0$. 
- Sample $x_1$ from Unif(S) and $r_1$ from Gaussian.
- Calculate $x_t$, $r_t$.
- Get $v^r_t$ from $dr_t/dt$ and $v^x_t$ from $dx_t/dt$
- L = $$w_x \|v_\theta^x(x_t, r_t, t) -v^x_t\|^2_2+w_r\|v_\theta^r(x_t, r_t, t) -v^r_t\|^2_2$$

Sampling algorithm
- Sample $x_1$ from Unif(S) and $r_1$ from Gaussian.
- $\Delta = 1 / T$
- For $t = T, T-1, \dots, 1$
    - $x_{t-1} = Exp_{x_t}(-v_\theta^x(x_t, r_t, t)\Delta)$
    - $r_{t-1} = r_t - v_\theta^r(x_t, r_t, t)\Delta$
- $y_0 = r_0x_0$