import Link from "next/link";

export default function Header() {
	return <header className={"py-3 border border-bottom shadow"}>
		<div className="container d-flex align-items-center justify-content-between">
			<div className="logo">
				<Link href={"/"} className={"text-decoration-none h2 text-info fw-semibold"}>TikTok <span className={"fw-medium"}>Tracker</span></Link>
			</div>
			<div className="actions">

			</div>
		</div>

	</header>
}