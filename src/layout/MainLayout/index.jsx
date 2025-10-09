import Footer from "./Footer";

export default function MainLayout({className}) {
    return (
        <div className={`relative ${className}`}>
            <div id="main-content" className={"bg-main-bg py-3 h-full"}>

                {/* <=== build your app here ===> */}

            </div>
            <Footer/>
        </div>
    )
}
