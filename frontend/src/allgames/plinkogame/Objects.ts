import { sinkWidth, Width , obstacleRadius, Num_Sinks, Height} from "./Constants";
import { pad } from './Padding'

export interface obstacle{
    x:number,
    y:number,
    radius:number
}

export interface Sink{
    x:number
    y:number
    width:number,
    height:number,
    multiplier?:number
}

const MULTIPLIERS:{[key:number]:number}={
    1: 16,
    2: 9,
    3: 2,
    4: 1.4,
    5: 1.4,
    6: 1.2,
    7: 1.1,
    8: 1,
    9: 0.5,
    10: 1,
    11: 1.1,
    12: 1.2,
    13: 1.4,
    14: 1.4,
    15: 2,
    16: 9,
    17: 16
}


export const CreateObstacles=():obstacle[]=>{
     const obstacles:obstacle[]=[];
       const rows =18;
       for(let row=2;row<rows;row++){
           const numOfObstacles = row+1;
           const y=0 + row * 35;
            const spacing =36;

            for(let col=0;col<numOfObstacles;col++){
                 const x = Width/2 - spacing *(row/2 -col);
                 obstacles.push({x: pad(x), y: pad(y), radius: obstacleRadius });
            }
       }
    return obstacles;
}


export const CreateSinks=()=>{
   const sinks:Sink[] =[];
     const SPACING = obstacleRadius*2;

     for(let i=0;i<Num_Sinks;i++){
         const x =Width/2 + sinkWidth *(i-Math.floor(Num_Sinks/2)) -SPACING*2;
         const y =Height-170;
         const width =sinkWidth+2;
         const height =26;
         sinks.push({x,y,width,height,multiplier:MULTIPLIERS[i+1]});
     }
     return sinks;
}