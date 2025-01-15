import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="min-h-screen flex flex-col sm:justify-center sm:items-center p-8 max-sm:mt-16">
            <motion.div
                className="max-w-4xl w-full text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl font-bold mb-6">About Me</h1>
                <p className="text-lg mb-4">
                    Hi, I'm Stefan, an 18-year-old aspiring full-stack developer. I'm passionate about learning new
                    technologies and building amazing web applications. Currently, I am diving deep into React, TypeScript, and
                    full-stack development, and I enjoy turning ideas into fully functional applications.
                </p>
                <p className="text-lg mb-4">
                    I believe in writing clean, maintainable code and creating intuitive user experiences. I'm always eager to
                    collaborate with others and learn from experienced developers.
                </p>

                <div className="flex justify-center space-x-6">
                    <motion.a
                        href="https://www.linkedin.com/in/stefan-vet-44164b2a9/"
                        className="text-blue-600 hover:text-blue-800 transition duration-300"
                        whileHover={{ scale: 1.1 }}
                        target='_blank'
                    >
                        LinkedIn
                    </motion.a>
                    <motion.a
                        href="https://github.com/StefanV3T"
                        className="text-blue-600 hover:text-blue-800 transition duration-300"
                        whileHover={{ scale: 1.1 }}
                        target='_blank'
                    >
                        GitHub
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
