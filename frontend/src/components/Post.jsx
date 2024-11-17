import { motion } from "framer-motion"
import { BriefcaseConveyorBelt, Compass, MapPin, Navigation, Users } from "lucide-react"
import { formatDate } from "../utils/date"

export const Post = (props) => {
  // const date = props.date;
  return (
    <motion.div
		initial={{ opacity: 0, scale: 0.9 }}
		animate={{ opacity: 1, scale: 1 }}
		exit={{ opacity: 0, scale: 0.9 }}
		transition={{ duration: 0.5 }}
    className="px-8 py-6 bg-slate-100 rounded-xl hover:border-2 border-blue_main border-solid duration-100"
		>
      <h2 className=" text-2xl font-medium">Buddy</h2>
      <p className="text-xl text-gray-700 mt-4">
						{new Date(props.Date).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}</p>
      <div className="flex text-sm items-center my-2">
        <Users size={18}/>
        {(props.buddy > 1) ? <p>{props.buddy} Buddies</p> : <p>{props.buddy} Buddy</p>}
      </div>
      <div className="flex justify-between items-center mt-8 text-xl font-medium">
          <h3>{props.from}</h3>
          <MapPin size={20} />
          <h3>{props.to}</h3>
      </div>
    </motion.div>
  )
}