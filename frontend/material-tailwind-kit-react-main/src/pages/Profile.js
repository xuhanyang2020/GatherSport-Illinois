import GatherSportNav from 'components/GatherSportNav.js';
import Header from 'components/profile/Header';
import Content from 'components/profile/Content';

export default function Profile() {
    return (
        <>
            <GatherSportNav username="Ruth Sabin"/>
            <main>
                <Content />
            </main>
        </>
    );
}