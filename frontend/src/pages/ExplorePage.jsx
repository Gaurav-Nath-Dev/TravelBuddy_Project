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
			<section className="grid mt-10 mx-5 grid-cols-2 md:grid-cols-4 gap-5 ">
				{posts.map((post) => (
					<Post key={post.id} Date={post.date} buddy={post.buddy} from={post.from} to={post.to}/>
				))}
			</section>
			}
    </>
  );
}
