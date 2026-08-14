import type { Resources } from "../../../shared/types";
import { resources } from "../../../shared/seed";

export async function getResources(): Promise<Resources[]> {
  return resources;
}
