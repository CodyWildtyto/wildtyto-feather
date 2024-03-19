import { memo } from 'react';

import './style.css';

type TSkillItem = {
    experience: number;
    frequency: number;
    name: string;
};

function SkillItem({ experience = 0, frequency = 0, name }: TSkillItem) {
    return (
        <span
            style={{
                bottom: `${experience * 10}%`,
                left: `${frequency * 10}%`,
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
                const { experience, frequency, name } = items[key];

                return (
                    <SkillItem key={key} {...{ experience, frequency, name }} />
                );
            })}
            <i>Experience</i>
            <i>Frequency</i>
        </div>
    );
}

export default memo(Skills);
