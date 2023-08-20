import styles from './Switcher.module.css'

function Switcher({
  on = false,
  onText = '',
  offText = '',
  label = '',
  size = 'sm', // sm, md, lg
  ...restProps
}) {
  return (
    <div className={styles.SwitcherWrapper}>
      <button type="button" className={`${styles.Switcher} ${styles[size]} ${on ? styles.on : ''}`.trim()} {...restProps}>
        <span className={styles.handle}>{on ? onText : offText}</span>
      </button>
      <span className={styles.label}>{label}</span>
    </div>
  )
}

export default Switcher
