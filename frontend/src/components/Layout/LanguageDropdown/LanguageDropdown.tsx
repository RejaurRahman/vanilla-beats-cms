import React from 'react'
import * as styles from '@components/Layout/LanguageDropdown/Language-Dropdown.module.scss'

const LanguageDropdown = () => {
  return (
    <>
      <select name="language" id="languageDropdown" className={styles.language}>
        <option value="english">en</option>
        <option value="german">de</option>
        <option value="turkish">tr</option>
      </select>
    </>
  )
}

export default LanguageDropdown
