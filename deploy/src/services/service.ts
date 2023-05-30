import PocketBase from "pocketbase";
import { coding_school } from "./utils";


// const pb = new PocketBase("http://127.0.0.1:8090")
//
//
// const authData = await pb.admins.authWithPassword('', '');
//
//
// export async function getSchools(): Promise<coding_school[]> {
//   const data = await pb.collection("coding_schools").getList<coding_school>(0, 20, {
//   })
//
//   return data.items
// }
//
// export async function saveSchool(
//   name: string,
//   location: string,
//   url: string,
//   courses_offered: string
// ): Promise<coding_school> {
//   return await pb
//     .collection("coding_schools")
//     .create({
//       name,
//       location,
//       url,
//       courses_offered
//     })
// }
//
// TODO: might need to subscribe to real time updates 
