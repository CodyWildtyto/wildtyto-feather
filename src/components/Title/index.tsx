import { memo } from 'react';

import './style.css';

type TTitleProps = {
    title: string;
    description?: string;
    subtitle?: string;
};

function Title({ title, description, subtitle }: TTitleProps) {
    return (
        <div className="title">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{description}</p>
        </div>
    );
}

Title.defaultProps = {
    description: '',
    subtitle: '',
};

export default memo(Title);
