"use server";
import { directusClient } from "@/lib/directus";
import { readSingleton } from "@directus/sdk";

export const getPreference = () => {
  return directusClient.request(readSingleton("preference"));
};
