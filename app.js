var arr = [5,7,9,8,10,3,2];
document.write("<h1>Main Array <br><br>",arr,"</h1><br><br>")

for(var i=1;i<arr.length;i++){
    for(var j=0;j<arr.length;j++){
if(arr[j]< arr[j+1]){
    arr[j] = arr[j]+arr[j+1];
    arr[j+1]= arr[j]-arr[j+1];
    arr[j] = arr[j]-arr[j+1]
}

    }
    console.log(arr)
}
document.write("<h1> <hr>After Sorting<br><br>Large to Small <br><br>",arr,"</h1>")


for(var a=1;a<arr.length;a++){
    for(var b=arr.length;b>0;b--){
if(arr[b]< arr[b-1]){
    arr[b] = arr[b]+arr[b-1];
    arr[b-1]= arr[b]-arr[b-1];
    arr[b] = arr[b]-arr[b-1]
}

    }
    console.log(arr)
}
document.write("<h1> <hr>After Sorting<br><br>Small to Large <br><br>",arr,"</h1>")