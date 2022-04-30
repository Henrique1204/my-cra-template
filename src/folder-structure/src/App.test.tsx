import { render } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
	it('Testing render App.', () => {
		const { container } = render(<App />);

		expect(container).toBeInTheDocument();
	});
});