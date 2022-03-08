import CoverImage from './Card/CoverImages'
import Avatar from './Avatar'
export default function PostHeader({ title, coverImage, date, author }){
    return(
        <div>
            <h1>{title}</h1>
        <div className="hidden md:block md:mb-12">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage} height={620} width={1240} />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="block md:hidden mb-6">
            <Avatar name={author.name} picture={author.picture} />
          </div>
          <div className="mb-6 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        </div>
    )
}