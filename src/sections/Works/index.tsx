import Title from '../../components/Title';
import { DESCRIPTION } from '../../i18n/en';

import './style.css';

function Works() {
    return (
        <section id="Works">
            <Title description={DESCRIPTION.WORKS} title="Works" />
        </section>
    );
}

export default Works;
