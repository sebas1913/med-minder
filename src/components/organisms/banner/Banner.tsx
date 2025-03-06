'use client';

import { signIn } from 'next-auth/react';
import { motion } from 'framer-motion';
import { Icons } from '@/components/atoms/icons/Icons';
import styles from './banner.module.scss';
import Title from '@/components/atoms/title/Title';
import Paragraph from '@/components/atoms/paragraph/Paragraph';
import Button from '@/components/atoms/button/Button';

const Banner: React.FC = () => {
    const handleLogin = async () => {
        await signIn('google', { callbackUrl: '/dashboard' });
    };
    
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <div className={styles.container}>
                <div className={styles.description}>
                    <Title className={styles.title} level={1}>Join the revolution in healthcare.</Title>
                    <Paragraph className={styles.paragraph}>Never forget your medications again.</Paragraph>
                    <Paragraph className={styles.paragraph}>Receive automatic reminders and access reliable information about each dose.
                    </Paragraph>

                    <div className={styles.containerButton}>
                        <Button variant="banner" onClick={handleLogin}>
                            Log in {Icons.google}
                        </Button>
                    </div>

                </div>
                <div className={styles.image}>
                    <img src="/images/banner.png" alt="" />
                </div>
            </div>
        </motion.div >
    )
}

export default Banner;