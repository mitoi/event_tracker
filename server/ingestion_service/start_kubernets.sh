kubectl delete all --all -n sendo
kubectl create secret generic kube-config --from-file=$HOME/.kube/config --namespace=sendo
kubectl apply -f kubernetes.yaml