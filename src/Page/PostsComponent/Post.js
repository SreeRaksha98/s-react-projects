import React, { useEffect, useState } from "react";

const Post = props => {
    const [body, setBody] = useState({})
    const [userData, setUserData] = useState({})
    const [randomDates, setRandomDates] = useState()

    const idFromURL = new URLSearchParams(window.location.search).get("id")

    const getBodyFromURL = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + idFromURL).then(res => res.json()).then((jsonResponseData) => {
            setBody(jsonResponseData)
        })
    }

    const getUserFromURL = () => {
        if (body.userId) {
            fetch('https://dummyjson.com/users/' + body.userId).then(res => res.json()).then((jsonResponseData) => {
                setUserData(jsonResponseData)
            })
        }
    }

    useEffect(() => {
        getBodyFromURL()

    }, [])

    useEffect(() => {
        getUserFromURL()
    }, [body])

    const RandomDateGenerator = () => {
        const getRandomInt = (min, max) => {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        };
      
        const getRandomDate = () => {
          const year = getRandomInt(1970, 2023); // You can adjust the range of years as needed
          const month = getRandomInt(1, 12);
          const day = getRandomInt(1, 28); // Adjust the maximum day based on the month
      
          return setRandomDates( new Date(year, month - 1, day)); // Month in JavaScript Date object is zero-based
        };
    }

    return (
        <div class="bg-white py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0">
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p class="mt-2 text-lg leading-8 text-gray-600">Post id = {idFromURL}</p>
                </div>

                <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <article class="flex max-w-xl flex-col items-start justify-between">
                        <div class="flex items-center gap-x-4 text-xs">
                            <time dateTime="2020-03-16" class="text-gray-500">{randomDates}</time>
                            <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{userData.department}</a>
                        </div>
                        <div class="group relative">
                            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a href="#">
                                    <span class="absolute inset-0"></span>
                                    {body.title}
                                </a>
                            </h3>
                            <p class="mt-5 line-clamp-10 text-sm leading-6 text-gray-600">{body.body}</p>
                        </div>
                        <div class="relative mt-8 flex items-center gap-x-4">
                            <img src={userData.image} alt="" class="h-10 w-10 rounded-full bg-gray-50" />

                                <div class="text-sm leading-6">
                                    <p class="font-semibold text-gray-900">
                                        <a href="#">
                                            <span class="absolute inset-0"></span>
                                            {userData.firstName} {userData.lastName}
                                        </a>
                                    </p>
                                    <p class="text-gray-600">{userData.title}</p>
                                </div>
                        </div>
                    </article>

                </div>

                {/* <h2>Hello world....Post id = {idFromURL}</h2>
                <div>
                    <div>Body: {body.body}</div>
                    <div>User_Name: {userData.firstName} {userData.lastName}</div>
                    <div>User_id: {userData.id}</div>
                </div> */}
            </div>
        </div>
    )
};


export default Post;

// user, comments
