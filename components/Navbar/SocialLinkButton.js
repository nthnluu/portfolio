export default function SocialLinkButton({href, fontAwesomeClassname, name}) {
    return <a href={href}
              target="_blank"
              className="text-lg w-9 h-9 rounded-full text-gray-800 transition-colors duration-150 hover:bg-gray-100 inline-flex
              items-center justify-center border dark:bg-transparent dark:border-gray-300 dark:text-white ring-blue-500 focus:ring-2 focus:outline-none">
        <i className={fontAwesomeClassname} aria-hidden="true"/>
        <span className="sr-only">{name}</span>
    </a>
}