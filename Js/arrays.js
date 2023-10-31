function task1()
{
    let arr=new Array(4,16,36,25);
    console.log(arr)
    let summa=arr.reduce(function(sum,elem)
    {
        if (elem%2==0) sum+=Math.sqrt(elem);
        return sum;

    },0);
    alert (summa);
}