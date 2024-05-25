import { useEffect, useRef, useState } from "react";
import { BallManager } from "../allgames/plinkogame/classes/BallManager";
import axios from "axios";
import { BetButton } from "../components/BetButton";
import { baseURL } from "../utils";

export function Plinko() {
  const [ballManager, setBallManager] = useState<BallManager>();
  const canvasRef = useRef<any>();

  useEffect(() => {
    if (canvasRef.current) {
      const ballManager = new BallManager(
        canvasRef.current as unknown as HTMLCanvasElement
      );
      setBallManager(ballManager);
    }
  }, [canvasRef]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-[rgb(15,33,46)]">
      <canvas ref={canvasRef} width="800" height="800"></canvas>
      <BetButton
        className="px-10 mb-4"
        onClick={async () => {
          const response = await axios.post(`${baseURL}`, {
            data: 1,
          });
            console.log(response);
          if (ballManager) {
            ballManager.addBall(response.data.droppoint);
          }
        }}
      >
        Add ball
      </BetButton>
    </div>
  );
}

export default Plinko;