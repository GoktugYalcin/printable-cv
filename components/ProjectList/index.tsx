import React from 'react'
import SubHeader from "@/components/shared/SubHeader";
import ExternalTab from "@/components/ProjectBelow/ExternalTab";


const ProjectList = () => {
    return (
        <div className="flex flex-wrap flex-col justify-center items-start my-16 w-2/4">
            <SubHeader text={"Projects 🚜"} />
            <div>
                {[1, 2, 3, 4].map((item, index) => {
                    return <div className="flex justify-start items-start flex-col gap-1 mb-4">
                        <span className="font-semibold">A Project Name</span>
                        <span>Simple project that, that what we are talking about.</span>
                        <div className="flex justify-end items-center gap-2 mt-1">
                            <ExternalTab title={"GitHub"} url={"https://github.com"} />
                            <ExternalTab title={"Product"} url={"https://github.com"} />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ProjectList