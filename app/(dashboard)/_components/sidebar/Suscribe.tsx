import { Button } from "@/components/ui/button"

const Suscribe = () => {
  return (
    <div className="dark:border dark:border-white rounded-md p-6 w-full text-center space-y-1 ">
        <h3 className="text-xl dark:font-thin dark:text-white text-gray-500">
            Latest Updates
        </h3>
        <p className="dark:font-extralight dark:text-white  text-gray-400">
            Stay up to date on the newest financial trend in stock, crypto and foreign exchange markets!
        </p>
        <Button size="lg" variant="outline">
            Suscribe
        </Button>
    </div>
  )
}

export default Suscribe