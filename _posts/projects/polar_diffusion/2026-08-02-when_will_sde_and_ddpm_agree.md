---
title: When will SDE and DDPM agree
project: polar
---

For DDPM with $T$ time total diffusion steps, people define

$$
\begin{equation}
q(x_t|x_{t-1})
=
\mathcal N
\left(
\sqrt{1-\beta_t}\,x_{t-1},
\beta_t I
\right).
\label{eq:forward}
\end{equation}
$$

Test
