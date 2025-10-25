function SectionTitle({heading, subText, dataAos}) {
    return (
        <>
            <div className="section-title" {...dataAos && {"data-aos":dataAos}}>
                <h2>{heading}</h2>
                {subText && <p>{subText}</p>}
                
            </div>
        </>
    )
}

export default SectionTitle;