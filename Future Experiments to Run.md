- [x] 实验结束了重新跑一下指标，用 aux_s1 跑一下encoder only
- [x]   跑Encoder Only 不拼注册语音试试看

Decoder only 6层码本跑起来
- [ ] First 3 seconds
- Mix, Register 都离散

- [x] Decoder Only 1层码本测试一下指标

试试看masking

推理1层码本（mix_continuous, mix_discrete)

重新推理一下 conformer 然后算一下spk sim 用 ckpt 60k的conformer








word error rate:
- true transcript: 
/public/home/qinxy/bltang/ml_framework_slurm/exp/dasb/target/wavlm/output/no_share_emb/libri2mix_dev/transcript_true.txt
- discrete one:
/public/home/qinxy/bltang/ml_framework_slurm/exp/dasb/target/wavlm/output/no_share_emb/libri2mix_dev/transcript_discrete.txt

- wavlm true codec audio
/public/home/qinxy/bltang/ml_framework_slurm/exp/dasb/target/wavlm/output/no_share_emb/libri2mix_dev/clean_audio
- hubert true codec audio
/public/home/qinxy/bltang/ml_framework_slurm/exp/dasb/target/hubert/output/libri2mix_dev/clean_audio

Target Speaker Separation using Discrete Tokens and Language Models

TSSLM

python recipes/whisper/main.py -t /public/home/qinxy/bltang/ml_framework_slurm/exp/dasb/target/hubert/output/libri2mix_dev/clean_audio -o /public/home/qinxy/bltang/ml_framework_slurm/exp/dasb/target/hubert/output/libri2mix_dev/trans_output.txt


tsslm_discrete_k_1000_hubert_middle
tsslm_mix_continuous_hubert_middle

'Droid Sans Mono', 'monospace', monospace