import ProjectInfoDialog from "./ProjectInfoDialog";
import {useState} from "react";

export default function ProjectsGrid({projects}) {
    const [currentProject, setCurrentProject] = useState();

    return <>
        <ProjectInfoDialog isOpen={currentProject !== undefined} onClose={() => setCurrentProject(undefined)}
                           project={currentProject}/>
        <div className="grid gap-5 mx-auto md:grid-cols-2 lg:max-w-none">
            {projects.map((project, index) => <button key={index}
                                                      onClick={() => setCurrentProject(project)}
                                                      className="flex select-none text-left flex-col transform rounded-xl
                                                   shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden
                                                   hover:opacity-75 focus:ring-2 ring-blue-600 transition-opacity
                                                   focus:outline-none focus:shadow-xl duration-200">
                <div className="flex-shrink-0 w-full">
                    <img className="h-56 w-full object-cover pointer-events-none"
                         src={project.image}
                         alt=""/>
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                            {project.title}
                        </h3>
                        <p className="mt-1 text-base leading-6 text-gray-500 dark:text-gray-400">
                            {project.description}
                        </p>
                    </div>
                </div>
            </button>)}
        </div>
    </>
}