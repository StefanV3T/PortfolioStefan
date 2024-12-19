const Contact = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-lg">
                <h1 className="text-4xl font-bold text-center mb-6">Contact me</h1>
                <p className="text-lg text-center mb-6">
                    I'd love to hear from you! Please fill out the form below, and I'll get back to you as soon as possible.
                </p>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3">Contact information</h2>
                    <p className="text-lg mb-2">
                        Email: <a href="mailto:stefanvet06@gmail.com" className="text-blue-500 hover:text-blue-700">stefanvet06@gmail.com</a>
                    </p>
                    <p className="text-lg">
                        Phone: <a href="tel:+31683665050" className="text-blue-500 hover:text-blue-700">+31 6 83665050</a>
                    </p>
                </div>
            </div>
        </div>


    )
}

export default Contact;