export default function MiniProfile() {
  return (
    <>
      <div className="flex items-center justify-between mt-14 ml-10">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT23pygNK5BeDGhj88DN6qfpSg0pMb78Tlo9A&s"
          alt="user-image"
          className="h-16 rounded-full border p-[2px]"
        />
        <div className="flex-1 ml-4">
          <h2 className="font-bold"> Some text</h2>
          <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
        </div>
        <button className="font-semibold text-blue-400 text-sm">
          Sing out
        </button>
      </div>
    </>
  )
}
