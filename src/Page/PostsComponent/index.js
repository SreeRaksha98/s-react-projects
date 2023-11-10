import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const PostsComponent = () => {

    const [posts, setPosts] = useState([])
    // const [user, setuser] = useState([])
    /**
     * 
     * method #1: async await 
     */
    const fetchPost = async () => {
        const dataFromPost = await fetch('https://jsonplaceholder.typicode.com/posts')
        const jsonData = await dataFromPost.json()
        setPosts(jsonData)
    }

    useEffect(() => {
        fetchPost().then()
    }, [])

    return (
        <div >
            <h2 className="mb-4 p-8 text-4xl grid justify-items-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Posts List</h2>
            <div class="grid grid-cols-3 ">
                {posts.map((post) =>
                    <div className="flex flex-col p-8 m-8 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <Link  to={"/posts/post?id=" + post.id}>
                                <div class="flex flex-col justify-between p-4 leading-normal">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Post id = {post.id}</p>
                                </div>
                        </Link>
                        {/* <Link className="item" to={"/posts/post?id=" + post.id}>{post.title}</Link> */}
                    </div>
                )}
            </div>

        </div>
    )
}

export default PostsComponent


