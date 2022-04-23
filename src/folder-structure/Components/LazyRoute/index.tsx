import React from 'react';

const Lazy: React.IComponent = ({ children }) => {
	return (
		<React.Suspense fallback={<div>Carregando</div>}>{children}</React.Suspense>
	);
};

export default Lazy;
