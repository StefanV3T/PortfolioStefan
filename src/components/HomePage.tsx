import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { CodeBracketIcon, HandRaisedIcon, LightBulbIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useTheme } from "next-themes"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import projectData from "@/Data/ProjectData"
import skills from "@/Data/Skills"
import TypingEffect from "react-typing-effect";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"

const HomePage = () => {
    const { theme } = useTheme();
    const { ref, inView } = useInView({
        threshold: 0.1, // Trigger when 10% of the element is in view
    });

    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            <section className="hero my-16 mt-32 px-6 text-center">
                <div className="container mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Hi, I'm Stefan <HandRaisedIcon className="inline-block w-10 h-10 animate-wave" />
                    </h1>
                    <p className="text-xl md:text-2xl mb-6">
                        <div ref={ref}>
                            {inView ? (

                                <TypingEffect
                            text={[` An 18-year-old aspiring Full-Stack Software Developer`]}
                            speed={50}
                            eraseDelay={2000}
                            eraseSpeed={1}
                                />                                
                            ) : (
                                <div style={{ height: "1em" }}></div>
                            )}
                        <CodeBracketIcon className="inline-block h-8 w-8 text-blue-500" />

                        </div>
                    </p>
                    <p className="text-lg mb-8">
                        I'm passionate about coding, building dynamic web applications, and continuously learning new technologies. <LightBulbIcon className="inline-block h-6 w-6 text-blue-500" />
                    </p>
                    <Link to="/about" className={buttonVariants({ variant: "outline" })}>
                        Learn More About Me <ArrowRightIcon className="inline-block h-5 w-5 text-blue-500" />
                    </Link>
                </div>
            </section>
            <Separator />

            <Tabs defaultValue="education" className="w-full my-16">
                <TabsList className="w-full">
                    <TabsTrigger value="education" className="w-1/2">Education</TabsTrigger>
                    <TabsTrigger value="work" className="w-1/2">Work</TabsTrigger>
                </TabsList>

                <TabsContent value="education">
                    <Card>
                        <CardHeader className="flex items-center gap-4">
                            <Sheet>
                                <SheetTrigger className="flex flex-col items-center gap-4 justify-center">
                                    <img src="/img/roc.png" alt="Education" className="w-16 h-16 rounded-md" />
                                    <div>
                                        <CardDescription>Aug 2022 - present</CardDescription>
                                        <CardTitle>ROC van Twente Hengelo</CardTitle>
                                        <CardDescription>Student - Full-stack software developer</CardDescription>
                                    </div>
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle>
                                            ROC van Twente Hengelo
                                        </SheetTitle>
                                        <SheetDescription>
                                            <p>
                                                ROC van Twente in Hengelo offers a comprehensive Software Developer program designed to equip students with the skills needed to develop modern applications, IT solutions, and websites. This program is available in two formats:
                                            </p>
                                            <br />
                                            <p>
                                                BOL (Beroepsopleidende Leerweg) – Full-time (4 years): This track combines theoretical lessons with practical assignments, including a minimum of 35% internship at an accredited company. The curriculum focuses on web application development, project-based learning, and includes subjects like databases, and programming languages such as C# and PHP. The program is offered at the Hengelo location.
                                            </p>
                                            <br />
                                            <p>
                                                BBL (Beroepsbegeleidende Leerweg) – Work-based (4 years): This track is designed for students who prefer to learn while working. It requires a minimum of 20 hours per week at an accredited company, with one day per week dedicated to school. The curriculum mirrors the BOL track, covering similar subjects and skills. This program is available at the Almelo location.
                                            </p>
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </CardHeader>

                        <CardHeader className="flex items-center gap-4">
                            <Sheet>
                                <SheetTrigger className="flex flex-col items-center gap-4 justify-center">
                                    <img src="/img/avila.jpeg" alt="Education" className="w-16 h-16 rounded-md" />
                                    <div>
                                        <CardDescription>Aug 2018 - May 2022</CardDescription>
                                        <CardTitle>Avila College</CardTitle>
                                        <CardDescription>Student - MAVO/HAVO</CardDescription>
                                    </div>
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle>
                                            Avila College
                                        </SheetTitle>
                                        <SheetDescription>
                                            <p>
                                                Avila College, located at Deurningerstraat 67 in Hengelo, is a small and welcoming school offering comprehensive education for students with a MAVO (VMBO) or HAVO recommendation.
                                            </p>
                                            <br />
                                            <p>
                                                Avila College emphasizes personalized learning through its flexible schedule, allowing students to manage their study time effectively. The curriculum focuses on both academic learning and practical experiences, preparing students for future educational and career paths.
                                            </p>
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </CardHeader>
                    </Card>
                </TabsContent>

                <TabsContent value="work">
                    <Card>
                        <CardHeader className="flex items-center gap-4">
                            <a href="https://www.grufix.nl/" target="_blank">
                                <img src="/img/Grufix_svg.png" alt="Grufix" className="w-16 h-16 rounded-md m-auto" />
                                <div>
                                    <CardDescription>Jan 2025 - present</CardDescription>
                                    <CardTitle>Grufix</CardTitle>
                                    <CardDescription>Co-owner</CardDescription>
                                </div>
                            </a>
                        </CardHeader>
                        <CardHeader className="flex items-center gap-4">
                            <Sheet>
                                <SheetTrigger className="flex flex-col items-center gap-4 justify-center">

                                    <img src="/img/Tousjee.png" alt="Tousjee" className="w-16 h-16 rounded-md" />
                                    <div>
                                        <CardDescription>Jan 2022 - present</CardDescription>
                                        <CardTitle>Tousjee</CardTitle>
                                        <CardDescription><span className="line-through">delivery driver</span><br />Shift runner</CardDescription>
                                    </div>

                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle>
                                            Tousjee
                                        </SheetTitle>
                                        <SheetDescription>
                                            <p>
                                                Tousjee is a restaurant in Hengelo, Netherlands, specializing in poke bowls—a traditional Hawaiian dish featuring a base of rice or salad topped with various proteins, vegetables, and sauces. They offer a diverse menu, including options like the Spicy Salmon or Tuna Bowl, Rainbow Bowl, and the BIG Protein Bowl with salmon or tuna. For those preferring vegan options, Tousjee provides vegan versions of their poke bowls, such as the Spicy Chicken Bowl Vegan and the Fresh Salmon or Tuna Bowl Vegan.
                                            </p>
                                            <br />
                                            <p>
                                                In addition to their regular menu, Tousjee offers side dishes like gyoza, tempura shrimp, and crispy chicken, as well as beverages including various soft drinks.
                                            </p>
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </CardHeader>
                        <CardHeader>
                            <Sheet>
                                <SheetTrigger className="flex flex-col items-center gap-4 justify-center">
                                    <img src="/img/montix.jpg" alt="Montix" className="w-16 h-16 rounded-md" />
                                    <div>
                                        <CardDescription>Jan 2024 - Jun 2024</CardDescription>
                                        <CardTitle>Montix - Digital Agency (Intern)</CardTitle>
                                        <CardDescription>Software developer</CardDescription>
                                    </div>

                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle>
                                            Montix - Digital Agency
                                        </SheetTitle>
                                        <SheetDescription>
                                            <p>
                                                Montix is a dynamic digital agency located in Enschede, Netherlands, with over a decade of experience in the world of online business. Founded in 2006, Montix has made its mark as a versatile and reliable partner for businesses seeking to thrive in the digital landscape. Offering a wide range of services, Montix helps clients build a strong online presence and achieve long-term success through web development, digital marketing, and creative design.
                                            </p>
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </CardHeader>

                        <CardHeader>
                            <Sheet>
                                <SheetTrigger className="flex flex-col items-center gap-4 justify-center">
                                    <img src="/img/kruidvat.png" alt="Kruidvat" className="w-16 h-16 rounded-md" />
                                    <div>
                                        <CardDescription>May 2021 - Jan 2022</CardDescription>
                                        <CardTitle>Kruidvat Netherlands</CardTitle>
                                        <CardDescription>Sales Associate</CardDescription>
                                    </div>
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetTitle>
                                        Kruidvat Netherlands
                                    </SheetTitle>
                                    <SheetDescription>
                                        Kruidvat is one of the largest and most well-known retail chains in the Netherlands, specializing in health and beauty products, personal care items, household goods, and a variety of other everyday essentials. With a strong presence in both the Netherlands and Belgium, Kruidvat has become a go-to destination for shoppers looking for affordable products across a wide range of categories.
                                    </SheetDescription>
                                </SheetContent>
                            </Sheet>
                        </CardHeader>
                    </Card>
                </TabsContent>
            </Tabs>
            <Separator />

            <section className="skills my-16 px-6">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {skills.map((skill) => (
                            <TooltipProvider key={skill.alt}>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <img
                                            src={skill.src}
                                            alt={skill.alt}
                                            className={`w-full h-auto object-contain transition-transform duration-300 ease-in-out transform hover:scale-110 ${theme === 'dark' ? 'filter invert' : ''
                                                }`}
                                        />
                                    </TooltipTrigger>
                                    <TooltipContent>{skill.alt}</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        ))}
                    </div>
                </div>
            </section>
            <Separator />
            <section className="projects my-16 px-6">
                <h2 className="text-4xl font-extrabold text-center mb-12">
                    Featured Projects
                </h2>
                <Carousel className="space-y-8">
                    <CarouselContent>
                        {projectData.slice(0, 2).map((project) => (
                            <CarouselItem key={project.id}>
                                <div className="col-md-6 px-4">
                                    <Card className="shadow-lg hover:shadow-2xl rounded-lg">
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="rounded-t-lg object-cover h-60 w-full"
                                        />
                                        <CardDescription>
                                            {project.tags.map((tag) => (
                                                <Badge className="mx-2 mt-4">{tag}</Badge>
                                            ))}
                                        </CardDescription>
                                        <CardHeader className="p-4">
                                            <CardTitle className="text-2xl font-semibold">{project.title}</CardTitle>
                                        </CardHeader>
                                        <CardDescription className="p-4 bg-white dark:bg-gray-800 rounded-b-lg">
                                            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:text-blue-600 font-semibold transition-colors duration-300"
                                            >
                                                View on GitHub
                                            </a>
                                        </CardDescription>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                        <CarouselItem>
                            <div className="flex items-center justify-center h-full py-6">
                                <div className="text-center">
                                    <p className="text-lg text-gray-700 dark:text-gray-300">Want to see more of my projects?</p>
                                    <Link
                                        to="/projects"
                                        className="text-blue-500 font-semibold hover:text-blue-600 transition-colors duration-300"
                                    >
                                        Click here
                                    </Link>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <div className="flex justify-between mt-4">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </section>


        </motion.div>
    )
}

export default HomePage;
