import Styles from './ausbildung.module.css';
import { FaGraduationCap, FaSchool, FaUserGraduate, FaCertificate } from 'react-icons/fa';
import Head from 'next/head';
import Modal from '../components/Modal';

const timelineData = [
    {
        icon: <FaCertificate />,
        title: "Primarstufe",
        description: "Volksschule Oberbipp",
        location: "Oberbipp BE",
        details: "",
        url: "https://www.schule-oberbipp.ch/"
    },
    {
        icon: <FaSchool />,
        title: "Sekundarstufe I",
        description: "Oberstufenzentrum Wiedlisbach",
        location: "Wiedlisbach BE",
        details: "Details über die Sekundarstufe I in Wiedlisbach",
        url: "https://www.oz-w.ch/informationen/sekundarschulverein-wiedlisbach/info.html/562"
    },
    {
        icon: <FaUserGraduate />,
        title: "Informatikmittelschule",
        description: "Berufsmaturität",
        location: "bwd, Bern Wankdorf",
        details: "Details über die Informatikmittelschule in Bern Wankdorf",
        url: "https://bwdbern.ch/"
    },
    {
        icon: <FaGraduationCap />,
        title: "Informatiker EFZ",
        description: "Berufsschule Applikationsentwicklung",
        location: "gibb, Bern",
        details: "Details über die Berufsschule Applikationsentwicklung in Bern",
        url: "https://gibb.ch/"
    }
];

const Ausbildung = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleDetailsClick = (details) => {
        setModalContent(details);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setModalContent('');
    };

    return (
        <>
            <Head>
                <title>Ausbildung</title>
                <meta name="description" content="Beschreibung der Startseite" />
                <link rel="icon" href="../public/logo.png" />
            </Head>
            <h1 className={Styles.title}>Schullaufbahn - Ausbildung</h1>
            <div className={Styles.timelineContainer}>
                <ul className={Styles.timeline}>
                    {timelineData.map((item, index) => (
                        <li
                            key={index}
                            className={`${Styles.timelineItem} ${index % 2 === 0 ? Styles.timelineItemOdd : Styles.timelineItemEven}`}
                        >
                            <div className={Styles.timelineIcon}>
                                {item.icon}
                            </div>
                            <div className={Styles.timelineContent}>
                                <div>
                                    <h3>{item.title}</h3>
                                    <div>{item.description}</div>
                                    <div>{item.location}</div>
                                    <div className={Styles.buttonDiv}>
                                        <button
                                            className={Styles.details}
                                            onClick={() => handleDetailsClick(item.details)}
                                        >
                                            Details
                                        </button>
                                        <a href={item.url} className={Styles.goTo}>Go to</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <Modal show={showModal} onClose={handleCloseModal}>
                <p>{modalContent}</p>
            </Modal>
        </>
    );
};

export default Ausbildung;
