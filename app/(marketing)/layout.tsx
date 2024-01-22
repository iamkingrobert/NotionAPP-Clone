import { Children } from "react"
import { Navbar } from "./_Components/navbar";

const MarketingLayout = ({ children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <Navbar />
            <main className="h-full pb-40">
                {children}
            </main>
        </div>
    )
}

export default MarketingLayout