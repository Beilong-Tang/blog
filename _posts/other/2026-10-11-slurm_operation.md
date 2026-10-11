---
title: Slurm operation
tag: Slurm
---

```sh
# slurm submit another job after a currently running job is done
# 
# <job_id>: the id of the currently running job 
sbatch --dependency=afterany:<job_id> scripts/train.sh
```
