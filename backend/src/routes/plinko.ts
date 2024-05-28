import { Router } from "express";
const router =Router();
import { outcomes } from "../outcome";

const TotalDrops =16; //means the ball need to drop from top to bottom need 16 drops.
 
const Multiplier:{[key:number]:number}={
    0: 16,
    1: 9,
    2: 2,
    3: 1.4,
    4: 1.4,
    5: 1.2,
    6: 1.1,
    7: 1,
    8: 0.5,
    9: 1,
    10: 1.1,
    11: 1.2,
    12: 1.4,
    13: 1.4,
    14: 2,
    15: 9,
    16: 16
}

router.post('/play',async(req,res)=>{
        const data =req.body;
        console.log(data);
      let outcome:number =0;
      const pattern:string[] =[];
      for(let i=0;i<TotalDrops;i++){
           if(Math.random()<0.5){
              pattern.push("L");
           }
           else{
            pattern.push("R");
              outcome++;
           }
      }
      const multiplier =Multiplier[outcome];
        // I have to multiply the user money with this multilpier 
        // Now I have to drop the ball from a particular point so that i point to the exact multiplier
        const possibleOutcomes = outcomes[outcome]; //so this give us a array of possible outcomes from where we have to send a ball

        res.status(200).json({
              droppoint:possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length || 0)],
               multiplier:multiplier,  
               path:pattern
        })
})

export default router;