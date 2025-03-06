import Link from 'next/link';
import styles from './navbar.module.scss';
import Title from '@/components/atoms/title/Title';

interface NavbarProps {
    children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
    return (
        <div className={`${styles.container} ${children ? styles.withChildren : ''}`}>
            <Link className={styles.link} href={'/'}>
                <Title className={styles.title} level={1}>MedMinder</Title>
            </Link>
            {children && <nav className={styles.navContainer}>{children}</nav>}
        </div>
    );
};


export default Navbar;
