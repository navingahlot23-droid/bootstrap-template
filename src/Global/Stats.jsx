
function Stats({ number, label }) {
    return (
        <>
            <div className="stat-item">
                <span className="stat-number purecounter" data-purecounter-start="0" data-purecounter-end= {number} data-purecounter-duration="2">{number}</span>
                <span className="stat-label">{label}</span>
            </div>
        </>
    )
}

export default Stats;