import { motion } from "framer-motion"
import { Compass, Users } from "lucide-react"
import { formatDate } from "../utils/date"

export const Post = (props) => {
  // const date = props.date;
  return (
    <motion.div
		initial={{ opacity: 0, scale: 0.9 }}
		animate={{ opacity: 1, scale: 1 }}
		exit={{ opacity: 0, scale: 0.9 }}
		transition={{ duration: 0.5 }}
    className="p-3 bg-slate-100 rounded-xl"
		>
      <h2 className=" text-xl font-medium">Buddy</h2>
      {/* <p>{formatDate(2024-02-15)}</p> */}
      <p>
						{new Date(props.Date).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}</p>
      <div className="flex text-sm">
        <Users size={18}/>
        {(props.buddy > 1) ? <p>{props.buddy} Buddies</p> : <p>{props.buddy} Buddy</p>}
      </div>
      <div className="flex justify-between">
          <h3>{props.from}</h3>
          <Compass />
          <h3>{props.to}</h3>
      </div>
    </motion.div>
  )
}