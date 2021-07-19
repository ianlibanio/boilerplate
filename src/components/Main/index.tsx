import * as S from './styles'

export const Main = ({
  title = 'Next.JS Boilerplate',
  description = 'A boilerplate using TypeScript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer facing a screen with codes"
    />
    <S.Credits>
      This template was built together with{' '}
      <S.CreditsLink
        as="a"
        href="https://www.udemy.com/course/react-avancado/?couponCode=PROMOJUL21"
      >
        React Avançado
      </S.CreditsLink>{' '}
      course.
    </S.Credits>
  </S.Wrapper>
)
