export const revalidate = 420;

interface Post {
    title: string;
    content:string;
    slug:string;
    }

interface Props{
    params:{ slug: string }
}

export default async function BlogPostPage({params}:Props){
    const posts: Post[] = await fetch('http://localhost:3000/api/content').then(res => res.json())
    const post = posts.find(post => post.slug === params.slug)!
return (
    <article className="m-20">
    <h1 className="text-2xl font-bold">{post.title}</h1>
    <p className="mt-4">{post.content}</p>
</article>
)
}