import Icons from "./icons";

function CTABanner({classname, icon, heading, text, btnPrimaryText, btnSecondaryText, btnPrimaryHref, btnSecondaryHref, dataAos }) {
    return (
        <>
            <div className="cta-wrap text-center" {...dataAos && { "data-aos": dataAos }} {...classname && {'className' : classname }}>
                {icon && <div className="cta-icon"><Icons iconName={icon}/></div>}
                <h3 className="cta-head">{heading}</h3>
                <p className="cta-text">{text}</p>
                <div className="cta-buttons">
                    {btnPrimaryText && <a href={btnPrimaryHref} className="cta-btn cta-btn-primary">{btnPrimaryText}</a>}
                    {btnSecondaryText && <a href={btnSecondaryHref} className="cta-btn cta-btn-secondary">{btnSecondaryText}</a>}
                </div>
            </div>
        </>
    )
}

export default CTABanner;