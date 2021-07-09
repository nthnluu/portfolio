export default function Section ({title, children}) {
    return <div>
        <h2 className="mb-8 text-3xl font-bold text-gray-800 sm:text-4xl sm:leading-10 dark:text-gray-100">
            {title}
        </h2>
        {children}
    </div>
}