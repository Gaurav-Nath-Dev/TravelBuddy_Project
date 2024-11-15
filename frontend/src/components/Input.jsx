export const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative mx-7 mt-7 flex items-center">
      <Icon size={20} className = "absolute ml-3"></Icon>
      <input {...props} 
      className=" w-full py-2 pl-11 outline-2 outline outline-white hover:outline-[#6F85DF] cursor-pointer rounded-lg duration-500"/>
    </div>
  )
}