import { posts } from '#site/content';
import { MdxContent } from '@/components/MdxComponent';
import { Tag } from '@/components/Tags';
import { notFound } from 'next/navigation';

interface BlogPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: BlogPageProps['params']) {
  const slug = params?.slug?.join('/');

  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<
  BlogPageProps['params'][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split('/') }));
}

export default async function BlogPageDetails({ params }: BlogPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <div className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <h1 className="mb-2">{post.title}</h1>
      <div className="flex gap-2 my-2">
        {post.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />   
        ))}
      </div>
      {post.description ? (
        <p className="text-xl mt-0 text-muted-foreground">{post.description}</p>
      ) : null}
      <hr />
      <MdxContent code={post.body} />
    </div>
  );
}
