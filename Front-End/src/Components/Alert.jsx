import React from "react";
const Alert = (props) => {
    //if props.msg.mess have null value then alert is not shown so we return nothing 
    if (props.alert.message === null) {
        return (
            <>
                {/* we return nothing is the value of messge is null */}
            </>
        );
    }
    else {
        return (
            <>

                {/**condition for changing the alert type according to the success and failer */}
                <div className={`bg-blue-300  rounded-lg py-5 px-6 mb-3 text-lg text-${props.alert.flag === "true" ? "green" : "red"}-700 inline-flex items-center fixed top-[10vh] z-40 w-screen`} role="alert">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon={`${props.alert.flag === "true" ? "check-circle" : "times-circle"}`} className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d={`${props.alert.flag === "true" ? "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" : "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"} `}></path>
                    </svg>
                    {props.alert.message}
                    {/* {console.log(props.alert)} */}
                </div>


            </>
        );
    }
}
export default Alert;