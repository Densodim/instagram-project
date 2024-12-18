
import type { Post } from "@/components/Posts"
import {
  BookmarkIcon,
  ChatBubbleBottomCenterTextIcon,
  EllipsisHorizontalIcon,
  FaceSmileIcon,
  HeartIcon,
} from "@heroicons/react/24/solid"

export default function Post({ id, img, userImg, username, caption }: Post) {
  console.log("id", id)
  return (
    <>
      <div className="bg-white my-7 border rounded-md">
        {/*    Post Header*/}
        <div className="flex items-center p-5">
          <img
            src={userImg}
            alt={caption}
            className="h-12 rounded-full object-cover border p-1 mr-3"
          />
          <p className="font-bold flex-1">{username}</p>
          <EllipsisHorizontalIcon className="h-5" />
        </div>

        {/*    Post Image*/}
        <img src={img} alt="" className="object-cover w-full" />

        {/*   Post  Buttons */}
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatBubbleBottomCenterTextIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>

        {/*    Post comments*/}
        <p className="p-5 truncate">
          <span className="font-bold mr-2">{username}</span>
          {caption}
        </p>

        {/*    Post input box*/}
        <form className="flex items-center p-4">
          <FaceSmileIcon className="h-7 text-transparent stroke-2 stroke-black" />
          <input
            type="text"
            placeholder="Enter your comment here..."
            className="border-none flex-1 focus:ring-0"
          />
          <button className="text-blue-400 font-bold">Post</button>
        </form>
      </div>
    </>
  )
}
