"use-client";

import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView( props: { id: number}) {
    const image = await getImage(props.id);

    const uploaderInfo = await clerkClient.users.getUser(image.userId);
    return (
        <div className="flex h-full w-full min-w-0">
            <div className="flex-shrink flex justify-center items-center">
                <img src={image.url} className="flex-shrink onject-contain" />
            </div>

            <div className="flex w-48 flex-col flex-shrink-0 border-l">
                <div className="border-b text-center text-lg p-2">{image.name}</div>

                <div className="flex flex-col p-2">
                    <span>Uploaded By:</span>
                    <span> {uploaderInfo.fullName}</span>
                </div>

                <div className="flex flex-col p-2">
                    <span>Created On:</span>
                    <span> {new Date(image.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    )
}