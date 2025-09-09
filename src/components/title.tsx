"use client"

interface TitleProps {
    title: string;
}

const Title = ({ title}: TitleProps) => {
    return (
        <div>
            <div className="mt-8">
                <h2 className="text-3xl leading-10  font-extrabold xl:ml-[48px]">{title}</h2>
                <hr />
                <br /> <br />
            </div>
        </div>
    )
}

export default Title