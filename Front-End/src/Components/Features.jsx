import React from "react";
const Features = () => {
    document.title = "Cloud Notes - Features";
    return (
        <>
            <div className="box-border bg-slate-200 h-auto w-screen p-10 pt-20">
                <div className="container my-24 px-6 mx-auto bg-slate-200 ">
                    <section className="mb-32 text-gray-800">
                        <div className="flex justify-center">
                            <div className="text-center max-w-[700px]">

                                <h2 className="text-4xl font-bold mb-6">Why should you use Cloud Notes?</h2>
                                <p className="text-gray-600 mb-12 p-4  text-lg">
                                    All your notes, synced on all your devices. Use Cloud Note now in iOS, Android, Mac, Windows, Linux, or in your browser.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 xl:gap-x-12 p-4 ">

                            <div className="mb-12 p-4 border border-slate-800 shadow-xl rounded-md">
                                <div className="flex">
                                    <div className="shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow ml-4">
                                        <p className="font-bold mb-1">User accounts</p>
                                        <p className="text-gray-500">The website may require users to create an account to save notes. This allows users to access their notes from any device, and provides a secure way to save their information.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-12 p-4 border border-slate-800 shadow-xl rounded-md">
                                <div className="flex">
                                    <div className="shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow ml-4">
                                        <p className="font-bold mb-1">Search functionality</p>
                                        <p className="text-gray-500">The website may have a search bar that allows users to quickly find specific notes by typing in keywords or phrases.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-12 p-4 border border-slate-800 shadow-xl rounded-md">
                                <div className="flex">
                                    <div className="shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow ml-4">
                                        <p className="font-bold mb-1">Sync across devices</p>
                                        <p className="text-gray-500">Online note saver websites typically sync notes across all devices that are connected to the user's account. This means that notes can be accessed from a desktop computer, laptop, tablet, or smartphone.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-12 p-4 border border-slate-800 shadow-xl rounded-md">
                                <div className="flex">
                                    <div className="shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow ml-4">
                                        <p className="font-bold mb-1">Security</p>
                                        <p className="text-gray-500">Online note saver websites typically use encryption to protect user data. This helps to prevent unauthorized access and ensures that the user's notes remain private and secure.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-12 p-4 border border-slate-800 shadow-xl rounded-md">
                                <div className="flex">
                                    <div className="shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow ml-4">
                                        <p className="font-bold mb-1">Easy To Use</p>
                                        <p className="text-gray-500">Cloud note saver websites provide a convenient and flexible way for users to capture and organize their ideas and information.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-12 p-4 border border-slate-800 shadow-xl rounded-md">
                                <div className="flex">
                                    <div className="shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow ml-4">
                                        <p className="font-bold mb-1">Use it everywhere</p>
                                        <p className="text-gray-500">Notes stay updated across all your devices, automatically and in real time. There is no “sync” button: It just works.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-12 p-4 border border-slate-800 shadow-xl rounded-md">
                                <div className="flex">
                                    <div className="shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow ml-4">
                                        <p className="font-bold mb-1">Stay organized</p>
                                        <p className="text-gray-500">Add tags to find notes quickly with instant searching.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-12 p-4 border border-slate-800 shadow-xl rounded-md">
                                <div className="flex">
                                    <div className="shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="grow ml-4">
                                        <p className="font-bold mb-1">Work together</p>
                                        <p className="text-gray-500">Share a to-do list, post some instructions, or publish your notes online.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>


                </div>
            </div>
        </>
    );
}
export default Features;