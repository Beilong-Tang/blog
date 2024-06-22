while true
do
  echo "Running pushing the update at $(date)"
  git add .
  git commit -m "update"
  git push
  # Wait for 2 minutes (120 seconds)
  sleep 120
done