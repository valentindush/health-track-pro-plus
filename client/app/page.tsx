'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getPatients } from './utils/backend'
import { Progress} from '@nextui-org/react'


type patient = {
    id: number,
    name: string,
    nationalId: string,
    frequentSickness: string,
    createdAt: string,
    updatedAt: string,
}

export default function Home() {

  const [patients, setPatients] = useState<patient[]>([])
  const [loading, setLoading] = useState(false)
  const getData = async ()=>{
    setLoading(true)
    const data = await getPatients()
    setPatients(data.data)
    setLoading(false)
  }

  

  useEffect(() => {
    getData()
  }, [])  

  return (
    <main className="px-4">
      <div className="sticky top-0 p-4 flex items-center items-center justify-between">
        <div className="">
          <h1 className='text-pink-500 text-xl font-bold'> Health Track Pro Plus</h1>
        </div>
        <div className="">
          <a className='p-3 bg-pink-500 text-white font-medium shadow-md flex items-center gap-2 w-fit rounded-xl' about="_blank" href="https://github.com/valentindush/health-track-pro-plus/tree/">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className="ionicon" viewBox="0 0 512 512">
              <path className='fill-white' d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
            </svg>
            <span>Repository</span>
          </a>
        </div>
      </div>

      <div className="p-3 border border-pink-600/20 rounded-xl shadow-md">
        <h2 className='font-bold text-gray-800 px-6'>Patients</h2>
        {loading && <Progress
                      size="sm"
                      isIndeterminate
                      aria-label="Loading..."
                      className="max-w-md"
                    />}
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-pink-600 font-bold">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-pink-600 font-bold">
                  National ID
                </th>
                <th scope="col" className="px-6 py-3 text-pink-600 font-bold">
                  Frequent Sickness
                </th>
                <th scope="col" className="px-6 py-3 text-pink-600 font-bold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {patient?.name}
                  </th>
                  <td className="px-6 py-4">
                    {patient?.nationalId}
                  </td>
                  <td className="px-6 py-4">
                    {patient?.frequentSickness}
                  </td>
                  <td className="px-6 py-4">
                    <Link href={`/app/dashboard/${patient?.id}`}>
                      <button className='text-white p-2 rounded-xl bg-pink-400 hover:bg-pink-600 transition-colors'>View</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </main>
  )
}
