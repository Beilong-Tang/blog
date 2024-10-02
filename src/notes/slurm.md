# Slurm

To run single task using 4 gpus:
```shell
#!/bin/bash
#SBATCH -J train_test
#SBATCH -n 32
#SBATCH -N 1
#SBATCH --gres=dcu:4
#SBATCH -p kshdnormal02
python ... # The command to run
```
Note that no `srun` before the command

To run 8 tasks on a single node, you can run 
```shell
#!/bin/bash
#SBATCH -J train_test
#SBATCH --ntasks-per-node=8
#SBATCH -N 1
#SBATCH --cpus-per-task=2
#SBATCH --gres=dcu:4
#SBATCH -p kshdnormal
srun python test.py
```