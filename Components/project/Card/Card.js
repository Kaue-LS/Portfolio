import Link from "next/link";
import * as S from '../../../public/assets/styles/Projects.style'
import CoverImage from "../../Global/CoverImages";
import  Date from './date'
export default function Card(dadosDosPost){
    // console.log(dadosDosPost.id)

    // Card dos projetos que serão mostrados na principal
    return(
      
        <S.Project bgColor={dadosDosPost.bgColor} fontColor={dadosDosPost.fontColor} id={"Card-"+dadosDosPost.id}>
        <Link as={`/posts/${dadosDosPost.slug}`} href={`/posts/[slug]`}>

            <S.Card>
            <div>
                <CoverImage src={dadosDosPost.coverImage} alt={dadosDosPost.title} slug={dadosDosPost.slug} height={230} width={400}></CoverImage>
            </div>
            <S.Data>
            <span>Publicado em: </span><Date dateString={dadosDosPost.date}></Date>
            <h1>{dadosDosPost.title}</h1>
            <p>{dadosDosPost.utilizado}</p>
            </S.Data>
            </S.Card>
            </Link>
        </S.Project>
    )
}

