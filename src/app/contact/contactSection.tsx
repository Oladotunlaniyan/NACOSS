

export default function ContactSection() {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-11/12 md:ml-8 p-12">
                <div className="">
                    <h1 className="md:text-[40px] text-[30px] font-bold">University of Ilorin</h1>
                    <h6 className="text-[#6F6F6F] font-semibold md:text-[23px] text-[20px]">Department of Computer Science</h6>
                    <p className="md:text-[18px]">Tanke, University Road, <br /> Faculty of CIS, University of Ilorin.</p>
                </div>
                <div className="">
                    <h1 className="md:text-[40px] text-[30px] font-bold">Admissions</h1>
                    <p className="md:text-[18px]">For questions or partnerships with Nacoss Unilorin, <br /> visit the Nacoss Office under Faculty of CIS, Unilorin <br /> or email nacoss@unilorin.edu.ng</p>
                </div>
                <div className="">
                    <h1 className="md:text-[40px] text-[30px] font-bold">Follow Us</h1>
                    <a href="https://www.instagram.com/nacoss.unilorin/" className="text-blue-600 hover:underline"> nacoss.unilorin </a>
                </div>
                <div className="">
                    <h1 className="md:text-[40px] text-[30px] font-bold">Email Address</h1>
                    <a href="mailto:nacoss@unilorin.edu.ng" className="underline text-blue-600">nacoss@unilorin.edu.ng</a> <br />
                    <a href="mailto:cis_csc@unilorin.edu.ng" className="underline text-blue-600">cis_csc@unilorin.edu.ng</a>
                </div>
                <div className="">
                    <h1 className="md:text-[40px] text-[30px] font-bold">Phone</h1>
                    <p className="md:text-[18px]">+234922029202</p>
                    <p className="md:text-[18px]">+234922029202</p>
                </div>
            </div>
        </div>
    )
}