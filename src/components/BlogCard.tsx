import { cn, formatDate } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from './ui/card';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import { Tag } from './Tags';

type BlogCardProps = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
};

export const BlogCard = ({
  slug,
  title,
  description,
  date,
  tags,
}: BlogCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Link href={slug}>
          <CardTitle className="text-4xl">{title}</CardTitle>
          <div className="flex gap-2 mt-2">
            {tags?.map((tag) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
        </Link>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <time dateTime={date}>{formatDate(date)}</time>
        </div>
        <Link
          href={slug}
          className={cn(buttonVariants({ variant: 'link' }), 'py-0')}
        >
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
};
