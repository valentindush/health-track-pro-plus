"use client"

import { getPatient, getPatientData } from "@/app/utils/backend"
import { useEffect, useState } from "react"
import { Progress } from "@nextui-org/react"
import Chart from "@/app/components/dashboard/chart/chart"
type patient = {
    id: number,
    name: string,
    nationalId: string,
    frequentSickness: string,
    createdAt: string,
    updatedAt: string,
}

type  ChartDataType = {
    data: {
        labels: string[],
        datasets: {
            label: string,
            data: number[],
            borderColor: string,
            backgroundColor: string,
        }[]
    }
}


type Readings = {
    id: 1,
    createdAt: string,
    updatedAt: string,
    heartBeat: number,
    temperature: number,
    timestamp: string,
    patientId: number
}

const DashBoard = ({ params }: { params: { id: string } }) => {

    const [patient, setPatient] = useState<patient | null>(null)
    const [readings, setReadings] = useState<Readings[]>([])
    const [loading, setLoading] = useState(false)
    const [chartData, setChartData] = useState<ChartDataType>({
        data: {
            labels: [],
            datasets: []
        }
    })

    const [averages, setAverages] = useState<number[]>([0,0])

    const getData = async () => {
        setLoading(true)
        const pt = await getPatient(parseInt(params.id))
        const rd = await getPatientData(parseInt(params.id))
        setPatient(pt.data)
        setReadings(rd.data)


        setChartData({
            data: {
                labels: rd.data?.map((r)=> new Date(r.timestamp).toLocaleDateString('en-US')),
                datasets: [
                    {
                        label: 'Temperature',
                        data: rd.data?.map((r)=> r.temperature),
                        borderColor: 'white',
                        backgroundColor: 'pink',
                    },
                    {
                        label: 'Heart Beat Rate',
                        data: rd.data?.map((r)=> r.heartBeat),
                        borderColor: 'white',
                        backgroundColor: 'cyan',
                    },
                ],
            }
        })

        const temp = rd.data?.map((r)=> r.temperature)
        const bpm = rd.data?.map((r)=> r.heartBeat)

        setAverages([
            temp.reduce((a, b) => a + b) / temp.length,
            bpm.reduce((a, b) => a + b) / bpm.length
        ])
        
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="p-3">
            {loading && <Progress
                size="sm"
                isIndeterminate
                aria-label="Loading..."
                className="max-w-md"
            />}
            {patient && <div className="details">
                <p className="text-lg font-medium text-gray-700">Welcome to <span className="font-bold">{patient.name}</span>'s Dashboard!</p>
                <div className="py-6 grid grid-cols-3 gap-4">
                    <div className=" bg-gray-100/40 rounded-xl h-[7rem] shadow hover:shadow-md p-4">
                        <p className="font-medium text-lg">{patient?.name}</p>
                        <p className="font-sm">{patient?.nationalId}</p>
                    </div>
                    <div className="border-2 border-gradient-to-br text-gray-600 hover:border-gradient-to-bl transition-colors from-pink-500 to-cyan-500 rounded-xl h-[7rem] shadow font-medium flex flex-col justify-center items-center hover:shadow-md">
                        <p className="text-xs">Average Temperature</p>
                        <span className="text-4xl">{averages[0]}&deg;C</span>
                    </div>
                    <div className="border-2 border-gradient-to-br text-gray-600 hover:border-gradient-to-bl transition-colors from-pink-500 to-cyan-500 rounded-xl h-[7rem] shadow font-medium flex flex-col justify-center items-center hover:shadow-md">
                        <p className="text-xs">Average BPM</p>
                        <span className="text-4xl">{averages[1]}</span>
                    </div>
                </div>
            </div>}

            <div className="chart py-4">
                <h2 className="text-gray-800 text-xl font-bold">Temperature and Heart Beat Rate Graph</h2>

                <Chart data={chartData} />
            </div>
            <div className="">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-pink-600 font-bold">
                            Time
                            </th>
                            <th scope="col" className="px-6 py-3 text-pink-600 font-bold">
                            Temperature
                            </th>
                            <th scope="col" className="px-6 py-3 text-pink-600 font-bold">
                            Heart beat rate
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {readings.map((reading, index) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {new Date(reading.createdAt).toLocaleDateString('en-US')}
                            </td>
                            <td className="px-6 py-4">
                                {reading.temperature}&deg;C
                            </td>
                            <td className="px-6 py-4">
                                {reading.heartBeat} BPM
                            </td>
                            
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;