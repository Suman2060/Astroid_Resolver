import type { Resources } from "../../../shared/types";
import { resources } from "../../../shared/seed";


function Delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function randomDelay() {
  return Math.floor(Math.random() * 1001) + 500;

}

function randomFail() {
  if (Math.random() < 0.1) {
    alert("Error caused randomly")
    console.log("Error cause by random failure")
    throw new Error("System Failed..")
    
  }
}

export async function getResources(): Promise<Resources[]> {
  await Delay(randomDelay())
  randomFail()
  return resources
}
