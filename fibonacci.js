function fibonacci_sequence(n){
    const fb=[0, 1]
    for(let k=2;k<n;k++){
        fb[k]=fb[k-2] + fb[k-1]
    }
    return fb
    }
    console.log(fibonacci_sequence(5))
