'use client';

import Title from '@/components/atoms/title/Title';
import styles from './steps.module.scss';
import Paragraph from '@/components/atoms/paragraph/Paragraph';
import { Icons } from '@/components/atoms/icons/Icons';
import { motion } from 'framer-motion';

const Steps: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <div className={styles.container}>
                <div className={styles.descriptionColumn}>
                    <div>
                        <Title className={styles.title} level={1}>How it works?</Title>
                        <Paragraph className={styles.paragraph}>Simple steps to manage your medications easily.</Paragraph>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.icon}>{Icons.medications}</span>
                        <Title level={3}>Add Your Medications</Title>
                        <Paragraph className={styles.textCard}>Enter the name, dosage, and schedule.</Paragraph>
                    </div>
                </div>
                <div className={styles.descriptionColumnTwo}>
                    <div className={styles.card}>
                        <span className={styles.icon}>{Icons.clock}</span>
                        <Title level={3}>Get Reminders</Title>
                        <Paragraph className={styles.textCard}>Receive notifications when it is time.</Paragraph>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.icon}>{Icons.search}</span>
                        <Title level={3}>Access Drug Info</Title>
                        <Paragraph className={styles.textCard}>Get reliable medication details via RxNorm.</Paragraph>
                    </div>
                </div>
                <div className={styles.descriptionColumnThree}>
                    <div className={styles.card}>
                        <span className={styles.icon}>{Icons.devices}</span>
                        <Title level={3}>Sync Across Devices</Title>
                        <Paragraph className={styles.textCard}>Access your schedule from any device.</Paragraph>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Steps;