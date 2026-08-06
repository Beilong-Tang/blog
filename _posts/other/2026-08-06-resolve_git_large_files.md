---
title: Resolve large files unable to commit to github
tag: Github
---

# Start from the accidental commit
```shell
git switch main
git status
git switch -c temp
```
Add the exact large-file path to .gitignore, for example:

```shell
/models/first_stage_models/kl-f8/kl-f8.zip
```

Remove only that file from Git tracking while keeping it on disk:

```shell
git rm --cached models/first_stage_models/kl-f8/kl-f8.zip
git add .gitignore
```

Now squash the staged final state directly onto origin/main:

```shell
git reset --soft origin/main
git status
git commit -m "Apply updates without large model files"
```

At this point, temp should contain exactly one commit above origin/main:

```shell
git log --oneline origin/main..temp
```

Confirm the large file is absent:

```shell
git ls-tree -r temp -- models/first_stage_models/kl-f8/kl-f8.zip
```

That command should produce no output.

While remaining on temp, reset the local main pointer without changing your working directory:

```shell
git branch -f main origin/main
```

Then push the clean branch:

```shell
git push -u origin temp
```