import { Transition } from "../components/Transition";
import { motion } from "framer-motion";
import { useAuthStore } from "../Store/authStore";
import { formatDate } from "../utils/date";
import { Post } from "../components/Post";
import exploredata from "../utils/exploredata.json"
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";

export const ExplorePage = () => {
  const { getPosts, posts } = useAuthStore();
	const [ isLoading, setIsLoading ] = useState(true);
	useEffect(() => {
		getPosts();
		setIsLoading(false);
	}, []);

  return (
    <>
			<Navbar />
			{(isLoading) ? 
			<Loader className="animate-spin mx-auto" size={24} />
			:
			// <section className="grid bord mt-10 m-auto md:w-[70%] grid-cols-1 md:grid-cols-2 gap-8">
			<section className="flex flex-wrap justify-center mt-10 m-auto md:w-[60%] grid-cols-1 md:grid-cols-2 gap-8">
				{posts.map((post) => (
					<Post key={post.id} name={post.name} Date={post.date} buddy={post.buddy} from={post.from} to={post.to}/>
				))}
			</section>
			}
    </>
  );
}
