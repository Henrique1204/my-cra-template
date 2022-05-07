import styled, { css } from 'styled-components';

export const Container = styled.main`
	width: 100vw;
	height: 100vh;
	padding: 2rem;

	font-family: sans-serif;
	text-align: center;

	color: ${({ theme }) => theme.palette.text.light};
	background-color: ${({ theme }) => theme.palette.primary.background};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 5rem;
`;

export const Title = styled.h1`
	max-width: 706px;
	margin: 0 auto;

	font-size: 3rem;
	text-transform: uppercase;
`;

export const Spotlight = styled.span`
	color: ${({ theme }) => theme.palette.primary.main};
`;

export const Intro = styled.p`
	max-width: 890px;
	margin: 0 auto;

	font-size: 1.5rem;
	font-family: sans-serif;
	text-align: center;
	line-height: 1.5;

	color: ${({ theme }) => theme.palette.text.light};
`;

export const Footer = styled.footer`
	max-width: 240px;
	margin: 0 auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
`;

export const IconContainer = styled.div`
	margin: 0 auto;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
`;

interface IIconLinkProps {
	delay?: number;
}

export const IconLink = styled.a<IIconLinkProps>`
	@keyframes upAndDown {
		0% {
			transform: initial;
		}
		50% {
			transform: translateY(0.5rem);
		}
		75% {
			transform: translateY(-0.5rem);
		}
		100% {
			transform: initial;
		}
	}

	animation: ${({ delay }) => {
		const delayValue = !!delay ? `${delay}s` : '';

		return `upAndDown 1s ${delayValue} ease infinite`;
	}};

	.icon {
		${({ theme }) =>
			theme.mixins.hover({
				color: theme.palette.primary.dark,
				custom: css`
					transform: scale(1.1);
				`,
			})};
	}
`;

export const Credits = styled.p`
	margin: 0 auto;

	font-size: 1rem;
	font-weight: bold;
`;

export const CreditsLink = styled.a`
	color: ${({ theme }) => theme.palette.primary.main};

	display: inline-block;

	${({ theme }) =>
		theme.mixins.hover({
			color: theme.palette.primary.dark,
			custom: css`
				transform: scale(1.1) translateX(4px);
			`,
		})};
`;
