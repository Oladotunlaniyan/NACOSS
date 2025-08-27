"use client"

interface TitleProps {
    title: String;
}

const Title = ({ title}: TitleProps) => {
    return (
        <div>
            <div className="mt-8">
                <h2 className="text-4xl leading-10 ml-[81px] font-extrabold ">{title}</h2>
                <hr />
                <br /> <br />
            </div>
        </div>
    )
}

export default Title