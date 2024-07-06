export default function NotFoundLayout({ children }) {
    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-lightDarkCoal z-20 h-screen">
            <div className="flex items-center justify-center h-full w-screen">
                {children}
            </div>
        </div>
    )
}