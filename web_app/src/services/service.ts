import PocketBase from "pocketbase";
import { coding_school } from "./utils";


const pb = new PocketBase(import.meta.env.VITE_URL)


const authData = await pb.admins.authWithPassword(import.meta.env.VITE_USERNAME, import.meta.env.VITE_PASSWORD);


export async function getSchools(): Promise<coding_school[]> {
  const data = await pb.collection("coding_schools").getList<coding_school>(0, 20, {
  })

  return data.items
}

export async function saveSchool(
  name: string,
  location: string,
  url: string,
  rating: string
): Promise<coding_school> {
  return await pb
    .collection("coding_schools")
    .create({
      name,
      location,
      url,
      rating
    })
}

 //TODO: might need to subscribe to real time updates 
