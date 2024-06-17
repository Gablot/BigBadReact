"use-client";

import { getImage } from "~/server/queries";

export default async function FullPageImageView( props: { id: number}) {
    const image = await getImage(props.id);
    return (
        <div className="flex h-full w-full min-w-0">
            <div className="flex-shrink flex justify-center items-center">
                <img src={image.url} className="flex-shrink onject-contain" />
            </div>

            <div className="w-48 flex flex-col border-l">
                <div className="text-xl font bold">{image.name}</div>
            </div>
        </div>
    )
}