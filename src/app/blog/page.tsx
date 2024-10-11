import { Metadata } from 'next';
import { BlogCard } from '@/components/BlogCard';
import { posts } from '#site/content';
import { getAllTags, sortPost, sortTagsByCount } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tag } from '@/components/Tags';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog page',
};

const BlogPage = () => {
  const sortedPost = sortPost(posts.filter((post) => post.published));

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="container py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">
            My thought on some various topic
          </p>
        </div>
      </div>
      <hr className="mt-8" />
      <div className="grid grid-cols-12 gap-3 mt-8">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          {posts.length > 0 ? (
            <div className="flex flex-col gap-[2rem]">
              {sortedPost.map((post) => {
                const { slug, date, title, description, tags } = post;

                return (
                  <BlogCard
                    slug={slug}
                    title={title}
                    description={description}
                    date={date}
                    tags={tags}
                    key={slug}
                  />
                );
              })}
            </div>
          ) : (
            <p className="text-3xl">Nothing to see yet</p>
          )}
        </div>
        <div className="col-span-12 row-start-1 h-fit sm:col-start-9 sticky top-[20px]">
          <Card>
            <CardHeader className="text-xl font-bold">
              Tags
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              {sortedTags?.map((tag) => (
                <Tag tag={tag} key={tag} count={tags[tag]} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
