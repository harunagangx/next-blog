import { posts } from '#site/content';
import { Tag } from '@/components/Tags';
import { getAllTags, sortTagsByCount } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'tags',
  description: "Topic i've written about",
};

export default async function TagPage() {
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="container py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Tag</h1>
        </div>
      </div>
      <hr className="mt-8" />
      <div className="flex flex-wrap gap-2">
        {sortedTags?.map((tag) => (
          <Tag tag={tag} count={tags[tag]} key={tag} />
        ))}
      </div>
    </div>
  );
}
