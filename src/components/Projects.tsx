import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import projectData from "@/Data/ProjectData";

const Projects = () => {
    return (
        <div className="container mx-auto my-16 mt-32 px-4">
            <h1 className="text-4xl font-bold text-center mb-8">My projects</h1>
            {/* Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
                {projectData.map((project) => (
                    <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300 mb-8">
                        <CardHeader>
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-40 object-cover rounded-t-lg"
                            />
                            <CardTitle className="text-xl mt-4">{project.title}</CardTitle>
                            <CardDescription className="mt-2 text-gray-600">
                                {project.description ? `${project.description.slice(0, 100)}...` : "No description available."}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tags.map((tag, index) => (
                                    <Badge key={index} variant="outline" className="text-sm">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="link">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Projects;
