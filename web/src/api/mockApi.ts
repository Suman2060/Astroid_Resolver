import type { Resources } from "../../../shared/types";
import { resources } from "../../../shared/seed";



async function Delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function randomDelay() {
  return Math.floor(Math.random() * 1001) + 500;

}

function randomFail() {
  if (Math.random() < 0.1) {

    console.log("Error cause by random failure")
    throw new Error("System Failed..")
  }
}

export async function getResources(): Promise<Resources[]> {
  await Delay(randomDelay())
  randomFail()
  return resources
}



export async function addToCollection(resourceId: string) {
  await Delay(randomDelay());
  randomFail()

  console.log(`Resource ${resourceId} has been added to collection`);

  return {
    success: true,
    resourceId
  }

}

export async function addRating(
  resourceId: number,
  rating: number
) {
  await Delay(randomDelay());
  randomFail();

  const resource = resources.find(
    (resource) => resource.id === resourceId
  );

  if (!resource) {
    throw new Error("Resource not found");
  }

  resource.rating = rating;

  return resource;
}