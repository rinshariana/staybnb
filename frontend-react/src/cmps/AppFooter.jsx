export function AppFooter() {
	console.log('VITE_LOCAL:', import.meta.env.VITE_LOCAL)
	return (
		<footer className="app-footer full">
			<p>Coffeerights &copy; ☕ </p>
            
            {import.meta.env.VITE_LOCAL && import.meta.env.VITE_LOCAL === 'true' ? 
                <span className="local-services">Local Services</span> : 
                <span className="remote-services">Remote Services</span>}
		</footer>
	)
}