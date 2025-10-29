
function Stats({ number, label, postText }) {
    return (
        <>
            <div className="stat-item">
                <div className="d-flex align-items-center justify-content-center">
                    <span className="stat-number purecounter" data-purecounter-start="0" data-purecounter-end={number} data-purecounter-duration="2">{number}</span>
                    <span className="stat-number">{postText}</span>
                </div>
                <span className="stat-label">{label}</span>
            </div>
        </>
    )
}

export default Stats;