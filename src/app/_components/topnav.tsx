"use client"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from 'react'
import { UploadButton } from "~/utils/uploadthing";

const Topnav = () => {
  const router = useRouter();

  return (
    <div>
          <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>

      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton endpoint='imageUploader' onClientUploadComplete={(res) => {
                      console.log("Files: ", res);
                      alert("Upload Completed");
                      router.refresh()
          }}/>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
    </div>
  )
}

export default Topnav
