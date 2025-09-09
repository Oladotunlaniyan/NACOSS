"use client"

interface HeaderTitleProps {
    headerTitle: string;
}

const HeaderTitle = ({ headerTitle}: HeaderTitleProps) => {
    return (
        <div>
            <div className="mt-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4rem] font-extrabold ml-4 sm:ml-8 md:ml-16 lg:ml-24 xl:ml-[81px]">{headerTitle}</h2>
                <hr />
                <br /> <br />
            </div>
        </div>
    )
}

export default HeaderTitle