import "./PageTitle.css";

function PageTitle({
    title,
    description,
    action
}) {
    return (
        <div className="page-title">

            <div className="page-title-content">

                <span className="page-title-label">
                    GYM MANAGEMENT
                </span>

                <h1>
                    {title}
                </h1>

                {description && (
                    <p>
                        {description}
                    </p>
                )}

            </div>

            {action && (
                <div className="page-title-action">
                    {action}
                </div>
            )}

        </div>
    );
}

export default PageTitle;