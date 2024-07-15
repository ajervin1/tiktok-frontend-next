export default function DataCardsList({userInfo}) {
	console.log(userInfo)
	return <section className="data-cards">
		<div className="row">
			<div className="col-3">
				<div className="card shadow">
					<div className="card-body text-center">
						<h6 className="text-secondary">Total videos</h6>
						<h4>{userInfo.videoCount}</h4>
					</div>
				</div>
			</div>
			<div className="col-3">
				<div className="card shadow">
					<div className="card-body text-center">
						<h6 className="text-secondary">Total Friends</h6>
						<h4>{userInfo.friendCount}</h4>
					</div>
				</div>
			</div>
			<div className="col-3">
				<div className="card shadow">
					<div className="card-body text-center">
						<h6 className="text-secondary">Date Joined</h6>
						<h4>{new Date(userInfo.createdAt).toDateString()}</h4>
					</div>
				</div>
			</div>
			<div className="col-3">
				<div className="card shadow">
					<div className="card-body text-center">
						<h6 className="text-secondary">Total Likes</h6>
						<h4>{userInfo.heart}</h4>
					</div>
				</div>
			</div>
		</div>
	</section>
}