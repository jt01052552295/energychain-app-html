import styles from './page01.module.scss'
import cx from 'classnames'
import Image from 'next/image'

const page01 = () => {
    return <div className={cx(styles.container, styles.home, true && styles.extend)}>page01</div>
}

export default page01
