import {Dialog} from '@headlessui/react'
import useDarkMode from "../util/useDarkMode";

export default function ProjectInfoDialog({isOpen, project = {}, onClose}) {
    const [darkMode] = useDarkMode();

    return <Dialog open={isOpen} onClose={onClose} className="fixed z-20 inset-0 overflow-y-visible">
        <div className="flex items-center justify-center min-h-screen">
            <Dialog.Overlay
                className={`fixed inset-0 ${darkMode ? "bg-black" : "bg-gray-200"} backdrop-filter backdrop-blur-lg bg-opacity-50`}/>
            <div className="mx-4">
                <div
                    className="bg-white dark:bg-gray-700 shadow-2xl rounded-lg max-w-xl mx-auto z-30 overflow-hidden w-full relative mx-4">
                    <button
                        className="h-12 w-12 inline-flex justify-center items-center bg-gray-700 bg-opacity-30 rounded-full absolute top-2 right-2"
                        onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                        <span className="sr-only">
                        Close
                    </span>
                    </button>
                    <img src={project.image} className="w-full h-64 sm:h-96 object-cover" alt=""/>
                    <div className="p-6">
                        <Dialog.Title
                            className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</Dialog.Title>
                        <Dialog.Description className="font-medium text-gray-600 dark:text-gray-200">
                            {project.description}
                        </Dialog.Description>
                        <div className="border-t mt-4 pt-4 dark:border-gray-600">
                            <div className="flex flex-wrap">

                                {project.stack?.map(item => <span key={item}
                                                                  className="px-2 py-1 mr-1.5 mb-1.5 font-medium text-gray-700 dark:text-white dark:border-gray-500 text-xs border rounded-full">{item}</span>)}
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    </Dialog>
}