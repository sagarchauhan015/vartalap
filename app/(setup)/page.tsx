import React from 'react'
import initialProfile from '@/lib/initial-profile'
import { db } from '@/lib/databaseUtils';
import { redirect } from 'next/navigation';
import InitailModal from '@/components/modals/initial-modal';

export default async function SetupPage() {
    const profile =  await initialProfile();
    const server = await db.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    })
    if(server){
        return redirect(`/server/${server.id}`);
    }
  return (
    <>
       <div>
       <InitailModal />
       {/* Create a server */}
       </div>
    </>
  )
}
