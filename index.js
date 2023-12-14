    let para=document.querySelector("p");

    setInterval(()=>{
       var date=new Date();
       var hours=date.getHours();
       var minutes=date.getMinutes();
       var seconds=date.getSeconds();
       
       minutes=formation(minutes);
       seconds=formation(seconds);
       hours=formation(hours);

       para.innerText=`${hours}:${minutes}:${seconds}`;
       
       

    },1000);
    
    const formation=(value)=>{
 
        if(value<10){
            value="0"+value;
        }
        return value;

    }


    // const myPromise=new Promise((resolve,reject)=>{
       
    //     let x= 5;
    //     if(x=!5){
    //         resolve("Task completed");
    //     } else {
    //         reject("Task not completed");
    //     }

    // });

    // myPromise.then((res)=>console.log(res))
    // .catch((err)=>console.log(err));

    const taskOne=()=>{
        return new Promise((resolve,reject)=>{
            resolve("task one is completed");
        })
    }
    const taskTwo=()=>{
        return new Promise((resolve,reject)=>{
            resolve("task two is completed");
        })
    }
    const taskThree=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                reject("task three is not completed");
            },2000);
        })
    }
    const taskFour=()=>{
        return new Promise((resolve,reject)=>{
            resolve("task four is completed");
        })
    }

    // taskOne()
    // .then((res)=>console.log(res))
    // .then(taskTwo)
    // .then((res)=>console.log(res))
    // .then(taskThree)
    // .then((res)=>console.log(res))
    // .then(taskFour)
    // .then((res)=>console.log(res))
    // .catch((err)=>console.log(err));

    const callAllTask=async ()=>{
        try {
            const t1= await taskOne();
        console.log(t1);
        const t2= await taskTwo();
        console.log(t2);
        const t3= await taskThree();
        console.log(t3);
        const t4= await taskFour();
        console.log(t4);
        }catch(err){
            console.log(err);
        }
    }
     
    callAllTask();

    console.log("end")
    

