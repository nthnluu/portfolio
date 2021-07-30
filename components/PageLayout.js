import Navbar from "./Navbar";

const PageLayout = ({children}) => {
    return <div>
        <div className="bg-white dark:bg-gray-900 min-h-screen">
            <header className="w-full fixed top-0 z-10">
                <Navbar/>
            </header>
            <main className="max-w-4xl mx-auto px-4 pb-24 pt-28">
                {children}
            </main>
            <footer>
                {/*TODO*/}
            </footer>
        </div>
    </div>
}

export default PageLayout;