import React from "react";
import aboutImg from "../about.jpg";
const About = () => {
    document.title="Cloud Notes - About";
    return (
        <>
            <div className="bg-slate-200  w-screen p-10 pt-28 box-border">

                <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                    <p className="font-normal text-sm leading-3 text-indigo-700 dark:text-indigo-500 hover:text-indigo-800 cursor-pointer pb-2">About</p>
                    <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                        <div className="w-full lg:w-6/12">
                            <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">The simplest way to keep notes</h2>
                            <p className="font-normal text-base leading-6 text-gray-600 mt-6">Welcome to our online note-saving website! We're excited to have you as a member of our community and look forward to helping you keep your notes organized and accessible from anywhere.</p>
                            <p  className="font-normal text-base leading-6 text-gray-600 mt-6">Our website offers a simple and user-friendly interface that allows you to create, edit, and manage your notes easily. You can create as many notes as you like, categorize them, and even search for specific notes using our search function.</p>
                            <p  className="font-normal text-base leading-6 text-gray-600 mt-6">We take your security and privacy seriously. All your notes are encrypted and stored on secure servers, so you can rest assured that your information is safe.</p>
                        </div>
                        <div className="w-full lg:w-6/12 rounded-sm">
                            <img className="lg:block hidden w-full rounded-lg" src={aboutImg} alt="people discussing on board" />
                            <img className="lg:hidden sm:block hidden w-full rounded-lg" src={aboutImg}  alt="people discussing on board" />
                            <img className="sm:hidden block w-full rounded-lg" src={aboutImg}  alt="people discussing on board" />
                        </div>
                    </div>

                    {/* <div className="relative mt-24">
                        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                            <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg1.svg" alt="flag" />
                            </div>

                            <img className="z-20" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg2.svg" alt="note" />

                            <img className="z-20 sm:block hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg" alt="users" />
                        </div>
                        <hr className="z-10 absolute top-2/4 w-full bg-black" />
                    </div> */}
                    {/* <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                        <div>
                            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800  mt-6">Use it everywhere</p>
                            <p className="font-normal text-base leading-6 text-gray-600  mt-6">Notes stay updated across all your devices, automatically and in real time. There’s no “sync” button: It just works.</p>
                        </div>
                        <div>
                            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800  mt-6">Stay organized</p>
                            <p className="font-normal text-base leading-6 text-gray-600  mt-6">Add tags to find notes quickly with instant searching.</p>
                        </div>
                        <div className="sm:block hidden">
                            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800  mt-6">Work together</p>
                            <p className="font-normal text-base leading-6 text-gray-600  mt-6">Share a to-do list, post some instructions, or publish your notes online.</p>
                        </div>
                    
                    </div> */}
                    

                    <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
                        <div className="w-full lg:w-6/12 border shadow-xl rounded-md p-4">
                            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 ">Our Mission</h2>
                            <p className="font-normal text-base leading-6 text-gray-600  mt-6 w-full lg:w-10/12 xl:w-9/12">our mission is to help you save time and stay organized by providing a simple and intuitive note-taking solution. We understand that modern life can be hectic, and keeping track of all your notes and ideas can be a challenge. That's why we're committed to providing a platform that makes it easy to create, edit, and manage your notes, from anywhere, at any time.</p>
                            <p className="font-normal text-base leading-6 text-gray-600  w-full lg:w-10/12 xl:w-9/12 mt-10">We believe that note-taking should be simple, fast, and hassle-free. Our website is designed to help you focus on your thoughts and ideas, not on the technology. Whether you need to take notes for work, school, or personal projects, our platform provides the tools you need to stay organized and productive.</p>
                        </div>
                        <div className="w-full lg:w-6/12">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                                {/* <!-- FAQS Card --> */}
                                <div className="flex p-4 shadow-md">
                                    <div className="mr-6">
                                        <img className="mr-6 w-8 h-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png" alt="team card" />
                                    </div>
                                    <div className="">
                                        <p className="font-semibold lg:text-lg text-xl lg:leading-6 leading-5 text-gray-800 ">Is it safe to save my notes on an online note-taking website?</p>
                                        <p className="mt-2 font-normal text-base leading-6 text-gray-600 ">Yes, it is safe to save your notes on an online note-taking website as long as the website uses industry-standard encryption to protect your data. You should also use a strong, unique password to secure your account.</p>
                                    </div>
                                </div>

                                
                                <div className="flex p-4 shadow-md">
                                <div className="mr-6">
                                        <img className="mr-6 w-8 h-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png" alt="team card" />
                                    </div>
                                    <div className="">
                                        <p className="font-semibold lg:text-lg text-xl lg:leading-6 leading-5 text-gray-800 ">Can I access my notes from different devices?</p>
                                        <p className="mt-2 font-normal text-base leading-6 text-gray-600 ">Yes, you can access your notes from any device with an internet connection, as long as you log in to your account.</p>
                                    </div>
                                </div>

                                
                                <div className="flex p-4 shadow-md">
                                <div className="mr-6">
                                        <img className="mr-6 w-8 h-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png" alt="team card" />
                                    </div>
                                    <div className="">
                                        <p className="font-semibold lg:text-lg text-xl lg:leading-6 leading-5 text-gray-800 ">Can I use an online note-taking website for business purposes?</p>
                                        <p className="mt-2 font-normal text-base leading-6 text-gray-600 ">Yes, many online note-taking websites offer features specifically designed for businesses, such as team collaboration and integration with other productivity tools.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;