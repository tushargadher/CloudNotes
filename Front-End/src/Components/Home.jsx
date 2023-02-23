import React from "react";
import AddNote from "./AddNote";
import ViewNote from "./ViewNote";
const Home = (props) => {
    document.title = "Cloud Notes - Home";
    return (
        <>
            <div className="box-border bg-slate-200 h-screen min-w-screen w-auto pt-24">

                <div className="h-auto flex bg-slate-200 flex-col" >

                    <div className="w-screen h-[6vh] md:h-[15vh]">
                        <AddNote showAlert={props.showAlert} />
                    </div>
                    {/* <div className="text-xl font-medium px-6">Saved Notes </div> */}

                    <div className=" box-border w-full md:w-4/5 h-auto m-auto ">

                        <ViewNote showAlert={props.showAlert} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;