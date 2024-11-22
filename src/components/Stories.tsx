
"use client"

import {faker} from "@faker-js/faker";
import Story from "@/components/Story"
import { useEffect, useState } from "react"

export default function Stories() {
  const [stories, setStories] = useState<StoryType[]>([])

  useEffect(() => {
    const storyUsers: StoryType[] = Array.from(
        {length:20},
      (_, i: number): StoryType => ({
        username: faker.internet.username().toLowerCase(),
        img: `https://i.pravatar.cc/150?img=${Math.round(Math.random() * 70)}`,
        id: i,
      }),
    )
    setStories(storyUsers)
    // console.log(storyUsers)
  }, [])

  return (

      <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none">
        {stories.map((user) => (
          <Story key={user.id} username={user.username} img={user.img} />
        ))}
      </div>

  )
}

//type
type StoryType = {
  username: string
  img: string
  id: number
}
