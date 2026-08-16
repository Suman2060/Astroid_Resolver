import type { Resources } from "../../../shared/types";
import { resources } from "../../../shared/seed";

export async function getResources(): Promise<Resources[]> {

  await new Promise((resolve) => setTimeout(resolve,800));

  return resources;
}
