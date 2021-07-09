export default function SkillSection({skills}) {
    return skills.map((section, index) => <div className="mb-8" key={index}>
        <h2 className="text-sm uppercase text-gray-700 font-medium mb-2 dark:text-gray-400">{section.title}</h2>
        <ul className="flex justify-start items-center flex-wrap">
            {section.items.sort().map((skill, index) => <li key={index}
                                                            className="border dark:border-gray-700 shadow-sm md:text-lg text-gray-800 dark:text-gray-300 py-1 px-3 rounded-full flex-shrink-0 mr-2 mb-2">
                {skill}
            </li>)}
        </ul>
    </div>)
}
