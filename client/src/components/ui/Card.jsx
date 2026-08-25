import "./Card.css";

function Card({
    title,
    description,
    children,
    className = ""
}) {
    return (
        <div className={`ui-card ${className}`}>

            {(title || description) && (
                <div className="ui-card-header">

                    {title && (
                        <h3>
                            {title}
                        </h3>
                    )}

                    {description && (
                        <p>
                            {description}
                        </p>
                    )}

                </div>
            )}

            <div className="ui-card-content">
                {children}
            </div>

        </div>
    );
}

export default Card;