import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { db } from "@/lib/databaseUtils";



export default async function initialProfile() {
  const user = await currentUser();

  if(!user) {
    return redirectToSignIn();
  }

//   const profile = await db.profile
}
