import img1 from "@img/home/3d-image-1.webp"
import img2 from "@img/home/3d-image-2.webp"

// section 3D image profit
function Section3DImages({data, className}) {
    const {img, title, number, profit, text, bg, color} = data;

    return (
        <div className={`relative w-full main-components ${className}`}>
            <img className={`absolute right-0 bottom-0`} src={img} alt="3d img"/>

            <p className={"font-medium"}>{title}</p>

            <div className={"space-x-1 mb-3 mt-6.5"}>
                <span className={"font-medium text-lg md:text-xl 2xl:text-2xl"}>{number}</span>
                <span className={"text-xs text-green-500"}>{profit}</span>
            </div>

            <span className={`px-1.5 py-0.5 text-xs rounded-full ${bg} ${color}`}>{text}</span>
        </div>
    )
}

function TransActionsIconBox({data, className}) {
    const {text, icon, color, profit} = data

    return (
        <div className={`flex flex-row items-center gap-3 ${className}`}>
            <span className={`rounded-md p-2 ${color} text-white shadow-md`}>
                <svg className={"text-white size-4"}>
                    <use href={`#${icon}-icon`}></use>
                </svg>
            </span>

            <div>
                <p className={"text-xs text-secondary-txt"}>{text}</p>

                <p className={"font-medium text-lg 2xl:text-xl"}>{profit}</p>
            </div>

        </div>
    )
}

function TransActions({className}) {
    return (
        <div className={`@container main-components ${className}`}>
            <div className={"flex flex-row items-center justify-between mb-7"}>
                <p className={"text-lg md:text-xl font-medium"}>Transactions</p>

                <span>
                    <svg className={"size-4"}>
                        <use href="#more-icon"></use>
                    </svg>
                </span>
            </div>

            <div className={"flex flex-row items-center pb-3.5 gap-10 @xl:gap-20 @2xl:gap-30"}>
                <TransActionsIconBox data={{text: "Sales", color: "bg-violet-500", profit: "245K", icon: "profitSale"}}/>

                <TransActionsIconBox data={{text: "Customers", color: "bg-green-500", profit: "12.5K", icon: "userOutline"}}/>

                <TransActionsIconBox className={"hidden @sm:flex"} data={{text: "Product", color: "bg-amber-500", profit: "1.54K", icon: "pcAndPhone"}}/>
            </div>
        </div>
    )
}

export default function TopSection() {
    const data = [
        {img: img1, title: "Ratings", number: "13K", profit: "+15.6%", text: "Year of 2021", bg: "bg-sky-500/10", color: "text-sky-500"},
        {img: img2, title: "Sessions", number: "24.5k", profit: "-20%", text: "Last Week", bg: "bg-gray-500/10", color: "text-gray-400"},
    ];

    return (
        <section id="top-section" className={"grid grid-cols-1 gap-6 @lg/main:grid-cols-2 @4xl/main:grid-cols-11"}>
            <Section3DImages className={"@4xl/main:col-span-3"} data={data[0]}/>
            <Section3DImages className={"@4xl/main:col-span-3"} data={data[1]}/>
            <TransActions className={"@lg/main:col-span-2 @4xl/main:col-span-5"}/>
        </section>
    )
}
