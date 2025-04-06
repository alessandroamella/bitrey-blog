import Image from 'next/image'

import errorImage from '../public/error.png'
import { PageHead } from './PageHead'
import styles from './styles.module.css'

export function ErrorPage({ statusCode }: { statusCode: number }) {
  const title = 'Error'

  return (
    <>
      <PageHead title={title} />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Error Loading Page</h1>

          {statusCode && <p>Error code: {statusCode}</p>}
          <Image src={errorImage} alt='Error' className={styles.errorImage} />
        </main>
      </div>
    </>
  )
}
