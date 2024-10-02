# Linux Command

> This page denotes the commonly used linux commands

## unzip a file 

```shell
unzip example.zip -d /home/user/destination
```

## untar .tar.gz

```shell
tar -xzvf filename.tar.gz -C /path/to/output/directory
```

## untar .tar
```shell
mkdir output
tar -xvf x.tar -C output
```

## Count all files under a folder

```shell
find . -type f | wc -l
```

## zip a file 

```shell
```


## tar a file 

```shell
tar -czvf archive_name.tar.gz /path/to/folder
```
## Untar (extract) a file 
```shell
tar -xzvf archive_name.tar.gz
```
## Run commands in multiple lines

Example:

```shell
sbatch -J ${JOB_NAME} -p ${card} -e ${log_path}/${current_datetime}.err -o ${log_path}/${current_datetime}.out -N ${num_nodes} --cpus-per-task=${cpus_per_task} \
  --gres=dcu:${gpus_per_node} --ntasks-per-node=${ntasks_per_node} \
  --exclusive \
```

We can use `\` to seperate

wer   /public/home/qinxy/bltang/ml_framework_slurm/exp/dasb/target/wavlm_6_layer/output/wsj0_2mix/trans_output.txt

## Restart bluetooth
```shell
sudo systemctl status bluetooth
```