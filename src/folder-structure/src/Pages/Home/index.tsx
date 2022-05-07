import React from 'react';
import { ThemeContext } from 'styled-components';

import { Icon } from 'Components';

import * as Styles from './index.styled';

const Home: React.FC = () => {
	const { palette } = React.useContext(ThemeContext);

	return (
		<Styles.Container>
			<Styles.Title>
				Seja bem vindo ao meu template de{' '}
				<Styles.Spotlight>cra</Styles.Spotlight>
			</Styles.Title>

			<Styles.Intro>
				Esse projeto é algo pessoal feito com o intuito de ter uma forma rápida
				de criar uma estrutura boa de projeto e ter testes unitários e
				documentação pré configurados.
			</Styles.Intro>

			<Styles.Footer>
				<Styles.IconContainer>
					<Styles.IconLink
						href='https://github.com/Henrique1204'
						target='_blank'
					>
						<Icon icon='github-icon' size={32} color={palette.primary.main} />
					</Styles.IconLink>

					<Styles.IconLink
						href='https://www.linkedin.com/in/paulo-henrique-silva-souza-535a1415a/'
						target='_blank'
						delay={0.5}
					>
						<Icon icon='linkedin-icon' size={32} color={palette.primary.main} />
					</Styles.IconLink>

					<Styles.IconLink
						href='https://www.npmjs.com/~henrique1204'
						target='_blank'
					>
						<Icon icon='npm-icon' size={32} color={palette.primary.main} />
					</Styles.IconLink>
				</Styles.IconContainer>

				<Styles.Credits>
					criado por{' '}
					<Styles.CreditsLink
						href='https://github.com/Henrique1204'
						target='_blank'
					>
						@henrique1204
					</Styles.CreditsLink>
				</Styles.Credits>
			</Styles.Footer>
		</Styles.Container>
	);
};

export default Home;
