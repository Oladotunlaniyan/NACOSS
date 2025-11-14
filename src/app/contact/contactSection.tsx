

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
                    <a href="https://www.instagram.com/nacoss.unilorin/" className="text-blue-600 hover:underline"> Instagram: nacoss.unilorin </a>
                </div>
                <div className="">
                    <h1 className="md:text-[40px] text-[30px] font-bold">Email Address</h1>
                    <a href="mailto:nacoss@unilorin.edu.ng" className="underline text-blue-600">nacossuil@gmail.com</a> <br />
                </div>
                <div className="">
                    <h1 className="md:text-[40px] text-[30px] font-bold">Phone</h1>
                    <p className="md:text-[18px]">+2347049018290, Ayodele Ogunyemi, PRO</p>
                    <p className="md:text-[18px]">+2348180368604, Opeyemi Saibu, Welfare Secretary</p>
                    <p className="md:text-[18px]">+2349012857304, Emmanuel Mojiboye (Dynasty), Software Director</p>
                    <p className="md:text-[18px]">+2347085645209, Ibrahim, Social Director</p>
                    <p className="md:text-[18px]">+2349047935976, Collins Daniel, General Secretary </p>
                    <p className="md:text-[18px]">+2348028226282, Precious Ezekiel (Jada), Vice President</p>
                    <p className="md:text-[18px]">+2348028226282, Oladotun Laniyan (Cypher), President</p>

                </div>
            </div>
        </div>
    )
}