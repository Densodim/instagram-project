export default function Story({ img, username }: Props) {
  return (
    <>
      <div>
        <img
          src={img}
          alt={username}
          className="h-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out"
        />
        <p className="text-xs w-14 truncate">{username}</p>
      </div>
    </>
  )
}

//types

type Props = {
  img: string
  username: string
}
