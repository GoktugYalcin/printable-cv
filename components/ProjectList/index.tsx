import React from 'react'
import SubHeader from "@/components/shared/SubHeader";
import ExternalTab from "@/components/ProjectList/ExternalTab";
import {getProjectsFields} from "@/lib/air";


const ProjectList = async () => {
    const projects = await getProjectsFields()

    return (
        <div className="flex flex-wrap flex-col justify-center items-start my-16 w-2/4 print:w-3/4">
            <SubHeader text={"Projects 🚜"} />
            <div>
                {projects.map(({title, short_desc, git_url, prod_url}, index) => {
                    return <div className="flex justify-start items-start flex-col gap-1 mb-4" key={index}>
                        <span className="font-semibold">{title}</span>
                        <span>{short_desc}</span>
                        <div className="flex justify-end items-center gap-2 mt-1">
                            {!!git_url && <ExternalTab title={"GitHub"} url={git_url} />}
                            {!!prod_url && <ExternalTab title={"Product"} url={prod_url} />}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ProjectList