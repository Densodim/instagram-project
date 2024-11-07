// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {Post} from "@/components/Posts";
import {AdjustmentsHorizontalIcon} from '@heroicons/react/24/solid'

export default function Post({id, img, userImg, username, caption}:Post) {
    return (
        <>
            <div className='bg-white my-7 border rounded-md'>
            {/*    Post Header*/}
                <div className='flex items-center p-5'>
                    <img src={userImg} alt={caption} className='h-12 rounded-full object-cover border p-1 mr-3'/>
                    <p className="font-bold flex-1">{username}</p>
                    <AdjustmentsHorizontalIcon className='h-5'/>
                </div>

            {/*    Post Image*/}
                <img src={img} alt='' className='object-cover w-full'/>
            </div>
        </>
    )
}

