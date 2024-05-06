import { memo } from 'react';

import './style.css';

type TSkillItem = {
    name: string;
    x: number;
    y: number;
};

function SkillItem({ name, x = 0, y = 0 }: TSkillItem) {
    return (
        <span
            style={{
                bottom: `${y * 10}%`,
                left: `${x * 10}%`,
            }}
        >
            {name}
        </span>
    );
}

type TSkills = {
    items: {
        [key: string]: TSkillItem;
    };
};

function Skills({ items }: TSkills) {
    return (
        <div className="skills">
            {Object.keys(items).map((key) => {
                const { x, y, name } = items[key];

                return <SkillItem key={key} {...{ x, y, name }} />;
            })}
            {/* <i>Experience</i> */}
            {/* <i>Frequency</i> */}
        </div>
    );
}

export default memo(Skills);
