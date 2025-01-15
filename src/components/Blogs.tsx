import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

type BlogPostMeta = {
    title: string;
    date: string;
    description: string;
    image: string;
    slug: string;
};

const Blogs: React.FC = () => {
    const [posts, setPosts] = useState<BlogPostMeta[]>([]);

    useEffect(() => {
        const loadPosts = async () => {
            const markdownFiles = import.meta.glob('@/_posts/*.md'); // Glob pattern for markdown files in _posts directory
            console.log(markdownFiles); // Log detected markdown files

            const posts = await Promise.all(
                Object.entries(markdownFiles).map(async ([path, resolver]) => {
                    // Dynamically import the markdown file's attributes
                    const { attributes } = (await resolver()) as { attributes: BlogPostMeta };
                    console.log('Attributes:', attributes); // Log the attributes (front matter)

                    // Create the metadata object
                    return {
                        ...attributes,
                        slug: path.split('/').pop()?.replace('.md', '') || '',
                    } as BlogPostMeta;
                })
            );

            console.log('Posts:', posts); // Log the final posts array
            setPosts(posts); // Update state with the posts array
        };

        loadPosts();
    }, []);

    return (
        <motion.div className="container mx-auto my-16 mt-32 px-4" initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            <h1 className="text-4xl font-bold text-center mb-8">Blogs</h1>
            {posts.length === 0 ? (
                <p className="text-center text-gray-600">No blogs available</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            to={`/blogs/${post.slug}`}
                        >
                            <Card className="hover:shadow-lg transition-shadow duration-300 mb-8">
                                <CardHeader>
                                    <img
                                        src={post.image || '/path/to/default-image.jpg'}
                                        alt={post.title}
                                        className="w-full h-40 object-cover rounded-t-lg"
                                    />
                                </CardHeader>
                                <CardTitle className="text-xl mx-3">
                                    {post.title}
                                </CardTitle>
                                <CardDescription className="mb-2 mx-3 text-gray-600">
                                    {post.description}
                                </CardDescription>
                            </Card>
                        </Link>
                    ))}
                </div>
            )}
        </motion.div>

    );
};

export default Blogs;
