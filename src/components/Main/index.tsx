import * as S from './styles'

export const Main = ({
  title = 'Next.JS Boilerplate',
  description = 'A boilerplate using TypeScript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Title as="a" href="https://github.com/ianlibanio/boilerplate/">
      <h1>{title}</h1>
    </S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer facing a screen with codes"
    />
    <S.Credits>
      This template was built together with{' '}
      <S.CreditsLink as="a" href="https://reactavancado.com.br/">
        React Avançado
      </S.CreditsLink>{' '}
      course.
    </S.Credits>
  </S.Wrapper>
)
