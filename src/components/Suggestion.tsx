"use client"


import {faker} from '@faker-js/faker'
import { useEffect, useState } from "react"

export default function Suggestion() {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])

  useEffect(() => {
      const suggestion: Suggestion[] = Array.from({ length: 5 }, (_, i) => ({
          username: faker.internet.username().toLowerCase(),
          jobTitle: faker.person.jobTitle().toLowerCase(),
          id: i,
      }));
    setSuggestions(suggestion)
  }, [])
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between mb-5 text-sm">
        <h3 className="font-bold text-gray-400">Suggestion</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((suggestion) => (

          <div className="flex items-center justify-between mt-3" key={suggestion.id}>
            <img
              src={`https://i.pravatar.cc/150?img=${Math.round(Math.random() * 70)}`}
              alt=""
              className="h-10 rounded-full border p-[2px]"
            />
            <div className="flex-1 ml-4">
              <h2 className="font-semibold text-sm">{suggestion.username}</h2>
              <h3 className="text-sm text-gray-400 truncate w-[230px]">
                {suggestion.jobTitle}
              </h3>
            </div>
            <button className="font-semibold text-blue-400">Follow</button>
          </div>

      ))}
    </div>
  )
}

//type
type Suggestion = {
  username: string
  jobTitle: string
  id: number
}
