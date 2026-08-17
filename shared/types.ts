export type ResourceType = "book" | "article" | "video";

export type ResourceStatus = "available" | "pending" | "archived";

export type Visibility = "public" | "private";

export type Role = "user" | "admin";

export interface Resources {
  id: number;
  title: string;
  description: string;
  type: ResourceType;
  tags: string[];
  status: ResourceStatus;
  visibility: Visibility;
}