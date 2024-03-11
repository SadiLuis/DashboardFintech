import { cn } from "@/lib/utils"
import { Payment, columns } from "./Colums"
import { DataTable } from "./Data-Table"
import { Lato } from "next/font/google"

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 30,
      status: "success",
      transaction: "Spotify",
    },
    {
      id: "7286852f",
      amount: 100,
      status: "success",
      transaction: "PlayStation Store",
    },
    {
      id: "728ed47f",
      amount: 100,
      status: "pending",
      transaction: "example@email.com",
    },
    {
      id: "728ed47f",
      amount: 20,
      status: "success",
      transaction: "HBO MAX",
    },
    {
      id: "728ed47f",
      amount: 300,
      status: "failed",
      transaction: "Travelist",
    },
    {
      id: "728ed47f",
      amount: 10,
      status: "pending",
      transaction: "Netflix",
    },
  ]
}

const font = Lato({
  subsets: ["latin"],
  weight: ["400"]
})

const Table = async () => {
  const data = await getData()
 
  return (
    <div className="border border-gray-300 rounded-md w-full h-full p-4">
      <h2 className={cn(
        "flex justify-center text-center items-center text-2xl",font.className
      )}> Recent Transactions </h2>
      <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
    </div>
  )
}

export default Table