import React from 'react'
import styles from './Home.module.scss'
import cx from 'classnames'
import Image from 'next/image'

const Home = () => {
    return (
        <div className={cx(styles.container, true && styles.extend)}>
            <p className={(styles.test_mixin, styles.font_lg)}>Home Page: 배포테스트</p>
            <div>
                <Image src={'/next.svg'} className={styles.img} width="150" height="50" alt="" />
            </div>
        </div>
    )
}

export default Home
