
const arg=process.argv.slice();

function daireAlanı(yarıcap)
{
    const piDegeri=22/7;

    let alan=piDegeri*2*yarıcap;


    console.log(alan);

}


daireAlanı(arg[0]);