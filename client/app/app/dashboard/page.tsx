import Card from "@/app/components/dashboard/card";
import SideBar from "@/app/components/dashboard/sideBar";

const DashBoard = ()=>{
    return(
        <div className="p-3">
            <div className="">
                <h2 className="text-lg font-bold text-gray-700">
                    Overview
                </h2>
                <div className="grid grid-cols-4 gap-3 pt-4">
                    <Card title="Average Temperature" value={"38.2 C"} />
                    <Card title="Average Temperature" value={"38.2 C"} />
                    <Card title="Average Temperature" value={"38.2 C"} />
                    <Card title="Average Temperature" value={"38.2 C"} />
                </div>
            </div>
        </div>
    )
}

export default DashBoard;