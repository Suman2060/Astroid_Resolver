import type { Request, Response } from "express";
import type { Resource } from "../../../../shared/types";
import { getResources } from "./resources.services";

export function resourcesController(
  _req: Request,
  res: Response
) {
  const result: Resource[] = getResources();

  return res.json(result);
}