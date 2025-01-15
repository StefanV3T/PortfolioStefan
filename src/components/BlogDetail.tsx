import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './BlogDetail.css';

// Type for the BlogPost metadata
type BlogPostMeta = {
    title: string;
    date: string;
    description: string;
    image: string;
    content: string; // Store the actual content of the blog post
};

const BlogDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<BlogPostMeta | null>(null);

    useEffect(() => {
        const loadPost = async () => {
            try {
                // Dynamically import the markdown file
                const { attributes, html } = await import(`@/_posts/${slug}.md`) as { attributes: BlogPostMeta, html: string };

                const post = await import(`@/_posts/${slug}.md`);
                console.log(post);
                console.log('Attributes:', attributes); // Log the attributes (front matter)
                console.log('Markdown Content:', html);

                // Create the post object with attributes and markdown content
                const postData = {
                    ...attributes,
                    content: html, // Store the markdown content (can be rendered as HTML)
                };

                console.log('Post:', postData); // Log the final post object
                setPost(postData); // Update state with the post object
            } catch (error) {
                console.error('Error loading the post:', error);
                console.log('No post found for the given slug.');
            }
        };

        if (slug) {
            loadPost(); // Call the function to load the post when slug is available
        }
    }, [slug]); // Run the effect when the slug changes

    if (!post) {
        return <p>Loading...</p>; // Show loading if the post is not yet fetched
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };

    return (
        <div className='mt-32 my-16  bg-white p-5 rounded-xl text-black'>
            <h1 className='text-3xl font-bold'>{post.title}</h1>
            <p>{formatDate(post.date)}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} className='markdownContent' />
        </div>
    );
};

export default BlogDetail;
