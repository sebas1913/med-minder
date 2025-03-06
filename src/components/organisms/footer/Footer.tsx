import Title from '@/components/atoms/title/Title';
import styles from './footer.module.scss';
import Paragraph from '@/components/atoms/paragraph/Paragraph';

const Footer: React.FC = () => {
    return(
        <footer className={styles.footer}>
            <Title className={styles.title} level={3}>MedMinder</Title>
            <Paragraph className={styles.copyright}>©2025</Paragraph>
        </footer>
    )
}

export default Footer;