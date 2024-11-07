// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {Post} from "@/components/Posts";

export default function Post({id, img, userImg, username, caption}:Post) {
    return (
        <>
            <div>
                <h1>{username}</h1>
            </div>
        </>
    )
}

