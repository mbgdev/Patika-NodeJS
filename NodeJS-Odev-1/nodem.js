
const sayi=[60,20,30,50,32];

const max=[];

let maxi=0;

for(let i=0;i<sayi.length;i++)
{
    if(maxi<sayi[i])
    {
        maxi=sayi[i];
        console.log("buyuk sayi "+sayi[i]);
    }
    else    
    {
        max.push(sayi[i]);
    }


}

for(let a=0;a<max.length;a++)
{
    console.log("max içi  "+max[a]);
}

